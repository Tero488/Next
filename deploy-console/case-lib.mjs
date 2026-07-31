import fs from 'fs';
import path from 'path';

// 本地网站仓库根目录
const ROOT = 'E:/Next-main/Next-main';
const CASES_FILE = path.join(ROOT, 'data', 'index.ts');
const CASES_DIR = path.join(ROOT, 'public', 'images', 'cases');

export function slugify(title, fallback) {
  const base = (title || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9一-龥]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || fallback;
}

// 把甲方上传的案例写入磁盘并插入 data/index.ts。
// 只负责“写文件 + 改数据”，不碰 git（推送由调用方决定）。
// images: [{ name, dataUrl }]  dataUrl 为完整 data URL
// sharp: 可选，传入则把图片转为 webp（与全站一致）
// 返回 { id, coverRel, galleryRel }
export async function addCase({ title, category, description, images, sharp }) {
  if (!title) throw new Error('请填写案例标题');
  if (!images || images.length === 0) throw new Error('请至少拖入一张案例图片');

  // 生成唯一 id，避免与已有案例冲突
  let id = slugify(title, 'case-' + Date.now());
  let guard = '';
  let n = 1;
  while (fs.existsSync(path.join(CASES_DIR, id + guard))) {
    n++;
    guard = '-' + n;
  }
  id = id + guard;

  const dir = path.join(CASES_DIR, id);
  fs.mkdirSync(dir, { recursive: true });

  const galleryRel = [];
  let coverRel = '';

  for (let i = 0; i < images.length; i++) {
    const item = images[i];
    const b64 = (item.dataUrl || '').split(',')[1] || '';
    if (!b64) throw new Error('第 ' + (i + 1) + ' 张图片数据无效');
    const buf = Buffer.from(b64, 'base64');

    let outBuf = buf;
    let ext = (item.name.split('.').pop() || 'jpg').toLowerCase().replace('jpeg', 'jpg');
    if (sharp) {
      outBuf = await sharp(buf).webp({ quality: 85 }).toBuffer();
      ext = 'webp';
    }

    const fname = i === 0 ? `cover.${ext}` : `${id}-${String(i + 1).padStart(2, '0')}.${ext}`;
    fs.writeFileSync(path.join(dir, fname), outBuf);

    const rel = `/images/cases/${id}/${fname}`;
    if (i === 0) coverRel = rel;
    galleryRel.push(rel);
  }

  const j = (s) => JSON.stringify(s);
  const galleryLiteral = '[' + galleryRel.map((p) => j(p)).join(', ') + ']';

  const zhBlock =
    '    {\n' +
    `      id: ${j(id)},\n` +
    `      title: ${j(title)},\n` +
    `      category: ${j(category || '')},\n` +
    '      type: "idealyou", // 享你所想-空间案例\n' +
    `      image: ${j(coverRel)},\n` +
    `      description: ${j(description || '案例描述待补充')},\n` +
    `      gallery: ${galleryLiteral}\n` +
    '    }';

  const enBlock =
    '    {\n' +
    `      id: ${j(id)},\n` +
    `      title: ${j(title)},\n` +
    `      category: ${j(category || '')},\n` +
    '      type: "idealyou", // Ideal You - Spatial Cases\n' +
    `      image: ${j(coverRel)},\n` +
    `      description: ${j(description || 'Case description pending')},\n` +
    `      gallery: ${galleryLiteral}\n` +
    '    }';

  // 归一化换行符（CRLF/LF 都兼容），避免锚点精确匹配失败
  let content = fs.readFileSync(CASES_FILE, 'utf8').replace(/\r\n/g, '\n');

  const zhAnchor = '    {\n      id: "coming-soon",\n      title: "案例更新中 敬请期待",';
  if (!content.includes(zhAnchor)) throw new Error('未找到 zh 案例数组锚点');
  content = content.replace(
    zhAnchor,
    zhBlock + ',\n' + '    {\n      id: "coming-soon",\n      title: "案例更新中 敬请期待",'
  );

  const enAnchor = '    {\n      id: "coming-soon",\n      title: "Coming Soon",';
  if (!content.includes(enAnchor)) throw new Error('未找到 en 案例数组锚点');
  content = content.replace(
    enAnchor,
    enBlock + ',\n' + '    {\n      id: "coming-soon",\n      title: "Coming Soon",'
  );

  fs.writeFileSync(CASES_FILE, content);

  return { id, coverRel, galleryRel };
}
