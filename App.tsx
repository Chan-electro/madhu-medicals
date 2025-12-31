
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import PushNotification from './components/PushNotification';
import Home from './pages/Home';
import Products from './pages/Products';
import StoreLocator from './pages/StoreLocator';
import { getHealthAdviceStream } from './geminiService';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HealthAssistant: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query || loading) return;
    
    setLoading(true);
    setResponse('');
    const userQ = query;
    setQuery('');

    await getHealthAdviceStream(userQ, (chunk) => {
      setResponse(prev => prev + chunk);
      setLoading(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
        <div className="p-8 bg-[#004d5e] text-white flex justify-between items-center shrink-0">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-[#4ecdc4] rounded-2xl flex items-center justify-center text-[#004d5e] shadow-lg">
                <span className="material-icons-outlined">smart_toy</span>
             </div>
             <div>
                <h3 className="font-bold text-lg">Madhu Health AI</h3>
                <p className="text-xs text-teal-100/70 font-medium">Empowering your wellness since 1986</p>
             </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth bg-slate-50/50">
          {response && (
            <div className="bg-white p-8 rounded-[2.5rem] border border-teal-100 shadow-xl shadow-teal-900/5 animate-fade-in-up relative">
              <div className="absolute -top-3 -left-3 bg-[#4ecdc4] text-[#004d5e] px-4 py-1 rounded-full text-[10px] font-black uppercase">Advice</div>
              <div className="prose prose-sm prose-slate max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap font-medium">
                {response}
              </div>
            </div>
          )}
          {!response && !loading && (
             <div className="text-center py-20 opacity-30">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-icons-outlined text-4xl">forum</span>
                </div>
                <p className="italic font-medium">Ask me about vitamins, wellness tips, or general health concerns.</p>
             </div>
          )}
          {loading && !response && (
            <div className="flex flex-col items-center justify-center py-20 gap-6">
               <div className="w-12 h-12 border-4 border-[#4ecdc4] border-t-transparent rounded-full animate-spin"></div>
               <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Madhu AI is thinking...</p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-8 border-t border-slate-100 bg-white shrink-0">
          <div className="relative">
            <input 
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your health query..."
              className="w-full bg-slate-50 border border-slate-100 focus:ring-4 focus:ring-[#004d5e]/10 focus:border-[#004d5e] rounded-2xl py-5 pl-8 pr-20 text-slate-800 transition-all outline-none font-medium"
            />
            <button 
              type="submit"
              disabled={loading || !query.trim()}
              className="absolute right-3 top-3 bottom-3 bg-[#004d5e] text-white px-6 rounded-xl font-bold disabled:opacity-50 hover:scale-105 transition-all active:scale-95 shadow-lg shadow-teal-900/10"
            >
              <span className="material-icons-outlined">send</span>
            </button>
          </div>
          <p className="text-[10px] text-slate-400 mt-6 text-center leading-relaxed">
            AI advice is for information only. Not a medical diagnosis. <br/>
            Need genuine advice? <a href="https://wa.me/919876543210" target="_blank" className="text-[#004d5e] font-black underline">Chat with our Pharmacists on WhatsApp</a>
          </p>
        </form>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/health-assistant') {
        setIsAiModalOpen(true);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const closeAiModal = () => {
    setIsAiModalOpen(false);
    if (window.location.hash === '#/health-assistant') {
      window.history.back();
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#f0fdfa] selection:bg-[#4ecdc4] selection:text-[#004d5e]">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/store-locator" element={<StoreLocator />} />
          </Routes>
        </div>
        <Footer />
        <FloatingWhatsApp />
        <PushNotification />
        <HealthAssistant isOpen={isAiModalOpen} onClose={closeAiModal} />
      </div>
    </Router>
  );
};

export default App;
