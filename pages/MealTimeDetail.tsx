import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SafeImage, Reveal } from '../components/UIComponents';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeft } from 'lucide-react';

interface MealTimeSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
}

const mealTimeSections: Record<'zh' | 'en', Record<string, MealTimeSection>> = {
  zh: {
    coffee: {
      id: 'coffee',
      title: 'COFFEE',
      subtitle: '精品咖啡文化',
      description: '从产地到杯中，每一颗咖啡豆都经过精心挑选与烘焙。我们致力于打造独特的咖啡体验空间，让每一杯咖啡都成为生活中的仪式感时刻。',
      features: [
        '精选全球优质产区咖啡豆',
        '专业烘焙师现场烘焙',
        '多种冲煮方式呈现风味层次',
        '舒适社交空间设计',
        '咖啡文化分享与交流'
      ],
      images: Array.from({ length: 7 }, (_, i) => `/images/mealtime/coffee/coffee-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    dining: {
      id: 'dining',
      title: 'DINING',
      subtitle: '社交餐饮空间',
      description: '融合美食与社交的全新餐饮体验。我们打破传统餐厅界限，创造开放、灵活的用餐环境，让每一次聚餐都成为难忘的社交时刻。',
      features: [
        '创意融合菜品研发',
        '开放式厨房互动体验',
        '多场景用餐空间设计',
        '私人定制宴会服务',
        '主题餐饮活动策划'
      ],
      images: Array.from({ length: 7 }, (_, i) => `/images/mealtime/dining/dining-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    lifestyle: {
      id: 'lifestyle',
      title: 'LIFE STYLE',
      subtitle: '生活方式引领',
      description: '不仅是餐饮，更是一种生活态度。我们策划各类生活方式活动，从艺术展览到音乐派对，打造年轻人的潮流聚集地。',
      features: [
        '定期艺术展览与文化活动',
        '音乐现场与主题派对',
        '生活方式品牌联名合作',
        '社群运营与会员体系',
        '潮流趋势发布与分享'
      ],
      images: Array.from({ length: 11 }, (_, i) => `/images/mealtime/lifestyle/lifestyle-${String(i + 1).padStart(2, '0')}.jpg`)
    }
  },
  en: {
    coffee: {
      id: 'coffee',
      title: 'COFFEE',
      subtitle: 'Specialty Coffee Culture',
      description: 'From origin to cup, every coffee bean is carefully selected and roasted. We are committed to creating a unique coffee experience space, making every cup of coffee a ritual moment in life.',
      features: [
        'Premium coffee beans from global origins',
        'Professional on-site roasting',
        'Multiple brewing methods for flavor profiles',
        'Comfortable social space design',
        'Coffee culture sharing and exchange'
      ],
      images: Array.from({ length: 7 }, (_, i) => `/images/mealtime/coffee/coffee-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    dining: {
      id: 'dining',
      title: 'DINING',
      subtitle: 'Social Dining Space',
      description: 'A new dining experience that combines food and socializing. We break traditional restaurant boundaries, creating open and flexible dining environments where every meal becomes an unforgettable social moment.',
      features: [
        'Creative fusion cuisine development',
        'Open kitchen interactive experience',
        'Multi-scenario dining space design',
        'Private customized banquet service',
        'Themed dining event planning'
      ],
      images: Array.from({ length: 7 }, (_, i) => `/images/mealtime/dining/dining-${String(i + 1).padStart(2, '0')}.jpg`)
    },
    lifestyle: {
      id: 'lifestyle',
      title: 'LIFE STYLE',
      subtitle: 'Lifestyle Leadership',
      description: 'Not just dining, but a lifestyle attitude. We curate various lifestyle activities, from art exhibitions to music parties, creating a trendy gathering place for young people.',
      features: [
        'Regular art exhibitions and cultural events',
        'Live music and themed parties',
        'Lifestyle brand collaborations',
        'Community operations and membership system',
        'Trend release and sharing'
      ],
      images: Array.from({ length: 11 }, (_, i) => `/images/mealtime/lifestyle/lifestyle-${String(i + 1).padStart(2, '0')}.jpg`)
    }
  }
};

const MealTimeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  
  const section = id ? mealTimeSections[language][id] : null;

  if (!section) {
    return (
      <div className="pt-40 text-center text-xl">
        {language === 'zh' ? '未找到该内容' : 'Content not found'}
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage 
            src={section.images[0]} 
            alt={section.title}
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              {section.title}
            </h1>
            <div className="h-1.5 w-24 bg-accent mx-auto mb-8"></div>
            <p className="text-2xl md:text-3xl text-slate-300 font-light">
              {section.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <Reveal width="100%">
          <div className="mb-20">
            <p className="text-2xl text-slate-600 leading-relaxed mb-12">
              {section.description}
            </p>
            
            <h3 className="text-3xl font-bold mb-8 text-slate-900">
              {language === 'zh' ? '核心特色' : 'Key Features'}
            </h3>
            <ul className="space-y-4">
              {section.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-lg text-slate-700">
                  <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {section.images.slice(1).map((img, idx) => (
            <Reveal key={idx}>
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                <SafeImage 
                  src={img} 
                  alt={`${section.title} ${idx + 2}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Back Button */}
        <Reveal>
          <Link 
            to="/mealtime"
            className="inline-flex items-center gap-3 text-slate-600 hover:text-accent transition-colors text-lg"
          >
            <ArrowLeft size={20} />
            <span>{language === 'zh' ? '返回 NEXT+ MEALTIME' : 'Back to NEXT+ MEALTIME'}</span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default MealTimeDetail;

