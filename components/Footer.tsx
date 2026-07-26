
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialIcons = [
    {
      name: 'Facebook',
      url: '#',
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    },
    {
      name: 'Instagram',
      url: '#',
      icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919535967333',
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    }
  ];

  return (
    <footer className="wave-divider bg-[#004d5e] text-white pt-28 pb-10 overflow-hidden relative mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-8">
              <Logo light={true} className="h-14" />
            </div>
            <p className="text-teal-50/60 mb-8 leading-relaxed text-sm">Providing genuine medicines and personalized healthcare since 1986. Trusted by generations.</p>
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4ecdc4] hover:text-[#004d5e] hover:border-[#4ecdc4] hover:-translate-y-1 transition-all duration-300"
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
            <h3 className="text-[#4ecdc4] uppercase tracking-widest text-xs font-bold mb-8">Navigation</h3>
            <ul className="space-y-4 text-teal-50/70 text-sm font-medium">
              <li><Link to="/" className="hover:text-white hover:pl-1 transition-all duration-200">Home</Link></li>
              <li><Link to="/download-app" className="hover:text-white hover:pl-1 transition-all duration-200">Download App</Link></li>
              <li><Link to="/about-us" className="hover:text-white hover:pl-1 transition-all duration-200">About Us</Link></li>
              <li><Link to="/store-locator" className="hover:text-white hover:pl-1 transition-all duration-200">Store Locations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#4ecdc4] uppercase tracking-widest text-xs font-bold mb-8">Nelamangala</h3>
            <p className="text-teal-50/70 text-sm mb-4 leading-relaxed">
              Near Town Hall, Nelamangala,<br />Bangalore - 562123
            </p>
            <p className="text-teal-50/70 text-sm font-bold flex items-center gap-2">
              <span className="material-icons-outlined text-xs text-[#4ecdc4]">call</span>
              +91 95359 67333
            </p>
          </div>

          <div>
            <h3 className="text-[#4ecdc4] uppercase tracking-widest text-xs font-bold mb-8">Bagalagunte</h3>
            <p className="text-teal-50/70 text-sm mb-4 leading-relaxed">
              Main Road, Bagalagunte,<br />Dasarahalli, Bangalore - 560073
            </p>
            <p className="text-teal-50/70 text-sm font-bold flex items-center gap-2">
              <span className="material-icons-outlined text-xs text-[#4ecdc4]">call</span>
              +91 95359 67333
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-teal-50/40 text-xs">&copy; 2024 Madhu Medicals. Your Community Health Partner Since 1986.</p>
          <div className="flex gap-6">
            <span className="text-[10px] uppercase tracking-widest text-teal-50/30 cursor-pointer hover:text-teal-50/60 transition-colors">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest text-teal-50/30 cursor-pointer hover:text-teal-50/60 transition-colors">Refunds & Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
