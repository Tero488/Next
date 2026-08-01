// 网站更新控制台 —— 后端（CommonJS，可打包进 NextConsole.exe）
// 运行方式：
//   开发： node server.cjs
//   生产： NextConsole.exe （同级放 config.json：{ghToken, consolePassword, port}）
// 两种数据来源：
//   - 有 GH_TOKEN：纯 GitHub 模式（拉取/修改 data/index.ts 并以 blob 直推，本机无需仓库）
//   - 无 GH_TOKEN：本地回退（读写本地仓库，用于开发调试）

const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { addContent, toCRLF } = require('./case-lib.cjs');

const REPO = process.env.REPO || 'Tero488/Next';
const API = 'https://api.github.com';
// 本地回退用的仓库根（仅开发模式、无 token 时用到）；不再硬编码绝对路径，避免泄露机器目录结构
const ROOT = process.env.REPO_ROOT || process.cwd();
const CASES_FILE = path.join(ROOT, 'data/index.ts');

// 从脚本/程序同级目录读 config.json（生产用）。便携包里 config.json 与 server.cjs 同目录。
function loadConfig() {
  const dirs = [__dirname, path.dirname(process.execPath)];
  for (const dir of dirs) {
    try {
      const p = path.join(dir, 'config.json');
      if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf8'));
    } catch {}
  }
  return {};
}
const config = loadConfig();

// 不再设置弱默认密码：必须显式配置（环境变量或 config.json 的 consolePassword），否则拒绝登录
const CONSOLE_PASSWORD = process.env.CONSOLE_PASSWORD || config.consolePassword || '';
const PORT = Number(process.env.PORT) || Number(config.port) || 5188;
const MAX_BODY = 200 * 1024 * 1024;

const LIVE = {
  cases: 'https://next-eosin-iota.vercel.app/#/cases',
  'spacemagic-case': 'https://next-eosin-iota.vercel.app/#/cases',
  news: 'https://next-eosin-iota.vercel.app/#/news',
  jobs: 'https://next-eosin-iota.vercel.app/#/join',
  products: 'https://next-eosin-iota.vercel.app/#/nexthome/space-magic/products',
};

// 登录态 token（内存态，12h 有效）
const tokens = new Map();
const TOKEN_TTL = 1000 * 60 * 60 * 12;
setInterval(() => {
  const now = Date.now();
  for (const [t, exp] of tokens) if (exp < now) tokens.delete(t);
}, 1000 * 60 * 30).unref();

function getToken() {
  // 仅从显式配置读取，绝不读取全局 git config 的凭据（避免意外使用甲方机器上的 token）
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  if (config.ghToken) return config.ghToken;
  return null;
}

function getBearer(req) {
  const h = req.headers['authorization'] || req.headers['Authorization'] || '';
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m ? m[1].trim() : null;
}
function requireAuth(req, res) {
  const t = getBearer(req);
  if (!t || !tokens.has(t)) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 401;
    res.end(JSON.stringify({ ok: false, error: '未授权，请先在控制台输入密码登录' }));
    return false;
  }
  return true;
}

