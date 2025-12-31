
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-40">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-teal-100/50 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-emerald-50 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4ecdc4] mr-2 animate-pulse"></span>
              Trusted by 5,000+ Families
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Your Health Partner <br />
              <span className="text-[#004d5e]">Around the Corner</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Providing genuine medicines, expert advice, and a caring smile since 1986. We're more than just a pharmacy; we're your neighbors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#004d5e] hover:bg-[#003b47] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-teal-900/20 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                <span className="material-icons-outlined group-hover:animate-bounce">file_download</span>
                Download App
              </button>
              <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <span className="material-icons-outlined">chat</span>
                Order on WhatsApp
              </button>
            </div>
            <p className="mt-6 text-sm text-slate-500 italic flex items-center justify-center lg:justify-start gap-2">
              <span className="material-icons-outlined text-sm">bolt</span>
              Fast delivery within 2km radius
            </p>
          </div>

          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4ecdc4]/20 to-[#004d5e]/20 rounded-full blur-3xl"></div>
              
              {/* Main Visual */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                  alt="Friendly Pharmacist" 
                  className="rounded-[3rem] shadow-2xl rotate-2 border-4 border-white aspect-[4/5] object-cover"
                />
                
                {/* Floating Glass Cards */}
                <div className="absolute -top-6 -right-6 md:-right-12 glass p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <span className="material-icons-outlined text-2xl md:text-3xl">check_circle</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">Status</p>
                    <p className="font-bold text-slate-900 text-sm md:text-base">Prescription Ready</p>
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-6 md:-left-12 glass p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-float-delayed">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <span className="material-icons-outlined text-2xl md:text-3xl">local_shipping</span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase font-bold tracking-widest">Delivery</p>
                    <p className="font-bold text-slate-900 text-sm md:text-base">Arriving in 15m</p>
                  </div>
                </div>
              </div>

              {/* Animated Scooter Graphic */}
              <div className="absolute -bottom-24 w-full h-12 overflow-hidden opacity-30 pointer-events-none">
                <div className="delivery-scooter flex items-center gap-2 text-[#004d5e]">
                   <span className="material-icons-outlined text-3xl">two_wheeler</span>
                   <div className="h-[2px] w-20 bg-current"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
