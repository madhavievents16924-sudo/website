import React from 'react';
import { Sparkles } from 'lucide-react';

export default function EventExperience() {
  const moments = [
    {
      title: "Preparation with Care",
      desc: "Fresh morning ingredients, handcrafted spicing, and clean kitchens.",
      image: "/images/kitchen.png"
    },
    {
      title: "Impeccable Dining Setup",
      desc: "Clean banana leaf arrangements, polished cutlery, and warm decor.",
      image: "/images/hero.png"
    },
    {
      title: "Attentive Hospitality",
      desc: "Uniformed servers trained to anticipate every guest's need.",
      image: "/images/serving.png"
    },
    {
      title: "Cherished Moments",
      desc: "Creating joyful memories for families across Palakkad & Trithala.",
      image: "/images/wedding.png"
    }
  ];

  return (
    <section className="py-24 bg-[#05262B] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#7DD3FC]">
            <span className="w-8 h-px bg-[#38B6FF]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>THE GUEST JOURNEY</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white leading-[1.12]">
            More Than Catering. <br />
            <span className="font-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-[#38B6FF] via-[#7DD3FC] to-[#2DD4BF] font-normal italic">
              An Experience for Your Guests.
            </span>
          </h2>
          <p className="text-white/85 text-sm font-light leading-relaxed">
            From the first morning welcome drink to the final sweet serving of payasam, every moment is orchestrated with authentic Kerala warmth.
          </p>
        </div>

        {/* Horizontal Storytelling Cards Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((item, index) => (
            <div
              key={index}
              className="bg-[#073B42]/80 backdrop-blur-md border border-[#38B6FF]/25 rounded-3xl overflow-hidden group hover:border-[#38B6FF] transition-all duration-500 shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#05262B]/80 backdrop-blur-md text-[#7DD3FC] border border-[#38B6FF]/30 font-mono text-xs font-bold px-3 py-1 rounded-full">
                  0{index + 1}
                </span>
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#7DD3FC] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
