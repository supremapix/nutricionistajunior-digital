import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config/siteConfig';

const POSTER_AVIF = '/media/hero-poster-640.avif 640w, /media/hero-poster-1280.avif 1280w';
const POSTER_WEBP = '/media/hero-poster-640.webp 640w, /media/hero-poster-1280.webp 1280w';
const POSTER_JPG = '/media/hero-poster-640.jpg 640w, /media/hero-poster-1280.jpg 1280w';

interface HeroVideoBgProps {
  brightness?: string;
  overlayGradient?: string;
  /** Desktop-only. Mobile keeps the poster and never requests the mp4. */
  allowVideo?: boolean;
  /** high preloads the small poster. low is for below-the-fold copies, such as the footer. */
  priority?: 'high' | 'low' | 'auto';
}

export function HeroVideoBg({
  brightness = 'brightness-[0.92]',
  overlayGradient = 'from-[#050914]/95 via-[#050914]/50 to-[#050914]/15',
  allowVideo = true,
  priority = 'auto',
}: HeroVideoBgProps) {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    if (!allowVideo || typeof window.matchMedia !== 'function') return;
    const desktop = window.matchMedia('(min-width: 1024px)');
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (!desktop.matches || connection?.saveData) return;

    let cancelled = false;
    const start = () => {
      if (!cancelled) setPlayVideo(true);
    };
    window.addEventListener('pointerdown', start, { once: true });
    const idleHandle = window.requestIdleCallback?.(start, { timeout: 2500 });
    const timeoutHandle = idleHandle === undefined ? window.setTimeout(start, 2000) : undefined;

    return () => {
      cancelled = true;
      window.removeEventListener('pointerdown', start);
      if (idleHandle !== undefined) window.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
    };
  }, [allowVideo]);

  const lazy = priority === 'low';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {priority === 'high' && (
        <Helmet>
          <link
            rel="preload"
            as="image"
            href="/media/hero-poster-640.avif"
            imageSrcSet={POSTER_AVIF}
            imageSizes="100vw"
            type="image/avif"
            fetchPriority="high"
          />
        </Helmet>
      )}
      <picture>
        <source type="image/avif" srcSet={POSTER_AVIF} sizes="100vw" />
        <source type="image/webp" srcSet={POSTER_WEBP} sizes="100vw" />
        <img
          src="/media/hero-poster-1280.jpg"
          srcSet={POSTER_JPG}
          sizes="100vw"
          alt=""
          width={1280}
          height={720}
          decoding="async"
          loading={lazy ? 'lazy' : 'eager'}
          fetchPriority={priority === 'high' ? 'high' : priority === 'low' ? 'low' : 'auto'}
          className={`absolute inset-0 h-full w-full object-cover filter ${brightness} contrast-110 scale-105`}
        />
      </picture>
      {playVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/media/hero-poster-1280.webp"
          className={`absolute inset-0 h-full w-full object-cover filter ${brightness} contrast-110 scale-105`}
        >
          <source src={SITE_CONFIG.images.heroVideo} type="video/mp4" />
        </video>
      )}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayGradient}`}></div>
    </div>
  );
}
