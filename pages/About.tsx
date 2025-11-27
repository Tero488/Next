import React from 'react';
import { SectionTitle } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="h-[500px] relative bg-slate-900 flex items-center justify-center">
        <img 
           src="https://picsum.photos/1920/800?random=100" 
           className="absolute inset-0 w-full h-full object-cover opacity-50" 
           alt="About Banner" 
        />
        <div className="relative z-10 text-center text-white">
           <h1 className="text-6xl font-serif font-bold mb-6">{t('about.banner.title')}</h1>
           <p className="text-2xl max-w-3xl mx-auto">{t('about.banner.subtitle')}</p>
        </div>
      </div>

      {/* Brand Story */}
      <section className="py-24 max-w-5xl mx-auto px-4 text-center">
         <h2 className="text-4xl font-serif font-bold mb-10 text-slate-900">{t('about.mission.title')}</h2>
         <p className="text-xl text-slate-600 leading-loose">
           {t('about.mission.desc')}
         </p>
      </section>

      {/* Ecology Diagram Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <SectionTitle title={t('about.eco.title')} centered />
           <div className="w-full aspect-video bg-white shadow-lg border border-slate-100 flex items-center justify-center rounded-lg p-12">
              {/* Simple CSS Visual for Diagram */}
              <div className="relative w-full max-w-4xl">
                 <div className="flex justify-center space-x-10 mb-10">
                    <div className="p-8 bg-slate-900 text-white rounded w-1/3 whitespace-pre-line text-lg leading-relaxed">{t('about.eco.nexthome')}</div>
                    <div className="p-8 bg-accent text-white rounded w-1/3 whitespace-pre-line text-lg leading-relaxed">{t('about.eco.core')}</div>
                    <div className="p-8 bg-slate-900 text-white rounded w-1/3 whitespace-pre-line text-lg leading-relaxed">{t('about.eco.mealtime')}</div>
                 </div>
                 <div className="border-t-2 border-slate-300 pt-10 flex justify-between text-slate-500 text-base md:text-lg font-medium">
                    <span>{t('about.eco.rd')}</span>
                    <span>{t('about.eco.mfg')}</span>
                    <span>{t('about.eco.supply')}</span>
                    <span>{t('about.eco.alliance')}</span>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;