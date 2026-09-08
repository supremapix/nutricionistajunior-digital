import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroVideoBgProps {
  brightness?: string;
  overlayGradient?: string;
}

export function HeroVideoBg({ 
  brightness = 'brightness-[0.65]',
  overlayGradient = 'from-[#050914] via-[#050914]/55 to-[#050914]/25'
}: HeroVideoBgProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover filter ${brightness} contrast-105 scale-105 transition-all duration-700`}
      >
        <source src={SITE_CONFIG.images.heroVideo} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient}`}></div>
    </div>
  );
}

