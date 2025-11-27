import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getStats, getCases, getNews } from '../data';
import { SectionTitle, Button, CaseCard, Reveal, StaggerContainer, StaggerItem, ParallaxImage, CountUp } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y, willChange: "transform" }} // Keep willChange here as it is the main hero background
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/1920/1080?random=99" 
          alt="Hero Background" 
          decoding="async" 
          className="w-full h-full object-cover transform-gpu" // Hardware acceleration for the image
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </motion.div>
      
      <div className="relative z-10 text-center max-w-5xl px-4 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
           <motion.span 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
             className="block text-accent text-base md:text-lg tracking-[0.4em] uppercase font-bold mb-6"
           >
             Energy Box
           </motion.span>
           <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight"
          >
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-3xl text-slate-200 font-light mb-12 max-w-3xl mx-auto"
          >
             {t('home.hero.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center gap-6 items-center"
          >
            <Button to="/nexthome">{t('home.hero.cta.nexthome')}</Button>
            <Button to="/mealtime">{t('home.hero.cta.mealtime')}</Button>
            <Link to="/contact" className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold tracking-wider transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-slate-900 relative overflow-hidden group">
              <span className="relative z-10">{t('home.hero.cta.consult')}</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats: React.FC = () => {
  const { language } = useLanguage();
  const stats = getStats(language);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
          {stats.map((stat) => {
             const numValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
             const suffix = stat.value.replace(/[0-9]/g, '');
             
             return (
              <StaggerItem key={stat.id} className="p-6">
                <motion.div 
                  whileHover={{ scale: 1.1, color: '#84cc16' }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-5xl md:text-6xl font-bold text-accent mb-4 inline-block cursor-default"
                >
                  <CountUp to={numValue} suffix={suffix} />
                </motion.div>
                <div className="text-sm md:text-base text-slate-400 uppercase tracking-widest mt-2 font-medium">{stat.label}</div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

const NextHomeCapabilities: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('home.cap.title')} subtitle={t('home.cap.subtitle')} centered />
        
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h3 className="text-3xl font-serif font-bold mb-8 text-slate-900">{t('about.mission.title')}</h3>
            <p className="text-xl text-slate-600 leading-loose">
              {t('about.mission.desc')}
            </p>
          </div>
        </Reveal>

        <Reveal width="100%">
          <div className="w-full bg-slate-50 shadow-lg border border-slate-100 rounded-lg p-8 md:p-16">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('about.eco.title')}</h3>
               <div className="h-1 w-12 bg-accent mx-auto"></div>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto">
               <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mb-10">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-8 bg-slate-900 text-white rounded w-full md:w-1/3 whitespace-pre-line text-lg leading-relaxed flex items-center justify-center text-center min-h-[160px] shadow-xl"
                  >
                    {t('about.eco.nexthome')}
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="p-8 bg-accent text-white rounded w-full md:w-1/3 whitespace-pre-line text-xl font-bold leading-relaxed flex items-center justify-center text-center min-h-[160px] shadow-xl z-10"
                  >
                    {t('about.eco.core')}
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="p-8 bg-slate-900 text-white rounded w-full md:w-1/3 whitespace-pre-line text-lg leading-relaxed flex items-center justify-center text-center min-h-[160px] shadow-xl"
                  >
                    {t('about.eco.mealtime')}
                  </motion.div>
               </div>
               
               <div className="border-t-2 border-slate-200 pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  {[
                    t('about.eco.rd'), 
                    t('about.eco.mfg'), 
                    t('about.eco.supply'), 
                    t('about.eco.alliance')
                  ].map((item, idx) => (
                    <div key={idx} className="text-slate-500 text-base md:text-lg font-medium py-3 px-4 bg-white rounded border border-slate-100">
                      {item}
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const SpaceMagicPreview: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative h-[650px] w-full overflow-hidden rounded-sm shadow-2xl group">
            <img 
              src="https://picsum.photos/800/1000?random=50" 
              alt="Space Magic" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 transform-gpu" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-12">
               <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3 block">{t('home.magic.subtitle')}</span>
               <h3 className="text-white text-5xl font-serif">{t('home.magic.title')}</h3>
            </div>
          </div>
        </motion.div>
        
        <div className="lg:w-1/2 w-full">
          <Reveal>
            <SectionTitle title={t('home.magic.title')} subtitle={t('home.magic.subtitle')} />
            <p className="text-slate-600 text-xl leading-loose mb-12 border-l-4 border-accent pl-8 italic">
              {t('home.magic.desc')}
            </p>
            <Button to="/nexthome/space-magic" variant="outline">{t('home.magic.cta')}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const IdealYouPreview: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative h-[650px] w-full overflow-hidden rounded-sm shadow-2xl group">
            <img 
              src="https://picsum.photos/800/1000?random=51" 
              alt="Ideal You" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 transform-gpu" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-12">
               <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-3 block">{t('home.idealyou.subtitle')}</span>
               <h3 className="text-white text-5xl font-serif">{t('home.idealyou.title')}</h3>
            </div>
          </div>
        </motion.div>
        
        <div className="lg:w-1/2 w-full">
          <Reveal>
            <SectionTitle title={t('home.idealyou.title')} subtitle={t('home.idealyou.subtitle')} />
            <p className="text-slate-600 text-xl leading-loose mb-12 border-l-4 border-accent pl-8 italic">
              {t('home.idealyou.desc')}
            </p>
            <Button to="/nexthome/ideal-you" variant="outline">{t('home.idealyou.cta')}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const CasesPreview: React.FC = () => {
  const { t, language } = useLanguage();
  const cases = getCases(language);

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <SectionTitle title={t('home.cases.title')} />
          <Reveal>
            <Link to="/cases" className="hidden md:flex items-center text-slate-500 hover:text-accent transition-colors font-medium text-base tracking-wide uppercase group">
               {t('home.cases.viewall')} <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item) => (
            <CaseCard key={item.id} {...item} />
          ))}
        </StaggerContainer>
        <div className="mt-16 text-center md:hidden">
          <Button to="/cases" variant="outline">{t('home.cases.viewall')}</Button>
        </div>
      </div>
    </section>
  );
};

const MealTimeBanner: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-40 flex items-center overflow-hidden group">
      <div className="absolute inset-0 z-0">
         <ParallaxImage src="https://picsum.photos/1920/800?random=60" alt="MealTime" className="w-full h-full" />
         <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
        <Reveal width="100%">
          <div className="max-w-2xl bg-black/20 backdrop-blur-sm p-12 border border-white/10 rounded-sm">
              <span className="text-accent font-bold tracking-[0.2em] uppercase mb-6 block text-base">{t('mealtime.intro.title')}</span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">{t('home.mealtime.title')}</h2>
              <p className="text-xl text-slate-200 mb-10 leading-relaxed font-light">
              {t('home.mealtime.desc')}
              </p>
              <Button to="/mealtime">{t('home.mealtime.cta')}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const NewsPreview: React.FC = () => {
  const { t, language } = useLanguage();
  const news = getNews(language);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={t('home.news.title')} subtitle={t('nav.news')} centered />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {news.map((item) => (
            <StaggerItem key={item.id}>
              <Link to="/news" className="group block">
                <div className="aspect-[3/2] overflow-hidden mb-6 bg-slate-100 relative">
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 z-10 transition-colors duration-300"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 transform-gpu"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                   <span className="h-px w-10 bg-accent"></span>
                   <div className="text-sm text-slate-400 font-bold uppercase">{item.date}</div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 line-clamp-3 leading-relaxed">{item.summary}</p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="text-center mt-20">
          <Link to="/news" className="inline-flex items-center text-slate-900 font-bold hover:text-accent uppercase tracking-widest text-sm border-b-2 border-transparent hover:border-accent pb-2 transition-all">
             {t('home.news.viewall')} <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <NextHomeCapabilities />
      <SpaceMagicPreview />
      <IdealYouPreview />
      <CasesPreview />
      <MealTimeBanner />
      <NewsPreview />
    </>
  );
};

export default Home;