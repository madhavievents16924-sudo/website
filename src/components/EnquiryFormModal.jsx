import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO } from '../data/eventData';

export default function EnquiryFormModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'Wedding Catering',
    eventDate: '',
    guestCount: '300',
    location: 'Trithala / Palakkad',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const eventTypeOptions = [
    "Wedding Catering",
    "Reception & Gala",
    "Traditional Sadya",
    "Engagement Ceremony",
    "Birthday & Family Function",
    "Corporate & Special Event",
    "Other Celebration"
  ];

  const handleNextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch (err) {
      console.log("Confetti triggered");
    }
  };

  const handleWhatsAppDispatch = () => {
    const msg = `Hello Madhavi Events & Caterers! I submitted an event enquiry:
📌 Celebration: ${formData.eventType}
📅 Date: ${formData.eventDate || 'TBD'}
👥 Guests: ${formData.guestCount}
📍 Location: ${formData.location}
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📝 Notes: ${formData.notes || 'None'}
Please confirm date availability and quotation!`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#05262B]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#FAFDFD] rounded-3xl p-6 sm:p-10 max-w-xl w-full border border-[#38B6FF]/30 shadow-2xl text-[#06292D] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 text-[#06292D] hover:text-[#0D7E73] bg-[#E6F4F8] rounded-full transition border border-[#38B6FF]/30"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            
            {/* Header & Step Indicator */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0D7E73] mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
                <span>STEP 0{currentStep} OF 05</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#06292D]">
                {currentStep === 1 && "What are you planning?"}
                {currentStep === 2 && "When is your event?"}
                {currentStep === 3 && "How many guests?"}
                {currentStep === 4 && "Where is the event?"}
                {currentStep === 5 && "Your Contact Details"}
              </h3>
              
              {/* Progress Bar */}
              <div className="w-full h-2 bg-[#E6F4F8] rounded-full mt-3 overflow-hidden border border-[#38B6FF]/20">
                <div
                  className="h-full bg-gradient-to-r from-[#0D7E73] to-[#38B6FF] transition-all duration-500 rounded-full"
                  style={{ width: `${(currentStep / 5) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Event Type */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventTypeOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => { setFormData({ ...formData, eventType: opt }); handleNextStep(); }}
                      className={`p-4 rounded-2xl border text-left text-xs font-bold transition ${
                        formData.eventType === opt
                          ? 'bg-[#0D7E73] text-white border-[#0D7E73] shadow-md'
                          : 'bg-white text-[#06292D] border-[#38B6FF]/30 hover:border-[#38B6FF]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 2: Date */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-[#06292D]">Select Event Date</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#0D7E73]"
                  />
                  <p className="text-xs text-[#486568]">Flexible with dates? Pick your tentative date.</p>
                </div>
              )}

              {/* STEP 3: Guests */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-[#06292D]">Expected Guest Count</label>
                  <input
                    type="number"
                    required
                    placeholder="e.g. 300"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#0D7E73]"
                  />
                  <div className="flex flex-wrap gap-2">
                    {['100', '300', '500', '1000', '2000+'].map(num => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setFormData({ ...formData, guestCount: num })}
                        className="px-4 py-2 rounded-xl border text-xs font-bold bg-white border-[#38B6FF]/30 hover:border-[#0D7E73] text-[#06292D]"
                      >
                        {num} Guests
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Location */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <label className="block text-xs font-bold text-[#06292D]">Event Location / Venue Town</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Trithala, Pattambi, Palakkad Town"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-4 text-sm focus:outline-none focus:border-[#0D7E73]"
                  />
                </div>
              )}

              {/* STEP 5: Contact Details */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#06292D] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-3.5 text-sm focus:outline-none focus:border-[#0D7E73]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#06292D] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 99464 96094"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-3.5 text-sm focus:outline-none focus:border-[#0D7E73]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#06292D] mb-1">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-3.5 text-sm focus:outline-none focus:border-[#0D7E73]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#06292D] mb-1">Special Requirements / Notes</label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Traditional Sadya + Fruit Statue sculpture setup..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-white border border-[#38B6FF]/30 rounded-2xl p-3.5 text-sm focus:outline-none focus:border-[#0D7E73]"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 flex items-center justify-between border-t border-[#38B6FF]/20">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#0D7E73] hover:text-[#06292D]"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#05262B] hover:bg-[#073B42] text-white font-bold px-6 py-3 rounded-full text-xs flex items-center gap-2 shadow-md"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#0D7E73] to-[#0EA5E9] text-white font-bold px-8 py-3.5 rounded-full text-xs flex items-center gap-2 shadow-lg hover:scale-105 transform transition"
                  >
                    <span>Request a Conversation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-[#E6F4F8] text-[#0D7E73] rounded-full flex items-center justify-center mx-auto border border-[#38B6FF]/40 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#06292D]">
              Enquiry Received
            </h3>

            <p className="text-xs sm:text-sm text-[#486568] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#06292D]">{formData.name}</strong>. Our team at Madhavi Events will review your date <strong className="text-[#06292D]">({formData.eventDate || 'TBD'})</strong> and reach out shortly.
            </p>

            <div className="pt-4 border-t border-[#38B6FF]/20 space-y-3">
              <button
                onClick={handleWhatsAppDispatch}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-full text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" /> Connect Immediately on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full bg-white border border-[#38B6FF]/30 text-[#06292D] font-bold py-3 rounded-full text-xs"
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
