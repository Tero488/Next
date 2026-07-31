// 构建 NextConsole.exe：
//   1) 把 index.html 转 base64 生成 frontend.cjs（内嵌进 exe，无需额外文件）
//   2) 用 pkg 把 server.cjs 打包为 Windows 可执行文件
const fs = require('fs');
const { execFileSync } = require('child_process');

// 1) 内嵌前端
const html = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync('frontend.cjs', 'module.exports = ' + JSON.stringify(Buffer.from(html, 'utf8').toString('base64')) + ';\n');
console.log('[1/2] frontend.cjs 已生成（内嵌 index.html）');

// 2) 打包 exe
console.log('[2/2] 开始用 pkg 打包（首次会下载 Node 运行时，请耐心等待）…');
try {
  const pkgBin = require.resolve('pkg/lib-es5/bin.js');
  execFileSync(process.execPath, [pkgBin, 'server.cjs', '--targets', 'node18-win-x64', '--output', 'NextConsole.exe'], { stdio: 'inherit' });
  console.log('完成：NextConsole.exe 已生成');
  console.log('分发时把 NextConsole.exe 和 config.json 一起发给甲方即可。');
} catch (e) {
  console.error('pkg 打包失败：', e.message);
  console.error('若因网络无法下载 Node 运行时，请改用便携版（见 README 的「便携版」说明）。');
  process.exit(1);
}
