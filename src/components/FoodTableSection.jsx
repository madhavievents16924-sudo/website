import React from 'react';
import { Sparkles } from 'lucide-react';
import { FOOD_GRID_IMAGES } from '../data/eventData';

export default function FoodTableSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F5FAFA] via-[#FAFDFD] to-[#E6F4F8] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
            <span className="w-8 h-px bg-[#0D7E73]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>CULINARY CRAFTSMANSHIP</span>
            <span className="w-8 h-px bg-[#0D7E73]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] mb-4">
            From the Kitchen to <span className="font-serif-accent text-[#0D7E73] font-normal italic">the Table</span>
          </h2>
          <p className="text-sm sm:text-base text-[#486568] font-light">
            Every dish is cooked fresh with traditional spices, pure coconut oil, and authentic recipes passed down through generations.
          </p>
        </div>

        {/* Editorial Asymmetric Food Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Hero Food Image (7 cols) */}
          <div className="md:col-span-7 rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-lg group relative h-[420px]">
            <img
              src={FOOD_GRID_IMAGES[0].image}
              alt={FOOD_GRID_IMAGES[0].alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#7DD3FC] bg-[#05262B]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#38B6FF]/30 font-bold">
                {FOOD_GRID_IMAGES[0].category}
              </span>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-2.5">
                {FOOD_GRID_IMAGES[0].title}
              </h3>
            </div>
          </div>

          {/* Secondary Vertical Food Image (5 cols) */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-lg group relative h-[420px]">
            <img
              src={FOOD_GRID_IMAGES[1].image}
              alt={FOOD_GRID_IMAGES[1].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] uppercase tracking-widest font-mono text-[#7DD3FC] bg-[#05262B]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#38B6FF]/30 font-bold">
                {FOOD_GRID_IMAGES[1].category}
              </span>
              <h3 className="font-heading font-bold text-xl text-white mt-2.5">
                {FOOD_GRID_IMAGES[1].title}
              </h3>
            </div>
          </div>

          {/* Row 2: Three Column Spread */}
          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-md group relative h-64">
            <img
              src={FOOD_GRID_IMAGES[2].image}
              alt={FOOD_GRID_IMAGES[2].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-heading font-bold text-base text-white">{FOOD_GRID_IMAGES[2].title}</h4>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-md group relative h-64">
            <img
              src={FOOD_GRID_IMAGES[3].image}
              alt={FOOD_GRID_IMAGES[3].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-heading font-bold text-base text-white">{FOOD_GRID_IMAGES[3].title}</h4>
            </div>
          </div>

          <div className="md:col-span-4 rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-md group relative h-64">
            <img
              src={FOOD_GRID_IMAGES[4].image}
              alt={FOOD_GRID_IMAGES[4].alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h4 className="font-heading font-bold text-base text-white">{FOOD_GRID_IMAGES[4].title}</h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
