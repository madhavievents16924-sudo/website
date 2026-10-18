import React from 'react';
import { ArrowRight, ChevronDown, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import InstagramIcon from './InstagramIcon';

export default function Hero({ onOpenEnquiry }) {
  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#05262B] text-white">
        
        {/* Full-Viewport Cinematic Background Image with Peacock Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wedding.png"
            alt="Kerala Wedding Banquet & Catering"
            className="w-full h-full object-cover object-center scale-105 transform filter brightness-90 transition-transform duration-1000"
          />
          
          {/* Sophisticated Peacock Teal & Cyan Scrim Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05262B] via-[#05262B]/60 to-[#073B42]/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05262B]/90 via-[#073B42]/40 to-transparent hidden lg:block" />
        </div>

        {/* Top Spacer for Fixed Nav */}
        <div className="pt-28" />

        {/* Central Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full my-auto py-12">
          <div className="max-w-3xl space-y-6">
            
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D7E73]/40 border border-[#38B6FF]/30 text-[#7DD3FC] text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
              <span>MADHAVI EVENTS & CATERERS • TRITHALA</span>
            </div>

            {/* Large Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
              Celebrations Rooted in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38B6FF] via-[#7DD3FC] to-[#2DD4BF] font-serif-accent font-normal italic">
                Tradition & Exceptional Taste.
              </span>
            </h1>

            {/* Secondary Subtitle */}
            <p className="text-base sm:text-xl text-white/85 font-light max-w-2xl leading-relaxed font-body">
              {BUSINESS_INFO.subTagline}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Plan Event Button */}
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] hover:from-[#065F56] hover:to-[#0284C7] text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transform group"
              >
                <span>Plan Your Event</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Instagram Direct CTA */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-7 py-4 rounded-full text-sm sm:text-base tracking-wide transition-all duration-300 flex items-center gap-2.5 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
                <span>Visit Instagram Page</span>
              </a>

              {/* Explore Work */}
              <a
                href="#experiences"
                className="bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-4 rounded-full text-sm sm:text-base tracking-wide border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                Explore Menu & Sadya
              </a>
            </div>

            {/* Instagram Handle Tag */}
            <div className="pt-2 flex items-center gap-2 text-xs text-white/70">
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Official Instagram:</span>
              <a href={BUSINESS_INFO.instagramUrl} target="_blank" rel="noreferrer" className="text-[#7DD3FC] font-mono font-bold hover:underline">
                {BUSINESS_INFO.instagramHandle}
              </a>
            </div>

          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 w-full pb-8 flex items-end justify-between border-t border-[#38B6FF]/20 pt-6 text-xs text-white/75">
          
          {/* Bottom Left: Location */}
          <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-[#7DD3FC]">
            <MapPin className="w-4 h-4 text-[#38B6FF]" />
            <span>{BUSINESS_INFO.shortLocation}</span>
          </div>

          {/* Bottom Right: Scroll Indicator */}
          <a
            href="#trust-strip"
            className="hidden sm:flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span className="text-[11px] tracking-widest uppercase font-semibold">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#38B6FF]" />
          </a>

        </div>

      </section>

      {/* Hero Trust Strip in Peacock & Light Blue Style */}
      <div id="trust-strip" className="bg-[#E6F4F8] border-y border-[#38B6FF]/20 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-xs sm:text-sm font-bold tracking-widest uppercase text-[#06292D]">
          <span className="hover:text-[#0D7E73] transition flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            Kerala Catering
          </span>
          <span className="text-[#38B6FF]">•</span>
          <span className="hover:text-[#0D7E73] transition flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38B6FF]" />
            Wedding Banquets
          </span>
          <span className="text-[#38B6FF]">•</span>
          <span className="hover:text-[#0D7E73] transition flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0D7E73]" />
            26-Item Sadya
          </span>
          <span className="text-[#38B6FF]">•</span>
          <span className="hover:text-[#0D7E73] transition flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38B6FF]" />
            Instagram @MADHAVI_WEDDING_COMPANY
          </span>
        </div>
      </div>
    </>
  );
}
