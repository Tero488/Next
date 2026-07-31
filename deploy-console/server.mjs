import http from 'http';
import { execFileSync } from 'child_process';
import fs from 'fs';
import { addContent } from './case-lib.mjs';

// 本地网站仓库根目录（与 Vercel 绑定的 GitHub repo 同步）
const ROOT = 'E:/Next-main/Next-main';
const PORT = Number(process.env.PORT) || 5188;
const MAX_BODY = 200 * 1024 * 1024; // 200MB 上限，足够甲方拖入一组案例图
const REPO = 'Tero488/Next';
const API = 'https://api.github.com';

// 各板块发布后的线上查看地址
const LIVE = {
  cases: 'https://next001-dusky.vercel.app/#/cases',
  news: 'https://next001-dusky.vercel.app/#/news',
  jobs: 'https://next001-dusky.vercel.app/#/join',
};

// 可选依赖：sharp 用于把甲方原图转成与全站一致的 webp；缺失时回退存原格式
let sharpModule = null;
try {
  sharpModule = (await import('sharp')).default;
  console.log('[ok] sharp 可用，图片将转为 webp');
} catch {
  console.log('[warn] sharp 未安装，图片将按原格式存储');
}

// 取 GitHub Token：优先环境变量 GH_TOKEN，否则从全局 gitconfig 的 Basic 头解析
function getToken() {
  if (process.env.GH_TOKEN) return process.env.GH_TOKEN;
  try {
    const out = execFileSync('git', ['config', '--global', '--get', 'http.extraheader'], { encoding: 'utf8' });
    const m = out.match(/Basic\s+(\S+)/i);
    if (m) {
      const decoded = Buffer.from(m[1].trim(), 'base64').toString('utf8');
      const parts = decoded.split(':');
      const tok = (parts[parts.length - 1] || parts[0] || '').trim();
      if (tok) return tok;
    }
  } catch {}
  return null;
}

// GitHub REST（Git Data API）发布：把指定文件作为一次提交推到 main
async function gh(method, path, body) {
  const token = getToken();
  const headers = {
    Authorization: 'Bearer ' + token,
    'User-Agent': 'deploy-console',
    Accept: 'application/vnd.github+json',
  };
  const opts = { method, headers };
  if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(body);
  }
  const r = await fetch(API + path, opts);
  const text = await r.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!r.ok) {
    throw new Error('GitHub API ' + method + ' ' + path + ' -> ' + r.status + ' ' + ((json && json.message) || text.slice(0, 200)));
  }
  return json;
}

async function publishViaRest(files, message) {
  // 安全开关：设置 DRY_RUN=1 时只写文件/改数据，不推送 GitHub（用于本地试跑）
  if (process.env.DRY_RUN) {
    console.log('[dry-run] 跳过 GitHub 推送，改动仅保留在本地');
    return { dryRun: true };
  }
  const token = getToken();
  if (!token) throw new Error('未配置 GitHub Token（请设置环境变量 GH_TOKEN，或在全局 gitconfig 配置 http.extraheader）');
  // 1) 当前 main 引用 -> 基提交 -> 基树
  const ref = await gh('GET', `/repos/${REPO}/git/refs/heads/main`);
  const baseCommitSha = ref.object.sha;
  const baseCommit = await gh('GET', `/repos/${REPO}/git/commits/${baseCommitSha}`);
  const baseTreeSha = baseCommit.tree.sha;
  // 2) 为每个文件创建 blob
  const tree = [];
  for (const repoPath of files) {
    const abs = ROOT + '/' + repoPath;
    if (!fs.existsSync(abs)) continue;
    const content = fs.readFileSync(abs).toString('base64');
    const blob = await gh('POST', `/repos/${REPO}/git/blobs`, { content, encoding: 'base64' });
    tree.push({ path: repoPath, mode: '100644', type: 'blob', sha: blob.sha });
  }
  if (!tree.length) throw new Error('没有可发布的文件');
  // 3) 新树（基于基树，仅覆盖列出的路径）
  const newTree = await gh('POST', `/repos/${REPO}/git/trees`, { base_tree: baseTreeSha, tree });
  // 4) 新提交
  const newCommit = await gh('POST', `/repos/${REPO}/git/commits`, {
    message,
    tree: newTree.sha,
    parents: [baseCommitSha],
  });
  // 5) 更新 main 引用 -> 触发 Vercel 自动部署
  await gh('PATCH', `/repos/${REPO}/git/refs/heads/main`, { sha: newCommit.sha });
  console.log('[ok] 已推送到 GitHub main:', newCommit.sha);
  return { commit: newCommit.sha, url: newCommit.html_url };
}

function handleAddContent(req, res) {
  let body = '';
  let size = 0;
  req.on('data', (c) => {
    size += c.length;
    if (size > MAX_BODY) {
      req.destroy();
      return;
    }
    body += c;
  });
  req.on('end', async () => {
    try {
      const p = JSON.parse(body);
      const section = p.section;
      if (!section) throw new Error('缺少 section 字段');
      const result = await addContent(section, { ...p, sharp: sharpModule });
      const id = result.id;
      const pub = await publishViaRest(result.written, 'add ' + section + ': ' + (p.title || id));
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          ok: true,
          section,
          id,
          count: result.galleryRel ? result.galleryRel.length : 1,
          live: LIVE[section] || 'https://next001-dusky.vercel.app/',
          published: pub,
        })
      );
    } catch (e) {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 400;
      res.end(JSON.stringify({ ok: false, error: e.message }));
    }
  });
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 查看本地改动（只读 git status，仅作信息展示）
  if (req.url === '/api/status') {
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

  // 手动同步控制台代码到仓库（默认发布控制台三个文件）
  if (req.url === '/api/publish') {
    (async () => {
      try {
        const files = ['deploy-console/server.mjs', 'deploy-console/case-lib.mjs', 'deploy-console/index.html'];
        const r = await publishViaRest(files, 'sync console');
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

  // 通用内容发布（案例 / 新闻 / 加入我们）
  if (req.method === 'POST' && req.url === '/api/add-content') {
    handleAddContent(req, res);
    return;
  }

  // 静态托管前端控制台
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = ROOT + '/deploy-console' + urlPath;
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/html');
    res.end(fs.readFileSync(filePath));
  } else {
    res.statusCode = 404;
    res.end('not found');
  }
});

server.listen(PORT, () => {
  console.log('Deploy console running at http://localhost:' + PORT + (process.env.DRY_RUN ? ' (DRY_RUN)' : ''));
});
