// 内存版内容库：不在本机写文件/不依赖 sharp。
// addContent(section, payload, currentDataTs) 在内存里修改 data/index.ts 字符串，
// 返回 { dataTs(修改后的全文), imageBlobs:[{repoPath, base64}], id, section }。
// 图片已由前端在浏览器端转成 webp 的 dataURL，这里只负责 base64 提取。

const normalize = (s) => s.replace(/\r\n/g, '\n');
const toCRLF = (s) => s.replace(/\n/g, '\r\n');
const esc = (s) => String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
const genId = (prefix) => prefix + Date.now() + Math.floor(Math.random() * 900 + 100);

// 取 dataURL 的 base64 部分（去掉 "data:image/xxx;base64," 前缀）
function b64(dataUrl) {
  const b = String(dataUrl).split(',')[1];
  if (!b) throw new Error('图片数据为空');
  return b;
}

// 定位某个 export const X = { ... }; 块的起止（块内没有嵌套 };，故第一个 \n}; 即块结束）
function getBlock(content, name) {
  const s = content.indexOf('export const ' + name + ' = {');
  if (s < 0) throw new Error('未找到 ' + name + ' 数组');
  const sub = content.slice(s);
  const end = sub.indexOf('\n};');
  if (end < 0) throw new Error(name + ' 块结束未找到');
  return { s, e: s + end + 3 };
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
    const closeMarker = arrayKey === 'zh' ? '\n  ],\n  en: [' : '\n  ]\n};';
    const mi = block.indexOf(closeMarker);
    if (mi < 0) throw new Error(name + ' ' + arrayKey + ' 数组结尾锚点未找到');
    newBlock = block.slice(0, mi) + ',\n' + item + closeMarker + block.slice(mi + closeMarker.length);
  }
  return content.slice(0, b.s) + newBlock + content.slice(b.e);
}

// 定位某个 const X = [ ... ]; 单数组（productsData 这类）
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
  const newBlock = block.slice(0, mi) + ',\n' + item + closeMarker + block.slice(mi + closeMarker.length);
  return content.slice(0, b.s) + newBlock + content.slice(b.e);
}

// ---------------- 案例（含 享你所想 idealyou / 百变空间 spacemagic） ----------------
function addCase(content, { title, category, description, images = [], type }) {
  if (!title || !images.length) throw new Error('案例需要标题和至少一张图片');
  const caseType = type === 'spacemagic' ? 'spacemagic' : 'idealyou';
  const id = genId('cs');
  const imageBlobs = [];
  const galleryRel = [];
  for (let i = 0; i < images.length; i++) {
    const suffix = i === 0 ? 'cover' : id + '-' + String(i + 1).padStart(2, '0');
    const rel = '/images/cases/' + id + '/' + suffix + '.webp';
    imageBlobs.push({ repoPath: rel, base64: b64(images[i].dataUrl) });
    galleryRel.push(rel);
  }
  const coverRel = galleryRel[0];
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
  return { id, imageBlobs, dataTs: content, section: caseType === 'spacemagic' ? 'spacemagic-case' : 'cases' };
}

// ---------------- 新闻 ----------------
function addNews(content, { title, titleEn, date, summary, summaryEn, images = [] }) {
  if (!title) throw new Error('新闻需要标题');
  if (!images.length) throw new Error('新闻需要至少一张封面图');
  const id = genId('n');
  const imgRel = '/images/news/' + id + '.webp';
  const imageBlobs = [{ repoPath: imgRel, base64: b64(images[0].dataUrl) }];
  const d = date || new Date().toISOString().slice(0, 10);
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
  return { id, imageBlobs, dataTs: content, section: 'news' };
}

// ---------------- 招聘（加入我们） ----------------
function addJob(content, { title, titleEn, requirementsText }) {
  if (!title) throw new Error('招聘职位需要名称');
  const id = genId('j');
  const reqs = String(requirementsText || '').split('\n').map((s) => s.trim()).filter(Boolean);
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
        ${reqs.map((r) => '"' + esc(r) + '"').join(',\n        ')}
      ]
    }`;
  content = insertInBlock(content, 'jobsData', 'zh', zhItem, 'end');
  content = insertInBlock(content, 'jobsData', 'en', enItem, 'end');
  return { id, imageBlobs: [], dataTs: content, section: 'jobs' };
}

// ---------------- 产品（百变空间产品，productsData 单数组） ----------------
function addProduct(content, { titleZh, titleEn, category, descriptionZh, descriptionEn, images = [] }) {
  if (!titleZh || !images.length) throw new Error('产品需要标题和至少一张图片');
  const id = genId('p');
  const imageBlobs = [];
  const galleryRel = [];
  for (let i = 0; i < images.length; i++) {
    const suffix = i === 0 ? 'cover' : id + '-' + String(i + 1).padStart(2, '0');
    const rel = '/images/products/' + id + '/' + suffix + '.webp';
    imageBlobs.push({ repoPath: rel, base64: b64(images[i].dataUrl) });
    galleryRel.push(rel);
  }
  const coverRel = galleryRel[0];
  const cat = category || 'Soft Furnishings';
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
  return { id, imageBlobs, dataTs: content, section: 'products' };
}

// ---------------- 派发 ----------------
function addContent(section, payload, currentDataTs) {
  const content = normalize(currentDataTs); // 统一成 LF 处理
  if (section === 'cases' || section === 'spacemagic-case') return addCase(content, payload);
  if (section === 'news') return addNews(content, payload);
  if (section === 'jobs') return addJob(content, payload);
  if (section === 'products') return addProduct(content, payload);
  throw new Error('未知板块: ' + section);
}

module.exports = { addContent, toCRLF };
