
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ProductCard, Reveal, StaggerContainer, StaggerItem, ParallaxImage, SafeImage } from '../components/UIComponents';
import { getProducts } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const SpaceMagicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const product = getProducts(language).find(p => p.id === id);

  if (!product) return <div className="pt-40 text-center text-xl">Product not found</div>;

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
       <Reveal width="100%">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="rounded-lg overflow-hidden shadow-2xl h-[600px] bg-slate-200">
               <SafeImage src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center">
               <span className="bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-bold uppercase w-fit mb-8 tracking-widest">{product.category}</span>
               <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-slate-900">{product.title}</h1>
               <p className="text-slate-600 text-xl leading-relaxed mb-12">{product.description}</p>
               
               <div className="bg-slate-50 p-10 border-l-4 border-accent mb-12">
                  <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-base">{t('spacemagic.detail.specs')}</h3>
                  <ul className="space-y-4 text-slate-600 text-lg">
                     <li className="flex justify-between border-b border-slate-200 pb-3"><span>Modular Standard</span> <span className="font-medium">ISO-9001</span></li>
                     <li className="flex justify-between border-b border-slate-200 pb-3"><span>Material</span> <span className="font-medium">Composite Polymer</span></li>
                     <li className="flex justify-between border-b border-slate-200 pb-3"><span>Efficiency</span> <span className="font-medium text-accent">+40% Speed</span></li>
                     <li className="flex justify-between pt-3"><span>Warranty</span> <span className="font-medium">10 Years</span></li>
                  </ul>
               </div>
               
               <div>
                  <Link to="/contact" className="bg-slate-900 text-white px-12 py-5 text-base font-bold uppercase tracking-widest hover:bg-accent transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    {t('ui.quote')}
                  </Link>
               </div>
            </div>
         </div>
       </Reveal>
    </div>
  );
};

const SpaceMagic: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="h-[500px] bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
         <div className="absolute inset-0 opacity-40">
            <ParallaxImage src="https://picsum.photos/1920/600?random=smbanner" alt="banner" className="w-full h-full" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto">
           <Reveal width="100%">
             <h1 className="text-6xl md:text-7xl font-serif font-bold mb-8 text-white">{t('nav.spacemagic')}</h1>
             <p className="text-slate-300 text-2xl max-w-3xl mx-auto font-light">{t('spacemagic.banner.subtitle')}</p>
           </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="min-h-[400px]">
               <div className="text-center py-8 flex flex-col items-center w-full">
                  <Reveal width="100%">
                    <div className="max-w-4xl mx-auto text-center">
                       <h2 className="text-5xl font-serif font-bold mb-10 text-slate-900">{t('spacemagic.rd.title')}</h2>
                       <p className="text-slate-600 mb-10 text-xl leading-relaxed">
                         {t('spacemagic.rd.desc')}
                       </p>
                    </div>
                  </Reveal>
                  
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 max-w-4xl w-full mx-auto px-4 items-stretch">
                     <StaggerItem className="h-full">
                        <Link to="/nexthome/space-magic/materials" className="block h-full">
                          <div className="bg-white p-12 shadow-lg border-t-4 border-slate-900 h-full hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center justify-center text-center cursor-pointer group">
                            <h3 className="font-bold text-3xl mb-6 text-slate-900 group-hover:text-accent transition-colors">{t('spacemagic.rd.mat')}</h3>
                            <p className="text-slate-500 text-lg group-hover:text-slate-700 transition-colors">{t('spacemagic.rd.mat.desc')}</p>
                            <div className="mt-6 text-accent text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              查看品牌列表 →
                            </div>
                          </div>
                        </Link>
                     </StaggerItem>
                     <StaggerItem className="h-full">
                        <Link to="/nexthome/space-magic/products" className="block h-full">
                          <div className="bg-slate-900 text-white p-12 shadow-2xl border-t-4 border-accent h-full hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group">
                            <h3 className="font-bold text-3xl mb-6 text-white group-hover:text-accent transition-colors">{t('spacemagic.rd.struct')}</h3>
                            <p className="text-slate-400 text-lg group-hover:text-slate-300 transition-colors">{t('spacemagic.rd.struct.desc')}</p>
                            <div className="mt-6 text-accent text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              查看产品系列 →
                            </div>
                          </div>
                        </Link>
                     </StaggerItem>
                  </StaggerContainer>
               </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceMagic;
