import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Navigation, ExternalLink, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import MadhaviLogo from './MadhaviLogo';
import InstagramIcon from './InstagramIcon';

export default function ContactFooter({ onOpenEnquiry }) {
  return (
    <footer id="contact" className="bg-[#05262B] text-white relative pt-24">
      
      {/* Contact Section Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-20 border-b border-[#38B6FF]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Large Headline (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase text-[#7DD3FC]">
              <span className="w-8 h-px bg-[#38B6FF]" />
              <span>GET IN TOUCH WITH MADHAVI</span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white leading-tight">
              Let's Talk About <br />
              <span className="font-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-[#38B6FF] to-[#2DD4BF] font-normal italic">
                Your Celebration.
              </span>
            </h2>

            <p className="text-white/80 text-sm sm:text-base font-light max-w-md leading-relaxed">
              We are ready to bring authentic Kerala flavors, thoughtful hospitality, and beautiful arrangements to your upcoming event.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] hover:from-[#065F56] hover:to-[#0284C7] text-white font-bold px-8 py-4 rounded-full text-sm tracking-wide transition-all shadow-xl hover:scale-105 transform"
              >
                Plan Your Event →
              </button>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-6 py-4 rounded-full text-sm tracking-wide transition-all shadow-lg flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram Page</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Business Information (6 cols) */}
          <div className="lg:col-span-6 space-y-6 bg-[#073B42]/80 border border-[#38B6FF]/30 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
            <div className="text-xs text-[#7DD3FC] font-mono uppercase tracking-widest font-bold flex items-center justify-between">
              <span>OFFICE & CATERING ADDRESS</span>
              <span className="text-emerald-400">● Open 24/7 for Events</span>
            </div>

            <div className="space-y-4 text-sm font-light">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#38B6FF] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white text-base">Madhavi Events & Caterers</div>
                  <div className="text-white/85">{BUSINESS_INFO.location}</div>
                  <a
                    href={BUSINESS_INFO.googleMapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#7DD3FC] hover:underline mt-1 font-semibold"
                  >
                    <span>View Location on Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#38B6FF]/20">
                <Phone className="w-5 h-5 text-[#38B6FF] shrink-0" />
                <div>
                  <div className="text-xs text-white/60">Phone Numbers</div>
                  <div className="flex flex-wrap items-center gap-3">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="font-bold text-white hover:text-[#38B6FF] transition">
                      {BUSINESS_INFO.displayPhone}
                    </a>
                    <span className="text-white/40">•</span>
                    <a href={`tel:${BUSINESS_INFO.phone2}`} className="font-bold text-white hover:text-[#38B6FF] transition">
                      {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#38B6FF]/20">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-white/60">WhatsApp Channel</div>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events, I would like to inquire about your event catering.")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-emerald-400 hover:text-emerald-300 transition"
                  >
                    {BUSINESS_INFO.displayWhatsapp} (Chat Now)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#38B6FF]/20">
                <Mail className="w-5 h-5 text-[#38B6FF] shrink-0" />
                <div>
                  <div className="text-xs text-white/60">Official Email</div>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="font-bold text-white hover:text-[#38B6FF] transition">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#38B6FF]/20">
                <InstagramIcon className="w-5 h-5 text-pink-400 shrink-0" />
                <div>
                  <div className="text-xs text-white/60">Instagram Handle</div>
                  <a
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-pink-300 hover:text-pink-200 transition font-mono"
                  >
                    {BUSINESS_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 pt-3 border-t border-[#38B6FF]/20">
                <Clock className="w-5 h-5 text-[#38B6FF] shrink-0" />
                <div>
                  <div className="text-xs text-white/60">Office Hours</div>
                  <div className="text-white/85 text-xs">{BUSINESS_INFO.openingHours}</div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-[#38B6FF]/20">
              <a
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#7DD3FC] hover:text-white font-medium transition"
              >
                <span>Verified Justdial Listing (4.8★ Rated)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/60">
        
        {/* Brand Logo & Tagline */}
        <MadhaviLogo variant="light" />

        {/* Copyright */}
        <div className="text-center sm:text-right">
          © {new Date().getFullYear()} Madhavi Events & Caterers, Trithala, Palakkad. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}
