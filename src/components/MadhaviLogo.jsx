import React from 'react';

const logoImg = '/images/madhavi-logo-new.png';

export default function MadhaviLogo({ variant = 'default', className = '' }) {
  const isDarkBg = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Official Madhavi Logo */}
      <img
        src={logoImg}
        alt="Madhavi Events & Caterers Logo"
        width={48}
        height={48}
        className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 object-contain drop-shadow-md transition-transform group-hover:scale-105 duration-300 ${
          isDarkBg ? 'brightness-0 invert-0' : ''
        }`}
      />

      {/* Typography */}
      <div className="flex flex-col">
        <span className={`font-heading font-black text-xl sm:text-2xl tracking-wider leading-none ${
          isDarkBg ? 'text-white group-hover:text-[#38B6FF]' : 'text-[#062E35] group-hover:text-[#0D9488]'
        } transition-colors`}>
          MADHAVI
        </span>
        <span className={`text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.22em] uppercase mt-1 leading-none ${
          isDarkBg ? 'text-[#7DD3FC]' : 'text-[#0B6B68]'
        }`}>
          EVENTS &amp; CATERERS
        </span>
        <span className={`text-[8.5px] font-medium tracking-wide mt-0.5 ${
          isDarkBg ? 'text-white/60' : 'text-[#4A6B6C]'
        }`}>
          Trithala, Palakkad
        </span>
      </div>
    </div>
  );
}
