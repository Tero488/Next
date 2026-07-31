import React, { useState } from 'react';
import { Reveal } from '../components/UIComponents';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Materials: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'main' | 'auxiliary'>('main');

  // 主材品牌数据（对应你上传的36个logo）
  const mainMaterialBrands = [
    // 瓷砖品牌
    { name: 'GNA蒙娜丽莎', logo: '/images/brands/gna.webp', category: '瓷砖品牌' },
    { name: 'ROMANTIC罗马利奥', logo: '/images/brands/romantic.webp', category: '瓷砖品牌' },
    { name: 'KITO金意陶', logo: '/images/brands/kito.webp', category: '瓷砖品牌' },
    { name: '汇简瓷砖', logo: '/images/brands/huijian.webp', category: '瓷砖品牌' },
    { name: '简一大理石', logo: '/images/brands/jianyi.webp', category: '瓷砖品牌' },
    { name: 'ROMARIO', logo: '/images/brands/romario.webp', category: '瓷砖品牌' },
    
    // 地板品牌
    { name: '格林地板', logo: '/images/brands/green-flooring.webp', category: '地板品牌' },
    { name: 'VITVI维特鲁威', logo: '/images/brands/vitvi.webp', category: '地板品牌' },
    { name: 'moland摩兰地板', logo: '/images/brands/moland.webp', category: '地板品牌' },
    { name: '书香门地', logo: '/images/brands/shuxiang-mendi.webp', category: '地板品牌' },
    
    // 卫浴用品品牌
    { name: 'Roca', logo: '/images/brands/roca.webp', category: '卫浴用品品牌' },
    { name: 'hansgrohe汉斯格雅', logo: '/images/brands/hansgrohe.webp', category: '卫浴用品品牌' },
    { name: 'FAENZA法恩莎', logo: '/images/brands/faenza.webp', category: '卫浴用品品牌' },
    { name: 'KENDO精度', logo: '/images/brands/kendo.webp', category: '卫浴用品品牌' },
    { name: 'nicole das', logo: '/images/brands/nicole-das.webp', category: '卫浴用品品牌' },
    
    // 门窗品牌
    { name: 'ISI轩尼斯', logo: '/images/brands/isi.webp', category: '门窗品牌' },
    { name: 'MUMU慕慕门窗', logo: '/images/brands/mumu.webp', category: '门窗品牌' },
    { name: 'BOPH', logo: '/images/brands/boph.webp', category: '门窗品牌' },
    { name: 'TATA木门', logo: '/images/brands/tata.webp', category: '门窗品牌' },
    
    // 灯具品牌
    { name: 'SIEMENS', logo: '/images/brands/siemens.webp', category: '灯具品牌' },
    { name: 'KANGCAI LIGHTING', logo: '/images/brands/kangcai.webp', category: '灯具品牌' },
    { name: 'CDN西顿照明', logo: '/images/brands/cdn.webp', category: '灯具品牌' },
    
    // 五金及装修材料品牌
    { name: 'AUPU奥普', logo: '/images/brands/auou.webp', category: '五金及装修材料品牌' },
    { name: 'HUTLON汇泰龙', logo: '/images/brands/hutlon.webp', category: '五金及装修材料品牌' },
    { name: '央墅·铂域', logo: '/images/brands/yangshu-boyu.webp', category: '五金及装修材料品牌' },
    { name: '润泰石材', logo: '/images/brands/runtai.webp', category: '五金及装修材料品牌' },
    { name: 'FUNIU', logo: '/images/brands/funiu.webp', category: '五金及装修材料品牌' },
    { name: 'SAVOIA', logo: '/images/brands/savoia.webp', category: '五金及装修材料品牌' },
    { name: 'KD', logo: '/images/brands/kd.webp', category: '五金及装修材料品牌' },
    
    // 设备品牌
    { name: 'TOSHIBA东芝', logo: '/images/brands/toshiba.webp', category: '设备品牌' },
    { name: 'BRÖTJE', logo: '/images/brands/brotje.webp', category: '设备品牌' },
    { name: 'Culligan康丽根', logo: '/images/brands/culligan.webp', category: '设备品牌' },
    { name: 'Hisense海信', logo: '/images/brands/hisense.webp', category: '设备品牌' },
    { name: 'VIESSMANN', logo: '/images/brands/viessmann.webp', category: '设备品牌' },
    { name: 'Alikes爱尼克斯', logo: '/images/brands/alikes.webp', category: '设备品牌' },
    
    // 定制品牌
    { name: '供销设2M', logo: '/images/brands/gongxiaoshe.webp', category: '定制品牌' },
  ];

  // 辅材品牌数据（13个辅材品牌）
  const auxiliaryMaterialBrands = [
    { name: '辅材品牌1', logo: '/images/brands/auxiliary-01.webp', category: '辅材' },
    { name: '辅材品牌2', logo: '/images/brands/auxiliary-02.webp', category: '辅材' },
    { name: '辅材品牌3', logo: '/images/brands/auxiliary-03.webp', category: '辅材' },
    { name: '辅材品牌4', logo: '/images/brands/auxiliary-04.webp', category: '辅材' },
    { name: '辅材品牌5', logo: '/images/brands/auxiliary-05.webp', category: '辅材' },
    { name: '辅材品牌6', logo: '/images/brands/auxiliary-06.webp', category: '辅材' },
    { name: '辅材品牌7', logo: '/images/brands/auxiliary-07.webp', category: '辅材' },
    { name: '辅材品牌8', logo: '/images/brands/auxiliary-08.webp', category: '辅材' },
    { name: '辅材品牌9', logo: '/images/brands/auxiliary-09.webp', category: '辅材' },
    { name: '辅材品牌10', logo: '/images/brands/auxiliary-10.webp', category: '辅材' },
    { name: '辅材品牌11', logo: '/images/brands/auxiliary-11.webp', category: '辅材' },
    { name: '辅材品牌12', logo: '/images/brands/auxiliary-12.webp', category: '辅材' },
    { name: '辅材品牌13', logo: '/images/brands/auxiliary-13.webp', category: '辅材' },
  ];

  const currentBrands = activeTab === 'main' ? mainMaterialBrands : auxiliaryMaterialBrands;

  // 按分类分组
  const groupedBrands = currentBrands.reduce((acc, brand) => {
    if (!acc[brand.category]) {
      acc[brand.category] = [];
    }
    acc[brand.category].push(brand);
    return acc;
  }, {} as Record<string, typeof mainMaterialBrands>);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Banner */}
      <div className="h-[400px] bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
         <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-slate-800 to-slate-950" />
         <div className="relative z-10 max-w-4xl mx-auto text-white">
           <Reveal width="100%">
             <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6">材料供应</h1>
             <p className="text-slate-300 text-xl max-w-2xl mx-auto font-light">
               精选全球优质品牌，为您的空间提供高品质材料保障
             </p>
           </Reveal>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* 返回按钮 */}
        <div className="mb-12">
          <Link 
            to="/nexthome/space-magic"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span>返回研发中心</span>
          </Link>
        </div>

        {/* Tab切换 */}
        <div className="flex justify-center gap-8 mb-16 border-b border-slate-200 pb-4">
          <button 
            onClick={() => setActiveTab('main')}
            className={`text-xl font-medium pb-4 border-b-2 transition-colors ${activeTab === 'main' ? 'border-accent text-slate-900' : 'border-transparent text-slate-400'}`}
          >
            主材品牌
          </button>
          <button 
            onClick={() => setActiveTab('auxiliary')}
            className={`text-xl font-medium pb-4 border-b-2 transition-colors ${activeTab === 'auxiliary' ? 'border-accent text-slate-900' : 'border-transparent text-slate-400'}`}
          >
            辅材品牌
          </button>
        </div>

        {/* 品牌展示 */}
        <div className="space-y-16">
          {Object.entries(groupedBrands).map(([category, brands]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 pb-3 border-b-2 border-accent inline-block">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-8">
                {brands.map((brand, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-6 border border-slate-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center group"
                  >
                    <img 
                      src={brand.logo} 
                      alt={brand.name}
                      className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;

