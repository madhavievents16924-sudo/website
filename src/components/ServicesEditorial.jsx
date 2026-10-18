import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { EDITORIAL_SERVICES } from '../data/eventData';

export default function ServicesEditorial({ onOpenEnquiry }) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-[#E6F4F8] via-[#FAFDFD] to-[#F5FAFA] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
              <span className="w-8 h-px bg-[#0D7E73]" />
              <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
              <span>SERVICES & OFFERINGS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D]">
              What We <span className="font-serif-accent text-[#0D7E73] font-normal italic">Create</span>
            </h2>
          </div>
          <p className="text-sm text-[#486568] max-w-md font-light">
            Thoughtfully planned culinary services and event coordination designed around your family traditions and guests.
          </p>
        </div>

        {/* Large Horizontal Editorial Service Blocks */}
        <div className="space-y-6">
          {EDITORIAL_SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={onOpenEnquiry}
              className="editorial-card rounded-3xl p-6 sm:p-8 cursor-pointer group transition-all duration-500 relative overflow-hidden bg-white border border-[#38B6FF]/20 hover:border-[#38B6FF] hover:shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Number & Title (5 cols) */}
                <div className="lg:col-span-5 flex items-start gap-6">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D7E73]/40 group-hover:text-[#0D7E73] transition-colors">
                    {service.number}
                  </span>
                  <div>
                    <div className="text-xs text-[#0D7E73] font-mono font-bold uppercase tracking-widest mb-1">
                      {service.subtitle}
                    </div>
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#06292D] group-hover:text-[#0D7E73] transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description (4 cols) */}
                <div className="lg:col-span-4">
                  <p className="text-xs sm:text-sm text-[#486568] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Image & Arrow Action (3 cols) */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                  <div className="w-28 h-20 sm:w-36 sm:h-24 rounded-2xl overflow-hidden border border-[#38B6FF]/30 shrink-0 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#E6F4F8] border border-[#38B6FF]/30 group-hover:bg-[#0D7E73] group-hover:text-white group-hover:border-[#0D7E73] flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-5 h-5 text-[#06292D] group-hover:text-white" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
