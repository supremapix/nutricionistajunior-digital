import React, { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile';
  articleData?: {
    publishedAt: string;
    author: string;
  };
}

export function SeoHead({ title, description, path, type = 'website', articleData }: SeoHeadProps) {
  const fullTitle = `${title} | Nutricionista Junior Coelho`;
  const canonicalUrl = `https://nutricionistajuniorcoelho.com.br${path}`;
  const ogImage = SITE_CONFIG.images.og;

  useEffect(() => {
    // Synchronize HTML title & meta tags dynamically
    document.title = fullTitle;

    const setMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attr, val] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attr, val.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', description);
    setMetaTag('meta[property="og:title"]', fullTitle);
    setMetaTag('meta[property="og:description"]', description);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[property="og:image"]', ogImage);
    setMetaTag('meta[name="twitter:title"]', fullTitle);
    setMetaTag('meta[name="twitter:description"]', description);
    setMetaTag('meta[name="twitter:image"]', ogImage);

    // Dynamic JSON-LD injection
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Junior Coelho",
      "jobTitle": "Nutricionista",
      "url": "https://nutricionistajuniorcoelho.com.br",
      "telephone": SITE_CONFIG.phoneRaw,
      "email": SITE_CONFIG.email,
      "knowsAbout": [
        "Emagrecimento",
        "Reeducação Alimentar",
        "Ganho de Massa Muscular",
        "Nutrição Esportiva",
        "Performance e Qualidade de Vida"
      ]
    };

    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Nutricionista Junior Coelho - Emagrecimento e Performance",
      "url": "https://nutricionistajuniorcoelho.com.br",
      "telephone": SITE_CONFIG.phoneRaw,
      "email": SITE_CONFIG.email,
      "image": ogImage,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
        "addressCountry": "BR"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "09:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "15:00",
          "closes": "18:00"
        }
      ],
      "areaServed": SITE_CONFIG.address.priorityNeighborhoods.map(b => ({
        "@type": "AdministrativeArea",
        "name": `${b}, Curitiba - PR`
      }))
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://nutricionistajuniorcoelho.com.br/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": canonicalUrl
        }
      ]
    };

    let scriptElement = document.getElementById('json-ld-schema');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'json-ld-schema';
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }

    scriptElement.textContent = JSON.stringify([
      personSchema,
      professionalServiceSchema,
      breadcrumbSchema
    ]);

  }, [fullTitle, description, canonicalUrl, ogImage]);

  return null;
}
