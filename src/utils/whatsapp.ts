/** Single source for the public WhatsApp number and booking messages. */
export const WHATSAPP_NUMBER = '5541997899045';

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá Junior, vi o site e quero agendar uma consulta.';

export function whatsappMessageFor(topic: string) {
  return `Olá Junior, vi o site e quero agendar uma consulta sobre ${topic.trim()}.`;
}

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappUrlFor(topic: string) {
  return buildWhatsAppUrl(whatsappMessageFor(topic));
}
