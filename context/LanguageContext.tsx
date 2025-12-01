import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于 NEXT+',
    'nav.nexthome': 'NEXT+ HOME',
    'nav.spacemagic': '百变空间',
    'nav.idealyou': '享你所想',
    'nav.cases': '空间案例',
    'nav.mealtime': 'NEXT+ MEALTIME',
    'nav.news': '新闻资讯',
    'nav.contact': '联系我们',
    'nav.joinus': '加入我们',

    // Footer
    'footer.desc': 'NEXT+ 能量盒子：拥有无限的活力与能量，潮流趋势的先驱，未来有着无限的可能。',
    'footer.quicklinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.newsletter': '订阅简报',
    'footer.subscribe': '订阅',
    'footer.rights': '保留所有权利。',

    // Common UI
    'ui.details': '查看详情',
    'ui.readMore': '阅读全文',
    'ui.viewAll': '查看全部',
    'ui.learnMore': '了解更多',
    'ui.submit': '提交',
    'ui.apply': '申请',
    'ui.startProject': '启动项目',
    'ui.bookAppt': '预约咨询',
    'ui.quote': '获取报价',
    'ui.loading': '加载中...',

    // Home
    'home.hero.title': '拥有无限的活力与能量',
    'home.hero.subtitle': '让每一平米更有温度',
    'home.hero.cta.nexthome': 'NEXT+ HOME',
    'home.hero.cta.mealtime': 'NEXT+ MEALTIME',
    'home.hero.cta.consult': '预约咨询',
    'home.cap.title': '综合实力',
    'home.cap.subtitle': 'NEXT+ 能量盒子',
    'home.cap.planning': '空间规划',
    'home.cap.planning.desc': '优化布局以实现最佳动线和功能。',
    'home.cap.visuals': '商业视觉',
    'home.cap.visuals.desc': '为品牌打造高影响力的美学呈现。',
    'home.cap.construction': '施工管理',
    'home.cap.construction.desc': '严格把控每一个现场的精准执行。',
    'home.cap.materials': '材料体系',
    'home.cap.materials.desc': '甄选优质饰面材料的独特组合。',
    
    'home.magic.title': '百变空间',
    'home.magic.subtitle': 'NEXT+ HOME',
    'home.magic.desc': 'NEXT+ HOME 是一个集合型品牌。在品牌发展中，我们设计吃、住、娱乐等多重领域。通过“不动装修大变样”的理念，利用模块化系统实现快速交付与美学升级。',
    'home.magic.cta': '探索空间魔法',

    'home.idealyou.title': '享你所想',
    'home.idealyou.subtitle': 'NEXT+ HOME',
    'home.idealyou.desc': 'Ideal You 专注于打造独特的小众经典空间。我们深入挖掘商业潜能与个人情怀，通过高度定制化的设计语言，将您的愿景转化为触动人心的现实场景，为您呈现独一无二的空间体验。',
    'home.idealyou.cta': '探索定制服务',

    'home.cases.title': '精选案例',
    'home.cases.subtitle': '享你所想',
    'home.cases.viewall': '查看所有案例',
    'home.mealtime.title': 'NEXT+ MEALTIME 食间',
    'home.mealtime.desc': '不仅仅是享用美食的地方，更是人与人交流、分享美好时刻的场所。',
    'home.mealtime.cta': '探索生活方式',
    'home.news.title': '最新资讯',
    'home.news.viewall': '查看所有资讯',

    // About
    'about.banner.title': '关于 NEXT+',
    'about.banner.subtitle': 'ENERGY BOX 能量盒子',
    'about.mission.title': '品牌愿景',
    'about.mission.desc': 'NEXT+ 品牌是一个集合型品牌。致力于突破大环境现状，打造一个针对当下有着独特商业品质情怀追求的视觉美学、策略计划、商业定位、空间设计、咨询管理的品牌公司。我们是“更懂年轻人的品牌”。',
    'about.eco.title': 'NEXT+ 商业生态',
    'about.eco.nexthome': 'NEXT+ HOME\n居住与商业空间',
    'about.eco.core': 'NEXT+\n能量盒子',
    'about.eco.mealtime': 'NEXT+ MEALTIME\n餐饮与生活方式',
    'about.eco.rd': '产品研发',
    'about.eco.mfg': '品牌策划',
    'about.eco.supply': '材料供应',
    'about.eco.alliance': '运营管理',

    // NextHome
    'nexthome.banner.title': 'NEXT+ HOME',
    'nexthome.banner.subtitle': '空间设计 · 灯光设计 · 软装陈列 · 装潢施工 · 全屋定制',
    'nexthome.services.title': '核心服务',
    'nexthome.services.subtitle': '一站式解决方案',
    'nexthome.service.consult': '品牌商业咨询',
    'nexthome.service.consult.desc': '策略计划、自营招商、活动主办与品牌塑造模式。',
    'nexthome.service.design': '空间设计',
    'nexthome.service.design.desc': '空间规划、动线设计、灯光设计与艺术装置。',
    'nexthome.service.construct': '施工管理',
    'nexthome.service.construct.desc': '短平快、高质量、高效率的扁平化管理施工。',
    'nexthome.sm.title': 'Space Magic',
    'nexthome.sm.desc': '不动装修大变样：新模式、大设计、快交付。',
    'nexthome.iy.title': 'Ideal You',
    'nexthome.iy.desc': '享你所想：小众经典，聚焦产品化标准设计。',
    'nexthome.flow.title': '服务流程',
    'nexthome.flow.consult': '咨询',
    'nexthome.flow.measure': '测量',
    'nexthome.flow.design': '设计',
    'nexthome.flow.budget': '预算材料',
    'nexthome.flow.construct': '施工',
    'nexthome.flow.decor': '软装',
    'nexthome.flow.deliver': '交付售后',

    // Space Magic
    'spacemagic.banner.subtitle': '百变空间，新模式、大设计、快交付',
    'spacemagic.tab.rd': '研发中心',
    'spacemagic.tab.products': '产品系列',
    'spacemagic.rd.title': '新模式研发中心',
    'spacemagic.rd.desc': '我们不仅仅提供设计，更提供产品。从“物-产品功能”、“美-美学先驱”、“价-价值价格”、“廉-增值服务”四个维度，打造极致的空间产品。',
    'spacemagic.rd.mat': '材料供应',
    'spacemagic.rd.mat.desc': '建筑材料、食品材料、本地采购。',
    'spacemagic.rd.struct': '产品研发',
    'spacemagic.rd.struct.desc': '设计产品、合成产品、微创产品、创新产品。',
    'spacemagic.rd.smart': '运营管理',
    'spacemagic.rd.smart.desc': '内容建设、薪酬制度、晋升通道、导流投放。',
    'spacemagic.detail.specs': '技术规格',
    'spacemagic.detail.quote': '获取报价',

    // Ideal You
    'idealyou.banner.subtitle': '小众经典，聚焦功能美学设计',
    'idealyou.tab.designers': '设计团队',
    'idealyou.tab.gallery': '灵感图库',
    'idealyou.tab.construction': '施工团队',
    'idealyou.filter.all': '全部',
    'idealyou.filter.residential': '住宅',
    'idealyou.filter.commercial': '商业',

    // Cases
    'cases.title': '精选案例',
    'cases.subtitle': '覆盖全国50+城市，每年服务50+商业品牌。',
    'cases.overview': '项目概览',
    'cases.notFound': '项目未找到',

    // MealTime (Updated based on PDF)
    'mealtime.hero.title': 'NEXT+ MEALTIME 食间',
    'mealtime.hero.subtitle': 'New Way of Life',
    'mealtime.hero.desc': 'NEXT+ MEALTIME 是 NEXT+ 旗下的餐饮集合体。其核心概念是将“美食 + 时间 + 聚会空间”完美融合。',
    'mealtime.intro.title': 'Collection Discover',
    'mealtime.intro.desc': 'NEXT+ MEALTIME 食间坚信，餐厅不仅是享用美食的地方，更是人与人交流、分享美好时刻的场所。我们打造“更懂年轻人的品牌”。',
    'mealtime.coffee.title': 'NEXT+ COFFEE',
    'mealtime.coffee.desc': '咖啡不仅是一种饮品，更是一种生活方式。精选优质咖啡豆，以精湛的烘焙工艺，带来口感醇厚、香气四溢的咖啡体验。',
    'mealtime.dining.title': 'NEXT+ DINING',
    'mealtime.dining.desc': '从“肉店”到“汤饮”，我们注重单一品类的极致打磨。打造社区窗口小店与复合集成店。',
    'mealtime.lifestyle.title': 'Life Style',
    'mealtime.lifestyle.desc': '拥有无限的活力与能量。潮流趋势的先驱，未来有着无限的可能。',
    'mealtime.model.rd': '集成研发中心',
    'mealtime.model.rd.desc': '客户黏性、活动发起地、接待及培训中心、品牌运营中心。',
    'mealtime.model.rd.action': '菜品投稿',
    'mealtime.model.store': '极致单品小店',
    'mealtime.model.store.desc': '单品开发、单点模型、社区窗口小店、招商加盟匹配。',
    'mealtime.model.store.action': '选品加盟',
    'mealtime.cta.title': '准备好加入潮流了吗？',
    'mealtime.cta.desc': '无论您是投资者、空间业主，还是寻找加盟机会，NEXT+ MEALTIME 都为您提供无限可能。',

    // News
    'news.title': '新闻与动态',
    'news.read': '阅读文章',
    
    // Contact
    'contact.title': '取得联系',
    'contact.subtitle': '联系我们',
    'contact.desc': '准备好开始您的下一个项目了吗？无论是商业品牌投资、空间设计还是餐饮加盟，我们期待与您共筑未来。',
    'contact.hq': '总部地址',
    'contact.phone': '电话',
    'contact.email': '邮箱',
    'contact.form.title': '发送消息',
    'contact.form.name': '姓名',
    'contact.form.phone': '电话',
    'contact.form.email': '邮箱',
    'contact.form.req': '需求描述',
    'contact.form.att': '附件',
    'contact.form.submit': '提交留言',
    'contact.address.1': '长沙市芙蓉区韭菜园路058号',
    'contact.address.2': '湖南省长沙市岳麓区枫林路40号',
    'contact.phone.value': '0731-82244254',
    'contact.follow': '关注官方公众号',

    // Join Us
    'join.title': '加入我们',
    'join.subtitle': '成为 NEXT+ 的一员，共创未来。',
    'join.contact.name': '匡先生',
    'join.contact.phone': '电话',
    'join.contact.phone.val': '186-7373-1199',
    'join.contact.address': '地址',
    'join.contact.address.val': '长沙市芙蓉区韭菜园路058号',

    // Chat
    'chat.title': 'NEXT+ 智能助手',
    'chat.welcome': '您好！我是 NEXT+ 能量盒子智能助手。关于我们的空间设计、餐饮加盟或品牌策划，有什么可以帮您的吗？',
    'chat.placeholder': '请输入您的问题...',
    'chat.send': '发送',
    'chat.error': '抱歉，连接出现问题，请稍后再试。',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About NEXT+',
    'nav.nexthome': 'NEXT+ HOME',
    'nav.spacemagic': 'Space Magic',
    'nav.idealyou': 'Ideal You',
    'nav.cases': 'Cases',
    'nav.mealtime': 'NEXT+ MEALTIME',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.joinus': 'Join Us',

    // Footer
    'footer.desc': 'NEXT+ Energy Box: With unlimited vitality and energy, the pioneer of trends, the future has unlimited possibilities.',
    'footer.quicklinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',

    // Common UI
    'ui.details': 'Details',
    'ui.readMore': 'Read More',
    'ui.viewAll': 'View All',
    'ui.learnMore': 'Learn More',
    'ui.submit': 'Submit',
    'ui.apply': 'Apply',
    'ui.startProject': 'Start Project',
    'ui.bookAppt': 'Book Appointment',
    'ui.quote': 'Request Quote',
    'ui.loading': 'Loading...',

    // Home
    'home.hero.title': 'Unlimited Vitality & Energy',
    'home.hero.subtitle': 'Making Every Square Meter Warmer',
    'home.hero.cta.nexthome': 'NEXT+ HOME',
    'home.hero.cta.mealtime': 'NEXT+ MEALTIME',
    'home.hero.cta.consult': 'Book Consultation',
    'home.cap.title': 'Capabilities',
    'home.cap.subtitle': 'NEXT+ Energy Box',
    'home.cap.planning': 'Spatial Planning',
    'home.cap.planning.desc': 'Optimized layouts for flow and function.',
    'home.cap.visuals': 'Commercial Visuals',
    'home.cap.visuals.desc': 'High-impact aesthetics for brands.',
    'home.cap.construction': 'Construction Mgmt',
    'home.cap.construction.desc': 'Precision execution on every site.',
    'home.cap.materials': 'Material Systems',
    'home.cap.materials.desc': 'Curated palette of premium finishes.',
    
    'home.magic.title': 'Space Magic',
    'home.magic.subtitle': 'NEXT+ HOME',
    'home.magic.desc': 'NEXT+ HOME is a collective brand. We design across multiple fields such as eating, living, and entertainment. Our "Space Magic" concept uses modular systems for rapid delivery and aesthetic upgrades without heavy construction.',
    'home.magic.cta': 'Discover Magic',

    'home.idealyou.title': 'Ideal You',
    'home.idealyou.subtitle': 'NEXT+ HOME',
    'home.idealyou.desc': 'Ideal You focuses on creating unique niche classic spaces. By delving into commercial potential and personal sentiment, we translate your vision into reality through highly customized design, offering a truly unique spatial experience.',
    'home.idealyou.cta': 'Explore Ideal You',

    'home.cases.title': 'Selected Works',
    'home.cases.subtitle': 'Ideal You',
    'home.cases.viewall': 'View All Projects',
    'home.mealtime.title': 'NEXT+ MEALTIME',
    'home.mealtime.desc': 'Not just a place to eat, but a place for people to communicate and share beautiful moments.',
    'home.mealtime.cta': 'Explore Lifestyle',
    'home.news.title': 'Latest News',
    'home.news.viewall': 'View All News',

    // About
    'about.banner.title': 'About NEXT+',
    'about.banner.subtitle': 'Energy Box',
    'about.mission.title': 'Brand Vision',
    'about.mission.desc': 'NEXT+ Brand is a collective brand. Dedicated to breaking through the status quo, we create a brand company focusing on visual aesthetics, strategic planning, commercial positioning, and spatial design tailored for the unique commercial sentiments of today. We are "The Brand That Understands Youth Better".',
    'about.eco.title': 'NEXT+ Ecosystem',
    'about.eco.nexthome': 'NEXT+ HOME\nLiving & Commercial',
    'about.eco.core': 'NEXT+\nEnergy Box',
    'about.eco.mealtime': 'NEXT+ MEALTIME\nDining & Lifestyle',
    'about.eco.rd': 'R&D',
    'about.eco.mfg': 'Planning',
    'about.eco.supply': 'Supply Chain',
    'about.eco.alliance': 'Operations',

    // NextHome
    'nexthome.banner.title': 'NEXT+ HOME',
    'nexthome.banner.subtitle': 'Spatial Design · Lighting Design · Soft Decoration · Construction · Whole House Customization',
    'nexthome.services.title': 'Core Services',
    'nexthome.services.subtitle': 'One-Stop Solution',
    'nexthome.service.consult': 'Brand Consulting',
    'nexthome.service.consult.desc': 'Strategic planning, self-operated investment promotion, event hosting, and brand shaping models.',
    'nexthome.service.design': 'Spatial Design',
    'nexthome.service.design.desc': 'Spatial planning, circulation design, lighting design, and art installations.',
    'nexthome.service.construct': 'Construction Mgmt',
    'nexthome.service.construct.desc': 'Short, flat, fast, high-quality, and high-efficiency flat management construction.',
    'nexthome.sm.title': 'Space Magic',
    'nexthome.sm.desc': 'Big Change without Renovation: New Model, Big Design, Fast Delivery.',
    'nexthome.iy.title': 'Ideal You',
    'nexthome.iy.desc': 'What You Want: Niche classics, focusing on productized standard design.',
    'nexthome.flow.title': 'Service Workflow',
    'nexthome.flow.consult': 'Consult',
    'nexthome.flow.measure': 'Measure',
    'nexthome.flow.design': 'Design',
    'nexthome.flow.budget': 'Budget/Mat.',
    'nexthome.flow.construct': 'Build',
    'nexthome.flow.decor': 'Soft Decor',
    'nexthome.flow.deliver': 'Delivery/After-sales',

    // Space Magic
    'spacemagic.banner.subtitle': 'Space Magic: New Model, Big Design, Fast Delivery',
    'spacemagic.tab.rd': 'R&D Center',
    'spacemagic.tab.products': 'Products',
    'spacemagic.rd.title': 'New Model R&D',
    'spacemagic.rd.desc': 'We don\'t just provide design; we provide products. From "Functionality", "Aesthetics", "Value", and "Service", we create the ultimate spatial products.',
    'spacemagic.rd.mat': 'Material Supply',
    'spacemagic.rd.mat.desc': 'Building materials, food ingredients, local procurement.',
    'spacemagic.rd.struct': 'Product R&D',
    'spacemagic.rd.struct.desc': 'Design products, synthetic products, minimally invasive products, innovative products.',
    'spacemagic.rd.smart': 'Ops Management',
    'spacemagic.rd.smart.desc': 'Content construction, compensation systems, promotion channels, traffic delivery.',
    'spacemagic.detail.specs': 'Technical Specs',
    'spacemagic.detail.quote': 'Request Quote',

    // Ideal You
    'idealyou.banner.subtitle': 'Creating spaces with unique commercial quality and sentiment.',
    'idealyou.tab.designers': 'Design Team',
    'idealyou.tab.gallery': 'Gallery',
    'idealyou.tab.construction': 'Construction Team',
    'idealyou.filter.all': 'All',
    'idealyou.filter.residential': 'Home',
    'idealyou.filter.commercial': 'Commercial',

    // Cases
    'cases.title': 'Selected Works',
    'cases.subtitle': 'Covering 50+ cities nationwide, serving 50+ commercial brands annually.',
    'cases.overview': 'Project Overview',
    'cases.notFound': 'Project not found',

    // MealTime
    'mealtime.hero.title': 'NEXT+ MEALTIME',
    'mealtime.hero.subtitle': 'New Way of Life',
    'mealtime.hero.desc': 'NEXT+ MEALTIME is a catering collection under NEXT+. Its core concept is the perfect fusion of "Food + Time + Gathering Space".',
    'mealtime.intro.title': 'Collection Discover',
    'mealtime.intro.desc': 'NEXT+ MEALTIME believes that a restaurant is not just a place to enjoy food, but a place for people to communicate and share beautiful moments. We are "The Brand That Understands Youth".',
    'mealtime.coffee.title': 'NEXT+ COFFEE',
    'mealtime.coffee.desc': 'Coffee is not just a drink, it\'s a lifestyle. Selected premium beans and exquisite roasting craftsmanship.',
    'mealtime.dining.title': 'NEXT+ DINING',
    'mealtime.dining.desc': 'From "Meats" to "Soups", we focus on polishing single categories. Creating community window shops and complex integrated stores.',
    'mealtime.lifestyle.title': 'Life Style',
    'mealtime.lifestyle.desc': 'Unlimited vitality and energy. The pioneer of trends, the future has unlimited possibilities.',
    'mealtime.model.rd': 'Integrated R&D Center',
    'mealtime.model.rd.desc': 'Customer stickiness, event hub, training center, brand operations.',
    'mealtime.model.rd.action': 'Dish Submission',
    'mealtime.model.store': 'Ultimate Niche Store',
    'mealtime.model.store.desc': 'Single item development, community window shops, franchise matching.',
    'mealtime.model.store.action': 'Selection & Franchise',
    'mealtime.cta.title': 'Ready to Join the Trend?',
    'mealtime.cta.desc': 'Whether you are an investor, a space owner, or looking for a franchise opportunity, NEXT+ MEALTIME offers unlimited possibilities.',

    // News
    'news.title': 'News & Insights',
    'news.read': 'Read Article',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Contact Us',
    'contact.desc': 'Ready to start? Whether it\'s brand investment, spatial design, or catering franchise, we look forward to building the future with you.',
    'contact.hq': 'Headquarters',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Name',
    'contact.form.phone': 'Phone',
    'contact.form.email': 'Email',
    'contact.form.req': 'Requirement',
    'contact.form.att': 'Attachment',
    'contact.form.submit': 'Submit Message',
    'contact.address.1': 'No. 058 Jiucaiyuan Road, Furong District, Changsha',
    'contact.address.2': 'No. 40 Fenglin Road, Yuelu District, Changsha',
    'contact.phone.value': '0731-82244254',
    'contact.follow': 'Follow Official Account',

    // Join Us
    'join.title': 'Join Us',
    'join.subtitle': 'Become a part of NEXT+ and build the future.',
    'join.contact.name': 'Mr. Kuang',
    'join.contact.phone': 'Tel',
    'join.contact.phone.val': '186-7373-1199',
    'join.contact.address': 'Add',
    'join.contact.address.val': 'No. 058, Jiucaiyuan Road, Furong District, Changsha',

    // Chat
    'chat.title': 'NEXT+ AI Assistant',
    'chat.welcome': 'Hello! I am the NEXT+ Energy Box AI. How can I assist you with spatial design, catering franchise, or brand planning today?',
    'chat.placeholder': 'Type your message...',
    'chat.send': 'Send',
    'chat.error': 'Sorry, I encountered an issue. Please try again later.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  const t = (key: string) => {
    // @ts-ignore
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};