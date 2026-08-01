// 组装绿色便携包：deploy-console/dist/NextConsole/
// 包含 node.exe + 后端脚本 + 前端 + 启动器，甲方解压后双击「启动.bat」即用。
const fs = require('fs');
const path = require('path');

const SRC = __dirname;
const DIST = path.join(SRC, 'dist', 'NextConsole');
fs.mkdirSync(DIST, { recursive: true });

// 1) 生成 frontend.cjs（index.html -> base64，内嵌进后端）
const html = fs.readFileSync(path.join(SRC, 'index.html'), 'utf8');
fs.writeFileSync(
  path.join(DIST, 'frontend.cjs'),
  'module.exports = ' + JSON.stringify(Buffer.from(html, 'utf8').toString('base64')) + ';\n'
);
console.log('[ok] frontend.cjs 已生成');

// 2) 复制后端脚本
for (const f of ['server.cjs', 'case-lib.cjs']) {
  fs.copyFileSync(path.join(SRC, f), path.join(DIST, f));
}
console.log('[ok] 已复制 server.cjs / case-lib.cjs');

// 3) 复制 node.exe（Windows x64，Node 18+）
const candidates = [
  process.env.NODE_BIN,
  path.join(SRC, 'node.exe'),
  'C:/Users/tan03/.workbuddy/binaries/node/versions/22.22.2/node.exe',
  'C:/Program Files/nodejs/node.exe',
].filter(Boolean);
const nodeBin = candidates.find((c) => { try { return fs.existsSync(c); } catch { return false; } });
if (nodeBin) {
  fs.copyFileSync(nodeBin, path.join(DIST, 'node.exe'));
  console.log('[ok] 已复制 node.exe <- ' + nodeBin);
} else {
  console.warn('[warn] 未找到 node.exe，请自行放入一个 Windows x64 的 node.exe(v18+) 到 dist/NextConsole/node.exe 再分发');
}

// 4) config.json（占位，发甲方前由你填写 ghToken 与 consolePassword）
fs.writeFileSync(
  path.join(DIST, 'config.json'),
  JSON.stringify(
    {
      ghToken: '在此填入 GitHub Token（ghp_ 开头，需有 Tero488/Next 的写权限）',
      consolePassword: '在此设置甲方访问密码（建议强密码）',
      port: 5188,
    },
    null,
    2
  ) + '\n'
);
console.log('[ok] 已写入 config.json（占位，请修改）');

// 5) 启动.bat（双击即用，自动打开浏览器）
// 注意：bat 里不要写中文，避免不同 Windows 代码页/字体解析出错。
// 所有中文提示由 server.cjs 输出。
const BAT = '@echo off\r\nchcp 65001 >nul\r\ncd /d "%~dp0"\r\n"%~dp0node.exe" server.cjs\r\nif errorlevel 1 pause\r\n';
fs.writeFileSync(path.join(DIST, '启动.bat'), BAT);
console.log('[ok] 已写入 启动.bat');

// 6) README.txt（中文使用说明）
const README = [
  '网站更新控制台 —— 甲方使用说明',
  '================================',
  '',
  '【第一步】填写配置（只需做一次）',
  '  用记事本打开本文件夹里的 config.json，改成：',
  '    "ghToken": "你的GitHub Token（ghp_开头）",',
  '    "consolePassword": "你给甲方设置的访问密码",',
  '    "port": 5188',
  '  （ghToken 需要有 Tero488/Next 仓库的写入权限；密码自己定，甲方登录用）',
  '',
  '【第二步】启动（重要）',
  '  必须双击「启动.bat」启动。',
  '  不要直接双击「index.html」，否则会出现"打开方式不对"的提示且无法登录。',
  '  启动后会弹出一个黑色窗口（不要关），并自动打开浏览器到控制台页面。',
  '',
  '【第三步】使用',
  '  在浏览器里输入访问密码 → 选择板块（案例 / 新闻 / 加入我们 / 产品）→',
  '  拖入图片、填好文字 → 点「发布」。',
  '  发布成功后会自动把改动推到 GitHub，网站重新部署后即可在线上看到。',
  '',
  '【退出】直接关闭那个黑色窗口即可。',
  '',
  '【换电脑 / 发给别人】',
  '  把整个 NextConsole 文件夹压缩成 zip 发过去，对方解压双击「启动.bat」即可。',
  '  注意：config.json 里含 Token，请勿公开发布或提交到公开仓库。',
  '',
].join('\r\n');
fs.writeFileSync(path.join(DIST, 'README.txt'), README);
console.log('[ok] 已写入 README.txt');

console.log('\n打包完成：' + DIST);
console.log('下一步：编辑 ' + path.join(DIST, 'config.json') + ' 填入真实 Token 与密码，再把 NextConsole 文件夹发给甲方。');
