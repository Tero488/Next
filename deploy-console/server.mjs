import http from 'http';
import { execFileSync } from 'child_process';
import fs from 'fs';
import { addCase } from './case-lib.mjs';

// 本地网站仓库根目录（与 Vercel 绑定的 GitHub repo 同步）
const ROOT = 'E:/Next-main/Next-main';
const PORT = Number(process.env.PORT) || 5188;
const MAX_BODY = 200 * 1024 * 1024; // 200MB 上限，足够甲方拖入一组案例图

// 可选依赖：sharp 用于把甲方原图转成与全站一致的 webp；缺失时回退存原格式
let sharpModule = null;
try {
  sharpModule = (await import('sharp')).default;
  console.log('[ok] sharp 可用，案例图将转为 webp');
} catch {
  console.log('[warn] sharp 未安装，案例图将按原格式存储');
}

// 用参数数组形式执行 git，避免提交信息里的引号/特殊字符破坏命令行
function runGit(args) {
  return execFileSync('git', args, { cwd: ROOT }).toString();
}

function gitPush(message) {
  // 安全开关：设置 DRY_RUN=1 时只写文件/改数据，不提交不推送（用于本地试跑）
  if (process.env.DRY_RUN) {
    console.log('[dry-run] 已跳过 git add/commit/push');
    return;
  }
  runGit(['add', '-A']);
  runGit(['commit', '-m', message]);
  runGit(['push']);
}

function handleAddCase(req, res) {
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
      const { id, galleryRel } = await addCase({
        title: p.title,
        category: p.category,
        description: p.description,
        images: p.images,
        sharp: sharpModule,
      });
      gitPush('add case: ' + (p.title || id));
      res.setHeader('Content-Type', 'application/json');
      res.end(
        JSON.stringify({
          ok: true,
          id,
          count: galleryRel.length,
          live: 'https://next001-dusky.vercel.app/#/cases',
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

  // 查看待发布改动数量
  if (req.url === '/api/status') {
    try {
      const out = runGit(['status', '--porcelain']);
      const lines = out.split('\n').filter(Boolean);
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ changed: lines.length, detail: lines }));
    } catch (e) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ changed: -1, error: e.message }));
    }
    return;
  }

  // 一键发布：git add + commit + push
  if (req.url === '/api/publish') {
    try {
      gitPush('update from console');
      res.end('published');
    } catch (e) {
      res.end('fail: ' + e.message);
    }
    return;
  }

  // 拖拽发布案例
  if (req.method === 'POST' && req.url === '/api/add-case') {
    handleAddCase(req, res);
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
  console.log('Deploy console running at http://localhost:' + PORT);
});
