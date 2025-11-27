import React from 'react';
import { useParams } from 'react-router-dom';
import { getCases } from '../data';
import { CaseCard } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';

export const CaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const project = getCases(language).find(c => c.id === id);

  if (!project) return <div className="pt-40 text-center text-xl">{t('cases.notFound')}</div>;

  return (
    <div className="pt-20">
       <div className="h-[70vh] relative">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-end">
             <div className="max-w-7xl mx-auto px-4 pb-16 w-full text-white">
                <span className="bg-accent text-white px-4 py-2 text-sm font-bold uppercase mb-6 inline-block tracking-wider">{project.category}</span>
                <h1 className="text-6xl font-serif font-bold">{project.title}</h1>
             </div>
          </div>
       </div>
       <div className="max-w-5xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">{t('cases.overview')}</h2>
          <p className="text-xl text-slate-600 leading-loose mb-12">{project.description}</p>
          <div className="grid grid-cols-2 gap-6 mt-16">
             <img src={`https://picsum.photos/600/400?random=${id}1`} className="w-full rounded shadow-md" alt="Detail 1"/>
             <img src={`https://picsum.photos/600/400?random=${id}2`} className="w-full rounded shadow-md" alt="Detail 2"/>
          </div>
       </div>
    </div>
  );
};

const Cases: React.FC = () => {
  const { language, t } = useLanguage();
  const casesData = getCases(language);

  return (
    <div className="pt-20">
       <div className="py-16 text-center bg-slate-50">
          <h1 className="text-5xl font-serif font-bold text-slate-900">{t('cases.title')}</h1>
          <p className="text-slate-500 mt-4 text-xl">{t('cases.subtitle')}</p>
       </div>
       <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {casesData.map(c => <CaseCard key={c.id} {...c} />)}
             {casesData.map(c => <CaseCard key={c.id + 'dup'} {...c} id={c.id} />)}
          </div>
       </div>
    </div>
  );
};

export default Cases;