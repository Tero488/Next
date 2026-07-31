import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getNews } from '../data';
import { useLanguage } from '../context/LanguageContext';

const News: React.FC = () => {
  const { language, t } = useLanguage();
  const newsData = getNews(language);

  return (
    <div className="pt-20 min-h-screen bg-white">
       <div className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
             <h1 className="text-5xl font-serif font-bold text-slate-900">{t('news.title')}</h1>
          </div>
       </div>
       <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 gap-16">
             {newsData.map(item => (
                <motion.div 
                  key={item.id} 
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col md:flex-row gap-10 border-b border-slate-100 pb-16 group cursor-pointer"
                >
                   <div className="w-full md:w-1/3 aspect-video overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   </div>
                   <div className="w-full md:w-2/3 flex flex-col justify-center">
                      <span className="text-base text-slate-400 mb-3 font-medium">{item.date}</span>
                      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-5 group-hover:text-accent transition-colors">
                        <Link to={`/news/${item.id}`}>{item.title}</Link>
                      </h2>
                      <p className="text-slate-600 mb-8 text-lg leading-relaxed">{item.summary}</p>
                      <Link to={`/news/${item.id}`} className="text-accent text-lg font-medium hover:underline flex items-center">
                        {t('news.read')} <span className="ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                      </Link>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default News;