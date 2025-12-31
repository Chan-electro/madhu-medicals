
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">How We Can Help You</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive pharmaceutical services tailored for your convenience and well-being.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <a 
              key={service.id} 
              href={service.link}
              className="glass p-8 rounded-3xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#004d5e] shadow-sm group-hover:bg-[#004d5e] group-hover:text-white transition-colors duration-300">
                <span className="material-icons-outlined text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.description}</p>
              <div className="flex items-center text-[#004d5e] text-xs font-bold uppercase tracking-widest gap-2">
                Learn More <span className="material-icons-outlined text-sm">arrow_forward</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
