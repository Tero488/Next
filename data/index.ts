
// ==========================================
//  NEXT+ 网站内容管理中心 (CMS CONFIGURATION)
// ==========================================
// 这个文件是您管理网站内容的地方。
// 您可以在这里修改图片、添加案例、发布新闻，而无需改动其他复杂的代码。
//
// [如何添加本地图片?]
// 1. 确保项目根目录下有 'public' 文件夹。
// 2. 建立路径: public/images/cases (放案例图) 和 public/images/news (放新闻图)。
// 3. 将图片放入对应文件夹 (例如: my-new-case.jpg)。
// 4. 在下方引用路径: "/images/cases/my-new-case.jpg"
// ==========================================

import type { Designer } from '../types';

// ------------------------------------------
// 1. 图片资源库 (Image Library)
// ------------------------------------------
// 建议您将所有图片路径都在这里定义，方便统一管理
const CONFIG_IMAGES = {
  cases: {
    // [示例] 本地图片 (取消注释并修改文件名即可使用):
    // xiangjiang_main: "/images/cases/xiangjiang-main.jpg",
    
    // 当前使用的网络图片 (如果您有了本地图片，请替换下面的链接):
    xiangjiang_main: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop", 
    
    xiangjiang_gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
    ],
    skyline: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    neptune: "https://images.unsplash.com/photo-1582037928769-181f2422677e?q=80&w=800&auto=format&fit=crop",
    zen: "https://images.unsplash.com/photo-1600596542815-faad4c1539a9?q=80&w=800&auto=format&fit=crop",
    office: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  news: {
    // [示例] 本地图片:
    // news1: "/images/news/award-2024.jpg",
    
    news1: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    news2: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
    news3: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
  }
};

