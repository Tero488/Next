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
// 本地回退用的仓库根（仅开发模式、无 token 时用到）
const ROOT = 'E:/Next-main/Next-main';
const CASES_FILE = path.join(ROOT, 'data/index.ts');

// 从 exe 同级目录读 config.json（生产用）。开发时可用环境变量覆盖。
function loadConfig() {
  try {
    const dir = path.dirname(process.execPath);
    const p = path.join(dir, 'config.json');
    if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch {}
  return {};
}
const config = loadConfig();

const CONSOLE_PASSWORD = process.env.CONSOLE_PASSWORD || config.consolePassword || 'next2026';
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
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  if (config.ghToken) return config.ghToken;
  try {
    const out = execFileSync('git', ['config', '--global', '--get', 'http.extraheader'], { encoding: 'utf8' });
    const m = out.match(/Basic\s+(\S+)/i);
    if (m) {
      const decoded = Buffer.from(m[1].trim(), 'base64').toString('utf8');
      const parts = decoded.split(':');
      return (parts[parts.length - 1] || parts[0] || '').trim();
    }
  } catch {}
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
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 登录
  if (req.method === 'POST' && req.url === '/api/login') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      try {
        const p = JSON.parse(body || '{}');
        if (p.password === CONSOLE_PASSWORD) {
          const token = crypto.randomBytes(24).toString('hex');
          tokens.set(token, Date.now() + TOKEN_TTL);
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, token }));
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 401;
          res.end(JSON.stringify({ ok: false, error: '密码错误' }));
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
    if (!requireAuth(req, res)) return;
    (async () => {
      try {
        const dir = __dirname;
        const files = [
          'deploy-console/server.cjs',
          'deploy-console/case-lib.cjs',
          'deploy-console/index.html',
        ];
        // 便携包里这些文件就在脚本同级目录
        const localFiles = ['server.cjs', 'case-lib.cjs', 'index.html', 'frontend.cjs'];
        const realFiles = localFiles.every((f) => fs.existsSync(path.join(dir, f)))
          ? localFiles
          : files;
        const r = await publishViaRest(realFiles, 'sync console');
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true, ...r }));
      } catch (e) {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 500;
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    })();
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
    res.end(HTML);
    return;
  }
  res.statusCode = 404;
  res.end('frontend not found');
});

// 端口占用时自动 +1 重试
function listen(port) {
  server.listen(port, () => {
    const url = 'http://localhost:' + port;
    console.log('网站更新控制台已启动：' + url);
    console.log('（如需退出，关闭此窗口即可）');
    // 自动打开浏览器
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
