
import { Case, Product, NewsItem, Stat, Designer, JobPosition } from '../types';

export const statsData = {
  zh: [
    { id: 1, label: "完成项目", value: "3500+" },
    { id: 2, label: "合作品牌", value: "200+" },
    { id: 3, label: "覆盖城市", value: "50+" },
    { id: 4, label: "签约设计师", value: "120+" },
  ],
  en: [
    { id: 1, label: "Completed Projects", value: "3500+" },
    { id: 2, label: "Brand Partners", value: "200+" },
    { id: 3, label: "Cities Covered", value: "50+" },
    { id: 4, label: "Signed Designers", value: "120+" },
  ]
};

export const casesData = {
  zh: [
    {
      id: "c1",
      title: "天际奢华公馆",
      category: "住宅",
      image: "https://picsum.photos/800/600?random=1",
      description: "俯瞰城市天际线的现代杰作。"
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "商业",
      image: "https://picsum.photos/800/600?random=neptune",
      description: "位于印度孟买的NEPTUNE品牌展厅，集成了灯光与空气系统的现代化商业空间。"
    },
    {
      id: "c3",
      title: "禅意花园别墅",
      category: "住宅",
      image: "https://picsum.photos/800/600?random=3",
      description: "融合自然元素的宁静居所。"
    },
    {
      id: "c4",
      title: "未来科技办公室",
      category: "商业",
      image: "https://picsum.photos/800/600?random=4",
      description: "激发创新的灵动办公空间。"
    }
  ],
  en: [
    {
      id: "c1",
      title: "Skyline Luxury Residence",
      category: "Residential",
      image: "https://picsum.photos/800/600?random=1",
      description: "A modern masterpiece overlooking the city skyline."
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "Commercial",
      image: "https://picsum.photos/800/600?random=neptune",
      description: "NEPTUNE brand showroom in Mumbai, India. A modern commercial space integrating lighting and air systems."
    },
    {
      id: "c3",
      title: "Zen Garden Villa",
      category: "Residential",
      image: "https://picsum.photos/800/600?random=3",
      description: "A serene retreat blending natural elements."
    },
    {
      id: "c4",
      title: "Future Tech Office",
      category: "Commercial",
      image: "https://picsum.photos/800/600?random=4",
      description: "Dynamic workspace inspiring innovation."
    }
  ]
};

