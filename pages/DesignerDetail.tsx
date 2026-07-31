import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDesigners } from '../data';
import { SafeImage, Reveal } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';
import { DesignerSection } from '../types';

const DesignerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const designers = getDesigners(language);
  const designer = designers.find(d => d.id === id);

  const fallbackSections: DesignerSection[] = designer?.bio
    ? [
        {
          title: language === 'en' ? 'Profile' : '个人简介',
          items: designer.bio.split('\n'),
          variant: 'paragraph',
        },
      ]
    : [];

  const structuredSections = designer?.sections?.length
    ? designer.sections
    : fallbackSections;

  const highlightSection = structuredSections[0];
  const detailSections = structuredSections.slice(1);

  const renderSectionContent = (section: DesignerSection, isLightCard = false) => {
    if (section.variant === 'paragraph') {
      return section.items.map((text, idx) => (
        <p
          key={idx}
          className={`${
            isLightCard ? 'text-slate-600' : 'text-slate-100/90'
          } text-base md:text-lg leading-relaxed ${idx > 0 ? 'mt-4' : ''}`}
        >
          {text}
        </p>
      ));
    }
    return (
      <ul className="space-y-3 text-sm md:text-base leading-relaxed">
        {section.items.map((item, idx) => (
          <li key={idx} className="flex gap-3">
            <span
              className={`mt-2 h-[2px] w-6 ${
                isLightCard ? 'bg-accent' : 'bg-white/60'
              } inline-block flex-shrink-0`}
            />
            <span className={isLightCard ? 'text-slate-600' : 'text-slate-100/90'}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  if (!designer) {
    return (
      <div className="pt-40 text-center text-xl">
        暂未找到该设计师信息。
      </div>
    );
  }

  return (
    <div className="pt-20 bg-slate-950 text-white min-h-screen">
      {/* 顶部人物视觉区 */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="relative max-w-6xl mx-auto px-4 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
          <Reveal>
            <div className="w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl ring-4 ring-slate-800/80 flex-shrink-0">
              <SafeImage
                src={designer.image}
                alt={designer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal width="100%">
            <div className="flex-1">
              <p className="text-xs md:text-sm tracking-[0.35em] text-slate-400 uppercase mb-4">
                DESIGNER PROFILE
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight">
                {designer.name}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-slate-200/90 leading-relaxed max-w-2xl">
                {designer.role}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
                <Link
                  to="/nexthome/ideal-you"
                  className="inline-flex items-center px-5 py-2.5 rounded-full border border-slate-700/80 bg-slate-900/40 hover:bg-accent hover:border-accent hover:text-slate-950 transition-colors duration-300"
                >
                  返回「享你所想 · 设计团队」
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* 个人简介区块 */}
      {highlightSection && (
        <div className="bg-slate-100 text-slate-900">
          <div className="max-w-6xl mx-auto px-4 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-[1.1fr,1.4fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 px-8 py-10 md:px-10 md:py-12 border border-slate-100">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.3em] uppercase text-slate-500 mb-4">
                  {language === 'en' ? 'PROFILE' : 'PROFILE'}
                </h2>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                  {highlightSection.title}
                </h3>
                {renderSectionContent(highlightSection, true)}
              </div>
            </Reveal>

            <Reveal>
              <div className="space-y-10">
                {detailSections.length === 0 && !designer.bio && (
                  <div className="bg-slate-900 text-slate-100 rounded-3xl px-8 py-8 md:px-10 md:py-10 shadow-xl shadow-slate-900/40">
                    <p className="text-base md:text-lg leading-relaxed">
                      {language === 'en'
                        ? 'More information coming soon.'
                        : '更多内容即将上线。'}
                    </p>
                  </div>
                )}

                {detailSections.map((section, idx) => (
                  <div
                    key={`${section.title}-${idx}`}
                    className="bg-slate-900 text-slate-100 rounded-3xl px-8 py-8 md:px-10 md:py-10 shadow-xl shadow-slate-900/40"
                  >
                    <h3 className="text-xl md:text-2xl font-serif font-bold mb-6">
                      {section.title}
                    </h3>
                    {renderSectionContent(section)}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesignerDetail;


