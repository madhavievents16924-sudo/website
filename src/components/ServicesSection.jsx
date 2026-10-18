import React from 'react';
import { UtensilsCrossed, Flower2, Sparkles, PartyPopper, Check, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/eventData';

export default function ServicesSection({ onOpenBooking }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UtensilsCrossed': return <UtensilsCrossed className="w-8 h-8 text-amber-400" />;
      case 'Flower2': return <Flower2 className="w-8 h-8 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-amber-400" />;
      default: return <PartyPopper className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0b0f0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" /> Comprehensive Offerings
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Our Premium <span className="gold-gradient-text">Event Services</span>
          </h2>
          <p className="text-amber-100/70 text-base">
            From traditional banana leaf dining to opulent wedding decor, we manage every detail with precision and authentic Kerala warmth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover rounded-3xl p-6 border border-amber-500/20 flex flex-col justify-between relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full group-hover:bg-amber-500/10 transition-colors" />

              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-950/40 border border-amber-500/30 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                  {getIcon(service.icon)}
                </div>

                <div className="text-xs text-amber-400 font-medium mb-1">{service.titleMl}</div>
                <h3 className="font-heading font-bold text-xl text-amber-100 mb-3 group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-amber-100/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="space-y-2 pt-4 border-t border-amber-500/10 mb-6">
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-amber-200/80">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold py-2.5 rounded-xl border border-amber-500/30 text-xs flex items-center justify-center gap-1 transition"
                >
                  <span>Inquire Package</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
