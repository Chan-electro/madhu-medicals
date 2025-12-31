
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Health AI', path: '#/health-assistant', isHash: true },
    { name: 'Our Locations', path: '/store-locator' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="bg-red-600 text-white text-center py-2.5 px-4 text-xs md:text-sm font-medium flex justify-center items-center gap-2">
        <span className="material-icons-outlined text-base md:text-lg animate-pulse">emergency</span>
        <Link className="hover:underline flex items-center gap-1" to="/store-locator">
          Emergency? Visit Nelamangala or Bagalagunte store 24/7 →
        </Link>
      </div>
      
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <Link to="/" className="flex-shrink-0 group">
              <Logo className="h-12 md:h-14" />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map(link => (
                link.isHash ? (
                   <a 
                    key={link.name} 
                    href={link.path}
                    className="text-slate-600 hover:text-[#004d5e] font-bold text-sm transition-colors relative"
                   >
                     {link.name}
                   </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`text-sm font-bold transition-all relative ${isActive(link.path) ? 'text-[#004d5e]' : 'text-slate-500 hover:text-[#004d5e]'}`}
                  >
                    {link.name}
                    {isActive(link.path) && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4ecdc4] rounded-full animate-fade-in"></span>}
                  </Link>
                )
              ))}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] px-6 py-2.5 rounded-2xl font-bold shadow-lg shadow-green-900/10 transition-all flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-icons-outlined text-sm">chat</span> Order on WhatsApp
              </a>
            </div>

            <div className="lg:hidden flex items-center gap-4">
              <a href="https://wa.me/919876543210" className="bg-[#25D366] text-white p-2 rounded-xl text-xs font-bold">
                 <span className="material-icons-outlined">chat</span>
              </a>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <span className="material-icons-outlined text-2xl">{isMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-10 space-y-6 animate-fade-in-up shadow-2xl">
            {navLinks.map(link => (
              link.isHash ? (
                <a 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl font-display font-bold text-slate-900"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-2xl font-display font-bold text-slate-900"
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="pt-6 border-t border-slate-100">
               <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                className="block w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-center shadow-xl shadow-green-900/10"
              >
                Chat & Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
