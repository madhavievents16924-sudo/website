import React, { useState, useRef } from 'react';
import { BUSINESS_INFO } from '../data/eventData';
import { Sparkles, MapPin, Volume2, VolumeX, Play, Pause, Upload, Flame, RotateCcw } from 'lucide-react';

export default function BrandStory() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoSrc, setVideoSrc] = useState('/videos/kitchen-craft.mp4');
  const [isCustomVideo, setIsCustomVideo] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setIsCustomVideo(true);
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }, 100);
    }
  };

  const handleResetVideo = () => {
    setVideoSrc('/videos/kitchen-craft.mp4');
    setIsCustomVideo(false);
    setIsPlaying(true);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#FAFDFD] via-[#F5FAFA] to-[#E6F4F8] relative border-b border-[#38B6FF]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Video Reel with Peacock Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#38B6FF]/30 shadow-2xl group bg-[#05262B]">
              
              {/* Native Video Element with Fallback Poster */}
              <video
                ref={videoRef}
                src={videoSrc}
                poster="/images/kitchen.png"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05262B]/90 via-[#05262B]/20 to-[#05262B]/40 pointer-events-none" />

              {/* Top Bar: Live Status & Controls */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                {/* Live Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#05262B]/85 backdrop-blur-md border border-[#38B6FF]/30 text-white shadow-lg text-xs font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="tracking-wide uppercase text-[11px] text-[#7DD3FC] font-mono">
                    {isCustomVideo ? 'Custom Reel' : 'Live Kitchen Craft'}
                  </span>
                  <span className="hidden sm:inline text-white/40">•</span>
                  <span className="hidden sm:inline text-white/80 text-[11px] font-normal">Trithala</span>
                </div>

                {/* Quick Controls (Sound, Play/Pause, Upload) */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                    className="p-2 rounded-full bg-[#05262B]/80 hover:bg-[#0D7E73] backdrop-blur-md border border-white/20 text-white transition-all shadow-md active:scale-95"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-white/80" /> : <Volume2 className="w-4 h-4 text-emerald-300 animate-pulse" />}
                  </button>

                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    title={isPlaying ? 'Pause video' : 'Play video'}
                    className="p-2 rounded-full bg-[#05262B]/80 hover:bg-[#0D7E73] backdrop-blur-md border border-white/20 text-white transition-all shadow-md active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 text-white/80" /> : <Play className="w-4 h-4 text-[#38B6FF] fill-current" />}
                  </button>

                  <button
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Upload custom kitchen reel"
                    title="Upload custom kitchen reel (.mp4, .webm, .mov)"
                    className="p-2 rounded-full bg-[#05262B]/80 hover:bg-[#0D7E73] backdrop-blur-md border border-white/20 text-[#7DD3FC] hover:text-white transition-all shadow-md active:scale-95"
                  >
                    <Upload className="w-4 h-4" />
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Big Center Play Icon (if paused) */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  aria-label="Play video"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0D7E73]/90 hover:bg-[#0D7E73] text-white flex items-center justify-center shadow-2xl backdrop-blur-md transition-all hover:scale-110 border border-white/30 z-20"
                >
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </button>
              )}

              {/* Bottom Card: Location & Authenticity Note */}
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#05262B]/90 backdrop-blur-md rounded-2xl border border-[#38B6FF]/30 shadow-xl text-white z-10">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#7DD3FC] font-mono uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#38B6FF]" />
                    <span>Kitchen & Office Location</span>
                  </div>
                  {isCustomVideo && (
                    <button
                      onClick={handleResetVideo}
                      className="text-[10px] text-white/70 hover:text-white flex items-center gap-1 underline underline-offset-2"
                      title="Reset to default video"
                    >
                      <RotateCcw className="w-3 h-3" /> Reset
                    </button>
                  )}
                </div>
                <div className="font-heading font-bold text-sm text-white mt-1">{BUSINESS_INFO.location}</div>
                <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/70">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#FFB703]" /> Authentic Traditional Woodfire Banquet
                  </span>
                  <span className="font-mono text-[#7DD3FC]/80">Trithala, Palakkad</span>
                </div>
              </div>
            </div>

            {/* Aesthetic Peacock Green Accent Border */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-full h-full border-2 border-[#0D7E73]/40 rounded-3xl -z-0 pointer-events-none" />
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 text-xs font-bold tracking-widest uppercase text-[#0D7E73]">
              <span className="w-8 h-px bg-[#0D7E73]" />
              <Sparkles className="w-3.5 h-3.5 text-[#38B6FF]" />
              <span>THE MADHAVI EXPERIENCE</span>
            </div>

            {/* Large Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#06292D] leading-[1.15]">
              Food is part of the celebration. <br className="hidden sm:inline" />
              <span className="font-serif-accent text-[#0D7E73] font-normal italic">Hospitality</span> is what people remember.
            </h2>

            {/* Paragraph Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#486568] leading-relaxed font-light">
              <p>
                At <strong className="text-[#06292D] font-semibold">Madhavi Events & Caterers</strong> in Trithala, Palakkad, we believe that an exceptional event is defined by authentic flavors, immaculate presentation, and genuine Kerala hospitality.
              </p>
              <p>
                Whether serving a traditional 26-item banana leaf <strong className="text-[#06292D] font-semibold">Sadya</strong> cooked with pure coconut oil and fresh ghee, or hosting an expansive Malabar non-vegetarian wedding banquet, every menu is prepared with natural spices, pristine hygiene, and deep respect for tradition.
              </p>
            </div>

            {/* Serif Handwritten Accent Quote */}
            <div className="pt-6 border-t border-[#38B6FF]/25">
              <p className="font-serif-accent text-2xl sm:text-3xl text-[#05262B] font-medium italic">
                "Rooted in Kerala. Crafted for your finest moments."
              </p>
              <p className="text-xs text-[#0D7E73] font-mono tracking-wider uppercase mt-1.5 font-bold">
                Madhavi Events & Caterers • Trithala, Palakkad
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
