import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, Phone, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/eventData';

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    location: 'Thrithala / Palakkad',
    guests: '300',
    eventType: 'Wedding Feast & Catering',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger confetti celebration!
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log("Confetti triggered");
    }
  };

  const handleWhatsAppDispatch = () => {
    const msg = `Hello Madhavi Events & Caterers! I submitted an event booking request:
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📅 Event Date: ${formData.date}
📍 Location: ${formData.location}
👥 Guests: ${formData.guests}
🎪 Event Type: ${formData.eventType}
📝 Notes: ${formData.notes || 'None'}
Please confirm date availability!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative glass-panel rounded-3xl p-6 sm:p-8 max-w-lg w-full border-2 border-amber-500/40 shadow-2xl bg-gradient-to-b from-[#0d120e] via-[#0d120e] to-amber-950/40 my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-amber-300 hover:text-white bg-slate-900/60 rounded-full border border-amber-500/30"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl">
                🪔
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Book Your Event Dates</h3>
                <p className="text-xs text-amber-400 font-medium">Madhavi Events & Caterers • Thrithala</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98470 12345"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Expected Guests</label>
                  <input
                    type="number"
                    required
                    placeholder="300"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Event Type</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Wedding Feast & Catering">Wedding Feast & Catering</option>
                    <option value="Engagement & Ring Ceremony">Engagement Ceremony</option>
                    <option value="Housewarming (Grihapravesham)">Housewarming Sadya</option>
                    <option value="Birthday & Anniversary Gala">Birthday Celebration</option>
                    <option value="Stage Decor & Carvings Only">Stage Decor & Carvings</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-300 mb-1">Event Location</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thrithala, Pattambi, Palakkad"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 mb-1">Special Preferences / Food Request</label>
                <textarea
                  rows="3"
                  placeholder="e.g. Need 26-item Sadya + Fruit Statue sculpture setup..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-xl flex items-center justify-center gap-2 text-sm"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" /> Submit Booking Inquiry
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-white">Booking Inquiry Received!</h3>
            <p className="text-amber-100/80 text-xs max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-amber-300">{formData.name}</strong>! Our event manager at Madhavi Events will review your date <strong className="text-amber-300">({formData.date})</strong> and call you shortly.
            </p>

            <div className="pt-4 border-t border-amber-500/20 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4" /> Connect Immediately on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold py-2.5 rounded-xl text-xs border border-amber-500/20"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
