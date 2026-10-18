import React from 'react';
import { ShieldCheck, HeartHandshake, Award, Sparkles } from 'lucide-react';

export default function WhyMadhavi() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Authentic Flavours",
      desc: "Prepared using traditional Kerala recipes with pure coconut oil, fresh Ghee, and zero artificial preservatives or chemical additives."
    },
    {
      icon: HeartHandshake,
      title: "Thoughtful Service",
      desc: "Uniformed hospitality staff trained to ensure warm, attentive, and prompt service so every single guest feels welcomed."
    },
    {
      icon: Award,
      title: "Professional Execution",
      desc: "Punctual setup, timed dining courses, and organized dining logistics tailored to your venue schedule."
    },
    {
      icon: Sparkles,
      title: "Made Around Your Occasion",
      desc: "Customized Sadya courses, Malabar non-vegetarian spreads, and artisan fruit sculpture statues tailored to your budget."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#E6F4F8] via-[#FAFDFD] to-[#F5FAFA] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
            <span className="w-8 h-px bg-[#0D7E73]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>OUR COMMITMENT</span>
            <span className="w-8 h-px bg-[#0D7E73]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] mb-4">
            Why Families <span className="font-serif-accent text-[#0D7E73] font-normal italic">Choose Madhavi</span>
          </h2>
          <p className="text-sm sm:text-base text-[#486568] font-light">
            Built on trust, authentic recipes, and consistent quality across Trithala, Palakkad and surrounding regions.
          </p>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="editorial-card rounded-3xl p-8 border border-[#38B6FF]/20 bg-white flex flex-col justify-between hover:shadow-xl hover:border-[#38B6FF]"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#E6F4F8] border border-[#38B6FF]/30 text-[#0D7E73] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#0D7E73]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#06292D] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#486568] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="w-12 h-1 bg-gradient-to-r from-[#0D7E73] to-[#38B6FF] rounded-full mt-6 opacity-60" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
