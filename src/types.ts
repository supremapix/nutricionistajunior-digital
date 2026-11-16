export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  targetAudience: string[];
  howItWorks: string[];
  benefits: string[];
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author?: string;
  authorType?: 'Person' | 'Organization';
  editorialNote?: string;
  sections?: { heading: string; paragraphs: string[]; sources: { label: string; url: string }[] }[];
  imageUrl?: string;
  imageAlt?: string;
  summaryBlock: {
    question: string;
    directAnswer: string;
  };
  content: string[];
  faq: { question: string; answer: string }[];
}

export interface HabitAchievement {
  id: string;
  category: string;
  metric: string;
  description: string;
  indicator: string;
}

export interface AuthorizedTestimonial {
  id: string;
  patientName: string; // e.g. "Paciente A.M. (Autorizado)"
  goal: string;
  text: string;
  duration: string;
}

export interface SiteConfig {
  name: string;
  profession: string;
  positioning: string;
  domain: string;
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  whatsappMessage: string;
  email: string;
  emailUrl: string;
  crn: string;
  instagramUrl: string;
  facebookUrl: string;
  googleBusinessProfileUrl: string;
  googleReviewUrl: string;
  address: {
    street: string;
    city: string;
    state: string;
    priorityNeighborhoods: string[];
  };
  hours: {
    days: string;
    period1: string;
    period2: string;
  };
  images: {
    logo?: string;
    og: string;
    heroBg: string;
    heroVideo?: string;
    sectionsBg: string;
    consulting: string;
    profile?: string;
    accompaniment?: string;
    about: string;
  };
}

export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'schedule_click'
  | 'service_view'
  | 'contact_form_submit'
  | 'share_copied'
  | 'share_platform_click'
  | 'ebook_click'
  | 'click_whatsapp'
  | 'click_agendamento'
  | 'click_site'
  | 'click_ebooks'
  | 'click_google_review'
  | 'click_instagram'
  | 'click_phone'
  | 'click_location'
  | 'click_qrcode';

let lastWhatsAppClickAt = 0;

export function trackAnalyticsEvent(eventName: AnalyticsEventName, details?: Record<string, any>) {
  if (typeof window === 'undefined') return;
  const now = Date.now();
  // Link handlers and the document listener can both see the same click.
  if (eventName === 'whatsapp_click') {
    if (now - lastWhatsAppClickAt < 400) return;
    lastWhatsAppClickAt = now;
  }
  const analyticsWindow = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  if (typeof analyticsWindow.gtag === 'function') {
    analyticsWindow.gtag('event', eventName, details || {});
    return;
  }
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: eventName, ...(details || {}) });
}
