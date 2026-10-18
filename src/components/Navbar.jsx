import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';
import MadhaviLogo from './MadhaviLogo';
import InstagramIcon from './InstagramIcon';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Top Navbar with Peacock Green & Light Blue styling */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5FAFA]/95 backdrop-blur-md py-3 shadow-md border-b border-[#38B6FF]/20 text-[#06292D]'
            : 'bg-gradient-to-b from-[#05262B]/85 via-[#05262B]/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* LEFT: Madhavi Logo */}
          <a href="#" className="flex items-center">
            <MadhaviLogo variant={isScrolled ? 'dark' : 'light'} />
          </a>

          {/* CENTER: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            <a
              href="#about"
              className={`transition-colors hover:text-[#38B6FF] ${
                isScrolled ? 'text-[#06292D]' : 'text-white/90'
              }`}
            >
              About
            </a>
            <a
              href="#experiences"
              className={`transition-colors hover:text-[#38B6FF] ${
                isScrolled ? 'text-[#06292D]' : 'text-white/90'
              }`}
            >
              Experiences
            </a>
            <a
              href="#services"
              className={`transition-colors hover:text-[#38B6FF] ${
                isScrolled ? 'text-[#06292D]' : 'text-white/90'
              }`}
            >
              Services
            </a>
            <a
              href="#gallery"
              className={`transition-colors hover:text-[#38B6FF] ${
                isScrolled ? 'text-[#06292D]' : 'text-white/90'
              }`}
            >
              Gallery
            </a>
            <a
              href="#instagram-feed"
              className={`transition-colors hover:text-[#38B6FF] flex items-center gap-1.5 text-[#0D7E73] font-bold ${
                isScrolled ? 'text-[#0D7E73]' : 'text-[#7DD3FC]'
              }`}
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href="#reviews"
              className={`transition-colors hover:text-[#38B6FF] ${
                isScrolled ? 'text-[#06292D]' : 'text-white/90'
              }`}
            >
              Reviews
            </a>
          </nav>

          {/* RIGHT: CTAs - Instagram Button & Plan Event */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Instagram Page Button */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-md hover:shadow-lg hover:scale-105 transform"
              aria-label="Visit Instagram Page"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@MADHAVI_WEDDING_COMPANY</span>
            </a>

            {/* Plan Event Button */}
            <button
              onClick={onOpenEnquiry}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-300 flex items-center gap-2 border ${
                isScrolled
                  ? 'bg-[#0D7E73] text-white hover:bg-[#06373A] border-[#0D7E73] shadow-sm'
                  : 'bg-[#38B6FF] hover:bg-[#0EA5E9] text-white border-[#38B6FF] shadow-lg'
              }`}
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE: Instagram, WhatsApp & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-pink-500 hover:text-pink-400 transition-transform active:scale-95"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events & Caterers, I would like to enquire about your catering services.")}`}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-emerald-400 hover:text-emerald-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-[#06292D]' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#05262B] text-white flex flex-col p-6 overflow-y-auto">
          <div className="flex justify-between items-center pb-6 border-b border-[#38B6FF]/20">
            <MadhaviLogo variant="light" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/80 hover:text-white"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex flex-col gap-5 my-auto py-8 text-lg font-heading">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>About The Experience</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
            <a
              href="#experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>Signature Sadya</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>Services We Create</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>Visual Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-pink-400 hover:text-pink-300 transition flex items-center justify-between py-2 px-4 rounded-xl bg-pink-500/10 border border-pink-500/20"
            >
              <span className="flex items-center gap-2 font-bold text-base">
                <InstagramIcon className="w-5 h-5 text-pink-400" />
                <span>@MADHAVI_WEDDING_COMPANY</span>
              </span>
              <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full font-sans uppercase">Follow</span>
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>Guest Reviews</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#38B6FF] transition flex items-center justify-between"
            >
              <span>Contact & Location</span>
              <ArrowRight className="w-4 h-4 text-[#38B6FF]" />
            </a>
          </div>

          <div className="pt-6 border-t border-[#38B6FF]/20 space-y-3">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3.5 rounded-full text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenEnquiry(); }}
              className="w-full bg-[#38B6FF] hover:bg-[#0EA5E9] text-white font-bold py-3.5 rounded-full text-sm text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Plan Your Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Fixed Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#05262B]/95 backdrop-blur-md text-white py-2.5 px-3 border-t border-[#38B6FF]/20 flex items-center justify-around shadow-2xl">
        <a
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex flex-col items-center gap-1 text-[10px] font-medium text-white/90 hover:text-white"
        >
          <Phone className="w-4 h-4 text-[#38B6FF]" />
          <span>Call</span>
        </a>

        <div className="h-5 w-px bg-white/20" />

        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello Madhavi Events & Caterers, I would like to enquire about availability.")}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <div className="h-5 w-px bg-white/20" />

        <a
          href={BUSINESS_INFO.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-[10px] font-medium text-pink-400 hover:text-pink-300"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>Insta</span>
        </a>

        <div className="h-5 w-px bg-white/20" />

        <button
          onClick={onOpenEnquiry}
          className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] text-white font-bold px-3.5 py-1.5 rounded-full text-xs flex items-center gap-1 shadow"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </>
  );
}
