
import React from 'react';
import { useCountUp } from '../hooks/useAnimations';

const StatCounter: React.FC<{ target: number; suffix: string; label: string }> = ({ target, suffix, label }) => {
  const { count, ref } = useCountUp(target, 2000);
  return (
    <div ref={ref} className="text-center">
      <span className="block text-3xl md:text-4xl font-extrabold text-white">
        {count}{suffix}
      </span>
      <span className="text-sm text-teal-100/70 font-medium">{label}</span>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-16 lg:pb-32">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-teal-100/60 to-emerald-50/40 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-100/50 to-cyan-50/30 blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-100/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white shadow-md border border-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-8 gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Trusted by 5,000+ Families
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Your Health Partner{' '}
              <br className="hidden md:block" />
              <span className="gradient-text">Around the Corner</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Providing genuine medicines, expert advice, and a caring smile since 1986. We're more than just a pharmacy; we're your neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#/download-app" className="group bg-[#004d5e] hover:bg-[#003b47] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-teal-900/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:shadow-2xl animate-pulse-glow">
                <span className="material-icons-outlined group-hover:scale-110 transition-transform">file_download</span>
                Download App
              </a>
              <a href="https://wa.me/919535967333" target="_blank" className="group bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-500/20 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1 hover:shadow-2xl">
                <span className="material-icons-outlined group-hover:animate-bounce">chat</span>
                Order on WhatsApp
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-slate-500">
              <span className="material-icons-outlined text-amber-400 text-base">bolt</span>
              <span>Fast delivery within 2km radius</span>
              <span className="text-slate-300">|</span>
              <span className="material-icons-outlined text-emerald-400 text-base">verified</span>
              <span>100% Genuine</span>
            </div>
          </div>

          <div className="lg:col-span-6 mt-14 lg:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing ring behind image */}
              <div className="absolute inset-4 bg-gradient-to-tr from-[#4ecdc4]/30 to-[#004d5e]/20 rounded-[3rem] blur-2xl"></div>
              
              {/* Main image */}
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Friendly Pharmacist" 
                  className="rounded-[2.5rem] shadow-2xl rotate-1 border-4 border-white aspect-[4/5] object-cover w-full"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-[#004d5e]/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Floating card - top right */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-8 glass p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                  <div className="bg-emerald-100 p-2.5 rounded-xl text-emerald-600">
                    <span className="material-icons-outlined text-xl md:text-2xl">check_circle</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Status</p>
                    <p className="font-bold text-slate-900 text-sm">Prescription Ready</p>
                  </div>
                </div>

                {/* Floating card - bottom left */}
                <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 glass p-4 md:p-5 rounded-2xl shadow-xl flex items-center gap-3 animate-float-delayed">
                  <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                    <span className="material-icons-outlined text-xl md:text-2xl">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Delivery</p>
                    <p className="font-bold text-slate-900 text-sm">Arriving in 15m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-20 bg-[#004d5e] rounded-3xl p-8 md:p-10 shadow-2xl shadow-teal-900/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4ecdc4 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <StatCounter target={38} suffix="+" label="Years of Service" />
            <StatCounter target={50} suffix="K+" label="Happy Families" />
            <StatCounter target={2} suffix="" label="Store Locations" />
            <StatCounter target={10} suffix="K+" label="Products Available" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
