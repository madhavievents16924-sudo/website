import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Tell Us About Your Event",
      desc: "Share your event date, location in Palakkad or Trithala, expected guest count, and celebration type."
    },
    {
      step: "02",
      title: "Build Your Experience",
      desc: "Select your menu preferences — Sadya course items, non-veg banquets, live stalls, or fruit statues."
    },
    {
      step: "03",
      title: "We Prepare",
      desc: "Our master chefs source fresh ingredients, prepare meals with pristine hygiene, and manage dining setup."
    },
    {
      step: "04",
      title: "You Celebrate",
      desc: "Madhavi's trained hospitality team handles guest service flawlessly so you can enjoy every moment."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F5FAFA] via-[#FAFDFD] to-[#E6F4F8] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
            <span className="w-8 h-px bg-[#0D7E73]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>SIMPLE & SEAMLESS</span>
            <span className="w-8 h-px bg-[#0D7E73]" />
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] mb-4">
            How It <span className="font-serif-accent text-[#0D7E73] font-normal italic">Works</span>
          </h2>
          <p className="text-sm sm:text-base text-[#486568] font-light">
            We make event planning effortless with clear communication and structured execution.
          </p>
        </div>

        {/* Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="editorial-card rounded-3xl p-6 border border-[#38B6FF]/20 bg-white relative flex flex-col justify-between hover:shadow-xl hover:border-[#38B6FF]"
            >
              <div>
                <div className="font-heading font-extrabold text-4xl text-[#0D7E73] mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl text-[#06292D] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#486568] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-[#0D7E73] to-[#38B6FF] rounded-full mt-6 opacity-60" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
