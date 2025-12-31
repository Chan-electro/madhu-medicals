
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f0fdfa] pb-24">
      {/* Search & Cart Header */}
      <div className="bg-white border-b border-teal-100 py-6 sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:max-w-md">
            <span className="material-icons-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              type="text" 
              placeholder="Search vitamins, medicines, equipment..." 
              className="w-full pl-12 pr-6 py-3 bg-slate-50 border-none focus:ring-2 focus:ring-[#004d5e] rounded-2xl"
            />
          </div>
          <div className="flex items-center gap-8 overflow-x-auto hide-scrollbar w-full md:w-auto">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#004d5e] text-white' : 'text-slate-500 hover:text-[#004d5e]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative cursor-pointer group">
             <div className="bg-teal-50 p-3 rounded-2xl text-[#004d5e] group-hover:bg-[#004d5e] group-hover:text-white transition-all">
                <span className="material-icons-outlined">shopping_bag</span>
             </div>
             {cartCount > 0 && (
               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-white">{cartCount}</span>
             )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        <h1 className="text-3xl font-display font-bold text-[#004d5e] mb-2">Our Catalog</h1>
        <p className="text-slate-500 mb-10">Genuine products sourced directly for your wellbeing.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all group animate-fade-in-up">
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <button className="absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="material-icons-outlined text-sm text-[#004d5e]">favorite_border</span>
                </button>
              </div>
              <div className="px-2">
                <span className="text-[10px] font-bold text-[#4ecdc4] uppercase tracking-widest">{product.category}</span>
                <h3 className="font-bold text-slate-900 mt-1 mb-3 group-hover:text-[#004d5e] transition-colors">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-slate-900">₹{product.price}</span>
                  <button 
                    onClick={() => setCartCount(prev => prev + 1)}
                    className="bg-[#004d5e] text-white p-2.5 rounded-xl hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-teal-900/10"
                  >
                    <span className="material-icons-outlined text-sm">add_shopping_cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
