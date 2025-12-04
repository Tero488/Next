import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import { LanguageProvider } from './context/LanguageContext';

// Pages
import Home from './pages/Home';
import NextHome from './pages/NextHome';
import SpaceMagic, { SpaceMagicDetail } from './pages/SpaceMagic';
import Products from './pages/Products';
import Materials from './pages/Materials';
import IdealYou from './pages/IdealYou';
import DesignerDetail from './pages/DesignerDetail';
import Cases, { CaseDetail } from './pages/Cases';
import MealTime from './pages/MealTime';
import MealTimeDetail from './pages/MealTimeDetail';
import News from './pages/News';
import Contact from './pages/Contact';
import JoinUs from './pages/JoinUs';

// ScrollToTop Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* NextHome & Sub-routes */}
            <Route path="/nexthome" element={<NextHome />} />
            <Route path="/nexthome/space-magic" element={<SpaceMagic />} />
            <Route path="/nexthome/space-magic/:id" element={<SpaceMagicDetail />} />
            <Route path="/nexthome/space-magic/products" element={<Products />} />
            <Route path="/nexthome/space-magic/materials" element={<Materials />} />
            <Route path="/nexthome/ideal-you" element={<IdealYou />} />
            <Route path="/nexthome/ideal-you/designers/:id" element={<DesignerDetail />} />
            
            {/* Cases */}
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
            
            <Route path="/mealtime" element={<MealTime />} />
            <Route path="/mealtime/:id" element={<MealTimeDetail />} />
            
            {/* News (Using same detail pattern as dummy) */}
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<div className="pt-40 text-center">News Detail Placeholder</div>} />
            
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;