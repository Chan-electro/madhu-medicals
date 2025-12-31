
import React from 'react';

const OffersBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-6 md:p-10 text-white shadow-xl group">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="inline-block bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">Limited Time Offer</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold">Flat 20% OFF on Seasonal Wellness</h2>
            <p className="text-teal-50 mt-2">Stock up on immunity boosters and winter essentials today.</p>
          </div>
          <button className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-teal-50 transition-colors whitespace-nowrap">
            Claim Offer
          </button>
        </div>
        {/* Background Pills Animation */}
        <div className="absolute -top-10 -right-10 opacity-10 animate-float-delayed">
           <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
             <rect x="50" y="50" width="100" height="40" rx="20" fill="white" transform="rotate(-45 50 50)"/>
           </svg>
        </div>
        <div className="absolute -bottom-10 -left-10 opacity-10 animate-float">
           <svg width="150" height="150" viewBox="0 0 200 200" fill="none">
             <rect x="50" y="50" width="100" height="40" rx="20" fill="white" transform="rotate(25 50 50)"/>
           </svg>
        </div>
      </div>
    </div>
  );
};

export default OffersBanner;
