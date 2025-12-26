import React, { useState } from 'react';
import { ProductCard, Reveal, StaggerItem } from '../components/UIComponents';
import { getProducts } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Plus } from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const { language, t } = useLanguage();
  const products = getProducts(language);

  const categoryMap = [
    { key: 'All', zh: '全部', en: 'All' },
    { key: 'Soft Furnishings', zh: '软装陈设', en: 'Soft Furnishings' },
    { key: 'Woodwork Custom', zh: '木作定制', en: 'Woodwork Custom' },
    { key: 'Artistic Coatings', zh: '艺术涂料', en: 'Artistic Coatings' },
    { key: 'Smart Lighting', zh: '智能灯光', en: 'Smart Lighting' },
  ];

  const filteredProducts = activeCategory === 'All'
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="h-[400px] bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
         <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-slate-800 to-slate-950" />
         <div className="relative z-10 max-w-4xl mx-auto text-white">
           <Reveal width="100%">
             <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6">产品系列</h1>
             <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light">{t('spacemagic.banner.subtitle')}</p>
           </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* 返回按钮 */}
        <div className="mb-12">
          <Link 
            to="/nexthome/space-magic"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>返回研发中心</span>
          </Link>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
           {categoryMap.map(catItem => {
              const isActive = activeCategory === catItem.key;
              const label = language === 'zh' ? catItem.zh : catItem.en;
              return (
                 <button
                    key={catItem.key}
                    onClick={() => setActiveCategory(catItem.key)}
                    className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm md:text-base font-medium
                       ${isActive 
                          ? 'bg-slate-900 text-white border-slate-900' 
                          : 'bg-white text-slate-600 border-slate-200 hover:border-accent hover:text-accent'}`}
                 >
                    {label}
                 </button>
              )
           })}
        </div>
        
        {/* Product Grid */}
        <motion.div 
          key={activeCategory}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.05
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[500px]"
        >
            {filteredProducts.length > 0 ? (
              <>
                {filteredProducts.map(p => (
                  <ProductCard key={p.id} {...p} />
                ))}
                {/* 更多产品卡片 */}
                <StaggerItem className="bg-white p-6 hover:shadow-2xl transition-all duration-300 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:-translate-y-2 h-full flex flex-col overflow-hidden group hover:border-accent">
                  <div className="h-[280px] mb-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-lg flex items-center justify-center p-8 relative">
                    <div className="flex flex-col items-center justify-center text-slate-400 group-hover:text-accent transition-colors">
                      <Plus size={64} className="mb-4" />
                      <span className="text-lg font-semibold">{language === 'zh' ? '更多产品' : 'More Products'}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 min-h-[3.5rem] flex items-center">
                    {language === 'zh' ? '查看更多产品' : 'View More Products'}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                    {language === 'zh' ? '探索更多精选产品，发现更多设计可能。' : 'Explore more curated products and discover more design possibilities.'}
                  </p>
                  <Link to="/contact" className="text-accent text-sm font-semibold flex items-center hover:text-accent/80 transition-colors mt-auto group/link">
                    {language === 'zh' ? '联系我们' : 'Contact Us'} <ArrowRight size={16} className="ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </StaggerItem>
              </>
            ) : (
              <div className="col-span-full text-center py-20 text-slate-400 text-lg">
                 {language === 'zh' ? '该分类下暂无产品。' : 'No products found in this category.'}
              </div>
            )}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;



