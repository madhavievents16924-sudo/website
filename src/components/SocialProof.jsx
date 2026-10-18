import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { VERIFIED_REVIEWS, BUSINESS_INFO } from '../data/eventData';

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? VERIFIED_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === VERIFIED_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const current = VERIFIED_REVIEWS[currentIndex];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-[#FAFDFD] via-[#F5FAFA] to-[#E6F4F8] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73] mb-3">
              <span className="w-8 h-px bg-[#0D7E73]" />
              <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
              <span>TESTIMONIALS & REVIEWS</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D]">
              Loved by <span className="font-serif-accent text-[#0D7E73] font-normal italic">Our Guests</span>
            </h2>
          </div>

          {/* Public Justdial Trust Rating Badge */}
          <a
            href={BUSINESS_INFO.justdialUrl}
            target="_blank"
            rel="noreferrer"
            className="editorial-card px-5 py-3 rounded-2xl flex items-center gap-3 text-xs border border-[#38B6FF]/30 hover:border-[#38B6FF] transition bg-white shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E6F4F8] border border-[#38B6FF]/30 text-[#0D7E73] flex items-center justify-center font-bold font-heading text-sm">
              4.8★
            </div>
            <div>
              <div className="font-bold text-[#06292D] font-heading text-sm">4.8 / 5.0 Rating</div>
              <div className="text-[#486568] text-[11px]">Based on 43 Justdial Reviews</div>
            </div>
          </a>
        </div>

        {/* Editorial Carousel Layout */}
        <div className="editorial-card rounded-3xl p-8 sm:p-12 border border-[#38B6FF]/25 bg-white relative shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Large Testimonial Quote (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <Quote className="w-12 h-12 text-[#38B6FF]/40" />
              
              <p className="font-heading font-normal text-xl sm:text-3xl text-[#06292D] leading-relaxed italic">
                "{current.comment}"
              </p>

              <div className="flex items-center gap-1 text-[#38B6FF]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#38B6FF] text-[#38B6FF]" />
                ))}
              </div>
            </div>

            {/* Right Column: Reviewer Details & Controls (4 cols) */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#38B6FF]/20 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-xs text-[#0D7E73] font-mono font-bold uppercase tracking-widest mb-1">
                  {current.source} • {current.date}
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#06292D]">
                  {current.author}
                </h3>
                <p className="text-xs text-[#486568] mt-1 font-light">
                  Verified Client, Palakkad Region
                </p>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={prevReview}
                  className="w-12 h-12 rounded-full border border-[#38B6FF]/30 hover:bg-[#0D7E73] hover:text-white hover:border-[#0D7E73] flex items-center justify-center transition-colors text-[#06292D]"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-12 h-12 rounded-full border border-[#38B6FF]/30 hover:bg-[#0D7E73] hover:text-white hover:border-[#0D7E73] flex items-center justify-center transition-colors text-[#06292D]"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#0D7E73] font-bold ml-2">
                  0{currentIndex + 1} / 0{VERIFIED_REVIEWS.length}
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
