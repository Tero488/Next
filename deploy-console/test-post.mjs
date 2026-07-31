import sharp from 'sharp';

// 生成两张真实 PNG，转成 dataURL（模拟甲方从磁盘拖入的真实图片）
async function makeImageDataUrl(size, color) {
  const buf = await sharp({ create: { width: size, height: size, channels: 3, background: color } }).png().toBuffer();
  return 'data:image/png;base64,' + buf.toString('base64');
}

const images = [
  { name: 'cover.png', dataUrl: await makeImageDataUrl(120, { r: 20, g: 80, b: 160 }) },
  { name: 'living.png', dataUrl: await makeImageDataUrl(100, { r: 160, g: 80, b: 20 }) },
];

const body = JSON.stringify({
  title: '真实拖拽测试案例',
  category: '测试',
  description: '通过 HTTP /api/add-case 发布',
  images,
});

const res = await fetch('http://localhost:5188/api/add-case', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body,
});
const json = await res.json();
console.log('HTTP 状态:', res.status);
console.log('响应:', JSON.stringify(json));
