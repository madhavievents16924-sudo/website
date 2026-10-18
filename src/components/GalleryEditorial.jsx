import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_EDITORIAL } from '../data/eventData';

export default function GalleryEditorial() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filters = ['All', 'Weddings', 'Sadya', 'Food', 'Events', 'Service'];

  const filteredItems = activeFilter === 'All'
    ? GALLERY_EDITORIAL
    : GALLERY_EDITORIAL.filter(item => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  const activePhoto = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-[#E6F4F8] via-[#FAFDFD] to-[#F5FAFA] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
            <span className="w-8 h-px bg-[#0D7E73]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>VISUAL PORTFOLIO</span>
            <span className="w-8 h-px bg-[#0D7E73]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] mb-4">
            A Glimpse of <span className="font-serif-accent text-[#0D7E73] font-normal italic">the Celebrations</span>
          </h2>
          <p className="text-sm sm:text-base text-[#486568] font-light">
            Real dining arrangements, authentic banana leaf feasts, stage decor, and guest hospitality across Trithala and Palakkad.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => { setActiveFilter(filter); setLightboxIndex(null); }}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-300 border ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] text-white border-[#0D7E73] shadow-md'
                  : 'bg-white text-[#486568] border-[#38B6FF]/30 hover:border-[#38B6FF] hover:text-[#06292D]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-3xl overflow-hidden border border-[#38B6FF]/25 shadow-md cursor-pointer ${
                index % 3 === 0 ? 'h-[380px]' : 'h-[300px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/85 via-[#05262B]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute top-4 right-4 p-2.5 bg-[#05262B]/60 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity border border-[#38B6FF]/30">
                <ZoomIn className="w-4 h-4 text-[#38B6FF]" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#7DD3FC] bg-[#05262B]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#38B6FF]/30 inline-block mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#7DD3FC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 font-light mt-1 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 bg-[#05262B]/95 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1))}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1))}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center">
            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl border border-[#38B6FF]/30"
            />
            <div className="text-center mt-6 text-white space-y-1">
              <span className="text-xs text-[#7DD3FC] font-mono font-bold uppercase tracking-widest">{activePhoto.category}</span>
              <h3 className="font-heading font-bold text-2xl text-white">{activePhoto.title}</h3>
              <p className="text-xs text-white/75 font-light">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
