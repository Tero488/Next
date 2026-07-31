
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Reveal, StaggerContainer, StaggerItem, ParallaxImage, SafeImage } from '../components/UIComponents';
import { getProducts } from '../data';
import { useLanguage } from '../context/LanguageContext';

export const SpaceMagicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const product = getProducts(language).find(p => p.id === id);

  if (!product) return <div className="pt-40 text-center text-xl">Product not found</div>;

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  // 从产品描述中提取尺寸和材质
  const parseSpecs = (desc: string) => {
    let size = '';
    let material = '';
    
    // 提取尺寸：格式为 "尺寸: 283*103*66" 或 "Size: 283*103*66"
    // 匹配尺寸后面的所有内容直到句号
    const sizeMatch = desc.match(/(?:尺寸|Size)[：:]\s*([^。.]+)/);
    if (sizeMatch) {
      size = sizeMatch[1].trim();
    }
    
    // 提取材质：在尺寸后面的第一个句号之后，第一个逗号之前的内容
    // 格式通常是 "尺寸: XXX。材质描述，其他描述。"
    const afterSize = desc.split(/[。.]/)[1];
    if (afterSize) {
      // 取第一个逗号之前的内容作为材质
      const materialPart = afterSize.split(/[，,]/)[0].trim();
      if (materialPart) {
        material = materialPart;
      }
    }
    
    return { size, material };
  };

  const specs = parseSpecs(product.description);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-20">
            <div>
               {galleryImages.length > 0 && (
                  <div className="rounded-lg overflow-hidden shadow-2xl bg-slate-200 mb-4 flex items-center justify-center p-8 min-h-[600px]">
                     <SafeImage 
                        src={galleryImages[0]} 
                        alt={product.title} 
                        className="max-w-full max-h-[600px] w-auto h-auto object-contain"
                        loading="eager"
                     />
                  </div>
               )}
               {galleryImages.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                     {galleryImages.slice(1).map((img, idx) => (
                        <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-slate-200 flex items-center justify-center p-4 min-h-[200px]">
                           <SafeImage 
                              src={img} 
                              alt={`${product.title} ${idx + 2}`} 
                              className="max-w-full max-h-[200px] w-auto h-auto object-contain"
                              loading="lazy"
                           />
                        </div>
                     ))}
                  </div>
               )}
            </div>
            <div className="flex flex-col justify-center">
               <span className="bg-accent/10 text-accent px-5 py-2.5 rounded-full text-sm font-bold uppercase w-fit mb-8 tracking-widest">{product.category}</span>
               <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-slate-900">{product.title}</h1>
               <p className="text-slate-600 text-xl leading-relaxed mb-12">{product.description}</p>
               
               {(specs.size || specs.material) && (
                  <div className="bg-slate-50 p-10 border-l-4 border-accent mb-12">
                     <h3 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-base">{t('spacemagic.detail.specs')}</h3>
                     <ul className="space-y-4 text-slate-600 text-lg">
                        {specs.size && (
                           <li className="flex justify-between border-b border-slate-200 pb-3">
                              <span>{language === 'zh' ? '尺寸' : 'Size'}</span> 
                              <span className="font-medium">{specs.size}</span>
                           </li>
                        )}
                        {specs.material && (
                           <li className="flex justify-between pt-3">
                              <span>{language === 'zh' ? '材质' : 'Material'}</span> 
                              <span className="font-medium">{specs.material}</span>
                           </li>
                        )}
                     </ul>
                  </div>
               )}
               
               <div>
                  <Link to="/contact" className="bg-slate-900 text-white px-12 py-5 text-base font-bold uppercase tracking-widest hover:bg-accent transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    {t('ui.quote')}
                  </Link>
               </div>
            </div>
         </div>
    </div>
  );
};

const SpaceMagic: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <div className="h-[500px] bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
         <div className="absolute inset-0 opacity-40">
            <ParallaxImage src="/images/cases/xiangjiang-one/cover.webp" alt="banner" className="w-full h-full" />
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
