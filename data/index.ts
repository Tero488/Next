
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
      category: "住宅",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/xiangjiang-one/cover.jpg",
      description: "位于湘江之畔的顶级豪宅项目。设计团队打破传统界限，以现代极简语言重构空间秩序。全景落地窗将一线江景引入室内，黑白灰的主色调点缀暖色灯光，配合B&B Italia、Poliform等国际一线品牌家居，营造出静谧而极致奢华的居住氛围。空间流动性与私密性完美平衡，重新定义了当代精英的生活方式。",
      gallery: Array.from({ length: 24 }, (_, i) => `/images/cases/gallery/xiangjiang-one/xiangjiang-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "商业",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/neptune-mumbai-2025-cover.png",
      description: "位于印度孟买的NEPTUNE品牌展厅，集成灯光与空气系统的现代商业空间，以沉浸式体验诠释品牌未来感。",
      gallery: Array.from({ length: 21 }, (_, i) => `/images/cases/gallery/neptune-mumbai-2025-${String(i + 1).padStart(2, '0')}.png`)
    },
    {
      id: "jiangshan-one",
      title: "江山一号",
      category: "住宅",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/jiangshan-one/cover.jpg",
      description: "项目位于江景核心地段，高区俯瞰城市与江岸全景。空间以克制的留白与大面积石材、木饰面为主线，弱化风格标签，强调尺度与光的变化。客餐厅、旋梯与通高落地窗形成开放的生活场景，搭配艺术装置与定制家具，让居住者在日常起居中感受城市天际线的张力与秩序。",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/jiangshan-one/jiangshan-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-shuilantian-9",
      title: "碧桂园水蓝天9号栋",
      category: "住宅",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/bgy-shuilantian-9/cover.jpg",
      description: "位于岳麓核心区的湖景大宅，以现代东方的线条与材质诠释宁静、轻奢的生活质感。",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/bgy-shuilantian-9/bgy-shuilantian-9-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "beichen-hanjiangfu",
      title: "北辰翰江府",
      category: "住宅",
      type: "idealyou", // 享你所想-空间案例
      image: "/images/cases/beichen-hanjiangfu/cover.jpg",
      description: "位于长沙核心地段的现代精品住宅，以简约线条与高级材质诠释都市生活美学，打造低调而精致的居住体验。",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/gallery/beichen-hanjiangfu/beichen-hanjiangfu-${String(i + 1).padStart(2, '0')}.jpg`)
    }
  ],
  en: [
    {
      id: "xiangjiang-one",
      title: "Xiangjiang One Residence",
      category: "Residential",
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
      category: "Residential",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/jiangshan-one/cover.jpg",
      description: "Located on a prime riverfront site, Jiangshan One commands a full panorama of the city skyline and Xiangjiang River. The design deliberately downplays overt styling, using calm stone and timber surfaces, generous negative space and a sculptural stair to organize the home. Panoramic glazing, open living–dining areas and curated art pieces together create a serene yet powerful stage for contemporary urban life.",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/jiangshan-one/jiangshan-one-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "bgy-shuilantian-9",
      title: "Country Garden Azure Sky Tower 9",
      category: "Residential",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/bgy-shuilantian-9/cover.jpg",
      description: "A lakefront residence in Changsha where calm modern lines blend with refined oriental materials for a serene luxury lifestyle.",
      gallery: Array.from({ length: 7 }, (_, i) => `/images/cases/gallery/bgy-shuilantian-9/bgy-shuilantian-9-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    {
      id: "beichen-hanjiangfu",
      title: "Beichen Hanjiangfu",
      category: "Residential",
      type: "idealyou", // Ideal You - Spatial Cases
      image: "/images/cases/beichen-hanjiangfu/cover.jpg",
      description: "A modern boutique residence in Changsha's core district, interpreting urban living aesthetics with minimalist lines and premium materials.",
      gallery: Array.from({ length: 4 }, (_, i) => `/images/cases/gallery/beichen-hanjiangfu/beichen-hanjiangfu-${String(i + 1).padStart(2, '0')}.jpg`)
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
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    title: { zh: "香蕉船沙发 SF045-4", en: "Banana Boat Sofa SF045-4" },
    description: { 
      zh: "尺寸: 283*103*66。高密度回弹海绵+高级布艺软包，如同一艘停泊在港湾的舒适小船。", 
      en: "Size: 283*103*66. High-density rebound foam + premium fabric upholstery. Comfortable as a boat in a harbor." 
    }
  },
  {
    id: "lc-mama",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
    title: { zh: "妈妈怀抱休闲椅", en: "Mama's Hug Lounge Chair" },
    description: { 
      zh: "尺寸: 110*102*91。软体定型棉+布艺。给予您如同母亲怀抱般的温暖与安全感。", 
      en: "Size: 110*102*91. Molded foam + fabric. Gives you warmth and security like a mother's embrace." 
    }
  },
  {
    id: "sf-052-1",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
    title: { zh: "弧形组合沙发 SF052-1", en: "Curved Sectional Sofa SF052-1" },
    description: { 
      zh: "尺寸: 360*250*77。高密度高回弹海绵+高级布艺软包。流畅的线条设计，适合大平层空间。", 
      en: "Size: 360*250*77. High-density foam + premium fabric. Fluid lines designed for large flat spaces." 
    }
  },
  {
    id: "ct-098",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=800&auto=format&fit=crop",
    title: { zh: "古木纹茶几 CT098", en: "Ancient Wood Grain Coffee Table CT098" },
    description: { 
      zh: "尺寸: 150*80*36。拉丝黄古铜+古木纹大理石。奢华材质的完美碰撞。", 
      en: "Size: 150*80*36. Brushed yellow bronze + ancient wood grain marble. A collision of luxury materials." 
    }
  },
  {
    id: "lc-126",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800&auto=format&fit=crop",
    title: { zh: "极简休闲椅 LC126", en: "Minimalist Lounge Chair LC126" },
    description: { 
      zh: "尺寸: 76*77*80。棉麻布+高密度海绵+实木内框架+白蜡木脚。经典与舒适的结合。", 
      en: "Size: 76*77*80. Cotton linen + high density foam + solid wood frame + ash wood legs." 
    }
  },
  {
    id: "sf-049",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop",
    title: { zh: "舞者沙发 SF049", en: "Dancer Sofa SF049" },
    description: { 
      zh: "尺寸: 403*160*68。半包围式靠背线条优美雅致，如同舞者般亭亭玉立。", 
      en: "Size: 403*160*68. Semi-enclosed backrest with elegant lines, standing gracefully like a dancer." 
    }
  },
  {
    id: "b-020",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    title: { zh: "软包大床 B020", en: "Upholstered Bed B020" },
    description: { 
      zh: "尺寸: 235*210*89。不锈钢+进口落叶松+高级软包。为睡眠提供最坚实的支撑与最柔软的触感。", 
      en: "Size: 235*210*89. Stainless steel + imported larch + premium upholstery." 
    }
  },
  {
    id: "sc-029",
    category: "Soft Furnishings",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    title: { zh: "艺术高柜 SC029", en: "Art Cabinet SC029" },
    description: { 
      zh: "尺寸: 110*45*150。板做油漆+不锈钢。带有镜子的展示区，是空间中的艺术装置。", 
      en: "Size: 110*45*150. Painted board + stainless steel. Display area with mirror, an art installation in space." 
    }
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
    id: "coating-01",
    category: "Artistic Coatings",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop",
    title: { zh: "微水泥艺术涂料", en: "Microcement Artistic Coating" },
    description: { 
      zh: "意大利进口微水泥系统，极简无缝质感。防水防霉，可应用于墙面、地面与家具表面。", 
      en: "Italian imported microcement system, minimalist seamless texture. Waterproof and mold-resistant, applicable to walls, floors and furniture." 
    }
  },
  {
    id: "coating-02",
    category: "Artistic Coatings",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
    title: { zh: "肌理漆立体涂装", en: "Textured Paint 3D Coating" },
    description: { 
      zh: "手工批刮工艺，打造独特肌理效果。环保零VOC配方，呈现丰富的光影层次与触感。", 
      en: "Hand-applied technique creating unique textured effects. Eco-friendly zero-VOC formula with rich light and tactile depth." 
    }
  },
  {
    id: "coating-03",
    category: "Artistic Coatings",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
    title: { zh: "艺术硅藻泥涂料", en: "Artistic Diatomaceous Earth Coating" },
    description: { 
      zh: "天然硅藻土基底，调节室内湿度与净化空气。可塑性强，呈现哑光自然质感。", 
      en: "Natural diatomaceous earth base, regulates humidity and purifies air. Highly moldable with matte natural texture." 
    }
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
    description: p.description[lang]
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
