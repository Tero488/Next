
import React from 'react';
import { SectionTitle, Button } from '../components/UIComponents';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-20">
       {/* Map Section: Static Map with Click to Open Amap */}
       <a 
         href="https://uri.amap.com/marker?position=112.9982,28.2241&name=NEXT%2B%E6%80%BB%E9%83%A8&src=nextplus&coordinate=gaode&callnative=0"
         target="_blank"
         rel="noopener noreferrer"
         className="block w-full h-[500px] bg-slate-200 border-b border-slate-200 relative overflow-hidden group cursor-pointer"
       >
          <img 
            src="/images/map/location.png"
            alt="NEXT+ 总部位置地图 - 湖南省长沙市开福区五矿live33栋3层"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            onError={(e) => {
              // 如果本地地图图片不存在，显示带地址的占位
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full h-full bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 flex items-center justify-center';
                placeholder.innerHTML = `
                  <div class="text-center px-4">
                    <svg class="w-24 h-24 text-accent mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <h3 class="text-3xl font-bold text-slate-900 mb-3">NEXT+ 总部</h3>
                    <p class="text-slate-600 text-lg mb-2">长沙市芙蓉区韭菜园路058号</p>
                    <p class="text-slate-600 text-lg mb-6">湖南省长沙市开福区五矿live33栋3层</p>
                    <span class="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full font-medium">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      点击在高德地图中查看导航
                    </span>
                  </div>
                `;
                parent.appendChild(placeholder);
              }
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white px-8 py-4 rounded-full shadow-2xl">
              <span className="text-slate-900 font-bold text-lg flex items-center gap-3">
                <MapPin size={24} className="text-accent" />
                点击在高德地图中查看
              </span>
            </div>
          </div>
       </a>

       <div className="max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             <div>
                <SectionTitle title={t('contact.title')} subtitle={t('contact.subtitle')} />
                <p className="text-slate-600 mb-16 text-xl leading-relaxed">
                   {t('contact.desc')}
                </p>
                
                <div className="space-y-10">
                   <div className="flex items-start">
                      <MapPin className="text-accent mr-6 mt-1 w-8 h-8" />
                      <div>
                         <h4 className="font-bold text-slate-900 text-xl mb-2">{t('contact.hq')}</h4>
                         <p className="text-slate-500 text-lg mb-1">{t('contact.address.1')}</p>
                         <p className="text-slate-500 text-lg">{t('contact.address.2')}</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <Phone className="text-accent mr-6 mt-1 w-8 h-8" />
                      <div>
                         <h4 className="font-bold text-slate-900 text-xl mb-2">{t('contact.phone')}</h4>
                         <p className="text-slate-500 text-lg">{t('contact.phone.value')}</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <Mail className="text-accent mr-6 mt-1 w-8 h-8" />
                      <div>
                         <h4 className="font-bold text-slate-900 text-xl mb-2">{t('contact.email')}</h4>
                         <p className="text-slate-500 text-lg">contact@nextplus.com</p>
                      </div>
                   </div>
                </div>

                <div className="mt-10 pt-10 border-t border-slate-100">
                   <div className="bg-white p-2 border border-slate-200 inline-block rounded-sm">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=NEXT_PLUS" alt="Official Account" className="w-32 h-32" />
                   </div>
                   <p className="text-slate-400 text-sm mt-3">{t('contact.follow')}</p>
                </div>
             </div>

             <div className="bg-slate-50 p-12 rounded-lg border border-slate-100">
                <h3 className="text-3xl font-serif font-bold mb-8">{t('contact.form.title')}</h3>
                <form className="space-y-8">
                   <div className="grid grid-cols-2 gap-8">
                      <div>
                         <label className="block text-base font-medium text-slate-700 mb-3">{t('contact.form.name')}</label>
                         <input type="text" className="w-full px-5 py-4 bg-white border border-slate-200 rounded focus:outline-none focus:border-accent text-base" placeholder="John Doe" />
                      </div>
                      <div>
                         <label className="block text-base font-medium text-slate-700 mb-3">{t('contact.form.phone')}</label>
                         <input type="tel" className="w-full px-5 py-4 bg-white border border-slate-200 rounded focus:outline-none focus:border-accent text-base" placeholder="+86 139 0000 0000" />
                      </div>
                   </div>
                   <div>
                      <label className="block text-base font-medium text-slate-700 mb-3">{t('contact.form.email')}</label>
                      <input type="email" className="w-full px-5 py-4 bg-white border border-slate-200 rounded focus:outline-none focus:border-accent text-base" placeholder="john@example.com" />
                   </div>
                   <div>
                      <label className="block text-base font-medium text-slate-700 mb-3">{t('contact.form.req')}</label>
                      <textarea rows={4} className="w-full px-5 py-4 bg-white border border-slate-200 rounded focus:outline-none focus:border-accent text-base" placeholder="..."></textarea>
                   </div>
                   <div>
                      <label className="block text-base font-medium text-slate-700 mb-3">{t('contact.form.att')}</label>
                      <input type="file" className="w-full text-base text-slate-500 file:mr-5 file:py-3 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20"/>
                   </div>
                   <Button>{t('contact.form.submit')}</Button>
                </form>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;
