
import React from 'react';
import { SERVICES } from '../constants';

const serviceColors = [
  { gradient: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/20', hoverBg: 'group-hover:bg-emerald-50' },
  { gradient: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/20', hoverBg: 'group-hover:bg-blue-50' },
  { gradient: 'from-amber-500 to-orange-600', shadow: 'shadow-amber-500/20', hoverBg: 'group-hover:bg-amber-50' },
  { gradient: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/20', hoverBg: 'group-hover:bg-rose-50' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#f8fffe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            How We Can <span className="gradient-text">Help You</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Comprehensive pharmaceutical services tailored for your convenience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {SERVICES.map((service, i) => (
            <a 
              key={service.id} 
              href={service.link}
              className="group relative bg-white p-8 rounded-3xl border border-slate-100 card-hover overflow-hidden"
            >
              {/* Gradient accent at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${serviceColors[i].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${serviceColors[i].gradient} text-white shadow-lg ${serviceColors[i].shadow} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <span className="material-icons-outlined text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#004d5e] transition-colors">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center text-[#004d5e] text-xs font-bold uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                <span>Explore</span>
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
