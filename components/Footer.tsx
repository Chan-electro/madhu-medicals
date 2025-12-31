
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialIcons = [
    { 
      name: 'Facebook', 
      url: '#', 
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> 
    },
    { 
      name: 'Instagram', 
      url: '#', 
      icon: <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    },
    { 
      name: 'Twitter', 
      url: '#', 
      icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C5 15.5 3 13 3 13s.5 0 1.5-.1C1.8 12 0 9.5 0 9.5s.3.1 1.4.1C-1.5 8-.2 4.5-.2 4.5s1.8 2 5.5 2.2C5 5 6.5 2 9 3c1.4-.3 2.5-1 2.5-1s-.5 1-1 2c1.2-.3 2.5-1 2.5-1"/>
    },
    { 
      name: 'WhatsApp', 
      url: 'https://wa.me/919876543210', 
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    }
  ];

  return (
    <footer className="bg-[#004d5e] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ecdc4] to-[#004d5e]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1">
            <div className="mb-8">
              <Logo light={true} className="h-14" />
            </div>
            <p className="text-teal-50/70 mb-10 leading-relaxed text-sm">Providing genuine medicines and personalized healthcare since 1986. Trusted by generations in Nelamangala and Dasarahalli.</p>
            <div className="flex gap-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4ecdc4] hover:text-[#004d5e] hover:-translate-y-1 transition-all duration-300"
                  aria-label={social.name}
                >
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                    {social.icon}
                   </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-8 text-[#4ecdc4] uppercase tracking-widest text-xs">Navigation</h3>
            <ul className="space-y-4 text-teal-50/70 text-sm font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Shop Products</Link></li>
              <li><a href="#/health-assistant" className="hover:text-white transition-colors">AI Health Assistant</a></li>
              <li><Link to="/store-locator" className="hover:text-white transition-colors">Store Locations</Link></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold mb-8 text-[#4ecdc4] uppercase tracking-widest text-xs">Branch 1: Nelamangala</h3>
              <p className="text-teal-50/70 text-sm mb-4 leading-relaxed">
                Near Town Hall, Nelamangala,<br/>Bangalore - 562123
              </p>
              <p className="text-teal-50/70 text-sm font-bold flex items-center gap-2">
                <span className="material-icons-outlined text-xs">call</span>
                +91 98765 43211
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-8 text-[#4ecdc4] uppercase tracking-widest text-xs">Branch 2: Dasarahalli</h3>
              <p className="text-teal-50/70 text-sm mb-4 leading-relaxed">
                Main Road, Bagalagunte,<br/>Dasarahalli, Bangalore - 560073
              </p>
              <p className="text-teal-50/70 text-sm font-bold flex items-center gap-2">
                <span className="material-icons-outlined text-xs">call</span>
                +91 98765 43212
              </p>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-50/40 text-xs">© 2024 Madhu Medicals. Your Community Health Partner Since 1986.</p>
          <div className="flex gap-6">
            <span className="text-[10px] uppercase tracking-widest text-teal-50/30">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest text-teal-50/30">Refunds & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
