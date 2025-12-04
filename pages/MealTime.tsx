import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button, SectionTitle, Reveal, StaggerContainer, StaggerItem } from '../components/UIComponents';
import { Coffee, Utensils, Zap, Store, Layers, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Reusing the stylized plus component locally for the big hero version
const StylizedPlusHero: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vertical Part: Standard Geometric Rectangle */}
    <rect x="34" y="0" width="32" height="100" rx="2" fill="#84cc16"/>
    {/* Horizontal Bar */}
    <rect x="0" y="34" width="100" height="32" rx="2" fill="#ffffff"/> 
  </svg>
);

const FeatureSection: React.FC<{ 
  number: string; 
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  tag: string; 
  image: string; 
  align: 'left' | 'right'; 
  dark?: boolean;
  accentColor?: boolean;
  to?: string;
}> = ({ number, icon, title, desc, tag, image, align, dark, accentColor, to }) => {
  
  const textContent = (
    <motion.div 
      initial={{ opacity: 0, x: align === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} p-12 lg:p-24 flex flex-col justify-center h-full relative overflow-hidden group`}
    >
       {/* Decorative Background Number */}
       <span className={`absolute top-0 ${align === 'left' ? 'right-0' : 'left-0'} text-[12rem] md:text-[18rem] font-bold leading-none opacity-5 select-none pointer-events-none ${dark ? 'text-white' : 'text-slate-900'}`}>
         {number}
       </span>

       <div className="relative z-10">
        <div className="flex items-center gap-5 mb-8">
          <span className={`text-6xl font-serif font-bold ${dark ? 'text-slate-600' : 'text-slate-300'}`}>{number}</span>
          <div className={`p-4 rounded-full ${accentColor ? 'bg-accent/20 text-accent' : dark ? 'bg-white/10 text-white' : 'bg-slate-200 text-slate-900'}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{title}</h3>
        <p className={`${dark ? 'text-slate-400' : 'text-slate-600'} mb-12 leading-loose text-xl`}>{desc}</p>
        <div className="flex items-center gap-4">
          <span className={`h-px w-16 ${accentColor ? 'bg-accent' : dark ? 'bg-white' : 'bg-slate-900'}`}></span>
          <span className={`text-sm font-bold tracking-[0.2em] uppercase ${accentColor ? 'text-accent' : ''}`}>
            {tag}
          </span>
        </div>
       </div>
    </motion.div>
  );

  const imageContent = (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="h-[700px] relative overflow-hidden group"
    >
      <img 
        src={image} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
        alt={title} 
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
    </motion.div>
  );

  const content = (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
      {align === 'left' ? (
        <>
          {textContent}
          {imageContent}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{imageContent}</div>
          <div className="order-1 lg:order-2">{textContent}</div>
        </>
      )}
    </div>
  );

  return to ? (
    <Link to={to} className="block">
      {content}
    </Link>
  ) : content;
};

const MealTime: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20 bg-white text-slate-900 font-sans">
       {/* Hero Section */}
       <div className="relative h-[90vh] bg-black overflow-hidden flex items-center justify-center">
          <motion.div 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
             <img src="https://picsum.photos/1920/1080?random=88" className="w-full h-full object-cover opacity-50" alt="Lifestyle" />
             <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
          </motion.div>
          
          <div className="relative z-10 text-center px-4 max-w-6xl">
             <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
             >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-black text-white tracking-tighter">
                     NΣXT
                  </h1>
                  <StylizedPlusHero className="w-20 h-20 md:w-32 md:h-32 mt-2" />
                </div>
                <Reveal delay={0.8} width="100%">
                  <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-10 tracking-wide">
                     MEALTIME
                  </h2>
                  <div className="h-1.5 w-28 bg-accent mx-auto mb-10"></div>
                  <p className="text-xl md:text-3xl text-slate-300 tracking-[0.3em] uppercase">
                     {t('mealtime.hero.subtitle')}
                  </p>
                </Reveal>
             </motion.div>
          </div>
       </div>

       {/* Intro */}
       <section className="py-40 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
             <Reveal width="100%">
               <span className="text-accent text-base font-bold uppercase tracking-[0.2em] mb-6 block">{t('mealtime.intro.title')}</span>
               <h2 className="text-5xl md:text-6xl font-bold mb-12 leading-tight">{t('mealtime.hero.desc')}</h2>
               <p className="text-2xl text-slate-500 leading-relaxed font-light">
                  {t('mealtime.intro.desc')}
               </p>
             </Reveal>
          </div>
       </section>

       {/* The 3 Pillars */}
       <section className="py-0">
          <FeatureSection 
            number="01"
            icon={<Coffee size={40}/>}
            title={t('mealtime.coffee.title')}
            desc={t('mealtime.coffee.desc')}
            tag="Premium Beans"
            image="/images/mealtime/coffee/coffee-01.jpg"
            align="left"
            to="/mealtime/coffee"
          />
          
          <FeatureSection 
            number="02"
            icon={<Utensils size={40}/>}
            title={t('mealtime.dining.title')}
            desc={t('mealtime.dining.desc')}
            tag="Social Space"
            image="/images/mealtime/dining/dining-01.jpg"
            align="right"
            dark={true}
            accentColor={true}
            to="/mealtime/dining"
          />

          <FeatureSection 
            number="03"
            icon={<Zap size={40}/>}
            title={t('mealtime.lifestyle.title')}
            desc={t('mealtime.lifestyle.desc')}
            tag="Trendsetter"
            image="/images/mealtime/lifestyle/lifestyle-01.jpg"
            align="left"
            to="/mealtime/lifestyle"
          />
       </section>

       {/* Business Models */}
       <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4">
             <SectionTitle title="Our Models" subtitle="Business Planning" centered />
             
             <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
                {/* Complex Model */}
                <StaggerItem>
                  <motion.div 
                     whileHover={{ y: -15 }}
                     transition={{ duration: 0.4 }}
                     className="bg-slate-50 p-14 border-t-4 border-slate-900 h-full shadow-lg hover:shadow-2xl"
                  >
                     <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center mb-10 text-slate-900">
                        <Layers size={40} />
                     </div>
                     <h3 className="text-4xl font-bold mb-8">{t('mealtime.model.rd')}</h3>
                     <p className="text-slate-600 mb-10 text-xl leading-relaxed">{t('mealtime.model.rd.desc')}</p>
                     
                     {/* Single Action Item - Dish Submission */}
                     <Link to="/contact" className="flex items-center gap-4 text-slate-500 text-lg hover:text-accent transition-colors group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                          <ArrowRight size={16} />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform">{t('mealtime.model.rd.action')}</span>
                     </Link>
                  </motion.div>
                </StaggerItem>

                {/* Single Store Model */}
                <StaggerItem>
                  <motion.div 
                     whileHover={{ y: -15 }}
                     transition={{ duration: 0.4 }}
                     className="bg-slate-900 text-white p-14 border-t-4 border-accent h-full shadow-xl hover:shadow-2xl"
                  >
                     <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-10 text-accent">
                        <Store size={40} />
                     </div>
                     <h3 className="text-4xl font-bold mb-8">{t('mealtime.model.store')}</h3>
                     <p className="text-slate-400 mb-10 text-xl leading-relaxed">{t('mealtime.model.store.desc')}</p>
                     
                     {/* Single Action Item - Selection & Franchise */}
                     <Link to="/contact" className="flex items-center gap-4 text-slate-400 text-lg hover:text-accent transition-colors group cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                          <ArrowRight size={16} />
                        </div>
                        <span className="group-hover:translate-x-1 transition-transform">{t('mealtime.model.store.action')}</span>
                     </Link>
                  </motion.div>
                </StaggerItem>
             </StaggerContainer>
          </div>
       </section>

       {/* CTA */}
       <section className="py-32 bg-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
             <img src="https://picsum.photos/1920/600?random=pattern" className="w-full h-full object-cover grayscale" alt="bg" />
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
             <Reveal width="100%">
               <h2 className="text-5xl font-bold mb-8 text-slate-900">{t('mealtime.cta.title')}</h2>
               <p className="text-slate-600 mb-12 text-2xl">{t('mealtime.cta.desc')}</p>
               <Button to="/contact">{t('contact.title')}</Button>
             </Reveal>
          </div>
       </section>
    </div>
  );
};

export default MealTime;