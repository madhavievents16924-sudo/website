import React from 'react';
import { MapPin, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export default function ServiceArea() {
  const regions = [
    "Tamil Nadu",
    "Karnataka",
    "Pattambi & Ottapalam",
    "Shornur & Cherpulassery",
    "Thrissur District",
    "Malappuram Border Regions"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAFDFD] via-[#F5FAFA] to-[#E6F4F8] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="editorial-card rounded-3xl p-8 sm:p-12 border border-[#38B6FF]/25 bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0D7E73]">
                <MapPin className="w-4 h-4 text-[#38B6FF]" />
                <span>LOCAL COVERAGE</span>
              </div>
              
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#06292D]">
                Serving <span className="font-serif-accent text-[#0D7E73] font-normal italic">Kerala & Beyond</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#486568] font-light leading-relaxed">
                Madhavi Events & Caterers provides full-service event management and traditional catering across Kerala, Karnataka, and Tamil Nadu.
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0D7E73] hover:text-[#06292D] transition"
                >
                  <Navigation className="w-4 h-4 text-[#38B6FF]" />
                  <span>Open Directions on Google Maps ↗</span>
                </a>
              </div>
            </div>

            {/* Right Column: Region Pills */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {regions.map((region, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-[#38B6FF]/25 bg-[#E6F4F8] text-xs font-bold text-[#06292D] text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
