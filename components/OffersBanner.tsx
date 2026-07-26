
import React, { useState, useEffect } from 'react';

const OffersBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 reveal">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#004d5e] via-[#0f766e] to-[#004d5e] rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-teal-900/20 group">
        {/* Animated shimmer overlay */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none"></div>
        
        {/* Decorative elements */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#4ecdc4] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-400 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left flex-1">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
              <span className="material-icons-outlined text-amber-400 text-lg animate-pulse">local_fire_department</span>
              <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">Limited Time Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight">
              Flat <span className="text-[#4ecdc4]">20% OFF</span> on Seasonal Wellness
            </h2>
            <p className="text-teal-100/70 mt-3 text-sm md:text-base">Stock up on immunity boosters and winter essentials today.</p>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            {/* Countdown */}
            <div className="flex gap-2 md:gap-3">
              {[
                { value: pad(timeLeft.hours), label: 'Hrs' },
                { value: pad(timeLeft.minutes), label: 'Min' },
                { value: pad(timeLeft.seconds), label: 'Sec' },
              ].map((unit) => (
                <div key={unit.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-3 md:px-4 py-2 text-center border border-white/20 min-w-[56px]">
                  <span className="block text-xl md:text-2xl font-extrabold font-mono">{unit.value}</span>
                  <span className="text-[10px] text-teal-200 uppercase tracking-widest">{unit.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/919535967333?text=I%20want%20to%20claim%20the%2020%25%20off%20wellness%20offer"
              target="_blank"
              className="bg-[#4ecdc4] text-[#004d5e] px-8 py-3.5 rounded-xl font-bold shadow-lg hover:bg-white hover:scale-105 transition-all whitespace-nowrap text-sm"
            >
              Claim Offer Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersBanner;
