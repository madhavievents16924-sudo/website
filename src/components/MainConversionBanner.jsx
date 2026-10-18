import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import InstagramIcon from './InstagramIcon';

export default function MainConversionBanner({ onOpenEnquiry }) {
  return (
    <section className="relative py-28 overflow-hidden bg-[#05262B] text-white">
      
      {/* Background Image with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/wedding.png"
          alt="Kerala Wedding Banquet Setup"
          className="w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05262B] via-[#05262B]/90 to-[#073B42]/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 text-center sm:text-left">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#7DD3FC]">
            <span className="w-8 h-px bg-[#38B6FF]" />
            <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
            <span>RESERVE YOUR DATES</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
            Planning a <span className="font-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-[#38B6FF] via-[#7DD3FC] to-[#2DD4BF] font-normal italic">Celebration?</span>
          </h2>

          <p className="text-base sm:text-xl text-white/85 font-light max-w-2xl leading-relaxed">
            Let's create an experience your guests will remember. Authentic Kerala dining, elegant setup, and zero-stress coordination in Trithala & Palakkad.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <button
              onClick={onOpenEnquiry}
              className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] hover:from-[#065F56] hover:to-[#0284C7] text-white font-bold px-8 py-4 rounded-full text-sm sm:text-base tracking-wide transition-all shadow-xl hover:scale-105 transform flex items-center gap-3 group"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-7 py-4 rounded-full text-sm sm:text-base tracking-wide shadow-xl flex items-center gap-2"
            >
              <InstagramIcon className="w-5 h-5 text-white" />
              <span>@MADHAVI_WEDDING_COMPANY</span>
            </a>

            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events & Caterers, I would like to plan an event with you.")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-4 rounded-full text-sm sm:text-base tracking-wide shadow-xl flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white stroke-none" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
