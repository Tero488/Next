import { addCase } from './case-lib.mjs';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const ROOT = 'E:/Next-main/Next-main';

// 用 sharp 生成两张真实 PNG，转成 dataURL（模拟甲方真实拖入的图片）
async function makeImageDataUrl(size, color) {
  const buf = await sharp({ create: { width: size, height: size, channels: 3, background: color } }).png().toBuffer();
  return 'data:image/png;base64,' + buf.toString('base64');
}

const images = [
  { name: 'cover.png', dataUrl: await makeImageDataUrl(120, { r: 20, g: 80, b: 160 }) },
  { name: 'living.png', dataUrl: await makeImageDataUrl(100, { r: 160, g: 80, b: 20 }) },
];

const { id } = await addCase({
  title: '冒烟测试案例',
  category: '测试',
  description: '本地冒烟测试',
  images,
  sharp,
});

const dir = path.join(ROOT, 'public/images/cases', id);
const files = fs.readdirSync(dir).sort();
const allWebp = files.every((f) => f.endsWith('.webp'));
const data = fs.readFileSync(path.join(ROOT, 'data/index.ts'), 'utf8');
const inData = data.includes('id: "' + id + '"') && data.includes(id + '/cover.webp');
console.log('冒烟测试:', allWebp && inData ? 'PASS' : 'FAIL', '| id =', id, '| 文件 =', files.join(','));

// 还原：撤销 data/index.ts 改动并删除测试图，不留痕迹
execSync('git checkout -- data/index.ts', { cwd: ROOT });
fs.rmSync(dir, { recursive: true, force: true });
console.log('已还原 data/index.ts 并删除测试图');
