import React, { useState } from 'react';
import { Calculator, Sparkles, Users, Check, MessageCircle, RefreshCw, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/eventData';

export default function QuoteCalculator() {
  const [eventType, setEventType] = useState('wedding');
  const [guestCount, setGuestCount] = useState(300);
  const [foodPackage, setFoodPackage] = useState('royalSadya');
  const [addons, setAddons] = useState({
    fruitCarving: true,
    stageDecor: true,
    liveCounters: false,
    welcomeDrinks: false
  });

  const eventTypes = [
    { id: 'wedding', name: 'Traditional Wedding Feast', icon: '💒' },
    { id: 'engagement', name: 'Engagement & Ring Ceremony', icon: '💍' },
    { id: 'birthday', name: 'Birthday & Anniversary Gala', icon: '🎉' },
    { id: 'housewarming', name: 'Grihapravesham / Housewarming', icon: '🏡' },
    { id: 'corporate', name: 'Corporate & Association Meeting', icon: '👔' }
  ];

  const foodPackages = [
    { id: 'heritageSadya', name: 'Palakkad Heritage Veg Sadya (22 items)', price: 220, tag: 'Pure Veg' },
    { id: 'royalSadya', name: 'Grand Royal Sadya (26 items + 3 Payasams)', price: 260, tag: 'Popular' },
    { id: 'malabarNonVeg', name: 'Malabar Chicken & Beef Banquet', price: 360, tag: 'Bestseller' },
    { id: 'royalSeafood', name: 'Royal Seafood & Meat Deluxe', price: 480, tag: 'Luxury' }
  ];

  const toggleAddon = (key) => {
    setAddons(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Price Calculation Logic
  const selectedFood = foodPackages.find(p => p.id === foodPackage) || foodPackages[1];
  const foodTotal = selectedFood.price * guestCount;

  let addonsTotal = 0;
  if (addons.fruitCarving) addonsTotal += 8000; // fixed sculpture setup
  if (addons.stageDecor) addonsTotal += 15000; // stage decor base setup
  if (addons.liveCounters) addonsTotal += (120 * guestCount); // per head live counter
  if (addons.welcomeDrinks) addonsTotal += (40 * guestCount); // per head drinks

  const grandTotal = foodTotal + addonsTotal;
  const perHeadAvg = Math.round(grandTotal / guestCount);

  const handleSendWhatsAppQuote = () => {
    const selectedEvent = eventTypes.find(e => e.id === eventType)?.name;
    const msg = `Hello Madhavi Events & Caterers! I calculated a quote on your website:
📌 Event: ${selectedEvent}
👥 Guests: ${guestCount} People
🍲 Food Package: ${selectedFood.name} (₹${selectedFood.price}/head)
✨ Add-ons: ${addons.fruitCarving ? 'Fruit Sculpture Statues, ' : ''}${addons.stageDecor ? 'Stage Floral Decor, ' : ''}${addons.liveCounters ? 'Live Stalls, ' : ''}${addons.welcomeDrinks ? 'Welcome Drinks' : ''}
💰 Estimated Total: ₹${grandTotal.toLocaleString('en-IN')} (Avg. ₹${perHeadAvg}/guest)
Please confirm availability and booking details.`;

    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#0b0f0c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm tracking-wider uppercase mb-3">
            <Calculator className="w-4 h-4" /> Instant Quote Engine
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Interactive <span className="gold-gradient-text">Event Budget Calculator</span>
          </h2>
          <p className="text-amber-100/70 text-base">
            Get a transparent real-time cost estimate tailored to your event type, guest count, menu preferences, and custom decorations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (8 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Event Type */}
            <div className="glass-panel rounded-3xl p-6 border border-amber-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-lg text-amber-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">1</span>
                  Select Event Type
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {eventTypes.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setEventType(item.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all text-xs font-semibold flex items-center gap-3 ${
                      eventType === item.id
                        ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-slate-900/40 border-amber-500/10 text-amber-100/70 hover:border-amber-500/30'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Guest Count Slider */}
            <div className="glass-panel rounded-3xl p-6 border border-amber-500/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-lg text-amber-100 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">2</span>
                  Number of Expected Guests
                </h3>
                <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold px-4 py-1.5 rounded-full text-base font-heading">
                  {guestCount} Guests
                </span>
              </div>

              <input
                type="range"
                min="50"
                max="3000"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 my-4"
              />

              <div className="flex justify-between text-xs text-amber-100/50 font-medium">
                <span>50 Guests</span>
                <span>500 Guests</span>
                <span>1,500 Guests</span>
                <span>3,000+ Guests</span>
              </div>
            </div>

            {/* Step 3: Food Package */}
            <div className="glass-panel rounded-3xl p-6 border border-amber-500/20">
              <h3 className="font-heading font-bold text-lg text-amber-100 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">3</span>
                Choose Catering Feast Package
              </h3>
              <div className="space-y-3">
                {foodPackages.map(pkg => (
                  <div
                    key={pkg.id}
                    onClick={() => setFoodPackage(pkg.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                      foodPackage === pkg.id
                        ? 'bg-amber-500/20 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-slate-900/40 border-amber-500/10 hover:border-amber-500/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        foodPackage === pkg.id ? 'border-amber-400 bg-amber-400' : 'border-amber-500/40'
                      }`}>
                        {foodPackage === pkg.id && <Check className="w-3 h-3 text-slate-950 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{pkg.name}</div>
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-medium">
                          {pkg.tag}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-bold text-amber-300 font-heading">₹{pkg.price}</div>
                      <div className="text-[10px] text-amber-100/60">per guest</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Add-ons */}
            <div className="glass-panel rounded-3xl p-6 border border-amber-500/20">
              <h3 className="font-heading font-bold text-lg text-amber-100 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-bold">4</span>
                Select Event Add-ons & Decorations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => toggleAddon('fruitCarving')}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                    addons.fruitCarving ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-900/40 border-amber-500/10 text-amber-100/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🍍</span>
                    <div>
                      <div className="text-xs font-semibold">Fruit Sculptures</div>
                      <div className="text-[10px] text-amber-300">+₹8,000 fixed</div>
                    </div>
                  </div>
                  {addons.fruitCarving && <Check className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => toggleAddon('stageDecor')}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                    addons.stageDecor ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-900/40 border-amber-500/10 text-amber-100/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">💐</span>
                    <div>
                      <div className="text-xs font-semibold">Stage & Floral Decor</div>
                      <div className="text-[10px] text-amber-300">+₹15,000 base</div>
                    </div>
                  </div>
                  {addons.stageDecor && <Check className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => toggleAddon('liveCounters')}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                    addons.liveCounters ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-900/40 border-amber-500/10 text-amber-100/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🍢</span>
                    <div>
                      <div className="text-xs font-semibold">Live Dosa/Appam Stall</div>
                      <div className="text-[10px] text-amber-300">+₹120 / head</div>
                    </div>
                  </div>
                  {addons.liveCounters && <Check className="w-4 h-4 text-emerald-400" />}
                </button>

                <button
                  onClick={() => toggleAddon('welcomeDrinks')}
                  className={`p-3.5 rounded-2xl border text-left transition flex items-center justify-between ${
                    addons.welcomeDrinks ? 'bg-amber-500/20 border-amber-400 text-white' : 'bg-slate-900/40 border-amber-500/10 text-amber-100/70'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🍹</span>
                    <div>
                      <div className="text-xs font-semibold">Welcome Drink Counter</div>
                      <div className="text-[10px] text-amber-300">+₹40 / head</div>
                    </div>
                  </div>
                  {addons.welcomeDrinks && <Check className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Summary Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl bg-gradient-to-b from-amber-950/40 via-slate-900/90 to-amber-950/60">
              
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-amber-500/20">
                <div className="flex items-center gap-2 text-amber-300 font-heading font-bold text-lg">
                  <Sparkles className="w-5 h-5 text-amber-400" /> Estimate Summary
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-semibold">
                  Instant Estimate
                </span>
              </div>

              {/* Itemized Calculation */}
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between items-center text-amber-100/80">
                  <span>Guest Count</span>
                  <span className="font-bold text-white">{guestCount} People</span>
                </div>

                <div className="flex justify-between items-center text-amber-100/80">
                  <span>Food Package ({selectedFood.name})</span>
                  <span className="font-semibold text-white">₹{foodTotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between items-center text-amber-100/80">
                  <span>Decor & Special Add-ons</span>
                  <span className="font-semibold text-white">₹{addonsTotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="pt-4 border-t border-amber-500/20 flex justify-between items-end">
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase">Estimated Budget Total</div>
                    <div className="text-xs text-amber-100/50">Approx. ₹{perHeadAvg} / guest</div>
                  </div>
                  <div className="font-heading font-extrabold text-3xl gold-gradient-text">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={handleSendWhatsAppQuote}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-3 text-sm mb-4"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Get Formal Quote on WhatsApp</span>
              </button>

              <div className="text-center text-[11px] text-amber-100/60 leading-relaxed">
                *Prices are indicative standard rates for Thrithala & Palakkad district. Final quotation subject to venue distance and seasonal menu availability.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