async function gh(method, p, body) {
  const token = getToken();
  const headers = { Authorization: 'Bearer ' + token, 'User-Agent': 'deploy-console', Accept: 'application/vnd.github+json' };
  const opts = { method, headers };
  if (body !== undefined) { headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
  const r = await fetch(API + p, opts);
  const text = await r.text();
  let json; try { json = JSON.parse(text); } catch { json = text; }
  if (!r.ok) throw new Error('GitHub API ' + method + ' ' + p + ' -> ' + r.status + ' ' + ((json && json.message) || text.slice(0, 200)));
  return json;
}

// 读取当前 data/index.ts：有 token 从 GitHub 拉，否则读本地文件
async function getDataTs() {
  const token = getToken();
  if (token) {
    try {
      const r = await gh('GET', `/repos/${REPO}/git/contents/data/index.ts?ref=main`);
      return Buffer.from(r.content, 'base64').toString('utf8');
    } catch (e) {
      // 回退到本地（开发用）
    }
  }
  return fs.readFileSync(CASES_FILE, 'utf8');
}

// GitHub 内存模式发布：data/index.ts 修改内容 + 图片 blob 直接建树提交
async function publishInMemory(dataTs, imageBlobs, message) {
  if (process.env.DRY_RUN) return { dryRun: true };
  const token = getToken();
  if (!token) throw new Error('未配置 GitHub Token（config.json 的 ghToken 或环境变量 GH_TOKEN）');
  const ref = await gh('GET', `/repos/${REPO}/git/refs/heads/main`);
  const baseSha = ref.object.sha;
  const baseCommit = await gh('GET', `/repos/${REPO}/git/commits/${baseSha}`);
  const baseTree = baseCommit.tree.sha;
  const tree = [];
  const dataBlob = await gh('POST', `/repos/${REPO}/git/blobs`, { content: Buffer.from(dataTs, 'utf8').toString('base64'), encoding: 'base64' });
  tree.push({ path: 'data/index.ts', mode: '100644', type: 'blob', sha: dataBlob.sha });
  for (const img of imageBlobs) {
    const blob = await gh('POST', `/repos/${REPO}/git/blobs`, { content: img.base64, encoding: 'base64' });
    tree.push({ path: 'public' + img.repoPath, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const newTree = await gh('POST', `/repos/${REPO}/git/trees`, { base_tree: baseTree, tree });
  const newCommit = await gh('POST', `/repos/${REPO}/git/commits`, { message, tree: newTree.sha, parents: [baseSha] });
  await gh('PATCH', `/repos/${REPO}/git/refs/heads/main`, { sha: newCommit.sha });
  return { commit: newCommit.sha };
}

// 本地回退发布（开发用）：写本地文件后用 Git Data API 推送
async function publishViaRest(files, message) {
  if (process.env.DRY_RUN) return { dryRun: true };
  const token = getToken();
  if (!token) throw new Error('未配置 GitHub Token');
  const ref = await gh('GET', `/repos/${REPO}/git/refs/heads/main`);
  const baseSha = ref.object.sha;
  const baseCommit = await gh('GET', `/repos/${REPO}/git/commits/${baseSha}`);
  const baseTree = baseCommit.tree.sha;
  const tree = [];
  for (const repoPath of files) {
    const abs = ROOT + '/' + repoPath;
    if (!fs.existsSync(abs)) continue;
    const content = fs.readFileSync(abs).toString('base64');
    const blob = await gh('POST', `/repos/${REPO}/git/blobs`, { content, encoding: 'base64' });
    tree.push({ path: repoPath, mode: '100644', type: 'blob', sha: blob.sha });
  }
  if (!tree.length) throw new Error('没有可发布的文件');
  const newTree = await gh('POST', `/repos/${REPO}/git/trees`, { base_tree: baseTree, tree });
  const newCommit = await gh('POST', `/repos/${REPO}/git/commits`, { message, tree: newTree.sha, parents: [baseSha] });
  await gh('PATCH', `/repos/${REPO}/git/refs/heads/main`, { sha: newCommit.sha });
  return { commit: newCommit.sha };
}

function handleAddContent(req, res) {
  let body = '';
  let size = 0;
  req.on('data', (c) => {
    size += c.length;
    if (size > MAX_BODY) { req.destroy(); return; }
    body += c;
  });
  req.on('end', async () => {
    try {
      const p = JSON.parse(body);
      const section = p.section;
      if (!section) throw new Error('缺少 section 字段');
      const dataTs = await getDataTs();
      const result = await addContent(section, p, dataTs);
      const token = getToken();
      let published;
      if (token) {
        published = await publishInMemory(result.dataTs, result.imageBlobs, 'add ' + section + ': ' + (p.title || result.id));
      } else {
        // 本地回退（开发）
        if (process.env.DRY_RUN) {
          published = { dryRun: true };
        } else {
          fs.writeFileSync(CASES_FILE, toCRLF(result.dataTs));
          const written = ['data/index.ts'];
          for (const img of result.imageBlobs) {
            const outPath = path.join(ROOT, 'public' + img.repoPath);
            fs.mkdirSync(path.dirname(outPath), { recursive: true });
            fs.writeFileSync(outPath, Buffer.from(img.base64, 'base64'));
            written.push('public' + img.repoPath);
          }
          published = await publishViaRest(written, 'add ' + section + ': ' + (p.title || result.id));
        }
      }
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        ok: true,
        section,
        id: result.id,
        count: result.imageBlobs.length,
        live: LIVE[section] || 'https://next-eosin-iota.vercel.app/',
        published,
      }));
    } catch (e) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ ok: false, error: e.message }));
    }
  });
}

