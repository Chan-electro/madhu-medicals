
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#4ecdc4] uppercase mb-4">Our Legacy</h2>
        <h3 className="text-3xl md:text-4xl font-display font-bold text-[#004d5e] mb-16">Serving the Community Since 1986</h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group p-6 rounded-3xl hover:bg-slate-50 transition-colors duration-300">
              <div className={`w-20 h-20 mx-auto rounded-3xl flex items-center justify-center mb-8 shadow-inner ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                <span className="material-icons-outlined text-4xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
