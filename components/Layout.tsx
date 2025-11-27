import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ChatBot } from './ChatBot';

// Custom Logo Component to match the reference image
export const BrandLogo: React.FC<{ className?: string; lightMode?: boolean }> = ({ className = "", lightMode = false }) => (
  <div className={`flex items-center gap-1 ${className}`}>
    <span className={`font-sans font-black tracking-tighter flex items-center`}>
      NΣXT
    </span>
    {/* Custom Stylized Plus Sign - Standard Geometric */}
    <svg width="0.8em" height="0.8em" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
      {/* Vertical Part: Standard Rectangle */}
      <rect x="34" y="0" width="32" height="100" rx="2" fill="#84cc16" /> 
      {/* Horizontal bar */}
      <rect x="0" y="34" width="100" height="32" rx="2" fill={lightMode ? "#1a1a1a" : "#ffffff"} />
    </svg>
  </div>
);

// Simplified Logo for clearer usage
const LogoText: React.FC<{ scrolled: boolean, isHome: boolean }> = ({ scrolled, isHome }) => {
  const isDark = !scrolled && isHome;
  
  return (
    <div className="flex items-center tracking-tighter">
      <span className={`text-3xl font-sans font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
        NΣXT
      </span>
      <div className="w-8 h-8 ml-1 relative flex items-center justify-center">
         {/* Vertical Bar - Standard Geometric */}
         <svg viewBox="0 0 100 100" className="w-full h-full absolute" fill="none">
             <rect x="34" y="0" width="32" height="100" rx="2" fill="#84cc16" />
         </svg>
         {/* Horizontal Bar */}
         <div className={`absolute w-full h-3 rounded-sm ${isDark ? 'bg-white' : 'bg-slate-900'}`} style={{ top: '34%', height: '32%' }}></div>
      </div>
    </div>
  );
};

// A specific SVG component for the Plus to exactly match the "curved" look in the second crop
const StylizedPlus: React.FC<{ className?: string; horizontalColor?: string }> = ({ className, horizontalColor = "white" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Vertical Part: Standard Rectangle */}
    <rect x="34" y="0" width="32" height="100" rx="2" fill="#84cc16"/>
    {/* Horizontal bar */}
    <rect x="0" y="34" width="100" height="32" rx="2" fill={horizontalColor}/>
  </svg>
);


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, language, toggleLanguage } = useLanguage();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.nexthome'), 
      path: '/nexthome',
      subLinks: [
        { name: t('nav.spacemagic'), path: '/nexthome/space-magic' },
        { name: t('nav.idealyou'), path: '/nexthome/ideal-you' }
      ]
    },
    { name: t('nav.mealtime'), path: '/mealtime' },
    { name: t('nav.cases'), path: '/cases' },
    { name: t('nav.news'), path: '/news' },
    { name: t('nav.joinus'), path: '/join-us' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isHome = location.pathname === '/';
  const textColorClass = scrolled || !isHome ? 'text-slate-900' : 'text-white';
  const horizontalBarColor = scrolled || !isHome ? '#0f172a' : '#ffffff'; // slate-900 or white

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 group">
            <span className={`text-3xl font-sans font-black tracking-tighter ${textColorClass}`}>
              NΣXT
            </span>
            <StylizedPlus className="w-8 h-8 ml-0.5" horizontalColor={horizontalBarColor} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                <Link 
                  to={link.path}
                  className={`text-sm xl:text-base font-medium uppercase tracking-wide transition-colors duration-200 flex items-center gap-1
                    ${scrolled || !isHome 
                      ? 'text-slate-700 hover:text-accent' 
                      : 'text-white hover:text-accent'
                    }`}
                >
                  {link.name}
                  {link.subLinks && <ChevronDown size={16} />}
                </Link>
                
                {/* Dropdown */}
                {link.subLinks && (
                  <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-accent">
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.path} 
                        to={sub.path}
                        className="block px-6 py-4 text-base text-slate-600 hover:bg-slate-50 hover:text-accent"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Language Switcher */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-1 text-sm font-bold border px-4 py-1.5 rounded-full transition-all
                ${scrolled || !isHome 
                  ? 'border-slate-300 text-slate-700 hover:border-accent hover:text-accent' 
                  : 'border-white/30 text-white hover:bg-white/10'
                }`}
            >
              <Globe size={16} />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
              onClick={toggleLanguage}
              className={`text-sm font-bold border px-3 py-1.5 rounded ${scrolled || !isHome ? 'border-slate-900 text-slate-900' : 'border-slate-900 text-slate-900 lg:border-white lg:text-white'}`}
            >
              {language === 'zh' ? 'EN' : '中文'}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled || !isHome ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full border-t shadow-xl max-h-screen overflow-y-auto">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link 
                  to={link.path} 
                  className="block text-lg font-medium text-slate-900 hover:text-accent"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-4 mt-3 space-y-3 border-l-2 border-slate-100">
                    {link.subLinks.map(sub => (
                      <Link 
                        key={sub.path} 
                        to={sub.path}
                        className="block text-base text-slate-500 hover:text-accent"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-1 mb-8">
              <span className="text-3xl font-sans font-black tracking-tighter text-white">
                NΣXT
              </span>
              <StylizedPlus className="w-8 h-8 ml-0.5" horizontalColor="#ffffff" />
            </div>
            <p className="text-slate-400 text-base leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-8">{t('footer.quicklinks')}</h4>
            <ul className="space-y-4 text-base text-slate-400">
              <li><Link to="/nexthome" className="hover:text-white transition-colors">{t('nav.nexthome')}</Link></li>
              <li><Link to="/mealtime" className="hover:text-white transition-colors">{t('nav.mealtime')}</Link></li>
              <li><Link to="/cases" className="hover:text-white transition-colors">{t('nav.cases')}</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">{t('nav.news')}</Link></li>
              <li><Link to="/join-us" className="hover:text-white transition-colors">{t('nav.joinus')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-8">{t('footer.contact')}</h4>
            <div className="mb-6">
                 <div className="bg-white p-2 w-fit rounded-sm mb-4">
                     <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=NEXT_PLUS" alt="QR Code" className="w-24 h-24" />
                 </div>
            </div>
            <ul className="space-y-4 text-base text-slate-400">
              <li>{t('contact.phone.value')}</li>
              <li>{t('contact.address.1')}</li>
              <li>{t('contact.address.2')}</li>
              <li>contact@nextplus.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-8">{t('footer.newsletter')}</h4>
            <form className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-800 border-none text-white placeholder-slate-500 px-5 py-3 text-base focus:ring-2 focus:ring-accent outline-none"
              />
              <button className="bg-accent text-white px-5 py-3 font-medium hover:bg-[#65a30d] transition-colors text-base">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-10 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} NEXT+. {t('footer.rights')} Designed with Next.js & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Layout;