
import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import OffersBanner from '../components/OffersBanner';
import { TESTIMONIALS, BRANCHES } from '../constants';
import { Link } from 'react-router-dom';

const TestimonialCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer.current!);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#f8fffe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        <div className="text-center mb-16">
          <span className="inline-block bg-amber-50 text-amber-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            What Our <span className="gradient-text">Neighbors Say</span>
          </h2>
        </div>

        {/* Desktop - show all */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="group bg-white p-10 rounded-3xl border border-slate-100 card-hover relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#4ecdc4] to-[#004d5e] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex text-amber-400 mb-6 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-icons-outlined text-base">
                    {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                  </span>
                ))}
                <span className="ml-3 text-xs text-slate-400 font-bold">{t.rating}/5</span>
              </div>
              <p className="text-slate-700 italic leading-relaxed text-lg mb-8">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-4 border-teal-50 shadow-md" />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div className="transition-all duration-500" style={{ transform: `translateX(-${current * 100}%)`, display: 'flex' }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-2">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                  <div className="flex text-amber-400 mb-4 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-icons-outlined text-base">
                        {i < Math.floor(t.rating) ? 'star' : 'star_half'}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic leading-relaxed mb-6">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-3 border-teal-50" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'w-8 bg-[#004d5e]' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://g.page/r/madhumedicals/review"
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#004d5e] hover:text-[#4ecdc4] transition-colors"
          >
            <span className="material-icons-outlined text-base">open_in_new</span>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  return (
    <main className="bg-[#f0fdfa]">
      <OffersBanner />
      <Hero />
      <Features />
      <Services />

      {/* WhatsApp ordering section */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto reveal">
          <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-20 shadow-xl border border-slate-100 relative overflow-hidden">
            {/* Decorative accents */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative z-10 lg:grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#128C7E] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                  Order with Ease
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                  Order Medicines on <span className="text-[#25D366]">WhatsApp</span>
                </h2>
                <div className="space-y-6">
                  {[
                    { step: '1', title: 'Snap your List', desc: 'Click a photo of your handwritten list or prescription.', icon: 'photo_camera' },
                    { step: '2', title: 'Send to us', desc: 'WhatsApp it to our nearest branch with your location.', icon: 'send' },
                    { step: '3', title: 'Relax & Recover', desc: 'Our pharmacists verify and deliver to your door.', icon: 'home' }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 md:gap-5 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center font-bold text-sm shadow-lg shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <span className="material-icons-outlined text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-slate-900 mb-1">Step {item.step}: {item.title}</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919535967333"
                  target="_blank"
                  className="mt-10 inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-green-500/20 hover:scale-105 hover:shadow-2xl active:scale-95 transition-all"
                >
                  <span className="material-icons-outlined">chat</span>
                  Chat & Order Now
                </a>
              </div>
              <div className="mt-12 lg:mt-0 relative hidden md:block">
                <div className="aspect-[4/5] bg-slate-100 rounded-[2.5rem] overflow-hidden rotate-2 shadow-2xl relative group">
                  <img src="https://images.pexels.com/photos/3987153/pexels-photo-3987153.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Pharmacist Support" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004d5e]/70 via-transparent to-transparent flex items-end p-8">
                    <p className="text-white font-bold text-lg">"Genuine care delivered to your doorstep."</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-float border border-emerald-50">
                  <div className="flex items-center gap-2">
                    <span className="material-icons-outlined text-2xl text-[#25D366]">verified</span>
                    <span className="font-bold text-sm text-slate-800">Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations teaser */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Visit Our <span className="gradient-text">Branches</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Proudly serving Nelamangala and Dasarahalli with two physical stores.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {BRANCHES.map((branch) => (
              <div key={branch.id} className="group bg-gradient-to-br from-[#f8fffe] to-white p-8 md:p-10 rounded-3xl border border-teal-50 card-hover">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#004d5e] mb-2">{branch.name}</h3>
                    <p className="text-slate-500 max-w-xs text-sm">{branch.address}</p>
                  </div>
                  <div className="bg-teal-50 text-[#004d5e] p-3.5 rounded-2xl group-hover:bg-[#004d5e] group-hover:text-white transition-colors duration-300">
                    <span className="material-icons-outlined text-2xl">storefront</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="material-icons-outlined text-base text-emerald-500">schedule</span>
                  <span className="font-medium">Open Daily: 9 AM - 10 PM</span>
                </div>
                <div className="flex gap-3">
                  <Link to="/store-locator" className="flex-1 bg-slate-100 text-slate-800 text-center py-3 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                    Find on Map
                  </Link>
                  <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="flex-1 bg-[#004d5e] text-white text-center py-3 rounded-xl font-bold text-sm shadow-lg shadow-teal-900/10 hover:bg-[#003b47] transition-colors">
                    Call Branch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* Download App CTA */}
      <section className="py-16 md:py-24 reveal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-[#004d5e] to-[#003b47] p-10 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl shadow-teal-900/30 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#4ecdc4] rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-400 rounded-full opacity-5 blur-3xl"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm mb-8">
                <span className="material-icons-outlined text-[#4ecdc4] text-base">phone_android</span>
                <span className="text-teal-100 font-medium">Available on Android & iOS</span>
              </div>
              <h3 className="text-2xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight">Download Our App<br />for Easy Ordering</h3>
              <p className="text-teal-100/80 text-base md:text-lg mb-8 md:mb-12 max-w-lg mx-auto">Get medicines delivered to your door with just a few taps. Exclusive app-only offers await!</p>
              <Link
                to="/download-app"
                className="bg-[#4ecdc4] text-[#004d5e] px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-3xl font-extrabold text-base md:text-lg shadow-xl hover:bg-white hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <span className="material-icons-outlined">file_download</span>
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
