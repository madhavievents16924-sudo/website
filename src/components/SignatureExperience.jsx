import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function SignatureExperience({ onOpenEnquiry }) {
  return (
    <section id="experiences" className="py-24 bg-[#05262B] text-white relative overflow-hidden">
      
      {/* Decorative Subtle Peacock Grid & Blurs */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38B6FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0D7E73]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative & CTA */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#7DD3FC]">
              <span className="w-8 h-px bg-[#38B6FF]" />
              <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
              <span>THE SIGNATURE SADYA</span>
            </div>

            {/* Headline */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl leading-[1.12] text-white">
              Authentic Kerala Sadya <br />
              <span className="font-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-[#38B6FF] via-[#7DD3FC] to-[#2DD4BF] font-normal italic">
                Crafted for Your Special Day
              </span>
            </h2>

            {/* Cyan-Peacock Visual Line Accent */}
            <div className="w-28 h-1 bg-gradient-to-r from-[#38B6FF] via-[#0D7E73] to-transparent rounded-full" />

            {/* Description */}
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-light">
              Experience the unmatched elegance of authentic Kerala dining. Served traditionally on crisp green banana leaves with 26 handcrafted dishes, Rosematta rice, fresh coconut chutneys, and piping hot Ada & Palada Payasam prepared in brass Uruli vessels.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] hover:from-[#065F56] hover:to-[#0284C7] text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all shadow-xl hover:scale-105 transform flex items-center gap-3 group"
              >
                <span>Discover the Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Magazine Style Featured Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-2xl group">
              <img
                src="/images/sadya.png"
                alt="Authentic 26-Item Kerala Sadya Feast"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#073B42]/90 backdrop-blur-md rounded-2xl border border-[#38B6FF]/30">
                <div className="text-xs text-[#7DD3FC] font-mono uppercase tracking-widest font-bold">Heritage Recipe</div>
                <div className="font-heading font-bold text-base sm:text-lg text-white mt-0.5">26 Course Feast Served on Fresh Banana Leaf</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
