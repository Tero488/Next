import { addCase } from './case-lib.mjs';
import fs from 'fs';
import path from 'path';

const PNG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';

const images = [
  { name: 'cover.png', dataUrl: PNG },
  { name: 'living.png', dataUrl: PNG },
  { name: 'bedroom.png', dataUrl: PNG },
];

const { id, coverRel, galleryRel } = await addCase({
  title: 'abc test case',
  category: '平层',
  description: '这是一个自动化测试案例',
  images,
  sharp: null,
});

console.log('生成的 id =', id);
console.log('coverRel =', coverRel);
console.log('galleryRel =', galleryRel);

const dir = path.join('E:/Next-main/Next-main/public/images/cases', id);
const files = fs.readdirSync(dir);
console.log('写入的文件:', files);

const data = fs.readFileSync('E:/Next-main/Next-main/data/index.ts', 'utf8');
console.log('data/index.ts 是否含新案例:', data.includes('id: "abc-test-case"'));
console.log('data/index.ts 是否含封面路径:', data.includes(coverRel));
console.log('TEST OK');
