import React, { useState } from 'react';
import { Camera, Sparkles, X, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/eventData';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Catering Feasts', 'Stage Decor', 'Fruit Carvings'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#0d120e] relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
            <Camera className="w-4 h-4" /> Visual Showcase
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Moments & <span className="gold-gradient-text">Artisan Decorations</span>
          </h2>
          <p className="text-amber-100/70 text-base">
            Take a glance at our lavish banquet setups, authentic banana leaf feasts, stage decor, and famous carved fruit sculptures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition border ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg'
                  : 'bg-slate-900/60 text-amber-200/80 border-amber-500/20 hover:border-amber-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative rounded-3xl overflow-hidden border border-amber-500/20 glass-panel cursor-pointer h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-4 right-4 p-2 bg-slate-950/60 backdrop-blur-md rounded-full text-amber-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5" />
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded border border-amber-500/30 mb-2 inline-block">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-amber-100/70">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full glass-panel rounded-3xl overflow-hidden border border-amber-500/30 p-2">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-slate-900/80 rounded-full text-amber-300 hover:text-white border border-amber-500/30"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
            />

            <div className="p-6 text-center">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">{activeImage.category}</span>
              <h3 className="font-heading font-bold text-2xl text-white mb-1">{activeImage.title}</h3>
              <p className="text-sm text-amber-100/80">{activeImage.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