// Consolidated Product Data Structure
// Categories: 'Smart Systems', 'Standard Materials', 'Bespoke', 'Soft Furnishings'
const productsData = [
  // --- Soft Furnishings (Furniture from PDF) ---
  {
    id: "sf-045-4",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf1",
    title: { zh: "香蕉船沙发 SF045-4", en: "Banana Boat Sofa SF045-4" },
    description: { 
      zh: "尺寸: 283*103*66。高密度回弹海绵+高级布艺软包，如同一艘停泊在港湾的舒适小船。", 
      en: "Size: 283*103*66. High-density rebound foam + premium fabric upholstery. Comfortable as a boat in a harbor." 
    }
  },
  {
    id: "lc-mama",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf2",
    title: { zh: "妈妈怀抱休闲椅", en: "Mama's Hug Lounge Chair" },
    description: { 
      zh: "尺寸: 110*102*91。软体定型棉+布艺。给予您如同母亲怀抱般的温暖与安全感。", 
      en: "Size: 110*102*91. Molded foam + fabric. Gives you warmth and security like a mother's embrace." 
    }
  },
  {
    id: "sf-052-1",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf3",
    title: { zh: "弧形组合沙发 SF052-1", en: "Curved Sectional Sofa SF052-1" },
    description: { 
      zh: "尺寸: 360*250*77。高密度高回弹海绵+高级布艺软包。流畅的线条设计，适合大平层空间。", 
      en: "Size: 360*250*77. High-density foam + premium fabric. Fluid lines designed for large flat spaces." 
    }
  },
  {
    id: "ct-098",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf4",
    title: { zh: "古木纹茶几 CT098", en: "Ancient Wood Grain Coffee Table CT098" },
    description: { 
      zh: "尺寸: 150*80*36。拉丝黄古铜+古木纹大理石。奢华材质的完美碰撞。", 
      en: "Size: 150*80*36. Brushed yellow bronze + ancient wood grain marble. A collision of luxury materials." 
    }
  },
  {
    id: "lc-126",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf5",
    title: { zh: "极简休闲椅 LC126", en: "Minimalist Lounge Chair LC126" },
    description: { 
      zh: "尺寸: 76*77*80。棉麻布+高密度海绵+实木内框架+白蜡木脚。经典与舒适的结合。", 
      en: "Size: 76*77*80. Cotton linen + high density foam + solid wood frame + ash wood legs." 
    }
  },
  {
    id: "sf-049",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf6",
    title: { zh: "舞者沙发 SF049", en: "Dancer Sofa SF049" },
    description: { 
      zh: "尺寸: 403*160*68。半包围式靠背线条优美雅致，如同舞者般亭亭玉立。", 
      en: "Size: 403*160*68. Semi-enclosed backrest with elegant lines, standing gracefully like a dancer." 
    }
  },
  {
    id: "b-020",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf7",
    title: { zh: "软包大床 B020", en: "Upholstered Bed B020" },
    description: { 
      zh: "尺寸: 235*210*89。不锈钢+进口落叶松+高级软包。为睡眠提供最坚实的支撑与最柔软的触感。", 
      en: "Size: 235*210*89. Stainless steel + imported larch + premium upholstery." 
    }
  },
  {
    id: "sc-029",
    category: "Soft Furnishings",
    image: "https://picsum.photos/800/600?random=sf8",
    title: { zh: "艺术高柜 SC029", en: "Art Cabinet SC029" },
    description: { 
      zh: "尺寸: 110*45*150。板做油漆+不锈钢。带有镜子的展示区，是空间中的艺术装置。", 
      en: "Size: 110*45*150. Painted board + stainless steel. Display area with mirror, an art installation in space." 
    }
  },

  // --- Smart Systems (Equipment) ---
  {
    id: "smart-hvac",
    category: "Smart Systems",
    image: "https://picsum.photos/800/600?random=eq1",
    title: { zh: "全屋恒温恒湿系统", en: "Central Climate Control System" },
    description: { 
      zh: "集空调、地暖、新风于一体的智能环境控制系统，打造四季如春的居住体验。", 
      en: "Integrated HVAC, floor heating, and fresh air system for a perfect indoor climate year-round." 
    }
  },
  {
    id: "smart-elevator",
    category: "Smart Systems",
    image: "https://picsum.photos/800/600?random=eq2",
    title: { zh: "家用静音电梯", en: "Silent Home Elevator" },
    description: { 
      zh: "无需底坑，自带井道，极致静音运行。定制化轿厢设计，完美融入别墅空间。", 
      en: "Pitless, self-contained shaft, whisper-quiet operation. Customized cabin design to blend into villa spaces." 
    }
  },
  {
    id: "smart-lighting",
    category: "Smart Systems",
    image: "https://picsum.photos/800/600?random=eq3",
    title: { zh: "智能调光系统", en: "Intelligent Dimming System" },
    description: { 
      zh: "DALI 2.0 协议，万级调光深度。根据人体节律自动调节色温与亮度。", 
      en: "DALI 2.0 protocol, 10,000-level dimming depth. Automatically adjusts color temp and brightness based on circadian rhythm." 
    }
  },

  // --- Standard Materials ---
  {
    id: "std-tile",
    category: "Standard Materials",
    image: "https://picsum.photos/800/600?random=mat1",
    title: { zh: "意大利进口岩板", en: "Italian Imported Sintered Stone" },
    description: { 
      zh: "1200x2400mm 大规格连纹。耐磨耐高温，还原天然大理石的奢华质感。", 
      en: "1200x2400mm large format continuous vein. Wear and heat resistant, replicating luxury marble texture." 
    }
  },
  {
    id: "std-floor",
    category: "Standard Materials",
    image: "https://picsum.photos/800/600?random=mat2",
    title: { zh: "鱼骨拼实木地板", en: "Chevron Solid Wood Flooring" },
    description: { 
      zh: "精选北美白橡木，德国欧诗木木蜡油涂装。环保E0级，脚感温润。", 
      en: "Selected North American White Oak, finished with German Osmo wax oil. Eco-friendly E0 grade, warm foot feel." 
    }
  },
  {
    id: "std-bath",
    category: "Standard Materials",
    image: "https://picsum.photos/800/600?random=mat3",
    title: { zh: "极简恒温花洒", en: "Minimalist Thermostatic Shower" },
    description: { 
      zh: "PVD枪灰色电镀，空气注入技术。精准控温，带来SPA级的沐浴享受。", 
      en: "PVD Gunmetal finish, air injection technology. Precise temperature control for a SPA-like shower experience." 
    }
  },

  // --- Bespoke (Custom) ---
  {
    id: "bespoke-closet",
    category: "Bespoke",
    image: "https://picsum.photos/800/600?random=cus1",
    title: { zh: "意式玻璃衣帽间", en: "Italian Glass Walk-in Closet" },
    description: { 
      zh: "铝框玻璃门搭配皮革背板。内置感应灯带系统，收纳与展示的完美平衡。", 
      en: "Aluminum frame glass doors with leather back panels. Built-in sensor lighting system, perfect balance of storage and display." 
    }
  },
  {
    id: "bespoke-wall",
    category: "Bespoke",
    image: "https://picsum.photos/800/600?random=cus2",
    title: { zh: "科技木皮护墙系统", en: "Tech Veneer Wall System" },
    description: { 
      zh: "同色系隐形门设计，金属线条收口。实现墙门柜一体化的极致视觉效果。", 
      en: "Same-color hidden door design with metal trim. Achieving the ultimate visual effect of integrated wall, door, and cabinet." 
    }
  },
  {
    id: "bespoke-kitchen",
    category: "Bespoke",
    image: "https://picsum.photos/800/600?random=cus3",
    title: { zh: "不锈钢整体厨房", en: "Stainless Steel Integrated Kitchen" },
    description: { 
      zh: "食品级304不锈钢台面，无缝焊接。耐用抗菌，工业风与现代美学的结合。", 
      en: "Food-grade 304 stainless steel countertop, seamless welding. Durable and antibacterial, combining industrial style with modern aesthetics." 
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

export const newsData = {
  zh: [
    {
      id: "n1",
      title: "NEXT+ 荣获2024国际空间设计大奖",
      date: "2024-03-15",
      summary: "凭借在商业空间领域的创新设计理念，NEXT+ 再次获得国际认可...",
      image: "https://picsum.photos/800/600?random=news1"
    },
    {
      id: "n2",
      title: "Space Magic 2.0 发布会回顾",
      date: "2024-02-28",
      summary: "重新定义模块化装修，让空间改造像搭积木一样简单高效...",
      image: "https://picsum.photos/800/600?random=news2"
    },
    {
      id: "n3",
      title: "2025 餐饮空间设计趋势报告",
      date: "2024-01-10",
      summary: "NEXT+ 联合行业专家发布最新趋势，探索Z世代的消费场景...",
      image: "https://picsum.photos/800/600?random=news3"
    }
  ],
  en: [
    {
      id: "n1",
      title: "NEXT+ Wins 2024 International Space Design Award",
      date: "2024-03-15",
      summary: "With innovative design concepts in commercial spaces, NEXT+ gains international recognition again...",
      image: "https://picsum.photos/800/600?random=news1"
    },
    {
      id: "n2",
      title: "Space Magic 2.0 Launch Recap",
      date: "2024-02-28",
      summary: "Redefining modular renovation, making space transformation as simple and efficient as building blocks...",
      image: "https://picsum.photos/800/600?random=news2"
    },
    {
      id: "n3",
      title: "2025 Dining Space Design Trends Report",
      date: "2024-01-10",
      summary: "NEXT+ jointly releases the latest trends with industry experts, exploring consumption scenarios for Gen Z...",
      image: "https://picsum.photos/800/600?random=news3"
    }
  ]
};

export const designersData = {
  zh: [
    { id: "d1", name: "Alex Lin", role: "首席架构师", image: "https://picsum.photos/400/500?random=d1" },
    { id: "d2", name: "Sarah Chen", role: "软装设计总监", image: "https://picsum.photos/400/500?random=d2" },
    { id: "d3", name: "Mike Wang", role: "商业策划顾问", image: "https://picsum.photos/400/500?random=d3" },
  ],
  en: [
    { id: "d1", name: "Alex Lin", role: "Chief Architect", image: "https://picsum.photos/400/500?random=d1" },
    { id: "d2", name: "Sarah Chen", role: "Interior Director", image: "https://picsum.photos/400/500?random=d2" },
    { id: "d3", name: "Mike Wang", role: "Commercial Consultant", image: "https://picsum.photos/400/500?random=d3" },
  ]
};

export const constructionData = {
  zh: [
    { id: "ct1", name: "工程一队", role: "商业空间精装", image: "https://picsum.photos/400/500?random=c1" },
    { id: "ct2", name: "工程二队", role: "别墅大宅施工", image: "https://picsum.photos/400/500?random=c2" },
    { id: "ct3", name: "技术支持组", role: "机电与智能系统", image: "https://picsum.photos/400/500?random=c3" },
  ],
  en: [
    { id: "ct1", name: "Team One", role: "Commercial Fit-out", image: "https://picsum.photos/400/500?random=c1" },
    { id: "ct2", name: "Team Two", role: "Luxury Villa Build", image: "https://picsum.photos/400/500?random=c2" },
    { id: "ct3", name: "Tech Support", role: "MEP & Smart Systems", image: "https://picsum.photos/400/500?random=c3" },
  ]
};

export const jobsData = {
  zh: [
    { id: "j1", title: "高级室内设计师", requirements: ["5年以上商业空间设计经验", "精通CAD/SketchUp/3DMax", "有独立带队完成项目经验"] },
    { id: "j2", title: "新媒体运营专员", requirements: ["熟悉小红书/抖音平台运营", "具备优秀的文案策划能力", "审美在线，会基础拍摄剪辑"] },
    { id: "j3", title: "工程项目经理", requirements: ["精通施工工艺与材料", "具备极强的现场协调能力", "适应短期出差"] },
  ],
  en: [
    { id: "j1", title: "Senior Interior Designer", requirements: ["5+ years in commercial space design", "Proficient in CAD/SketchUp/3DMax", "Experience leading projects independently"] },
    { id: "j2", title: "Social Media Specialist", requirements: ["Familiar with Red/TikTok operations", "Excellent copywriting skills", "Good aesthetics, basic shooting/editing"] },
    { id: "j3", title: "Project Manager", requirements: ["Expert in construction methods & materials", "Strong on-site coordination skills", "Adaptable to short-term travel"] },
  ]
};

export const getStats = (lang: 'zh' | 'en') => statsData[lang];
export const getCases = (lang: 'zh' | 'en') => casesData[lang];
export const getNews = (lang: 'zh' | 'en') => newsData[lang];
export const getDesigners = (lang: 'zh' | 'en') => designersData[lang];
export const getConstructionTeam = (lang: 'zh' | 'en') => constructionData[lang];
export const getJobs = (lang: 'zh' | 'en') => jobsData[lang];
