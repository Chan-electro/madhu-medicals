
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PushNotification from './components/PushNotification';
import Home from './pages/Home';
import StoreLocator from './pages/StoreLocator';
import AboutUs from './pages/AboutUs';
import DownloadApp from './pages/DownloadApp';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f0fdfa] selection:bg-[#4ecdc4] selection:text-[#004d5e]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download-app" element={<DownloadApp />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/store-locator" element={<StoreLocator />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
        <PushNotification />
      </div>
    </Router>
  );
};

export default App;
