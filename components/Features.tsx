
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  const bentoColors = [
    { bg: 'bg-gradient-to-br from-teal-50 to-emerald-50', icon: 'bg-teal-600 text-white', border: 'border-teal-100' },
    { bg: 'bg-gradient-to-br from-amber-50 to-orange-50', icon: 'bg-amber-500 text-white', border: 'border-amber-100' },
    { bg: 'bg-gradient-to-br from-sky-50 to-blue-50', icon: 'bg-sky-600 text-white', border: 'border-sky-100' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-block bg-accent-50 text-accent-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Our Legacy
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Serving the Community<br className="hidden md:block" />
            <span className="gradient-text"> Since 1986</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              className={`group relative p-8 md:p-10 rounded-3xl border ${bentoColors[i].border} ${bentoColors[i].bg} card-hover overflow-hidden ${i === 0 ? 'md:row-span-1' : ''}`}
            >
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 bg-current group-hover:opacity-20 transition-opacity"></div>
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${bentoColors[i].icon} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <span className="material-icons-outlined text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              
              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[#4ecdc4] to-[#004d5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10 reveal">
          {[
            { icon: 'shield', label: 'Licensed Pharmacy' },
            { icon: 'workspace_premium', label: 'ISO Certified' },
            { icon: 'thumb_up', label: '5-Star Rated' },
            { icon: 'eco', label: 'Eco Packaging' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
              <span className="material-icons-outlined text-lg text-[#4ecdc4]">{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
