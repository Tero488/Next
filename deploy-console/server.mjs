import http from 'http';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// 本地网站仓库根目录（与 Vercel 绑定的 GitHub repo 同步）
const ROOT = 'E:/Next-main/Next-main';
const PORT = 5188;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 查看待发布改动数量
  if (req.url === '/api/status') {
    try {
      const out = execSync('git status --porcelain', { cwd: ROOT }).toString();
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
      execSync('git add -A && git commit -m "update from console" && git push', {
        cwd: ROOT,
      });
      res.end('published');
    } catch (e) {
      res.end('fail: ' + e.message);
    }
    return;
  }

  // 静态托管前端控制台
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(ROOT, 'deploy-console', urlPath);
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
