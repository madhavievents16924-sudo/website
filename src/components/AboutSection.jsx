import React from 'react';
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, ChefHat } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-[#0d120e] overflow-hidden border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image Stack & Badges */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl group">
              <img
                src="/images/sadya.png"
                alt="Madhavi Events Traditional Sadya"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-panel rounded-2xl border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-amber-500/20 text-amber-400 rounded-xl">
                    <ChefHat className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-amber-200 text-lg">Authentic Kerala Master Chefs</h4>
                    <p className="text-xs text-amber-100/70">Trained culinary team & swift hospitality staff</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 w-56 h-48 rounded-2xl overflow-hidden border-4 border-[#0d120e] shadow-2xl">
              <img
                src="/images/fruitcarving.png"
                alt="Fruit Carving Statue"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl -z-0" />
          </div>

          {/* Right Column: Content */}
          <div>
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4" /> About Madhavi Events & Caterers
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-6">
              A Decade of <span className="gold-gradient-text">Authentic Culinary Excellence</span> in Thrithala, Palakkad
            </h2>

            <p className="text-amber-100/80 text-base leading-relaxed mb-6">
              Established in <strong className="text-amber-300 font-semibold">2015</strong> at Koottanad Road, Thrithala, <strong className="text-amber-200">Madhavi Events & Caterers</strong> has grown to become Palakkad's most trusted name in wedding catering, event styling, and grand banquets. Rated <strong className="text-amber-400 font-bold">4.8★ on Justdial</strong> by over 43 verified clients.
            </p>

            <p className="text-amber-100/70 text-sm leading-relaxed mb-8">
              We take pride in preparing our feasts using <strong className="text-amber-300">fresh, chemical-free ingredients</strong> with zero artificial preservatives. From our signature 26-item traditional banana leaf Sadya to our captivating hand-sculpted <strong className="text-amber-300">fruit & vegetable statues</strong>, we turn every event into an unforgettable celebration.
            </p>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">Swift & Friendly Staff</h4>
                  <p className="text-xs text-amber-100/60">Trained uniformed servers ensuring zero wait time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">100% Pure & Fresh</h4>
                  <p className="text-xs text-amber-100/60">Hygienic kitchen prep & authentic spices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">Sculpted Statues</h4>
                  <p className="text-xs text-amber-100/60">Artistic watermelon peacocks & floral carvings.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-200">Affordable Pricing</h4>
                  <p className="text-xs text-amber-100/60">Transparent pricing worth every single rupee.</p>
                </div>
              </div>
            </div>

            {/* Address Banner */}
            <div className="p-4 rounded-2xl glass-panel border border-amber-500/30 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Kitchen & Registered Office</div>
                <div className="text-sm font-semibold text-amber-100">{BUSINESS_INFO.location}</div>
              </div>
              <a
                href={BUSINESS_INFO.googleMapUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold px-3 py-2 rounded-xl border border-amber-500/40 transition shrink-0"
              >
                View Map 📍
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
