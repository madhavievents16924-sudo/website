import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import InstagramIcon from './InstagramIcon';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Floating Instagram Button */}
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-2xl flex items-center justify-center border-2 border-white/30 transition-transform hover:scale-110 group relative"
        aria-label="Instagram Page"
      >
        <InstagramIcon className="w-6 h-6 text-white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#05262B] text-[#7DD3FC] text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#38B6FF]/30 font-mono">
          Instagram {BUSINESS_INFO.instagramHandle}
        </span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events & Caterers, I would like to check availability for my event.")}`}
        target="_blank"
        rel="noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl flex items-center justify-center border-2 border-white/30 transition-transform hover:scale-110 group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#05262B] text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/30">
          WhatsApp {BUSINESS_INFO.displayWhatsapp}
        </span>
      </a>

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-13 h-13 rounded-full bg-gradient-to-br from-[#0D7E73] to-[#0EA5E9] hover:from-[#065F56] hover:to-[#0284C7] text-white shadow-2xl flex items-center justify-center border-2 border-white/30 transition-transform hover:scale-110 group relative"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6 fill-white stroke-none" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#05262B] text-[#38B6FF] text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-[#38B6FF]/30">
          Call {BUSINESS_INFO.displayPhone}
        </span>
      </a>
    </div>
  );
}
