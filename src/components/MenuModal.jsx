import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MenuModal({ onClose }) {
  const pages = ['/images/menu1.png', '/images/menu2.jpg'];
  const [page, setPage] = React.useState(0);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl bg-[#06292D]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-white font-bold text-sm tracking-wide">
            Menu &amp; Sadya — Page {page + 1} of {pages.length}
          </span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="relative bg-black flex items-center justify-center min-h-[60vh]">
          <img
            src={pages[page]}
            alt={`Menu page ${page + 1}`}
            className="w-full max-h-[75vh] object-contain"
          />

          {/* Prev */}
          {page > 0 && (
            <button
              onClick={() => setPage(0)}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next */}
          {page < pages.length - 1 && (
            <button
              onClick={() => setPage(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 py-3">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2.5 h-2.5 rounded-full transition ${i === page ? 'bg-[#38B6FF]' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
