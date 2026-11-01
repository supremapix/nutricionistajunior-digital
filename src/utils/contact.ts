import { SITE_CONFIG } from '../config/siteConfig';

const GOALS: Record<string, string> = {
  emagrecimento: 'Emagrecimento e reeducação alimentar',
  massa: 'Ganho de massa muscular',
  performance: 'Performance esportiva',
  qualidade: 'Qualidade de vida',
};

/** Prepare only: WhatsApp itself asks the visitor to send the message. */
export function buildContactWhatsAppUrl(data: Pick<FormData, 'get'>): string {
  const name = String(data.get('name') || '').trim().slice(0, 100);
  const goal = GOALS[String(data.get('goal') || '')] || 'Acompanhamento nutricional';
  const message = String(data.get('message') || '').trim().slice(0, 1000);
  const text = [`Olá Junior! Meu nome é ${name}.`, `Gostaria de informações sobre: ${goal}.`, message].filter(Boolean).join('\n');
  return `https://wa.me/${SITE_CONFIG.phoneRaw.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;
}
