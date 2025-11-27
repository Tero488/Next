import React from 'react';
import { SectionTitle, Button } from '../components/UIComponents';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="pt-20">
       {/* Map Placeholder */}
       <div className="w-full h-[500px] bg-slate-200 relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113407.96570624022!2d112.93134025!3d28.2352905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x342eaef8dd85f26f%3A0x39c2449eb6115456!2sChangsha%2C%20Hunan%2C%20China!5e0!3m2!1sen!2sus!4v1655184234567!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            className="filter grayscale opacity-80"
          ></iframe>
       </div>

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