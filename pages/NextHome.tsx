import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Hammer, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle, Button, StaggerContainer, StaggerItem } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; to?: string }> = ({ icon, title, desc, to }) => {
  const cardContent = (
    <motion.div 
      whileHover={{ y: -10, borderColor: '#84cc16' }}
      className="bg-white p-12 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
    >
      <div className="text-accent mb-8 p-5 bg-accent/5 w-fit rounded-lg">{icon}</div>
      <h3 className="text-2xl font-bold mb-6 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-base leading-relaxed">{desc}</p>
    </motion.div>
  );

  return (
    <StaggerItem className="h-full">
      {to ? <Link to={to} className="block h-full">{cardContent}</Link> : cardContent}
    </StaggerItem>
  );
};

const NextHome: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
      t('nexthome.flow.consult'), 
      t('nexthome.flow.measure'), 
      t('nexthome.flow.design'), 
      t('nexthome.flow.budget'), 
      t('nexthome.flow.construct'), 
      t('nexthome.flow.decor'), 
      t('nexthome.flow.deliver')
   ];

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="h-[700px] relative bg-slate-900 overflow-hidden">
         <div className="absolute inset-0">
            <video 
              src="/videos/hero-background.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
         </div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 w-full h-full flex flex-col justify-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.4,
                    delayChildren: 0.8, // Wait for image to establish
                  }
                }
              }}
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } } // Slow fade up
                }}
                className="text-7xl md:text-9xl font-serif font-bold text-white mb-8"
              >
                {t('nexthome.banner.title')}
              </motion.h1>
              
              <motion.div 
                variants={{
                  hidden: { scaleX: 0, originX: 0 },
                  visible: { scaleX: 1, transition: { duration: 1.2, ease: "easeOut" } }
                }}
                className="h-1.5 w-24 bg-accent mb-10"
              />

              <motion.p 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } }
                }}
                className="text-2xl text-slate-200 max-w-2xl mb-12 leading-relaxed font-light border-l-4 border-accent pl-8"
              >
                {t('nexthome.banner.subtitle')}
              </motion.p>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
                }}
              >
                <Button to="/contact">{t('ui.startProject')}</Button>
              </motion.div>
            </motion.div>
         </div>
      </div>

      {/* Services */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle title={t('nexthome.services.title')} subtitle={t('nexthome.services.subtitle')} centered />
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
             <ServiceCard 
               icon={<PenTool size={40}/>} 
               title={t('nexthome.service.design')}
               desc={t('nexthome.service.design.desc')}
               to="/nexthome/ideal-you?tab=designers"
             />
             <ServiceCard 
               icon={<Hammer size={40}/>} 
               title={t('nexthome.service.construct')}
               desc={t('nexthome.service.construct.desc')}
               to="/nexthome/ideal-you?tab=construction"
             />
          </StaggerContainer>
        </div>
      </section>

      {/* Two Main Business Lines */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
             {/* Space Magic Entry */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative group overflow-hidden h-[600px] cursor-pointer"
             >
                <img src="https://picsum.photos/800/600?random=110" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Space Magic"/>
                <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/60 transition-colors duration-500 flex flex-col justify-center p-20">
                   <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6">Innovative</span>
                   <h3 className="text-5xl text-white font-serif font-bold mb-6">{t('nexthome.sm.title')}</h3>
                   <p className="text-slate-300 mb-10 max-w-lg text-xl leading-relaxed">{t('nexthome.sm.desc')}</p>
                   <Link to="/nexthome/space-magic" className="text-white flex items-center font-bold uppercase tracking-widest text-base hover:text-accent transition-colors">
                      {t('home.magic.cta')} <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
             </motion.div>

             {/* Ideal You Entry */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative group overflow-hidden h-[600px] cursor-pointer"
             >
                <img src="https://picsum.photos/800/600?random=111" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Ideal You"/>
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-500 flex flex-col justify-center p-20 items-end text-right">
                   <span className="text-white text-sm font-bold uppercase tracking-[0.2em] mb-6">Premium</span>
                   <h3 className="text-5xl text-white font-serif font-bold mb-6">{t('nexthome.iy.title')}</h3>
                   <p className="text-white/90 mb-10 max-w-lg text-xl font-medium leading-relaxed">{t('nexthome.iy.desc')}</p>
                   <Link to="/nexthome/ideal-you" className="text-white flex items-center font-bold uppercase tracking-widest text-base hover:text-accent transition-colors">
                      <ArrowLeft className="mr-3 group-hover:-translate-x-1 transition-transform" /> {t('home.idealyou.cta')}
                   </Link>
                </div>
             </motion.div>
          </div>
      </section>

      {/* Flowchart */}
      <section className="py-32 bg-slate-900 text-white">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <SectionTitle title={t('nexthome.flow.title')} subtitle="Workflow" centered />
            
            <div className="flex flex-col items-center gap-16 mt-20">
                {/* Row 1: Steps 1-4 */}
                <StaggerContainer className="flex flex-wrap justify-center items-center gap-4 md:gap-16">
                    {steps.slice(0, 4).map((step, i) => {
                        const globalIndex = i; // 0-3
                        return (
                            <React.Fragment key={step}>
                                <StaggerItem className="flex flex-col items-center relative z-10">
                                   <motion.div 
                                     whileHover={{ scale: 1.1, borderColor: '#84cc16', color: '#84cc16', boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)' }}
                                     className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center text-xl font-bold mb-6 md:mb-8 cursor-default transition-all duration-300 relative"
                                   >
                                      {globalIndex + 1}
                                      {/* Pulse Effect */}
                                      <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                                   </motion.div>
                                   <span className="text-sm uppercase tracking-[0.1em] font-bold text-slate-400">{step}</span>
                                </StaggerItem>
                                
                                {/* Divider - only between items, not after last */}
                                {i < 3 && (
                                   <motion.div 
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.0, delay: 0.5 + (i * 0.1) }}
                                    className="w-8 md:w-16 h-0.5 bg-slate-700 hidden md:block origin-left"
                                   />
                                )}
                            </React.Fragment>
                        );
                    })}
                </StaggerContainer>

                {/* Row 2: Steps 5-7 */}
                <StaggerContainer className="flex flex-wrap justify-center items-center gap-4 md:gap-16" delayChildren={0.6}>
                    {steps.slice(4, 7).map((step, i) => {
                        const globalIndex = i + 4; // 4-6
                        return (
                            <React.Fragment key={step}>
                                <StaggerItem className="flex flex-col items-center relative z-10">
                                   <motion.div 
                                     whileHover={{ scale: 1.1, borderColor: '#84cc16', color: '#84cc16', boxShadow: '0 0 20px rgba(132, 204, 22, 0.3)' }}
                                     className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-slate-700 bg-slate-800 flex items-center justify-center text-xl font-bold mb-6 md:mb-8 cursor-default transition-all duration-300 relative"
                                   >
                                      {globalIndex + 1}
                                      {/* Pulse Effect */}
                                      <div className="absolute inset-0 rounded-full bg-accent/20 animate-ping opacity-0 group-hover:opacity-100"></div>
                                   </motion.div>
                                   <span className="text-sm uppercase tracking-[0.1em] font-bold text-slate-400">{step}</span>
                                </StaggerItem>
                                
                                {/* Divider - only between items */}
                                {i < 2 && (
                                   <motion.div 
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.0, delay: 0.5 + (i * 0.1) }}
                                    className="w-8 md:w-16 h-0.5 bg-slate-700 hidden md:block origin-left"
                                   />
                                )}
                            </React.Fragment>
                        );
                    })}
                </StaggerContainer>
            </div>
            
            <div className="mt-24">
               <Button to="/contact" variant="primary">{t('ui.bookAppt')}</Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default NextHome;