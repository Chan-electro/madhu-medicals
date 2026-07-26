
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PushNotification from './components/PushNotification';
import Home from './pages/Home';
import StoreLocator from './pages/StoreLocator';
import AboutUs from './pages/AboutUs';
import DownloadApp from './pages/DownloadApp';
import { useScrollProgress, useScrollReveal } from './hooks/useAnimations';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const ScrollProgressBar: React.FC = () => {
  const progress = useScrollProgress();
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-50 bg-[#004d5e] text-white w-12 h-12 rounded-full shadow-xl shadow-teal-900/30 flex items-center justify-center hover:bg-[#003b47] hover:-translate-y-1 transition-all animate-fade-in-up"
      aria-label="Back to top"
    >
      <span className="material-icons-outlined">keyboard_arrow_up</span>
    </button>
  );
};

const ScrollRevealInit: React.FC = () => {
  const location = useLocation();
  useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );
      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRevealInit />
      <ScrollProgressBar />
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
        <BackToTop />
        <PushNotification />
      </div>
    </Router>
  );
};

export default App;