// ------------------------------------------
// 2. 案例管理 (Case Studies)
// ------------------------------------------
// 如需添加新案例，复制整个 {...}, 块并修改内容
export const casesData = {
  zh: [
    {
      id: "xiangjiang-one",
      title: "湘江壹号·天际私宅",
      category: "别墅洋房",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/xiangjiang-one/cover.jpg",
      description: "位于湘江之畔的顶级豪宅项目。设计团队打破传统界限，以现代极简语言重构空间秩序。全景落地窗将一线江景引入室内，黑白灰的主色调点缀暖色灯光，配合B&B Italia、Poliform等国际一线品牌家居，营造出静谧而极致奢华的居住氛围。空间流动性与私密性完美平衡，重新定义了当代精英的生活方式。",
      gallery: Array.from({ length: 24 }, (_, i) => `/images/cases/gallery/xiangjiang-one/xiangjiang-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "工装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/neptune-mumbai-2025-cover.png",
      description: "位于印度孟买的NEPTUNE品牌展厅，集成灯光与空气系统的现代商业空间，以沉浸式体验诠释品牌未来感。",
      gallery: Array.from({ length: 21 }, (_, i) => `/images/cases/gallery/neptune-mumbai-2025-${String(i + 1).padStart(2, '0')}.png`)
    },
    {
      id: "jiangshan-one",
      title: "江山一号",
      category: "平层",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/jiangshan-one/cover.jpg",
      description: "项目位于江景核心地段，高区俯瞰城市与江岸全景。空间以克制的留白与大面积石材、木饰面为主线，弱化风格标签，强调尺度与光的变化。客餐厅、旋梯与通高落地窗形成开放的生活场景，搭配艺术装置与定制家具，让居住者在日常起居中感受城市天际线的张力与秩序。",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/jiangshan-one/jiangshan-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-shuilantian-9",
      title: "碧桂园水蓝天9号栋",
      category: "别墅洋房",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/bgy-shuilantian-9/cover.jpg",
      description: "位于岳麓核心区的湖景大宅，以现代东方的线条与材质诠释宁静、轻奢的生活质感。",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/bgy-shuilantian-9/bgy-shuilantian-9-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "beichen-hanjiangfu",
      title: "北辰翰江府",
      category: "平层",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/beichen-hanjiangfu/cover.jpg",
      description: "位于长沙核心地段的现代精品住宅，以简约线条与高级材质诠释都市生活美学，打造低调而精致的居住体验。",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/gallery/beichen-hanjiangfu/beichen-hanjiangfu-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-lanbaowan-29",
      title: "碧桂园蓝宝湾29号",
      category: "别墅洋房",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/bgy-lanbaowan-29/cover.jpg",
      description: "位于优质地段的别墅项目，以现代设计语言诠释高端居住体验。",
      gallery: Array.from({ length: 18 }, (_, i) => `/images/cases/bgy-lanbaowan-29/bgy-lanbaowan-29-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "jindi-sanqianfu",
      title: "金地三千府",
      category: "别墅洋房",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/jindi-sanqianfu/cover.png",
      description: "高端别墅项目，融合现代设计与自然景观，打造理想居住空间。",
      gallery: Array.from({ length: 13 }, (_, i) => `/images/cases/jindi-sanqianfu/jindi-sanqianfu-${String(i + 1).padStart(2, '0')}.png`)
    },
    {
      id: "jiabaoli-art-gallery",
      title: "嘉宝莉艺术展厅",
      category: "工装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/jiabaoli-art-gallery/cover.jpg",
      description: "艺术涂料品牌展厅，以现代设计语言展示产品特性，营造专业而富有艺术感的展示空间。",
      gallery: [
        ...Array.from({ length: 18 }, (_, i) => `/images/cases/jiabaoli-art-gallery/jiabaoli-art-gallery-${String(i + 1).padStart(2, '0')}.jpg`),
        ...Array.from({ length: 3 }, (_, i) => `/images/cases/jiabaoli-art-gallery/jiabaoli-art-gallery-${String(i + 20).padStart(2, '0')}.jpg`)
      ]
    },
    {
      id: "kabaili-art-paint",
      title: "卡百利艺术涂料",
      category: "工装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/kabaili-art-paint/cover.jpg",
      description: "艺术涂料品牌展示空间，通过创新的空间设计展现产品的多样性和艺术价值。",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/kabaili-art-paint/kabaili-art-paint-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "xichangjie-wedding",
      title: "西长街婚纱摄影",
      category: "工装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/xichangjie-wedding/cover.jpg",
      description: "专业婚纱摄影工作室，打造浪漫而精致的拍摄空间，为新人提供完美的拍摄体验。",
      gallery: Array.from({ length: 20 }, (_, i) => `/images/cases/xichangjie-wedding/xichangjie-wedding-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "vanke-golden-home-1",
      title: "万科金色家园1",
      category: "精装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/vanke-golden-home-1/cover.jpg",
      description: "万科金色家园精装项目，以现代简约风格打造舒适宜居的居住空间。",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/vanke-golden-home-1/vanke-golden-home-1-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "vanke-golden-home-2",
      title: "万科金色家园2",
      category: "精装",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/vanke-golden-home-2/cover.jpg",
      description: "万科金色家园精装项目，注重细节与品质，营造温馨雅致的居住环境。",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/vanke-golden-home-2/vanke-golden-home-2-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "dongfang-ying",
      title: "东方映",
      category: "平层",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/dongfang-ying/cover.jpg",
      description: "现代平层住宅项目，以简约设计理念打造舒适宜居的居住空间。",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/dongfang-ying/dongfang-ying-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "fengqi-luming",
      title: "凤起鹿鸣",
      category: "平层",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/fengqi-luming/cover.jpg",
      description: "高端平层住宅项目，融合现代设计与东方美学，营造优雅精致的居住体验。",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/fengqi-luming/fengqi-luming-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "shaodong-yinxiang",
      title: "邵东印象",
      category: "平层",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/shaodong-yinxiang/cover.jpg",
      description: "平层住宅项目，以现代简约风格诠释都市生活美学，打造温馨舒适的居住空间。",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/shaodong-yinxiang/shaodong-yinxiang-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "coming-soon",
      title: "案例更新中 敬请期待",
      category: "",
      type: "idealyou", // 享你所想-空间案例
      image: "",
      description: "",
      gallery: [],
      isPlaceholder: true // 标记为占位符
    }
  ],
  en: [
    {
      id: "xiangjiang-one",
      title: "Xiangjiang One Residence",
      category: "Villa",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/xiangjiang-one/cover.jpg",
      description: "A top-tier private residence located by the Xiangjiang River. The design team breaks away from traditional boundaries, reconstructing spatial order with modern minimalist language. Panoramic glazing brings the river panorama indoors, while the monochrome palette and warm lighting create a calm yet ultra-luxurious ambience.",
      gallery: Array.from({ length: 24 }, (_, i) => `/images/cases/gallery/xiangjiang-one/xiangjiang-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "Commercial",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/neptune-mumbai-2025-cover.png",
      description: "NEPTUNE's Mumbai flagship showroom, integrating immersive lighting and air systems to communicate a futuristic brand vision.",
      gallery: Array.from({ length: 21 }, (_, i) => `/images/cases/gallery/neptune-mumbai-2025-${String(i + 1).padStart(2, '0')}.png`)
    },
    {
      id: "jiangshan-one",
      title: "Jiangshan One",
      category: "Flat",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/jiangshan-one/cover.jpg",
      description: "Located on a prime riverfront site, Jiangshan One commands a full panorama of the city skyline and Xiangjiang River. The design deliberately downplays overt styling, using calm stone and timber surfaces, generous negative space and a sculptural stair to organize the home. Panoramic glazing, open living–dining areas and curated art pieces together create a serene yet powerful stage for contemporary urban life.",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/jiangshan-one/jiangshan-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-shuilantian-9",
      title: "Country Garden Azure Sky Tower 9",
      category: "Villa",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/bgy-shuilantian-9/cover.jpg",
      description: "A lakefront residence in Changsha where calm modern lines blend with refined oriental materials for a serene luxury lifestyle.",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/bgy-shuilantian-9/bgy-shuilantian-9-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "beichen-hanjiangfu",
      title: "Beichen Hanjiangfu",
      category: "Flat",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/beichen-hanjiangfu/cover.jpg",
      description: "A modern boutique residence in Changsha's core district, interpreting urban living aesthetics with minimalist lines and premium materials.",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/gallery/beichen-hanjiangfu/beichen-hanjiangfu-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-lanbaowan-29",
      title: "Country Garden Lanbaowan Tower 29",
      category: "Villa",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/bgy-lanbaowan-29/cover.jpg",
      description: "A premium villa project in an excellent location, interpreting high-end living experience with modern design language.",
      gallery: Array.from({ length: 18 }, (_, i) => `/images/cases/bgy-lanbaowan-29/bgy-lanbaowan-29-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "jindi-sanqianfu",
      title: "Jindi Sanqianfu",
      category: "Villa",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/jindi-sanqianfu/cover.png",
      description: "A high-end villa project that blends modern design with natural landscapes, creating an ideal living space.",
      gallery: Array.from({ length: 13 }, (_, i) => `/images/cases/jindi-sanqianfu/jindi-sanqianfu-${String(i + 1).padStart(2, '0')}.png`)
    },
    {
      id: "jiabaoli-art-gallery",
      title: "Carpoly Art Gallery",
      category: "Commercial",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/jiabaoli-art-gallery/cover.jpg",
      description: "An art paint brand showroom that showcases product characteristics through modern design language, creating a professional and artistic display space.",
      gallery: [
        ...Array.from({ length: 18 }, (_, i) => `/images/cases/jiabaoli-art-gallery/jiabaoli-art-gallery-${String(i + 1).padStart(2, '0')}.jpg`),
        ...Array.from({ length: 3 }, (_, i) => `/images/cases/jiabaoli-art-gallery/jiabaoli-art-gallery-${String(i + 20).padStart(2, '0')}.jpg`)
      ]
    },
    {
      id: "kabaili-art-paint",
      title: "Kabaili Art Paint",
      category: "Commercial",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/kabaili-art-paint/cover.jpg",
      description: "An art paint brand display space that showcases product diversity and artistic value through innovative spatial design.",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/kabaili-art-paint/kabaili-art-paint-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "xichangjie-wedding",
      title: "Xichangjie Wedding Photography",
      category: "Commercial",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/xichangjie-wedding/cover.jpg",
      description: "A professional wedding photography studio that creates a romantic and exquisite shooting space, providing couples with the perfect shooting experience.",
      gallery: Array.from({ length: 20 }, (_, i) => `/images/cases/xichangjie-wedding/xichangjie-wedding-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "vanke-golden-home-1",
      title: "Vanke Golden Home 1",
      category: "Refined",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/vanke-golden-home-1/cover.jpg",
      description: "Vanke Golden Home refined project, creating a comfortable and livable living space with modern minimalist style.",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/vanke-golden-home-1/vanke-golden-home-1-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "vanke-golden-home-2",
      title: "Vanke Golden Home 2",
      category: "Refined",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/vanke-golden-home-2/cover.jpg",
      description: "Vanke Golden Home refined project, focusing on details and quality, creating a warm and elegant living environment.",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/vanke-golden-home-2/vanke-golden-home-2-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "dongfang-ying",
      title: "Dongfang Ying",
      category: "Flat",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/dongfang-ying/cover.jpg",
      description: "Modern flat residence project, creating a comfortable and livable living space with minimalist design philosophy.",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/dongfang-ying/dongfang-ying-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "fengqi-luming",
      title: "Fengqi Luming",
      category: "Flat",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/fengqi-luming/cover.jpg",
      description: "High-end flat residence project, blending modern design with oriental aesthetics to create an elegant and refined living experience.",
      gallery: Array.from({ length: 12 }, (_, i) => `/images/cases/fengqi-luming/fengqi-luming-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "shaodong-yinxiang",
      title: "Shaodong Yinxiang",
      category: "Flat",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/shaodong-yinxiang/cover.jpg",
      description: "Flat residence project, interpreting urban living aesthetics with modern minimalist style, creating a warm and comfortable living space.",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/shaodong-yinxiang/shaodong-yinxiang-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "coming-soon",
      title: "Coming Soon",
      category: "",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "",
      description: "",
      gallery: [],
      isPlaceholder: true // Mark as placeholder
    }
  ]
};

// ------------------------------------------
// 3. 新闻资讯管理 (News)
// ------------------------------------------
// 如需发布新闻，在下方数组最前面添加新的 {...}, 块
export const newsData = {
  zh: [
    {
      id: "n1", // 唯一ID
      title: "NEXT+ 荣获2024国际空间设计大奖",
      date: "2024-03-15",
      summary: "凭借在商业空间领域的创新设计理念，NEXT+ 再次获得国际认可...",
      image: CONFIG_IMAGES.news.news1
    },
    {
      id: "n2",
      title: "Space Magic 2.0 发布会回顾",
      date: "2024-02-28",
      summary: "重新定义模块化装修，让空间改造像搭积木一样简单高效...",
      image: CONFIG_IMAGES.news.news2
    },
    {
      id: "n3",
      title: "2025 餐饮空间设计趋势报告",
      date: "2024-01-10",
      summary: "NEXT+ 联合行业专家发布最新趋势，探索Z世代的消费场景...",
      image: CONFIG_IMAGES.news.news3
    }
  ],
  en: [
    {
      id: "n1",
      title: "NEXT+ Wins 2024 International Space Design Award",
      date: "2024-03-15",
      summary: "With innovative design concepts in commercial spaces, NEXT+ gains international recognition again...",
      image: CONFIG_IMAGES.news.news1
    },
    {
      id: "n2",
      title: "Space Magic 2.0 Launch Recap",
      date: "2024-02-28",
      summary: "Redefining modular renovation, making space transformation as simple and efficient as building blocks...",
      image: CONFIG_IMAGES.news.news2
    },
    {
      id: "n3",
      title: "2025 Dining Space Design Trends Report",
      date: "2024-01-10",
      summary: "NEXT+ jointly releases the latest trends with industry experts, exploring consumption scenarios for Gen Z...",
      image: CONFIG_IMAGES.news.news3
    }
  ]
};

// ------------------------------------------
// 4. 数据统计 (Stats)
// ------------------------------------------
export const statsData = {
  zh: [
    { id: 1, label: "完成项目", value: "2000+" },
    { id: 2, label: "合作品牌", value: "80+" },
    { id: 3, label: "覆盖城市", value: "50+" },
    { id: 4, label: "签约成员", value: "60+" },
  ],
  en: [
    { id: 1, label: "Completed Projects", value: "2000+" },
    { id: 2, label: "Brand Partners", value: "80+" },
    { id: 3, label: "Cities Covered", value: "50+" },
    { id: 4, label: "Signed Members", value: "60+" },
  ]
};

// ------------------------------------------
// 5. 其他数据 (Products, Designers, Jobs)
// ------------------------------------------
// 您可以按需修改下方的产品、设计师和招聘信息

const productsData = [
  // --- Soft Furnishings (Furniture) ---
  {
    id: "sf-045-4",
    category: "Soft Furnishings",
    image: "/images/products/banana-boat-sofa/cover.png",
    title: { zh: "香蕉船沙发 SF045-4", en: "Banana Boat Sofa SF045-4" },
    description: { 
      zh: "尺寸: 283*103*66。高密度回弹海绵+高级布艺软包，如同一艘停泊在港湾的舒适小船。", 
      en: "Size: 283*103*66. High-density rebound foam + premium fabric upholstery. Comfortable as a boat in a harbor." 
    },
    gallery: [
      "/images/products/banana-boat-sofa/cover.png",
      "/images/products/banana-boat-sofa/banana-boat-sofa-01.png"
    ]
  },
  {
    id: "lc-mama",
    category: "Soft Furnishings",
    image: "/images/products/mama-hug-chair/cover.png",
    title: { zh: "妈妈怀抱休闲椅", en: "Mama's Hug Lounge Chair" },
    description: { 
      zh: "尺寸: 110*102*91。软体定型棉+布艺。给予您如同母亲怀抱般的温暖与安全感。", 
      en: "Size: 110*102*91. Molded foam + fabric. Gives you warmth and security like a mother's embrace." 
    },
    gallery: [
      "/images/products/mama-hug-chair/cover.png",
      "/images/products/mama-hug-chair/mama-hug-chair-01.png"
    ]
  },
  {
    id: "sf-052-1",
    category: "Soft Furnishings",
    image: "/images/products/sf052-1/cover.png",
    title: { zh: "弧形组合沙发 SF052-1", en: "Curved Sectional Sofa SF052-1" },
    description: { 
      zh: "尺寸: 360*250*77。高密度高回弹海绵+高级布艺软包。流畅的线条设计，适合大平层空间。", 
      en: "Size: 360*250*77. High-density foam + premium fabric. Fluid lines designed for large flat spaces." 
    },
    gallery: [
      "/images/products/sf052-1/cover.png",
      "/images/products/sf052-1/sf052-1-01.png"
    ]
  },
  {
    id: "lc-040",
    category: "Soft Furnishings",
    image: "/images/products/lc040-sofa/cover.png",
    title: { zh: "LC040 沙发", en: "LC040 Sofa" },
    description: { 
      zh: "尺寸: 80*150*60。框架: 不锈钢+进口落叶松。软体: 高级软包。一体式靠背造型给人稳定优雅的印象，赋予沙发现代感。如同穿针引线般的分割线，增加层次感，让沙发成为空间的独特亮点。", 
      en: "Size: 80*150*60. Frame: Stainless steel + imported larch. Upholstery: Premium soft package. The integrated backrest shape gives a stable and elegant impression, endowing the sofa with a modern feel." 
    },
    gallery: [
      "/images/products/lc040-sofa/cover.png",
      "/images/products/lc040-sofa/lc040-sofa-01.png"
    ]
  },
  {
    id: "sf-115-2",
    category: "Soft Furnishings",
    image: "/images/products/sf115-2-sofa/cover.png",
    title: { zh: "SF115-2 罗杰沙发", en: "SF115-2 Roger Sofa" },
    description: { 
      zh: "尺寸: 248*108*86。高密度高回弹海绵+高级布艺软包。", 
      en: "Size: 248*108*86. High-density high-resilience sponge + premium fabric soft package." 
    },
    gallery: [
      "/images/products/sf115-2-sofa/cover.png",
      "/images/products/sf115-2-sofa/sf115-2-sofa-01.png"
    ]
  },
  {
    id: "lc-036",
    category: "Soft Furnishings",
    image: "/images/products/lc036-armchair/cover.png",
    title: { zh: "LC036 扶手椅", en: "LC036 Arm Chair" },
    description: { 
      zh: "尺寸: 78*78*68。框架: 不锈钢+进口落叶松。软体: 高级软包。", 
      en: "Size: 78*78*68. Frame: Stainless steel + imported larch. Upholstery: Premium soft package." 
    },
    gallery: [
      "/images/products/lc036-armchair/cover.png",
      "/images/products/lc036-armchair/lc036-armchair-01.png"
    ]
  },
  {
    id: "lc-105",
    category: "Soft Furnishings",
    image: "/images/products/lc105-armchair/cover.png",
    title: { zh: "LC105 扶手椅", en: "LC105 Arm Chair" },
    description: { 
      zh: "尺寸: 71*91*81。框架: 实木框架。软体: 布艺软包+麻布。扶手椅是客厅中除了沙发外的第二休憩地，轻松随意，不拘一格，享受表面拉扣带来的独特按摩感。", 
      en: "Size: 71*91*81. Frame: Solid wood frame. Upholstery: Fabric soft package + linen. The armchair is the second resting place in the living room besides the sofa, relaxed and casual, enjoying the unique massage feeling brought by the surface's pull buttons." 
    },
    gallery: [
      "/images/products/lc105-armchair/cover.png",
      "/images/products/lc105-armchair/lc105-armchair-01.png"
    ]
  },
  {
    id: "cb2515-chanel-sofa",
    category: "Soft Furnishings",
    image: "/images/products/cb2515-chanel-sofa/cover.png",
    title: { zh: "CB2515 香奈儿沙发", en: "CB2515 Chanel Sofa" },
    description: { 
      zh: "框架: 进口落叶松。软体: 高级软包。", 
      en: "Frame: Imported larch. Upholstery: Premium soft package." 
    },
    gallery: [
      "/images/products/cb2515-chanel-sofa/cover.png",
      "/images/products/cb2515-chanel-sofa/cb2515-chanel-sofa-01.png"
    ]
  },
  {
    id: "sf127-terrace-sofa",
    category: "Soft Furnishings",
    image: "/images/products/sf127-terrace-sofa/cover.png",
    title: { zh: "SF127 梯田沙发", en: "SF127 Terraced Sofa" },
    description: { 
      zh: "尺寸: 310*95*70。框架: 进口落叶松。软体: 高级软包。", 
      en: "Size: 310*95*70. Frame: Imported larch. Upholstery: Premium soft package." 
    },
    gallery: [
      "/images/products/sf127-terrace-sofa/cover.png",
      "/images/products/sf127-terrace-sofa/sf127-terrace-sofa-01.png"
    ]
  },
  {
    id: "fc014-armchair",
    category: "Soft Furnishings",
    image: "/images/products/fc014-armchair/cover.png",
    title: { zh: "FC014 扶手椅", en: "FC014 Arm Chair" },
    description: { 
      zh: "尺寸: 91.5*73.5*78。面料: 进口苯胺皮，全皮。填充: 高密度海绵。扶手: 不锈钢+熔岩焊效果。多面切割拼接的三维感如同钻石，不锈钢扶手未打磨的熔岩焊效果带来现代设计感，进口苯胺皮的柔软舒适与硬质不锈钢形成对比。", 
      en: "Size: 91.5*73.5*78. Fabric: Imported aniline leather, full leather. Filling: High-density sponge. Armrest: Stainless steel + lava weld effect." 
    },
    gallery: [
      "/images/products/fc014-armchair/cover.png",
      "/images/products/fc014-armchair/fc014-armchair-01.png"
    ]
  },
  {
    id: "lc046-chaise",
    category: "Soft Furnishings",
    image: "/images/products/lc046-chaise/cover.png",
    title: { zh: "LC046 躺椅", en: "LC046 Chaise Lounge" },
    description: { 
      zh: "尺寸: 65*157*86。框架: 五金。面料: 布艺/超纤。", 
      en: "Size: 65*157*86. Frame: Hardware. Fabric: Fabric/microfiber." 
    },
    gallery: [
      "/images/products/lc046-chaise/cover.png",
      "/images/products/lc046-chaise/lc046-chaise-01.png"
    ]
  },
  {
    id: "lc151-spanish-chair",
    category: "Soft Furnishings",
    image: "/images/products/lc151-spanish-chair/cover.png",
    title: { zh: "LC151 西班牙椅", en: "LC151 Spanish Chair" },
    description: { 
      zh: "材质: 白蜡木+马鞍皮。", 
      en: "Material: Ash wood + Saddle leather." 
    },
    gallery: [
      "/images/products/lc151-spanish-chair/cover.png",
      "/images/products/lc151-spanish-chair/lc151-spanish-chair.png"
    ]
  },
  {
    id: "hunting-chair",
    category: "Soft Furnishings",
    image: "/images/products/hunting-chair/cover.png",
    title: { zh: "狩猎椅", en: "Hunting Chair" },
    description: { 
      zh: "材质: 白蜡木+复合仿真马鞍皮+铜制皮带扣。", 
      en: "Material: Ash wood + Composite imitation saddle leather + Copper belt buckle." 
    },
    gallery: [
      "/images/products/hunting-chair/cover.png",
      "/images/products/hunting-chair/hunting-chair-01.png"
    ]
  },
  {
    id: "chief-chair",
    category: "Soft Furnishings",
    image: "/images/products/chief-chair/cover.png",
    title: { zh: "酋长椅", en: "Chief's Chair" },
    description: { 
      zh: "材质: 白蜡木+超纤皮。", 
      en: "Material: Ash wood + Microfiber leather." 
    },
    gallery: [
      "/images/products/chief-chair/cover.png",
      "/images/products/chief-chair/chief-chair-01.png"
    ]
  },
  {
    id: "chenxi-chair",
    category: "Soft Furnishings",
    image: "/images/products/chenxi-chair/cover.png",
    title: { zh: "辰熙椅", en: "Chenxi Chair" },
    description: { 
      zh: "材质: 白蜡木+超纤皮。", 
      en: "Material: Ash wood + Microfiber leather." 
    },
    gallery: [
      "/images/products/chenxi-chair/cover.png",
      "/images/products/chenxi-chair/chenxi-chair-01.png"
    ]
  },
  {
    id: "leisure-chair-936",
    category: "Soft Furnishings",
    image: "/images/products/leisure-chair-936/cover.png",
    title: { zh: "936 休闲椅", en: "936 Leisure Chair" },
    description: { 
      zh: "尺寸: 283*107*68。材质: 进口落叶松+高级软包。", 
      en: "Size: 283*107*68. Material: Imported larch + Premium soft package." 
    },
    gallery: [
      "/images/products/leisure-chair-936/cover.png",
      "/images/products/leisure-chair-936/leisure-chair-936-01.png"
    ]
  },
  {
    id: "cb2382-leisure-chair",
    category: "Soft Furnishings",
    image: "/images/products/cb2382-leisure-chair/cover.png",
    title: { zh: "CB2382 休闲椅", en: "CB2382 Leisure Chair" },
    description: { 
      zh: "尺寸: 74*72*75。材质: 头层真皮+海绵+羽绒+黑纱铁架。", 
      en: "Size: 74*72*75. Material: Top-grain leather + Sponge + Down + Black iron frame." 
    },
    gallery: [
      "/images/products/cb2382-leisure-chair/cover.png",
      "/images/products/cb2382-leisure-chair/cb2382-leisure-chair-01.png"
    ]
  },
  {
    id: "coffee-table-18010",
    category: "Soft Furnishings",
    image: "/images/products/coffee-table-18010/cover.png",
    title: { zh: "18010 旋转茶几", en: "18010 Rotating Coffee Table" },
    description: { 
      zh: "尺寸: 146*96*31。材质: 黑色钢化玻璃面板+玫瑰金拉丝金属漆柜体+硬件镜面不锈钢黑钛防指纹。", 
      en: "Size: 146*96*31. Material: Black tempered glass panel + Rose gold brushed metal paint cabinet + Hardware mirror stainless steel black titanium anti-fingerprint." 
    },
    gallery: [
      "/images/products/coffee-table-18010/cover.png",
      "/images/products/coffee-table-18010/coffee-table-18010-01.png"
    ]
  },
  {
    id: "coffee-table-2301",
    category: "Soft Furnishings",
    image: "/images/products/coffee-table-2301/cover.png",
    title: { zh: "2301# 茶几", en: "2301# Coffee Table" },
    description: { 
      zh: "尺寸: 141*95*29。材质: 烟熏木皮台面+岩板+实木腿喷黑沙漆。", 
      en: "Size: 141*95*29. Material: Smoked wood veneer top + Rock slab + Solid wood legs sprayed with black sand paint." 
    },
    gallery: [
      "/images/products/coffee-table-2301/cover.png",
      "/images/products/coffee-table-2301/coffee-table-2301-01.png"
    ]
  },
  {
    id: "coffee-table-2309",
    category: "Soft Furnishings",
    image: "/images/products/coffee-table-2309/cover.png",
    title: { zh: "2309# 金属拉丝款", en: "2309# Metal Brushed Style" },
    description: { 
      zh: "尺寸: 121*97*32(A), 111*94*45(B)。材质: 拉丝金属台面+古铜拉丝框架。", 
      en: "Size: 121*97*32(A), 111*94*45(B). Material: Brushed metal tabletop + Antique bronze brushed frame." 
    },
    gallery: [
      "/images/products/coffee-table-2309/cover.png",
      "/images/products/coffee-table-2309/coffee-table-2309-01.png"
    ]
  },

  // --- Smart Lighting (智能灯光) ---
  {
    id: "smart-lighting-01",
    category: "Smart Lighting",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop",
    title: { zh: "DALI智能调光系统", en: "DALI Smart Dimming System" },
    description: { 
      zh: "DALI 2.0 协议，万级调光深度。根据人体节律自动调节色温与亮度，打造健康光环境。", 
      en: "DALI 2.0 protocol, 10,000-level dimming depth. Automatically adjusts color temp and brightness based on circadian rhythm." 
    }
  },
  {
    id: "smart-lighting-02",
    category: "Smart Lighting",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: { zh: "智能场景照明系统", en: "Smart Scene Lighting System" },
    description: { 
      zh: "多场景智能切换，一键联动全屋灯光。支持语音控制与手机远程调节，营造理想氛围。", 
      en: "Multi-scene intelligent switching, one-touch whole-house lighting control. Supports voice control and mobile remote adjustment." 
    }
  },
  {
    id: "smart-lighting-03",
    category: "Smart Lighting",
    image: "https://images.unsplash.com/photo-1541123437860-bb9699413ec0?q=80&w=800&auto=format&fit=crop",
    title: { zh: "轨道磁吸灯系统", en: "Track Magnetic Lighting System" },
    description: { 
      zh: "无主灯设计，48V安全低压轨道。磁吸式灯具可随意调整位置与角度，灵活打造光影层次。", 
      en: "Mainless design, 48V safe low-voltage track. Magnetic fixtures can be freely adjusted in position and angle." 
    }
  },

  // --- Artistic Coatings (艺术涂料) ---
  {
    id: "modern-sand-velvet",
    category: "Artistic Coatings",
    image: "/images/products/modern-sand-velvet/cover.png",
    title: { zh: "摩登砂绒", en: "Modern Sand Velvet" },
    description: { 
      zh: "摩登砂绒拥有华丽明亮的金属色彩，动感十足。珍珠与柔光的肌理交织，在光影中反射，细腻的毛发状肌理散发出迷人魅力。", 
      en: "Modern velvet comes with gorgeous, bright metallic colors, and is dynamic. The texture of pearl and soft light intersects, reflected in light and shadow." 
    },
    gallery: [
      "/images/products/modern-sand-velvet/cover.png",
      "/images/products/modern-sand-velvet/modern-sand-velvet-01.png"
    ]
  },
  {
    id: "skin-feel-lambskin",
    category: "Artistic Coatings",
    image: "/images/products/skin-feel-lambskin/cover.png",
    title: { zh: "肤感小羊皮", en: "Skin-feel Lambskin" },
    description: { 
      zh: "肤感小羊皮艺术涂料拥有如小羊皮般细腻柔软的触感，带来温暖与舒适。柔和的光泽，展现低调奢华，为空间增添优雅气质。", 
      en: "The skin-feel lambskin art paint has a delicate and soft touch like lambskin, bringing warmth and comfort. With a soft gloss, it shows a low-key luxury." 
    },
    gallery: [
      "/images/products/skin-feel-lambskin/cover.png",
      "/images/products/skin-feel-lambskin/skin-feel-lambskin-01.png"
    ]
  },
  {
    id: "fass-sand-velvet",
    category: "Artistic Coatings",
    image: "/images/products/fass-sand-velvet/cover.png",
    title: { zh: "法斯砂绒", en: "Fass Sand Velvet" },
    description: { 
      zh: "法斯砂绒是一款独特的艺术涂料，拥有淡薄细腻的肌理，带来细腻舒适的触感。散发着低调优雅的金属光泽。", 
      en: "The Fass Sand Velvet is a unique art paint with a faint, thin texture, offering a delicate and comfortable touch. It exudes a low-key and elegant metallic sheen." 
    },
    gallery: [
      "/images/products/fass-sand-velvet/cover.png",
      "/images/products/fass-sand-velvet/fass-sand-velvet-01.png"
    ]
  },
  {
    id: "metal-relief",
    category: "Artistic Coatings",
    image: "/images/products/metal-relief/cover.png",
    title: { zh: "金属浮雕", en: "Metal Relief" },
    description: { 
      zh: "金属浮雕艺术涂料，以其独特的工艺，巧妙运用金属漆进行着色，呈现出迷人的金属光泽质感。配合精致的浮雕图案，瞬间赋予空间非凡的艺术风格。", 
      en: "The metal relief art paint, with its unique craftsmanship, skillfully uses metal paint for coloring, presenting a fascinating metallic luster texture." 
    },
    gallery: [
      "/images/products/metal-relief/cover.png",
      "/images/products/metal-relief/metal-relief-01.png"
    ]
  },
  {
    id: "metallic-velvet",
    category: "Artistic Coatings",
    image: "/images/products/metallic-velvet/cover.png",
    title: { zh: "金属丝绒", en: "Metallic Velvet" },
    description: { 
      zh: "金属丝绒拥有如丝绒般细腻的肌理，比普通丝绒更耐擦洗，柔和悦目的光泽为空间注入奢华感。", 
      en: "Metallic velvet has a delicate texture like velvet, more scrub-resistant than ordinary velvet, with a soft and pleasant luster that infuses luxury into a space." 
    },
    gallery: [
      "/images/products/metallic-velvet/cover.png",
      "/images/products/metallic-velvet/metallic-velvet-01.png"
    ]
  },
  {
    id: "turin-sand-velvet",
    category: "Artistic Coatings",
    image: "/images/products/turin-sand-velvet/cover.png",
    title: { zh: "都灵砂绒", en: "Turin Sand Velvet" },
    description: { 
      zh: "都灵砂绒是一款独特的艺术涂料效果，拥有极其细腻的金属扫砂肌理。相比其他工艺，扫砂更均匀精致，看似简单却赋予空间奢华风格。", 
      en: "Turin Sand Velvet is a unique artistic paint effect with an extremely delicate metallic sand-sweeping texture. More evenly and exquisitely swept compared to other processes." 
    },
    gallery: [
      "/images/products/turin-sand-velvet/cover.png",
      "/images/products/turin-sand-velvet/turin-sand-velvet-01.png"
    ]
  },
  {
    id: "milan-velvet",
    category: "Artistic Coatings",
    image: "/images/products/milan-velvet/cover.png",
    title: { zh: "米兰丝绒", en: "Milan Velvet" },
    description: { 
      zh: "米兰丝绒拥有细腻顺滑的手感，施工简易，耐擦洗性强。赋予空间柔和的珠光光泽，展现优雅品质。", 
      en: "Milan Velvet has a delicate and smooth handfeel, easy to construct, and highly scrub-resistant. It endows the space with a soft pearlescent luster, showing elegant qualities." 
    },
    gallery: [
      "/images/products/milan-velvet/cover.png",
      "/images/products/milan-velvet/milan-velvet-01.png"
    ]
  },
  {
    id: "ruida-yaron",
    category: "Artistic Coatings",
    image: "/images/products/ruida-yaron/cover.png",
    title: { zh: "睿达雅绒", en: "Ruida Yaron" },
    description: { 
      zh: "睿达雅绒是一款迷人的艺术涂料材质，拥有如麂皮般的肌理和柔和的哑光效果。触感细腻温暖，巧妙为空间营造低调、优雅、温馨的氛围。", 
      en: "Ruida Yaron is a charming artistic paint material with a texture similar to suede and a soft matte effect. It feels delicate and warm to the touch." 
    },
    gallery: [
      "/images/products/ruida-yaron/cover.png",
      "/images/products/ruida-yaron/ruida-yaron-01.png"
    ]
  },
  {
    id: "vitas",
    category: "Artistic Coatings",
    image: "/images/products/vitas/cover.png",
    title: { zh: "维塔斯", en: "Vitas" },
    description: { 
      zh: "维塔斯是一款极其哑光的珠光涂料，在正常条件下显得低调，但在光线轻抚下会显现出细腻的珠光，散发出迷人的光泽。", 
      en: "Vitas is an extremely matte pearlescent paint that appears understated in normal conditions but reveals delicate pearlescence when caressed by light." 
    },
    gallery: [
      "/images/products/vitas/cover.png",
      "/images/products/vitas/vitas-01.png"
    ]
  },
  {
    id: "micro-cement",
    category: "Artistic Coatings",
    image: "/images/products/micro-cement/cover.png",
    title: { zh: "微水泥", en: "Micro-cement" },
    description: { 
      zh: "微水泥是一种新型装饰材料，拥有无缝一体的结构和细腻的肌理。具有高强度、防水等特性，轻松融入各类住宅和商业空间，展现简约高端风格。", 
      en: "Micro-cement is a new-type decorative material with a seamless and integral structure and a fine texture. It boasts high strength and waterproof properties." 
    },
    gallery: [
      "/images/products/micro-cement/cover.png",
      "/images/products/micro-cement/micro-cement-01.png"
    ]
  },
  {
    id: "massey-plaster",
    category: "Artistic Coatings",
    image: "/images/products/massey-plaster/cover.png",
    title: { zh: "马塞灰泥", en: "Massey Plaster" },
    description: { 
      zh: "马塞灰泥是一款拥有细腻肌理和优雅风格的肌理涂料。丰富的色彩选择，柔和的色调，是极简和优雅空间的完美选择，为空间注入独特的艺术氛围。", 
      en: "Massey plaster is a textured paint with a delicate texture and an elegant style. It features a rich color palette with soft hues." 
    },
    gallery: [
      "/images/products/massey-plaster/cover.png",
      "/images/products/massey-plaster/massey-plaster-01.png"
    ]
  },
  {
    id: "sicilian-plaster",
    category: "Artistic Coatings",
    image: "/images/products/sicilian-plaster/cover.png",
    title: { zh: "西西里灰泥", en: "Sicilian Plaster" },
    description: { 
      zh: "西西里灰泥是一款无机肌理涂料，拥有略微粗糙的独特肌理。能够精心为空间营造优雅的空间质感，让每个角落都散发出自然质朴的美感，展现独特魅力。", 
      en: "Sicilian plaster is an inorganic textured paint with a slightly rough and unique texture. It can carefully create an elegant spatial texture for the space." 
    },
    gallery: [
      "/images/products/sicilian-plaster/cover.png",
      "/images/products/sicilian-plaster/sicilian-plaster-01.png"
    ]
  },
  {
    id: "purdue-plaster",
    category: "Artistic Coatings",
    image: "/images/products/purdue-plaster/cover.png",
    title: { zh: "普尔多灰泥", en: "Purdue Plaster" },
    description: { 
      zh: "普尔多灰泥是一款含有天然色砂的无机肌理灰泥，呈现素雅的外观，营造温暖宁静的氛围。", 
      en: "Purdue plaster is an inorganic textured plaster containing natural-colored sand, offering a plain and elegant look, and creating a warm, peaceful atmosphere." 
    },
    gallery: [
      "/images/products/purdue-plaster/cover.png",
      "/images/products/purdue-plaster/purdue-plaster-01.png"
    ]
  },
  {
    id: "raphael-retro",
    category: "Artistic Coatings",
    image: "/images/products/raphael-retro/cover.png",
    title: { zh: "拉斐尔复古", en: "Raphael Retro" },
    description: { 
      zh: "拉斐尔复古是一款拥有肌理图案和老化、美式色彩融合效果的艺术涂料。结合复古元素与精湛工艺，呈现丰富的层次色彩和自然过渡，为墙面注入历史韵味和艺术质感。", 
      en: "Raphael Retro is an artistic paint with both textured patterns and effects of aging and American-style color blending." 
    },
    gallery: [
      "/images/products/raphael-retro/cover.png",
      "/images/products/raphael-retro/raphael-retro-01.png"
    ]
  },
  {
    id: "marmorino",
    category: "Artistic Coatings",
    image: "/images/products/marmorino/cover.png",
    title: { zh: "玛曼奴", en: "Marmorino" },
    description: { 
      zh: "玛曼奴是一款在高端住宅中广受欢迎的石灰基涂料，其独特的配方创造出细腻的肌理，融合自然色彩，打造素雅、简约、低调而奢华的空间。", 
      en: "Marmorino is a lime-based coating popular in high-end homes, its unique formula creates a delicate texture and blends natural colors." 
    },
    gallery: [
      "/images/products/marmorino/cover.png",
      "/images/products/marmorino/marmorino-01.png"
    ]
  },
  {
    id: "ea-metallic",
    category: "Artistic Coatings",
    image: "/images/products/ea-metallic/cover.png",
    title: { zh: "EA金属", en: "EA Metallic" },
    description: { 
      zh: "EA金属是一款金属艺术涂料，拥有细腻光滑的肌理，大理石般的迷人质感，以及淡淡的奢华金属光泽，为空间注入现代、时尚、高端的氛围。", 
      en: "EA Metallic is a metallic artistic paint featuring a fine and smooth texture, a marble-like charming feel, and a faint luxurious metallic luster." 
    },
    gallery: [
      "/images/products/ea-metallic/cover.png",
      "/images/products/ea-metallic/ea-metallic-01.png"
    ]
  },
  {
    id: "travertine",
    category: "Artistic Coatings",
    image: "/images/products/travertine/cover.png",
    title: { zh: "特瓦奴", en: "Travertine" },
    description: { 
      zh: "特瓦奴是一款石灰基艺术涂料，环保健康，调湿抗菌，经久耐用。拥有丰富的肌理变化，包括斑驳复古、木纹、水泥脱模、石纹等效果，深受设计师青睐。", 
      en: "Travertine is a lime-based art paint that is environmentally friendly, healthy, humidity-adjusting, antibacterial, and durable." 
    },
    gallery: [
      "/images/products/travertine/cover.png",
      "/images/products/travertine/travertine-01.png"
    ]
  },
  {
    id: "shihuanu",
    category: "Artistic Coatings",
    image: "/images/products/shihuanu/cover.png",
    title: { zh: "石桦奴", en: "Shihuanu" },
    description: { 
      zh: "石桦奴是一款拥有粗犷肌理的石灰基涂料，旨在营造自然质朴的氛围。其多样的肌理塑造能力可以呈现各种洞石效果，为空间增添独特魅力。", 
      en: "Shihuanu is a lime-based paint with a rugged texture, designed to create a natural and rustic atmosphere." 
    },
    gallery: [
      "/images/products/shihuanu/cover.png",
      "/images/products/shihuanu/shihuanu-01.png"
    ]
  },
  {
    id: "mica-colored-stone",
    category: "Artistic Coatings",
    image: "/images/products/mica-colored-stone/cover.png",
    title: { zh: "云母彩石", en: "Mica Colored Stone" },
    description: { 
      zh: "云母彩石是一款天然石灰基肌理涂料，采用天然云母作为骨料。创造出质朴粗犷的表面效果，如同天然石材般，具有原始美感和自然魅力。", 
      en: "Mica Colored Stone is a natural lime-based textured paint that uses natural mica as aggregates." 
    },
    gallery: [
      "/images/products/mica-colored-stone/cover.png",
      "/images/products/mica-colored-stone/mica-colored-stone-01.png"
    ]
  },
  {
    id: "maya-stone",
    category: "Artistic Coatings",
    image: "/images/products/maya-stone/cover.png",
    title: { zh: "玛雅石", en: "Maya Stone" },
    description: { 
      zh: "玛雅石是一款水泥基肌理涂料，能够创造出拥有丰富纹理和明显孔洞的天然石材效果。其质朴的色彩极具特色，独特的肌理赋予空间原始自然的氛围。", 
      en: "Maya Stone is a cement-based textured paint that can create natural stone effects with rich veins and obvious holes." 
    },
    gallery: [
      "/images/products/maya-stone/cover.png",
      "/images/products/maya-stone/maya-stone-01.png"
    ]
  },

  // --- Woodwork Custom (木作定制) ---
  {
    id: "woodwork-01",
    category: "Woodwork Custom",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop",
    title: { zh: "全屋木饰面系统", en: "Whole House Wood Veneer System" },
    description: { 
      zh: "天然木皮贴面，隐形门与墙板一体化设计。精密工艺实现无缝拼接，呈现高级质感。", 
      en: "Natural wood veneer with integrated hidden door and wall panel design. Precision craftsmanship for seamless joints." 
    }
  },
  {
    id: "woodwork-02",
    category: "Woodwork Custom",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    title: { zh: "定制原木衣帽间", en: "Custom Solid Wood Walk-in Closet" },
    description: { 
      zh: "北美进口白橡木或黑胡桃木，全榫卯结构。内置感应灯带与分区收纳系统，兼具美感与实用。", 
      en: "Imported North American white oak or black walnut, full mortise-and-tenon structure with built-in sensor lighting." 
    }
  },
  {
    id: "woodwork-03",
    category: "Woodwork Custom",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
    title: { zh: "原木整体橱柜系统", en: "Solid Wood Integrated Cabinet System" },
    description: { 
      zh: "进口实木柜体，德系五金配件。隐藏把手设计，台面与门板无缝衔接，打造简约高级厨房空间。", 
      en: "Imported solid wood cabinetry with German hardware. Hidden handle design, seamless connection between countertop and doors." 
    }
  }
];

export const getProducts = (lang: 'zh' | 'en') => {
  return productsData.map(p => ({
    id: p.id,
    category: p.category, // Keep internal category ID consistent
    image: p.image,
    title: p.title[lang],
    description: p.description[lang],
    gallery: p.gallery || []
  }));
};

export const designersData: Record<'zh' | 'en', Designer[]> = {
  zh: [
    { 
      id: "tang-guishu", 
      name: "唐桂树", 
      role: "湖南你好能量盒子装饰工程设计有限公司 创始人 / 设计总监", 
      image: "/images/designers/tang-guishu.jpg",
      sections: [
        {
          title: "设计理念",
          variant: "paragraph",
          items: ["以人为本，为居住者创造功能合理、舒适优美、兼具物质与精神需求的室内环境——有限空间，无限精彩。"]
        },
        {
          title: "个人说明",
          variant: "paragraph",
          items: ["多次参与国内重要室内设计赛事并屡获大奖，持续推动室内空间品质的创新表达。"]
        },
        {
          title: "荣誉见证",
          items: [
            "2011年湖南省第11届室内设计大赛 优秀奖；2012年湖南省第12届室内设计大赛 金奖；",
            "2013年CIID中国室内设计大赛 铜奖、“居然杯”CIDA中国室内设计创新设计奖、湖南省第13届室内设计大赛 金奖；",
            "2014年第10届中国国际室内设计大赛双年展 银奖、湖南省第14届室内设计大赛 银奖；",
            "2016年双年展 银奖、湖南省第16届室内设计大赛 金奖；",
            "2017年HIID顶峰设计大赛 银奖、上海金外滩国际设计大奖赛 最佳设计师；",
            "2018年HIID顶峰设计大赛年度新锐建筑室内设计师、建筑室内一体化设计 银奖；",
            "2019年第二届鲲鹏奖中国室内设计大赛别墅类 金鲲鹏奖；",
            "2022年CIID中国室内设计大赛 铜奖；2023年CIID中国室内设计大赛 银奖、HIID顶峰设计大赛建筑室内一体化设计 金奖，获IHIDA北部十大先锋设计师、湖南室内设计封面人物。"
          ]
        }
      ]
    },
    {
      id: "peng-yi",
      name: "彭毅",
      role: "NEXT HOME 能量盒子联合创始人 / 设计总监",
      image: "/images/designers/peng-yi.jpg",
      sections: [
        {
          title: "设计理念",
          variant: "paragraph",
          items: ["不定义所谓风格，居住者才是风格。让空间忠于使用者的情绪、习惯与价值。"]
        },
        {
          title: "职业身份",
          variant: "paragraph",
          items: ["NEXT HOME 能量盒子联合创始人，负责整体设计策略与作品标准化落地。"]
        },
        {
          title: "专业荣誉",
          items: [
            "中国建筑室内设计协会会员",
            "湖南建筑学会室内分会会员",
            "中国2021年度 TOP100 设计师"
          ]
        },
        {
          title: "主要奖项",
          items: [
            "2018年筑巢奖 银奖；2019年顶峰设计住宅实例类 铜奖；",
            "2020年顶峰设计公共空间类 银奖、中国室内设计大赛 铜奖；",
            "2021年顶峰设计公共空间类 金奖、住宅类 优秀奖；",
            "2021年湖南家居行业卓群奖；2021年金外滩办公空间 银奖；",
            "2022年金案奖全国十二强、ICS最佳色彩空间设计奖、CIID商业空间类 铜奖、LHDA国际奢居大奖；",
            "2022年金住奖中国（长沙）十大居住空间设计；",
            "2023年湖南TOP100设计年鉴 银奖、CIID住宅类 银奖。"
          ]
        },
        {
          title: "擅长风格",
          items: ["现代极简", "中古诧寂", "现代法式", "自然主义", "意式轻奢"]
        },
        {
          title: "代表案例",
          items: ["长房样板房", "京武浪琴山", "印长江", "北辰定江洋", "江山壹号", "湘江壹号", "明晟壹城"]
        }
      ]
    },
    {
      id: "kuang-yingzhi",
      name: "匡颖智",
      role: "湖南你好能量盒子装饰工程设计有限公司 联合创始人 / 设计总监",
      image: "/images/designers/kuang-yingzhi.jpg",
      sections: [
        {
          title: "个人荣誉",
          items: [
            "中国注册高级室内设计师",
            "中国室内设计年度十大封面人物（2021-2022）"
          ]
        },
        {
          title: "获奖情况",
          items: [
            "2014年第十届中国国际双年展大赛 金奖；2014中国湖南省室内设计大赛 金奖 / 铜奖；",
            "2014“居然杯”中国室内设计大奖 金奖；2014中国“艾特奖”入围；",
            "2015中国湖南省室内设计大赛 银奖；2015中国室内设计大奖赛 银奖；",
            "2016年第十一届中国国际双年展大赛 2项金奖；2016中国“设计星”西安赛区10强及最佳人气；",
            "2016中国“喜舍杯”年度最佳样板间 / 售楼处设计；2016 CIID中国室内大奖赛 银奖；",
            "2016中国金堂奖 年度最佳样板间 / 售楼处设计；2016中国国际室内设计大赛 金奖；",
            "2017湘西卫视特约设计单位 / 特聘设计师；2017 CIID中国室内设计大赛 金奖 / 银奖；",
            "2017中国上海“金外滩”入围；2017“居然杯”中国室内设计新人奖；",
            "2017湖南省室内设计大赛“顶峰设计奖”金奖 / 铜奖，并获最佳设计机构；",
            "2018中国室内设计大奖赛 银奖；2018中国居然杯设计大奖赛 银奖；",
            "2018中国室内TOP10设计机构；2018湖南顶峰设计大奖赛 6项金奖（企业）；",
            "2019湖南顶峰设计大奖赛 4金 / 3银 / 3铜（企业）；",
            "2020湖南家居行业青年领袖人物；2020湖南顶峰设计大奖赛 2金 / 4银 / 7铜（企业）；",
            "2021-2022中国室内设计年度封面人物。"
          ]
        }
      ]
    }
  ],
  en: [
    { 
      id: "tang-guishu", 
      name: "Tang Guishu", 
      role: "Founder & Design Director, Hunan Nihao Energy Box Decoration Engineering Design Co., Ltd.", 
      image: "/images/designers/tang-guishu.jpg",
      sections: [
        {
          title: "Design Philosophy",
          variant: "paragraph",
          items: ["People-oriented interiors that harmonize function, comfort and aesthetics — limited space, infinite possibilities."]
        },
        {
          title: "Profile",
          variant: "paragraph",
          items: ["Frequent winner at national interior design competitions, continually redefining contemporary luxury living."]
        },
        {
          title: "Awards & Recognition",
          items: [
            "Multiple provincial gold awards (Hunan Interior Design Competition, 2012 & 2013).",
            "CIID China Interior Design Awards Bronze (2013) & Silver (2023).",
            "CIDA Innovation Award, HIID Summit Awards, and Golden Bund Best Designer.",
            "HIID Integrated Design Silver (2018) and Gold (2023).",
            "Kunpeng Award Gold for Villa Category (2019); IHIDA Top 10 Pioneer Designer."
          ]
        }
      ]
    },
    {
      id: "peng-yi",
      name: "Peng Yi",
      role: "Co-founder & Design Director, NEXT HOME Energy Box",
      image: "/images/designers/peng-yi.jpg",
      sections: [
        {
          title: "Design Philosophy",
          variant: "paragraph",
          items: ["Refuse rigid styles — the resident defines the aesthetic. Every project grows from real life."]
        },
        {
          title: "Professional Accolades",
          items: [
            "Member, China Building Decoration Association Interior Design Committee.",
            "Member, Hunan Architectural Society Interior Chapter.",
            "Named one of China’s TOP100 Designers in 2021."
          ]
        },
        {
          title: "Key Awards",
          items: [
            "Silver, Nest Award 2018; Bronze, Summit Design (Residential) 2019.",
            "Silver, Summit Design (Public Space) 2020; Bronze, China Interior Design Award 2020.",
            "Gold, Summit Design (Public Space) 2021; Excellence, Summit Residential 2021.",
            "Silver, Golden Bund Office Space 2021; Golden Case Award National Top 12 in 2022.",
            "ICS Best Color Space 2022; CIID Commercial Space Bronze 2022; LHDA Luxury Living Award 2022.",
            "Top 10 Residential Space Design, Golden Residence Award (Changsha) 2022.",
            "Silver, Hunan TOP100 Design Yearbook 2023; Silver, CIID Residential 2023."
          ]
        },
        {
          title: "Specialties",
          items: ["Modern Minimalism", "Mid-century & Wabi-sabi", "Modern French", "Biophilic Naturalism", "Italian Neo-luxe"]
        },
        {
          title: "Representative Projects",
          items: ["Changfang Show Flat", "Jingwu Langqinshan", "Yin Changjiang", "Beichen Dingjiangyang", "Jiangshan One", "Xiangjiang One", "Mingsheng Yicheng"]
        }
      ]
    },
    {
      id: "kuang-yingzhi",
      name: "Kuang Yingzhi",
      role: "Co-founder & Design Director, Hunan Nihao Energy Box Decoration Engineering Design Co., Ltd.",
      image: "/images/designers/kuang-yingzhi.jpg",
      sections: [
        {
          title: "Honors",
          items: [
            "Certified Senior Interior Designer of China",
            "China Interior Design Annual Top 10 Cover Figures (2021-2022)"
          ]
        },
        {
          title: "Major Awards",
          items: [
            "Gold, 10th China International Biennale 2014; Gold & Bronze, Hunan Interior Design Competition 2014.",
            "Gold, CIDA Award 2014; Finalist, A' Design Award (IADF) 2014.",
            "Silver, Hunan Interior Design Competition 2015; Silver, China Interior Design Award 2015.",
            "Two Golds, 11th China International Biennale 2016; Top 10 & Popularity Award, Design Star Xi'an 2016.",
            "Best Showflat/Sales Center, Xishe Cup 2016; Silver, CIID Interior Awards 2016; Gold, China International Interior Design Competition 2016.",
            "Specially Appointed Designer, Xiangxi TV 2017; Gold & Silver, CIID Awards 2017; Finalist, Golden Bund 2017; New Designer Award, CIDA 2017.",
            "Multiple Gold/Silver/Bronze honors at Hunan Summit Design Awards 2017-2020; Corporate TOP10 Interior Design Institution 2018.",
            "Young Leader of Hunan Home Industry 2020; China Interior Design Cover Figure 2021-2022."
          ]
        }
      ]
    }
  ]
};

export const constructionData = {
  zh: [
    { id: "ct1", name: "工程一队", role: "住宅", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
    { id: "ct2", name: "工程二队", role: "商业", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" },
    { id: "ct3", name: "技术支持组", role: "机电、材料与智能系统", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" },
  ],
  en: [
    { id: "ct1", name: "Team One", role: "Residential", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
    { id: "ct2", name: "Team Two", role: "Commercial", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" },
    { id: "ct3", name: "Tech Support", role: "MEP, Materials & Smart Systems", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" },
  ]
};

export const jobsData = {
  zh: [
    { 
      id: "j1", 
      title: "室内设计师", 
      requirements: [
        "室内设计相关专业大专及以上学历，2年以上同岗位工作经验；",
        "能独立完成家居空间设计并熟悉装修施工工艺及流程；",
        "做事认真负责，逻辑思维清晰，表达沟通能力强。"
      ] 
    },
    { 
      id: "j2", 
      title: "设计助理", 
      requirements: [
        "配合室内设计师前期沟通与量房；",
        "根据设计师提供的设计概念和方向，协助完成各类装修与出图；",
        "熟练掌握CAD、SU、Photoshop的主流设计软件。"
      ] 
    },
    { 
      id: "j3", 
      title: "效果图表现师", 
      requirements: [
        "具备专业美术功底，对色彩、构图、光影有敏锐的感知和出色的把控能力；",
        "精通3D建模、渲染技术，能熟练运用行业主流3D软件（如3ds Max、Maya、C4D等）进行复杂场景，精细模型的创建与高质量渲染。"
      ] 
    },
    { 
      id: "j4", 
      title: "商务咨询师", 
      requirements: [
        "依托公司平台开发客户；",
        "挖掘客户需求，协同设计师根据客户需求为客户提供合适的家装方案。"
      ] 
    },
    { 
      id: "j5", 
      title: "新媒体运营", 
      requirements: [
        "主要负责公司新媒体平台的日常运营和推广工作，熟悉短视频生态；",
        "负责策划、编辑和发布各类新媒体内容。"
      ] 
    }
  ],
  en: [
    { 
      id: "j1", 
      title: "Interior Designer", 
      requirements: [
        "College degree or above in interior design or related field, 2+ years of experience in the same position;",
        "Ability to independently complete home space design and familiar with decoration construction processes;",
        "Responsible, clear logical thinking, strong communication skills."
      ] 
    },
    { 
      id: "j2", 
      title: "Design Assistant", 
      requirements: [
        "Assist interior designers with preliminary communication and on-site measurements;",
        "Assist in completing various decoration drawings based on design concepts provided by designers;",
        "Proficient in mainstream design software such as CAD, SU, and Photoshop."
      ] 
    },
    { 
      id: "j3", 
      title: "3D Visualizer", 
      requirements: [
        "Professional artistic foundation, keen perception and excellent control of color, composition, and lighting;",
        "Proficient in 3D modeling and rendering technologies, skilled in using mainstream 3D software (e.g., 3ds Max, Maya, C4D) to create complex scenes and high-quality renderings."
      ] 
    },
    { 
      id: "j4", 
      title: "Business Consultant", 
      requirements: [
        "Develop clients relying on the company platform;",
        "Identify client needs and collaborate with designers to provide suitable home decoration solutions based on client needs."
      ] 
    },
    { 
      id: "j5", 
      title: "New Media Operations", 
      requirements: [
        "Responsible for daily operation and promotion of the company's new media platforms, familiar with the short video ecosystem;",
        "Responsible for planning, editing, and publishing various new media content."
      ] 
    }
  ]
};

export const getStats = (lang: 'zh' | 'en') => statsData[lang];
export const getCases = (lang: 'zh' | 'en') => casesData[lang];
export const getNews = (lang: 'zh' | 'en') => newsData[lang];
export const getDesigners = (lang: 'zh' | 'en') => designersData[lang];
export const getConstructionTeam = (lang: 'zh' | 'en') => constructionData[lang];
export const getJobs = (lang: 'zh' | 'en') => jobsData[lang];