// 内嵌的前端页面（构建时由 index.html 生成 frontend.cjs 的 base64）
let HTML = '';
try { HTML = Buffer.from(require('./frontend.cjs'), 'base64').toString('utf8'); } catch {}

const server = http.createServer((req, res) => {
  // 收紧 CORS：仅允许来自本地控制台的请求源（localhost），不对外暴露
  const origin = req.headers.origin;
  if (typeof origin === 'string' && /^https?:\/\/localhost(:\d+)?$/i.test(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  // 登录
  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      try {
        const p = JSON.parse(body || '{}');
        // 常量时间比较，避免计时侧信道
        let ok = false;
        try {
          ok = !!CONSOLE_PASSWORD && !!p.password &&
               Buffer.from(String(p.password)).length === Buffer.from(String(CONSOLE_PASSWORD)).length &&
               crypto.timingSafeEqual(Buffer.from(String(p.password)), Buffer.from(String(CONSOLE_PASSWORD)));
        } catch { ok = false; }
        if (ok) {
          const token = crypto.randomBytes(24).toString('hex');
          tokens.set(token, Date.now() + TOKEN_TTL);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, token }));
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 401;
          res.end(JSON.stringify({ ok: false, error: !CONSOLE_PASSWORD ? '服务端未配置访问密码，请联系开发者' : '密码错误' }));
        }
      } catch {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 400;
        res.end(JSON.stringify({ ok: false, error: '请求格式错误' }));
      }
    });
    return;
  }

  if (req.url === '/api/status') {
    if (!requireAuth(req, res)) return;
    try {
      const out = execFileSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' });
      const lines = out.split('\n').filter(Boolean);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ changed: lines.length, detail: lines }));
    } catch (e) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ changed: -1, error: e.message }));
    }
    return;
  }

  if (req.url === '/api/publish') {
    // 已禁用：该接口用于开发者同步控制台自身代码，不应暴露给甲方，避免误覆盖仓库
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 403;
    res.end(JSON.stringify({ ok: false, error: '该操作仅限开发者使用，已禁用' }));
    return;
  }

  if (req.method === 'POST' && req.url === '/api/add-content') {
    if (!requireAuth(req, res)) return;
    handleAddContent(req, res);
    return;
  }

  // 静态托管前端（内嵌 HTML）
  if (HTML) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.end(HTML);
    return;
  }
  res.statusCode = 404;
  res.end('frontend not found');
});

// 启动前先尝试释放目标端口，防止旧控制台进程残留导致访问到旧页面
function freePort(port) {
  if (process.platform !== 'win32') return;
  try {
    const { execSync } = require('child_process');
    const out = execSync('netstat -ano | findstr :' + port, { encoding: 'utf8' });
    const lines = out.split('\n').filter(Boolean);
    const killed = new Set();
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && /^\d+$/.test(pid) && !killed.has(pid) && pid !== String(process.pid)) {
        try {
          execSync('taskkill /F /PID ' + pid, { encoding: 'utf8' });
          killed.add(pid);
          console.log('已关闭占用端口 ' + port + ' 的旧进程 PID ' + pid);
        } catch {}
      }
    }
  } catch {}
}

// 端口占用时自动 +1 重试
function listen(port) {
  freePort(port);
  server.listen(port, () => {
    const url = 'http://localhost:' + port + '/?nocache=' + Date.now();
    console.log('网站更新控制台已启动：' + url);
    console.log('（如需退出，关闭此窗口即可）');
    // 自动打开浏览器（带缓存破坏参数，避免看到旧页面）
    try {
      const { exec } = require('child_process');
      if (process.platform === 'win32') exec('cmd /c start "" "' + url + '"');
      else if (process.platform === 'darwin') exec('open "' + url + '"');
      else exec('xdg-open "' + url + '"');
    } catch {}
  });
  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') { console.log('端口 ' + port + ' 被占用，尝试 ' + (port + 1)); listen(port + 1); }
    else throw e;
  });
}
listen(PORT);
