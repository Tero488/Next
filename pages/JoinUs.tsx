import React from 'react';
import { motion, Variants } from 'framer-motion';
import { StaggerContainer, Reveal } from '../components/UIComponents';
import { getJobs } from '../data';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, ArrowRight } from 'lucide-react';

const JoinUs: React.FC = () => {
  const { language, t } = useLanguage();
  const jobs = getJobs(language);

  // Custom animation variants
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    show: { 
      scaleX: 1, 
      transition: { 
        duration: 0.8,
        ease: "circOut"
      }
    }
  };

  return (
    <div className="pt-20 bg-white min-h-screen flex flex-col">
      {/* Typographic Hero Section based on poster */}
      <section className="bg-slate-50 pt-20 pb-20 overflow-hidden relative">
        {/* Background Texture similar to poster paper texture */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start relative">
            {/* Top Row: ! RECRUIT */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-baseline gap-2 md:gap-4 mb-2 md:mb-0"
            >
              <span className="text-6xl md:text-9xl font-black text-slate-900 leading-none">!</span>
              <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-none tracking-tighter">RECRUIT</h1>
            </motion.div>

            {/* Second Row: HERE + Chinese text */}
            <div className="w-full flex flex-col md:flex-row justify-between items-end mt-4 md:-mt-8">
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.5, duration: 0.8 }}
                 className="mb-8 md:mb-0 order-2 md:order-1"
               >
                 <div className="text-2xl md:text-3xl font-serif italic text-slate-500">
                    &#123; coming! &#125;
                 </div>
               </motion.div>

               <div className="flex flex-col items-end order-1 md:order-2">
                  <motion.h2 
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-black text-slate-900 leading-none tracking-tighter mb-4"
                  >
                    HERE
                  </motion.h2>
                  
                  {/* Green Highlight Block */}
                  <motion.div 
                    initial={{ scaleX: 0, originX: 1 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "circOut" }}
                    className="relative bg-accent px-6 py-2 md:px-10 md:py-4 -mr-4 md:-mr-8"
                  >
                    <div className="text-4xl md:text-6xl font-black text-slate-900 flex items-center gap-4">
                      <span className="text-slate-900 block -mb-2">这里</span>
                      <span className="block h-1 w-8 md:w-16 bg-slate-900 mt-4"></span>
                      <span className="text-slate-900 block -mb-2">招人</span>
                    </div>
                  </motion.div>
               </div>
            </div>
            
            {/* Brand Logo Watermark Style */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-16 md:mt-24"
            >
               <div className="flex items-center gap-2 opacity-80">
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">NΣXT</span>
                  <div className="w-6 h-6 relative flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                        <rect x="34" y="0" width="32" height="100" rx="2" fill="#84cc16" />
                        <rect x="0" y="34" width="100" height="32" rx="2" fill="#1e293b" />
                    </svg>
                  </div>
                  <span className="text-2xl font-black text-slate-900 tracking-tighter">HOME</span>
               </div>
               <p className="text-xs tracking-[0.3em] text-slate-500 mt-2 uppercase">Next Home Next Life</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jobs List Section */}
      <section className="py-24 max-w-5xl mx-auto px-4 w-full">
         <StaggerContainer className="flex flex-col gap-0">
            {jobs.map((job) => (
              <motion.div 
                key={job.id} 
                variants={itemVariants}
                className="group relative"
              >
                 <div className="py-12 flex flex-col md:flex-row md:items-start gap-6 transition-all duration-300 hover:pl-4">
                    <div className="md:w-1/3">
                       <h3 className="text-2xl font-bold text-slate-900 mb-3 relative inline-block">
                          {job.title}
                          <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all duration-300 group-hover:w-full"></span>
                       </h3>
                       <motion.div 
                          className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                       >
                          {t('ui.apply')} <ArrowRight size={16} />
                       </motion.div>
                    </div>
                    <div className="md:w-2/3">
                       <ul className="space-y-3">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-slate-600 text-lg leading-relaxed flex items-start group-hover:text-slate-900 transition-colors duration-300">
                              <span className="mr-3 mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0 group-hover:bg-accent transition-colors duration-300"></span>
                              <span>{req}</span>
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
                 
                 {/* Animated Border Line */}
                 <motion.div 
                    variants={lineVariants}
                    className="absolute bottom-0 left-0 w-full h-px bg-slate-200 origin-left"
                 />
              </motion.div>
            ))}
         </StaggerContainer>
      </section>

      {/* Footer Contact Strip */}
      <section className="bg-slate-900 text-white py-16 mt-auto">
        <div className="max-w-5xl mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
              <Reveal>
                 <div className="bg-accent text-slate-900 text-xs font-bold px-3 py-1 mb-3 inline-block uppercase tracking-wider">Contact</div>
                 <h2 className="text-3xl font-bold mb-1">{t('join.contact.name')}</h2>
              </Reveal>
              
              <Reveal delay={0.2}>
                 <div className="flex items-center gap-3 text-xl md:text-3xl font-mono">
                    <Phone className="text-accent w-6 h-6 md:w-8 md:h-8" />
                    <span>{t('contact.phone.value')}</span>
                 </div>
              </Reveal>

              <Reveal delay={0.4}>
                 <div className="flex items-center gap-3 text-slate-400">
                    <MapPin className="text-accent w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col text-sm md:text-base">
                        <span>{t('contact.address.1')}</span>
                        <span>{t('contact.address.2')}</span>
                    </div>
                 </div>
              </Reveal>
           </div>
           
           {/* QR Code Placeholder */}
           <div className="mt-12 flex justify-center md:justify-end">
              <div className="bg-white p-2 rounded-lg">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NEXT_PLUS_RECRUITMENT" alt="QR Code" className="w-24 h-24 md:w-32 md:h-32" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;