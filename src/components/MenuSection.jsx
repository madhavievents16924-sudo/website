import React, { useState } from 'react';
import { Sparkles, Utensils, Check, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, BUSINESS_INFO } from '../data/eventData';

export default function MenuSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItems, setSelectedItems] = useState([1]); // default selects Royal Sadya

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const toggleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const calculateTotalPerHead = () => {
    return selectedItems.reduce((total, id) => {
      const item = MENU_ITEMS.find(m => m.id === id);
      return total + (item ? item.pricePerHead : 0);
    }, 0);
  };

  const selectedItemObjects = MENU_ITEMS.filter(item => selectedItems.includes(item.id));

  const handleSendCustomMenuWhatsApp = () => {
    const itemNames = selectedItemObjects.map(i => i.name).join(', ');
    const msg = `Hello Madhavi Events! I crafted a custom menu selection:\n- Items: ${itemNames}\n- Est. Per Head Rate: ₹${calculateTotalPerHead()}\nCan you provide availability & formal quotation?`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-[#0d120e] relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
            <Utensils className="w-4 h-4" /> Culinary Heritage
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Authentic <span className="gold-gradient-text">Kerala Feast & Menu Selection</span>
          </h2>
          <p className="text-amber-100/70 text-base">
            Prepared with traditional recipes, pure coconut oil, fresh Ghee, and zero artificial preservatives. Select dishes to build your custom event banquet.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/20 scale-105'
                  : 'bg-slate-900/60 text-amber-200/80 border-amber-500/20 hover:border-amber-500/50 hover:text-amber-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map(item => {
            const isSelected = selectedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`glass-panel rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                  isSelected ? 'border-amber-400 ring-2 ring-amber-400/30 shadow-2xl bg-amber-950/20' : 'border-amber-500/20'
                }`}
              >
                <div>
                  {/* Card Image Header */}
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-[11px] px-3 py-1 rounded-full shadow">
                      {item.badge}
                    </span>

                    {item.pricePerHead > 0 && (
                      <span className="absolute bottom-3 right-4 bg-slate-950/80 backdrop-blur-md text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/30">
                        ₹{item.pricePerHead} / plate
                      </span>
                    )}
                    {item.fixedPrice > 0 && (
                      <span className="absolute bottom-3 right-4 bg-slate-950/80 backdrop-blur-md text-amber-300 font-bold text-xs px-3 py-1 rounded-full border border-amber-500/30">
                        ₹{item.fixedPrice} display setup
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="text-xs text-amber-400 font-medium mb-1">{item.malayalam}</div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{item.name}</h3>
                    <p className="text-amber-100/70 text-xs leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>{item.itemsCount} Variety Course Items</span>
                    </div>
                  </div>
                </div>

                {/* Footer Selection Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => toggleSelectItem(item.id)}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 ${
                      isSelected
                        ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg'
                        : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-4 h-4" /> Added to Custom Menu
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" /> Add to Custom Menu
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Menu Summary Floating Bar */}
        <div className="glass-panel rounded-3xl p-6 border-2 border-amber-500/40 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-amber-950/40 via-slate-900/90 to-amber-950/40">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-2xl shrink-0">
              <ShoppingBag className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Your Custom Menu Selection</div>
              <div className="font-heading font-bold text-lg text-white">
                {selectedItems.length} Package Categories Selected
              </div>
              <div className="text-xs text-amber-100/70">
                Estimated Catering Base: <strong className="text-amber-300">₹{calculateTotalPerHead()} / guest</strong>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleSendCustomMenuWhatsApp}
              className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl shadow-lg text-xs flex items-center justify-center gap-2"
            >
              <span>Send Menu on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenBooking}
              className="flex-1 md:flex-none bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg text-xs"
            >
              Book Catering Dates
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
