import React from 'react';
import { ExternalLink, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import InstagramIcon from './InstagramIcon';

export default function InstagramShowcase() {
  return (
    <section id="instagram-feed" className="py-20 bg-gradient-to-b from-[#F5FAFA] via-[#E6F4F8] to-[#FAFDFD] relative overflow-hidden">
      {/* Background Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#38B6FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0D7E73]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D7E73]/10 border border-[#0D7E73]/20 text-[#0D7E73] text-xs font-bold uppercase tracking-widest">
            <InstagramIcon className="w-4 h-4 text-pink-500" />
            <span>Official Instagram Page</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] tracking-tight">
            Follow Our <span className="text-[#0D7E73] font-serif-accent font-normal italic">Wedding & Catering</span> Journey
          </h2>
          <p className="text-[#486568] text-sm sm:text-base font-light">
            Stay updated with our latest wedding banquets, fruit sculptures, live banana leaf Sadya setups & guest moments.
          </p>
        </div>

        {/* Main Instagram Feature Card */}
        <div className="bg-[#05262B] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-[#38B6FF]/20 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Card Left: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 px-3.5 py-1.5 rounded-full text-xs text-pink-300 font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>{BUSINESS_INFO.instagramHandle}</span>
            </div>

            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-tight">
              Connect With Us On <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-[#38B6FF]">
                Instagram @MADHAVI_WEDDING_COMPANY
              </span>
            </h3>

            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed">
              Scan the QR code or click below to explore real wedding photos, venue setups, client testimonials, and menu inspirations directly on our official handle.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-2">
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>Wedding Banquets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>26-Item Sadya</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#38B6FF]" />
                <span>Fruit Carvings</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all shadow-xl hover:shadow-2xl flex items-center gap-3 transform hover:scale-105"
              >
                <InstagramIcon className="w-5 h-5" />
                <span>Open Instagram Page</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events, I saw your Instagram page @MADHAVI_WEDDING_COMPANY and would like to inquire about event catering.")}`}
                target="_blank"
                rel="noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-full text-sm border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card Right: QR Code Visual & Handle Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative z-10">
            <div className="bg-gradient-to-br from-amber-400 via-pink-500 to-rose-600 p-1.5 rounded-3xl shadow-2xl max-w-xs w-full transform hover:rotate-1 transition-transform duration-500">
              <div className="bg-white p-6 rounded-[22px] text-center space-y-4">
                
                {/* QR Code Container */}
                <div className="relative aspect-square w-full max-w-[220px] mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 flex flex-col items-center justify-center border border-pink-200 shadow-inner group">
                  
                  {/* Styled Instagram QR Graphic */}
                  <div className="w-full h-full relative flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-pink-600 fill-current">
                      {/* Outer Frame */}
                      <rect x="10" y="10" width="25" height="25" rx="5" fill="none" stroke="#e1306c" strokeWidth="4" />
                      <rect x="17" y="17" width="11" height="11" rx="2" fill="#e1306c" />

                      <rect x="65" y="10" width="25" height="25" rx="5" fill="none" stroke="#e1306c" strokeWidth="4" />
                      <rect x="72" y="17" width="11" height="11" rx="2" fill="#e1306c" />

                      <rect x="10" y="65" width="25" height="25" rx="5" fill="none" stroke="#e1306c" strokeWidth="4" />
                      <rect x="17" y="72" width="11" height="11" rx="2" fill="#e1306c" />

                      {/* Center Instagram Icon */}
                      <rect x="40" y="40" width="20" height="20" rx="5" fill="#ffffff" stroke="#e1306c" strokeWidth="2" />
                      <circle cx="50" cy="50" r="5" fill="none" stroke="#e1306c" strokeWidth="2" />
                      <circle cx="56" cy="44" r="1.2" fill="#e1306c" />

                      {/* Pattern Dots */}
                      <circle cx="45" cy="20" r="2.5" fill="#e1306c" />
                      <circle cx="55" cy="20" r="2.5" fill="#e1306c" />
                      <circle cx="50" cy="28" r="2.5" fill="#e1306c" />
                      <circle cx="20" cy="45" r="2.5" fill="#e1306c" />
                      <circle cx="28" cy="50" r="2.5" fill="#e1306c" />
                      <circle cx="75" cy="45" r="2.5" fill="#e1306c" />
                      <circle cx="82" cy="55" r="2.5" fill="#e1306c" />
                      <circle cx="45" cy="75" r="2.5" fill="#e1306c" />
                      <circle cx="55" cy="78" r="2.5" fill="#e1306c" />
                      <circle cx="70" cy="70" r="2.5" fill="#e1306c" />
                      <circle cx="80" cy="78" r="2.5" fill="#e1306c" />
                    </svg>
                  </div>
                </div>

                {/* Handle Text */}
                <div className="space-y-1">
                  <div className="text-pink-600 font-extrabold text-sm sm:text-base tracking-wide font-mono uppercase">
                    {BUSINESS_INFO.instagramHandle}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    Madhavi Events & Caterers
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
