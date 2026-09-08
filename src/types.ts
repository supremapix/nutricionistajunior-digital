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
    sectionsBg: string;
    consulting: string;
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
  | 'share_platform_click';

export function trackAnalyticsEvent(eventName: AnalyticsEventName, details?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    console.log(`[Analytics Event Tracked]: ${eventName}`, details || {});
    // Trigger custom window event if Google Analytics or Tag Manager is attached
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({ event: eventName, ...details });
    }
  }
}
