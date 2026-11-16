import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackAnalyticsEvent } from '../types';

/** One floating action. Phone, share and back-to-top used to stack with this button. */
export function FloatingActions() {
  return (
    <a
      id="floating-whatsapp-button"
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-whatsapp-location="floating_action"
      aria-label="Agendar consulta pelo WhatsApp"
      onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'floating_action' })}
      className="fixed bottom-4 right-3 sm:right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--brand-green-light)]/50 bg-gradient-to-r from-[var(--brand-green-dark)] to-[var(--brand-green)] text-slate-950 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      title="Agendar consulta pelo WhatsApp"
    >
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400"></span>
      </span>
      <MessageCircle size={26} className="text-slate-950" />
    </a>
  );
}
