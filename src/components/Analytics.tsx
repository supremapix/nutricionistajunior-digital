import { useEffect } from 'react';
import { trackAnalyticsEvent } from '../types';
import { WHATSAPP_NUMBER } from '../utils/whatsapp';

const GA_ID = (import.meta.env?.VITE_GA_MEASUREMENT_ID || '').trim();
const GTM_ID = (import.meta.env?.VITE_GTM_ID || '').trim();
const GA_OK = /^G-[A-Z0-9]+$/.test(GA_ID);
const GTM_OK = /^GTM-[A-Z0-9]+$/.test(GTM_ID);

/**
 * Loads GA4 and/or GTM only when a real id is present in the environment.
 * Unset or invalid values do not inject a tag. WhatsApp clicks are tracked
 * even before a container exists, so the event is ready when one is added.
 */
export function Analytics() {
  useEffect(() => {
    const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    if (GA_OK || GTM_OK) w.dataLayer = w.dataLayer || [];

    if (GTM_OK && !document.getElementById('gtm-loader')) {
      w.dataLayer!.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const script = document.createElement('script');
      script.id = 'gtm-loader';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    }

    if (GA_OK && !document.getElementById('ga4-loader')) {
      const script = document.createElement('script');
      script.id = 'ga4-loader';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
      w.gtag = (...args: unknown[]) => {
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push(args);
      };
      w.gtag('js', new Date());
      w.gtag('config', GA_ID);
    }

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      const isBusinessWhatsApp = href.includes(`wa.me/${WHATSAPP_NUMBER}`) || href.includes('api.whatsapp.com/');
      if (!isBusinessWhatsApp) return;
      trackAnalyticsEvent('whatsapp_click', {
        location: anchor.getAttribute('data-whatsapp-location') || 'whatsapp_link',
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
