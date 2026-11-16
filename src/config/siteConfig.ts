import { SiteConfig } from '../types';
import { buildWhatsAppUrl, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../utils/whatsapp';

export const SITE_CONFIG: SiteConfig = {
  name: "Nutricionista Junior Coelho",
  profession: "Nutricionista",
  positioning: "Emagrecimento, Performance e Qualidade de Vida",
  domain: "www.nutricionistajunior.digital",
  phone: "(41) 99789-9045",
  phoneRaw: `+${WHATSAPP_NUMBER}`,
  whatsappUrl: buildWhatsAppUrl(),
  whatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
  email: "nutricionistajuniorcoelho@gmail.com",
  emailUrl: "mailto:nutricionistajuniorcoelho@gmail.com",
  crn: "8-13752",
  instagramUrl: "https://www.instagram.com/juniorcoelho_nutri/",
  facebookUrl: "https://facebook.com",
  googleBusinessProfileUrl: "https://g.page/r/CRTHrhaL91LiEBM/review",
  googleReviewUrl: "https://g.page/r/CRTHrhaL91LiEBM/review",
  address: {
    street: "Rua Alírio Pencai, 56 casa",
    city: "Curitiba",
    state: "PR",
    priorityNeighborhoods: [
      "Xaxim",
      "Portão",
      "Água Verde",
      "Boqueirão",
      "Hauer",
      "Capão Raso",
      "Santa Quitéria",
      "Fanny",
      "Novo Mundo",
      "Sítio Cercado"
    ]
  },
  hours: {
    days: "Segunda a Sexta-feira",
    period1: "07:00 – 09:30",
    period2: "15:00 – 18:00"
  },
  images: {
    logo: "https://www.nutricionistajunior.digital/media/logo-site.webp",
    og: "https://img.supremasite.com.br/nutri/og-card.webp",
    heroBg: "https://img.supremasite.com.br/nutri/fundo-banner-hero.jpg",
    heroVideo: "https://img.supremasite.com.br/nutri/nutri-junior.mp4",
    sectionsBg: "https://img.supremasite.com.br/nutri/fundo-secoes.jpg",
    consulting: "https://img.supremasite.com.br/nutri/junior-coelho-nutricionista-xaxim-curitiba.webp",
    profile: "https://img.supremasite.com.br/nutri/junior-coelho-nutricionista-no-xaxim-em-curitiba-parana-br.webp",
    accompaniment: "https://img.supremasite.com.br/nutri/junior-coelho-nutricionista-xaxim.webp",
    about: "https://img.supremasite.com.br/nutri/sobre-corpo-musculacao.jpg"
  }
};
