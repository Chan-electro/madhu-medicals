
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Download App', path: '/download-app' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Locations', path: '/store-locator' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Emergency bar */}
      <div className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-center py-2.5 px-4 text-xs font-medium flex justify-center items-center gap-2">
        <span className="material-icons-outlined text-sm animate-pulse">emergency</span>
        <Link className="hover:underline" to="/store-locator">
          Emergency? Visit Nelamangala or Bagalagunte store 24/7
          <span className="ml-1">→</span>
        </Link>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-100' : 'bg-white/80 backdrop-blur-md border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <Link to="/" className="flex-shrink-0 group">
              <Logo className="h-10 md:h-12 transition-transform group-hover:scale-105" />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all ${isActive(link.path) ? 'text-[#004d5e] bg-teal-50' : 'text-slate-600 hover:text-[#004d5e] hover:bg-slate-50'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-px h-6 bg-slate-200 mx-3"></div>
              <a
                href="https://wa.me/919535967333"
                target="_blank"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-5 py-2.5 rounded-xl font-bold shadow-md shadow-green-900/10 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0 text-sm"
              >
                <span className="material-icons-outlined text-sm">chat</span>
                Order on WhatsApp
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              <a href="https://wa.me/919535967333" className="bg-[#25D366] text-white p-2.5 rounded-xl shadow-md">
                <span className="material-icons-outlined text-lg">chat</span>
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 p-2 hover:bg-slate-50 rounded-xl transition-colors"
              >
                <span className="material-icons-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-slate-100 px-6 py-8 space-y-2 shadow-2xl">
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-lg font-bold transition-colors ${isActive(link.path) ? 'text-[#004d5e] bg-teal-50' : 'text-slate-800 hover:bg-slate-50'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <a
                href="https://wa.me/919535967333"
                target="_blank"
                className="block w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-center shadow-xl shadow-green-900/10 text-lg"
              >
                Chat & Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
