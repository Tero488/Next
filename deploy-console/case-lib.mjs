import fs from 'fs';
import path from 'path';

const ROOT = 'E:/Next-main/Next-main';
const CASES_FILE = path.join(ROOT, 'data/index.ts');
const PUBLIC = path.join(ROOT, 'public');

// 归一化换行（仓库用 CRLF，读取时统一成 LF 处理，写回再转回 CRLF）
const normalize = (s) => s.replace(/\r\n/g, '\n');
const toCRLF = (s) => s.replace(/\n/g, '\r\n');
// 转义双引号与反斜杠，避免破坏 TS 字符串
const esc = (s) => String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
// 生成唯一 id（毫秒时间戳 + 随机后缀，避免同秒重复）
const genId = (prefix) => prefix + Date.now() + Math.floor(Math.random() * 900 + 100);

function readData() {
  return normalize(fs.readFileSync(CASES_FILE, 'utf8'));
}
function writeData(s) {
  fs.writeFileSync(CASES_FILE, toCRLF(s));
}

// 保存图片：dataUrl -> 转 webp（有 sharp 时）落盘，返回站点相对路径
async function saveImage(dataUrl, relPath, sharp, written) {
  const b64 = String(dataUrl).split(',')[1];
  if (!b64) throw new Error('图片数据为空');
  const buf = Buffer.from(b64, 'base64');
  const outPath = path.join(PUBLIC, relPath.replace(/^\//, ''));
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  if (sharp) {
    const webp = await sharp(buf).webp({ quality: 85 }).toBuffer();
    fs.writeFileSync(outPath, webp);
  } else {
    fs.writeFileSync(outPath, buf);
  }
  if (written) written.push('public' + relPath);
  return relPath;
}

// 定位某个 export const X = { ... }; 块的起止（块内没有嵌套 };，故第一个 \n}; 即块结束）
function getBlock(content, name) {
  const s = content.indexOf('export const ' + name + ' = {');
  if (s < 0) throw new Error('未找到 ' + name + ' 数组');
  const sub = content.slice(s);
  const end = sub.indexOf('\n};');
  if (end < 0) throw new Error(name + ' 块结束未找到');
  return { s, e: s + end + 3 }; // 包含 '};'，供 end 插入定位
}

// 在块的某个数组（zh/en）插入条目。position: 'start'（插到数组最前）| 'end'（插到数组最后）
function insertInBlock(content, name, arrayKey, item, position) {
  const b = getBlock(content, name);
  const block = content.slice(b.s, b.e);
  let newBlock;
  if (position === 'start') {
    const marker = '  ' + arrayKey + ': [\n    {';
    const mi = block.indexOf(marker);
    if (mi < 0) throw new Error(name + ' 的 ' + ' 数组开头锚点未找到');
    newBlock = block.slice(0, mi) + '  ' + arrayKey + ': [\n' + item + ',\n    {' + block.slice(mi + marker.length);
  } else {
    // end: 插入到数组最后（最后一个元素对象之后、闭合符之前）
    const closeMarker = arrayKey === 'zh' ? '\n  ],\n  en: [' : '\n  ]\n};';
    const mi = block.indexOf(closeMarker);
    if (mi < 0) throw new Error(name + ' ' + arrayKey + ' 数组结尾锚点未找到');
    // block.slice(0, mi) 末尾是最后一个元素的 "    }"，补逗号后再接新条目
    newBlock = block.slice(0, mi) + ',\n' + item + closeMarker + block.slice(mi + closeMarker.length);
  }
  return content.slice(0, b.s) + newBlock + content.slice(b.e);
}

// 定位某个 const X = [ ... ]; 单数组（productsData 这类，元素用 {zh,en} 对象，无 zh/en 双数组）
function getSingleArrayBlock(content, name) {
  const s = content.indexOf('const ' + name + ' = [');
  if (s < 0) throw new Error('未找到 ' + name + ' 数组');
  const sub = content.slice(s);
  const end = sub.indexOf('\n];');
  if (end < 0) throw new Error(name + ' 数组结束未找到');
  return { s, e: s + end + 3 };
}
function insertInSingleArray(content, name, item) {
  const b = getSingleArrayBlock(content, name);
  const block = content.slice(b.s, b.e);
  const closeMarker = '\n];';
  const mi = block.indexOf(closeMarker);
  if (mi < 0) throw new Error(name + ' 数组结尾锚点未找到');
  // block.slice(0, mi) 末尾是最后一个元素的 "  }"，补逗号后再接新条目
  const newBlock = block.slice(0, mi) + ',\n' + item + closeMarker + block.slice(mi + closeMarker.length);
  return content.slice(0, b.s) + newBlock + content.slice(b.e);
}

// ---------------- 案例（含 享你所想 idealyou / 百变空间 spacemagic 两种类型） ----------------
export async function addCase({ title, category, description, images = [], sharp, type }) {
  if (!title || !images.length) throw new Error('案例需要标题和至少一张图片');
  const caseType = type === 'spacemagic' ? 'spacemagic' : 'idealyou';
  const id = genId('cs');
  const written = ['data/index.ts'];
  const galleryRel = [];
  for (let i = 0; i < images.length; i++) {
    const suffix = i === 0 ? 'cover' : id + '-' + String(i + 1).padStart(2, '0');
    const rel = '/images/cases/' + id + '/' + suffix + '.webp';
    await saveImage(images[i].dataUrl, rel, sharp, written);
    galleryRel.push(rel);
  }
  const coverRel = galleryRel[0];
  let content = readData();
  const zhItem = `    {
      id: "${esc(id)}",
      title: "${esc(title)}",
      category: "${esc(category || '')}",
      type: "${caseType}", // ${caseType === 'spacemagic' ? '百变空间-户型案例' : '享你所想-空间案例'}
      image: "${esc(coverRel)}",
      description: "${esc(description || '（待补充）')}",
      gallery: [
        "${galleryRel.join('",\n        "')}"
      ]
    }`;
  const enItem = `    {
      id: "${esc(id)}",
      title: "${esc(title)}",
      category: "${esc(category || '')}",
      type: "${caseType}", // ${caseType === 'spacemagic' ? 'Space Magic - Layout Case' : 'Ideal You - Spatial Cases'}
      image: "${esc(coverRel)}",
      description: "${esc(description || '(TBD)')}",
      gallery: [
        "${galleryRel.join('",\n        "')}"
      ]
    }`;
  content = insertInBlock(content, 'casesData', 'zh', zhItem, 'start');
  content = insertInBlock(content, 'casesData', 'en', enItem, 'start');
  writeData(content);
  return { id, galleryRel, section: caseType === 'spacemagic' ? 'spacemagic-case' : 'cases', type: caseType, written };
}

// ---------------- 新闻 ----------------
export async function addNews({ title, titleEn, date, summary, summaryEn, images = [], sharp }) {
  if (!title) throw new Error('新闻需要标题');
  if (!images.length) throw new Error('新闻需要至少一张封面图');
  const id = genId('n');
  const written = ['data/index.ts'];
  const imgRel = '/images/news/' + id + '.webp';
  await saveImage(images[0].dataUrl, imgRel, sharp, written);
  const d = date || new Date().toISOString().slice(0, 10);
  let content = readData();
  const zhItem = `    {
      id: "${esc(id)}",
      title: "${esc(title)}",
      date: "${esc(d)}",
      summary: "${esc(summary || '')}",
      image: "${esc(imgRel)}"
    }`;
  const enItem = `    {
      id: "${esc(id)}",
      title: "${esc(titleEn || title)}",
      date: "${esc(d)}",
      summary: "${esc(summaryEn || summary || '')}",
      image: "${esc(imgRel)}"
    }`;
  content = insertInBlock(content, 'newsData', 'zh', zhItem, 'start');
  content = insertInBlock(content, 'newsData', 'en', enItem, 'start');
  writeData(content);
  return { id, imgRel, section: 'news', written };
}

// ---------------- 招聘（加入我们） ----------------
export async function addJob({ title, titleEn, requirementsText, requirementsEnText }) {
  if (!title) throw new Error('招聘职位需要名称');
  const id = genId('j');
  const written = ['data/index.ts'];
  const reqs = String(requirementsText || '').split('\n').map((s) => s.trim()).filter(Boolean);
  const reqsEn = requirementsEnText
    ? String(requirementsEnText).split('\n').map((s) => s.trim()).filter(Boolean)
    : reqs;
  let content = readData();
  const zhItem = `    {
      id: "${esc(id)}",
      title: "${esc(title)}",
      requirements: [
        ${reqs.map((r) => '"' + esc(r) + '"').join(',\n        ')}
      ]
    }`;
  const enItem = `    {
      id: "${esc(id)}",
      title: "${esc(titleEn || title)}",
      requirements: [
        ${reqsEn.map((r) => '"' + esc(r) + '"').join(',\n        ')}
      ]
    }`;
  content = insertInBlock(content, 'jobsData', 'zh', zhItem, 'end');
  content = insertInBlock(content, 'jobsData', 'en', enItem, 'end');
  writeData(content);
  return { id, section: 'jobs', written };
}

// ---------------- 产品（百变空间产品，productsData 单数组，含 zh/en 双语文案） ----------------
export async function addProduct({ titleZh, titleEn, category, descriptionZh, descriptionEn, images = [], sharp }) {
  if (!titleZh || !images.length) throw new Error('产品需要标题和至少一张图片');
  const id = genId('p');
  const written = ['data/index.ts'];
  const galleryRel = [];
  for (let i = 0; i < images.length; i++) {
    const suffix = i === 0 ? 'cover' : id + '-' + String(i + 1).padStart(2, '0');
    const rel = '/images/products/' + id + '/' + suffix + '.webp';
    await saveImage(images[i].dataUrl, rel, sharp, written);
    galleryRel.push(rel);
  }
  const coverRel = galleryRel[0];
  const cat = category || 'Soft Furnishings';
  let content = readData();
  const item = `  {
    id: "${esc(id)}",
    category: "${esc(cat)}",
    image: "${esc(coverRel)}",
    title: { zh: "${esc(titleZh)}", en: "${esc(titleEn || titleZh)}" },
    description: { 
      zh: "${esc(descriptionZh || '')}", 
      en: "${esc(descriptionEn || descriptionZh || '')}" 
    },
    gallery: [
      "${galleryRel.join('",\n      "')}"
    ]
  }`;
  content = insertInSingleArray(content, 'productsData', item);
  writeData(content);
  return { id, galleryRel, section: 'products', written };
}

// ---------------- 派发 ----------------
export async function addContent(section, payload) {
  if (section === 'cases' || section === 'spacemagic-case') return addCase(payload);
  if (section === 'news') return addNews(payload);
  if (section === 'jobs') return addJob(payload);
  if (section === 'products') return addProduct(payload);
  throw new Error('未知板块: ' + section);
}
