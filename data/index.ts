
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
      id: "xiangjiang-one", // 唯一ID (网址上会显示这个，不能重复，只能用英文)
      title: "湘江壹号·天际私宅",
      category: "住宅", // 分类: "住宅" 或 "商业"
      image: CONFIG_IMAGES.cases.xiangjiang_main, // 封面图
      description: "位于湘江之畔的顶级豪宅项目。设计团队打破传统界限，以现代极简语言重构空间秩序。全景落地窗将一线江景引入室内，黑白灰的主色调点缀暖色灯光，配合B&B Italia、Poliform等国际一线品牌家居，营造出静谧而极致奢华的居住氛围。空间流动性与私密性完美平衡，重新定义了当代精英的生活方式。",
      gallery: CONFIG_IMAGES.cases.xiangjiang_gallery // 详情页相册
    },
    {
      id: "c1",
      title: "天际奢华公馆",
      category: "住宅",
      image: CONFIG_IMAGES.cases.skyline,
      description: "俯瞰城市天际线的现代杰作。"
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "商业",
      image: CONFIG_IMAGES.cases.neptune,
      description: "位于印度孟买的NEPTUNE品牌展厅，集成了灯光与空气系统的现代化商业空间。"
    },
    {
      id: "c3",
      title: "禅意花园别墅",
      category: "住宅",
      image: CONFIG_IMAGES.cases.zen,
      description: "融合自然元素的宁静居所。"
    },
    {
      id: "c4",
      title: "未来科技办公室",
      category: "商业",
      image: CONFIG_IMAGES.cases.office,
      description: "激发创新的灵动办公空间。"
    }
  ],
  en: [
    {
      id: "xiangjiang-one",
      title: "Xiangjiang One Residence",
      category: "Residential", // Category: "Residential" or "Commercial"
      image: CONFIG_IMAGES.cases.xiangjiang_main,
      description: "A top-tier private residence located by the Xiangjiang River. The design team breaks away from traditional boundaries, reconstructing spatial order with modern minimalist language. Panoramic floor-to-ceiling windows introduce the river view, while the monochrome palette accented with warm lighting and premium furniture brands creates a serene and ultra-luxurious atmosphere.",
      gallery: CONFIG_IMAGES.cases.xiangjiang_gallery
    },
    {
      id: "c1",
      title: "Skyline Luxury Residence",
      category: "Residential",
      image: CONFIG_IMAGES.cases.skyline,
      description: "A modern masterpiece overlooking the city skyline."
    },
    {
      id: "c2",
      title: "NEPTUNE MUMBAI 2025",
      category: "Commercial",
      image: CONFIG_IMAGES.cases.neptune,
      description: "NEPTUNE brand showroom in Mumbai, India. A modern commercial space integrating lighting and air systems."
    },
    {
      id: "c3",
      title: "Zen Garden Villa",
      category: "Residential",
      image: CONFIG_IMAGES.cases.zen,
      description: "A serene retreat blending natural elements."
    },
    {
      id: "c4",
      title: "Future Tech Office",
      category: "Commercial",
      image: CONFIG_IMAGES.cases.office,
      description: "Dynamic workspace inspiring innovation."
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

  // --- Smart Systems (Equipment) ---
  {
    id: "smart-hvac",
    category: "Smart Systems",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    title: { zh: "全屋恒温恒湿系统", en: "Central Climate Control System" },
    description: { 
      zh: "集空调、地暖、新风于一体的智能环境控制系统，打造四季如春的居住体验。", 
      en: "Integrated HVAC, floor heating, and fresh air system for a perfect indoor climate year-round." 
    }
  },
  {
    id: "smart-elevator",
    category: "Smart Systems",
    image: "https://images.unsplash.com/photo-1541123437860-bb9699413ec0?q=80&w=800&auto=format&fit=crop",
    title: { zh: "家用静音电梯", en: "Silent Home Elevator" },
    description: { 
      zh: "无需底坑，自带井道，极致静音运行。定制化轿厢设计，完美融入别墅空间。", 
      en: "Pitless, self-contained shaft, whisper-quiet operation. Customized cabin design to blend into villa spaces." 
    }
  },
  {
    id: "smart-lighting",
    category: "Smart Systems",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop",
    title: { zh: "意大利进口岩板", en: "Italian Imported Sintered Stone" },
    description: { 
      zh: "1200x2400mm 大规格连纹。耐磨耐高温，还原天然大理石的奢华质感。", 
      en: "1200x2400mm large format continuous vein. Wear and heat resistant, replicating luxury marble texture." 
    }
  },
  {
    id: "std-floor",
    category: "Standard Materials",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop",
    title: { zh: "鱼骨拼实木地板", en: "Chevron Solid Wood Flooring" },
    description: { 
      zh: "精选北美白橡木，德国欧诗木木蜡油涂装。环保E0级，脚感温润。", 
      en: "Selected North American White Oak, finished with German Osmo wax oil. Eco-friendly E0 grade, warm foot feel." 
    }
  },
  {
    id: "std-bath",
    category: "Standard Materials",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop",
    title: { zh: "意式玻璃衣帽间", en: "Italian Glass Walk-in Closet" },
    description: { 
      zh: "铝框玻璃门搭配皮革背板。内置感应灯带系统，收纳与展示的完美平衡。", 
      en: "Aluminum frame glass doors with leather back panels. Built-in sensor lighting system, perfect balance of storage and display." 
    }
  },
  {
    id: "bespoke-wall",
    category: "Bespoke",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    title: { zh: "科技木皮护墙系统", en: "Tech Veneer Wall System" },
    description: { 
      zh: "同色系隐形门设计，金属线条收口。实现墙门柜一体化的极致视觉效果。", 
      en: "Same-color hidden door design with metal trim. Achieving the ultimate visual effect of integrated wall, door, and cabinet." 
    }
  },
  {
    id: "bespoke-kitchen",
    category: "Bespoke",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop",
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

export const designersData = {
  zh: [
    { id: "d1", name: "Alex Lin", role: "首席架构师", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
    { id: "d2", name: "Sarah Chen", role: "软装设计总监", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { id: "d3", name: "Mike Wang", role: "商业策划顾问", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  ],
  en: [
    { id: "d1", name: "Alex Lin", role: "Chief Architect", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop" },
    { id: "d2", name: "Sarah Chen", role: "Interior Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
    { id: "d3", name: "Mike Wang", role: "Commercial Consultant", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  ]
};

export const constructionData = {
  zh: [
    { id: "ct1", name: "工程一队", role: "商业空间精装", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
    { id: "ct2", name: "工程二队", role: "别墅大宅施工", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" },
    { id: "ct3", name: "技术支持组", role: "机电与智能系统", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" },
  ],
  en: [
    { id: "ct1", name: "Team One", role: "Commercial Fit-out", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop" },
    { id: "ct2", name: "Team Two", role: "Luxury Villa Build", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop" },
    { id: "ct3", name: "Tech Support", role: "MEP & Smart Systems", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" },
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
