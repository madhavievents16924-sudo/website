import React from 'react';

export default function MadhaviLogo({ variant = 'default', className = '' }) {
  // Variant 'light' for dark background, 'dark' for light background, 'default' for auto
  const isDarkBg = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Official Running Server Logo Emblem */}
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-10 h-10 sm:w-12 sm:h-12 drop-shadow-md transition-transform group-hover:scale-105 duration-300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring & Circle */}
          <circle cx="50" cy="50" r="46" stroke={isDarkBg ? "#38B6FF" : "#00A8E8"} strokeWidth="4" fill={isDarkBg ? "rgba(56, 182, 255, 0.12)" : "rgba(0, 168, 232, 0.08)"} />
          <circle cx="50" cy="50" r="41" stroke={isDarkBg ? "#0D9488" : "#0B6B68"} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          
          {/* Steam Wiggles above cloche */}
          <path d="M 45 23 Q 48 18 45 14" stroke="#38B6FF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 52 25 Q 55 20 52 16" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 59 27 Q 62 22 59 18" stroke="#38B6FF" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cloche / Serving Lid */}
          <path d="M 42 30 C 42 24, 64 24, 64 30 Z" fill={isDarkBg ? "#38B6FF" : "#0096C7"} />
          <rect x="40" y="30" width="26" height="3" rx="1.5" fill={isDarkBg ? "#7DD3FC" : "#0077B6"} />
          <circle cx="53" cy="24" r="2.5" fill={isDarkBg ? "#7DD3FC" : "#0077B6"} />

          {/* Running Waiter Body & Arms */}
          {/* Head */}
          <circle cx="34" cy="38" r="4.5" fill={isDarkBg ? "#38B6FF" : "#0088CC"} />
          <path d="M 32 34 Q 28 31 32 29" stroke={isDarkBg ? "#38B6FF" : "#0088CC"} strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Torso & Arm lifting tray */}
          <path d="M 34 42 L 38 56 L 46 54" stroke={isDarkBg ? "#38B6FF" : "#0088CC"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 38 46 L 53 33" stroke={isDarkBg ? "#38B6FF" : "#0088CC"} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Running Legs */}
          <path d="M 38 56 L 25 66 L 20 62" stroke={isDarkBg ? "#38B6FF" : "#0088CC"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 38 56 L 48 68 L 58 64" stroke={isDarkBg ? "#0D9488" : "#0077B6"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Motion lines behind feet */}
          <line x1="12" y1="65" x2="17" y2="65" stroke="#38B6FF" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <line x1="10" y1="70" x2="16" y2="70" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-heading font-black text-xl sm:text-2xl tracking-wider leading-none ${
            isDarkBg ? 'text-white group-hover:text-[#38B6FF]' : 'text-[#062E35] group-hover:text-[#0D9488]'
          } transition-colors`}>
            MADHAVI
          </span>
        </div>
        <span className={`text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.22em] uppercase mt-1 leading-none ${
          isDarkBg ? 'text-[#7DD3FC]' : 'text-[#0B6B68]'
        }`}>
          EVENTS & CATERERS
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
