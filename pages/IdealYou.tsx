import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getDesigners, getCases, getConstructionTeam } from '../data';
import { CaseCard, ParallaxImage, Reveal } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';

const IdealYou: React.FC = () => {
  // Default to Gallery (cases) based on implied requirement or keep previous default
  // Request says "Order: Gallery, Design Team, Construction Team"
  const [activeTab, setActiveTab] = useState<'cases' | 'designers' | 'construction'>('cases');
  const [filter, setFilter] = useState('All');
  const { language, t } = useLanguage();

  const designersData = getDesigners(language);
  const casesData = getCases(language);
  const constructionData = getConstructionTeam(language);

  const filterMap: Record<string, string> = {
      'All': t('idealyou.filter.all'),
      'Residential': t('idealyou.filter.residential'),
      'Commercial': t('idealyou.filter.commercial')
  };

  // Helper to match filter key with data category strings
  const getDataCategory = (key: string) => {
     if (language === 'zh') {
        if (key === 'Residential') return '住宅';
        if (key === 'Commercial') return '商业';
     }
     return key;
  };

  const filteredCases = filter === 'All' 
    ? casesData 
    : casesData.filter(c => c.category === getDataCategory(filter));

  return (
    <div className="pt-20">
      {/* Banner with Background Image */}
      <div className="h-[500px] bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
         <div className="absolute inset-0 opacity-60">
            <ParallaxImage src="https://picsum.photos/1920/800?random=idealyou_bg" alt="Ideal You Banner" className="w-full h-full" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto text-white">
           <Reveal width="100%">
             <h1 className="text-6xl font-serif font-bold mb-6">{t('nav.idealyou')}</h1>
             <p className="text-slate-200 max-w-3xl mx-auto text-xl font-light">{t('idealyou.banner.subtitle')}</p>
           </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex justify-center space-x-12 mb-16 border-b border-slate-200 pb-4">
           {/* Order: Gallery -> Design Team -> Construction Team */}
           <button 
             onClick={() => setActiveTab('cases')}
             className={`text-xl font-medium pb-4 border-b-2 transition-colors ${activeTab === 'cases' ? 'border-accent text-slate-900' : 'border-transparent text-slate-400'}`}
           >
             {t('idealyou.tab.gallery')}
           </button>
           <button 
             onClick={() => setActiveTab('designers')}
             className={`text-xl font-medium pb-4 border-b-2 transition-colors ${activeTab === 'designers' ? 'border-accent text-slate-900' : 'border-transparent text-slate-400'}`}
           >
             {t('idealyou.tab.designers')}
           </button>
           <button 
             onClick={() => setActiveTab('construction')}
             className={`text-xl font-medium pb-4 border-b-2 transition-colors ${activeTab === 'construction' ? 'border-accent text-slate-900' : 'border-transparent text-slate-400'}`}
           >
             {t('idealyou.tab.construction')}
           </button>
        </div>

        {activeTab === 'cases' && (
           <div>
              <div className="flex justify-center space-x-6 mb-12">
                 {['All', 'Residential', 'Commercial'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-6 py-2.5 text-base rounded-full border transition-colors ${filter === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}
                    >
                      {filterMap[cat]}
                    </button>
                 ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {filteredCases.map(c => <CaseCard key={c.id} {...c} />)}
              </div>
           </div>
        )}

        {activeTab === 'designers' && (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {designersData.map(d => (
                 <motion.div 
                    key={d.id} 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center group cursor-pointer"
                 >
                    <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow">
                       <img src={d.image} alt={d.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-accent transition-colors">{d.name}</h3>
                    <p className="text-accent text-base uppercase tracking-wider mt-2 font-medium">{d.role}</p>
                 </motion.div>
              ))}
           </div>
        )}

        {activeTab === 'construction' && (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {constructionData.map(c => (
                 <motion.div 
                    key={c.id} 
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-center group cursor-pointer"
                 >
                    <div className="w-full aspect-[3/4] overflow-hidden mb-6 relative shadow-md group-hover:shadow-xl transition-shadow">
                       <img src={c.image} alt={c.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-accent transition-colors">{c.name}</h3>
                    <p className="text-accent text-base uppercase tracking-wider mt-2 font-medium">{c.role}</p>
                 </motion.div>
              ))}
           </div>
        )}
      </div>
    </div>
  );
};

export default IdealYou;