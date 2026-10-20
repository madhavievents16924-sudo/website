import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO, FAQS } from '../data/eventData';

const logoImg = '/images/madhavi-logo-new.png';



export default function Footer({ onOpenBooking }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <footer id="contact" className="bg-[#080b09] relative pt-20 border-t-2 border-amber-500/30 text-amber-100/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* FAQ Section */}
        <div className="mb-20 glass-panel rounded-3xl p-8 border border-amber-500/20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Got Questions?</span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-1">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h3>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-amber-500/20 overflow-hidden bg-slate-900/40 transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-white text-sm hover:text-amber-300 transition"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-amber-400 shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-xs text-amber-100/70 border-t border-amber-500/10 leading-relaxed bg-amber-950/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-amber-500/20">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Madhavi Events & Caterers Logo"
                width={48}
                height={48}
                className="w-12 h-12 shrink-0 object-contain drop-shadow-md"
              />


              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">MADHAVI</h3>
                <div className="text-xs text-amber-400 font-medium">Events & Caterers • തൃത്താല</div>
              </div>
            </div>

            <p className="text-xs text-amber-100/70 leading-relaxed">
              Palakkad’s premier catering group established in 2015. Specializing in authentic 26-item banana leaf Sadya, non-veg banquets, floral stage decor, and hand-sculpted fruit statues.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold bg-amber-500/10 border border-amber-500/30 p-3 rounded-xl text-amber-300 w-fit">
              <Award className="w-4 h-4 text-amber-400" />
              <span>4.8 / 5.0 Rating on Justdial (43+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-400 transition">About Madhavi Events</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition">Our Services & Setup</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition">Authentic Sadya & Menu</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition">Interactive Budget Calculator</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition">Fruit Carving Gallery</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition">Justdial Client Reviews</a></li>
            </ul>
          </div>

          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-heading font-bold text-base text-white">Contact & Kitchen Address</h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-amber-300 font-semibold">{BUSINESS_INFO.displayPhone}</a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  WhatsApp Direct Inquiry: +91 98470 12345
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={onOpenBooking}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs shadow"
              >
                Book Catering Dates
              </button>
              <a
                href={BUSINESS_INFO.justdialUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 border border-amber-500/30 text-amber-300 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 hover:border-amber-400"
              >
                Justdial Profile ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Kasavu Pattern Border */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-amber-100/50 gap-4">
          <div>
            © {new Date().getFullYear()} Madhavi Events & Caterers, Thrithala. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-amber-400 font-medium">Made with Antigravity ⚡</span>
            <span>•</span>
            <span>Palakkad, Kerala</span>
          </div>
        </div>

      </div>

      <div className="kasavu-border-bottom w-full" />
    </footer>
  );
}
