
import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import OffersBanner from '../components/OffersBanner';
import { TESTIMONIALS, BRANCHES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="bg-[#f0fdfa]">
      <OffersBanner />
      <Hero />
      <Features />
      <Services />

      {/* Modern WhatsApp ordering section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[3.5rem] p-8 md:p-20 shadow-2xl shadow-teal-900/5 relative overflow-hidden border border-teal-50">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
            <div className="relative z-10 lg:grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block bg-[#25D366]/10 text-[#128C7E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">Order with Ease</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-[#004d5e] mb-8 leading-tight">Order Medicines on <span className="text-[#25D366]">WhatsApp</span> in 3 Simple Steps</h2>
                <div className="space-y-8">
                  {[
                    { step: '01', title: 'Snap your List', desc: 'Click a photo of your handwritten list or prescription.' },
                    { step: '02', title: 'Send to us', desc: 'WhatsApp it to our nearest branch with your location.' },
                    { step: '03', title: 'Relax & Recover', desc: 'Our pharmacists verify and deliver to your door.' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-6 group">
                      <div className="text-4xl font-display font-black text-slate-100 group-hover:text-emerald-50 transition-colors duration-300">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919535967333"
                  target="_blank"
                  className="mt-12 inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-3xl font-bold text-lg shadow-xl shadow-green-500/30 hover:scale-105 active:scale-95 transition-all"
                >
                  <span className="material-icons-outlined">chat</span>
                  Chat & Order Now
                </a>
              </div>
              <div className="mt-16 lg:mt-0 relative">
                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden rotate-3 shadow-2xl relative">
                  <img src="https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800" alt="Pharmacist Support" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d5e]/80 to-transparent flex items-end p-10">
                    <p className="text-white font-bold italic">"Genuine care delivered to your doorstep."</p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl animate-float">
                  <span className="material-icons-outlined text-4xl text-[#25D366]">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#004d5e] mb-4">Visit Our Branches</h2>
            <p className="text-slate-500">Proudly serving Nelamangala and Dasarahalli with two physical stores.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="glass p-10 rounded-[2.5rem] border-teal-50 group hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#004d5e] mb-2">{branch.name}</h3>
                    <p className="text-slate-600 max-w-xs">{branch.address}</p>
                  </div>
                  <div className="bg-teal-50 text-[#004d5e] p-4 rounded-2xl group-hover:bg-[#004d5e] group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-outlined text-3xl">storefront</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link to="/store-locator" className="bg-slate-100 text-slate-800 px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">Find on Map</Link>
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="bg-[#004d5e] text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/10">Call Branch</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-slate-900 mb-16">What Our Neighbors Say</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-10 rounded-[3rem] shadow-sm border border-white hover:shadow-xl transition-all duration-500">
                <div className="flex text-amber-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-icons-outlined text-sm">
                      {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 italic leading-relaxed text-lg mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-[#4ecdc4]/20" />
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#004d5e] p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-3xl shadow-teal-900/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-5xl font-display font-bold mb-6 md:mb-8 leading-tight">Download Our App <br />for Easy Ordering</h3>
              <p className="text-teal-100 text-base md:text-lg mb-8 md:mb-12 max-w-lg mx-auto opacity-80">Get medicines delivered to your door with just a few taps. Available on Android and iOS.</p>
              <Link
                to="/download-app"
                className="bg-[#4ecdc4] text-[#004d5e] px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-black text-base md:text-lg shadow-2xl hover:bg-white hover:scale-105 transition-all inline-block"
              >
                Get the App
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
