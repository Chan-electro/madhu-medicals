
import React, { useState, useEffect } from 'react';
import { BRANCHES } from '../constants';

const StoreLocator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState(BRANCHES[0]);

  return (
    <div className="min-h-screen bg-[#f0fdfa] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#4ecdc4] font-black uppercase tracking-widest text-xs mb-4 inline-block">Two Strategic Branches</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-[#004d5e] mb-6">Find Madhu Medicals</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Visit us in Nelamangala or Bagalagunte for genuine care and emergency medical support.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            {BRANCHES.map((branch) => (
              <button 
                key={branch.id}
                onClick={() => setSelectedBranch(branch)}
                className={`w-full text-left p-8 rounded-[2.5rem] transition-all duration-500 border-2 ${selectedBranch.id === branch.id ? 'bg-white border-[#004d5e] shadow-2xl shadow-teal-900/10' : 'bg-white/50 border-transparent hover:border-teal-200'}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${selectedBranch.id === branch.id ? 'bg-[#004d5e] text-[#4ecdc4]' : 'bg-teal-50 text-teal-600'}`}>
                    <span className="material-icons-outlined text-3xl">storefront</span>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${selectedBranch.id === branch.id ? 'text-[#004d5e]' : 'text-slate-900'}`}>{branch.name}</h3>
                    <p className="text-sm text-slate-500 font-medium">{branch.address}</p>
                  </div>
                </div>
                {selectedBranch.id === branch.id && (
                  <div className="mt-8 pt-8 border-t border-slate-50 space-y-4 animate-fade-in-up">
                    <div className="flex items-center gap-4 text-[#004d5e] font-bold">
                       <span className="material-icons-outlined">call</span>
                       <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 font-medium">
                       <span className="material-icons-outlined text-teal-500">schedule</span>
                       <span>Open Daily: 9:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex gap-4 pt-4">
                       <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="flex-1 bg-[#004d5e] text-white text-center py-4 rounded-2xl font-bold text-sm">Call Now</a>
                       <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} target="_blank" className="flex-1 border-2 border-[#004d5e] text-[#004d5e] text-center py-4 rounded-2xl font-bold text-sm">Directions</a>
                    </div>
                  </div>
                )}
              </button>
            ))}

            <div className="bg-[#004d5e] text-white p-10 rounded-[3rem] shadow-2xl">
               <h4 className="font-display text-2xl font-bold mb-4">Home Delivery?</h4>
               <p className="text-teal-100 text-sm mb-8 leading-relaxed">We deliver within 30-45 minutes in both local zones. Just WhatsApp your requirements.</p>
               <a href="https://wa.me/919876543210" className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-sm inline-flex items-center gap-2 hover:bg-[#128C7E] transition-all">
                  <span className="material-icons-outlined">chat</span>
                  WhatsApp Us Now
               </a>
            </div>
          </div>

          <div className="lg:col-span-7 h-[650px] rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white sticky top-28 bg-white">
            <iframe 
              src={selectedBranch.mapUrl} 
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              title={selectedBranch.name}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
