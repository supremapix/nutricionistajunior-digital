import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config/siteConfig';

export interface EnhancedSEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  path?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  image?: string;
  faqItems?: { question: string; answer: string }[];
  articleData?: {
    publishedAt: string;
    author: string;
  };
}

export function EnhancedSEO({
  title,
  description,
  canonicalUrl,
  path = '',
  type = 'website',
  image = SITE_CONFIG.images.og,
  faqItems,
  articleData
}: EnhancedSEOProps) {
  const pageTitle = title.includes('Junior Coelho') ? title : `${title} | Nutricionista Junior Coelho (CRN 8-13752)`;
  const currentCanonical = canonicalUrl || `https://nutricionistajuniorcoelho.com.br${path || ''}`;

  // Structured Data Schema: Physician / MedicalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://nutricionistajuniorcoelho.com.br/#physician",
    "name": "Nutricionista Junior Coelho",
    "image": SITE_CONFIG.images.og,
    "telephone": SITE_CONFIG.phone,
    "email": SITE_CONFIG.email,
    "url": "https://nutricionistajuniorcoelho.com.br",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Dietetics",
      "SportsNutrition",
      "WeightManagement"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SITE_CONFIG.address.street,
      "addressLocality": SITE_CONFIG.address.city,
      "addressRegion": SITE_CONFIG.address.state,
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4284,
      "longitude": -49.2733
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Curitiba" },
      ...SITE_CONFIG.address.priorityNeighborhoods.map(n => ({
        "@type": "Place",
        "name": `Bairro ${n}, Curitiba`
      }))
    ],
    "identifier": {
      "@type": "PropertyValue",
      "propertyID": "CRN",
      "value": SITE_CONFIG.crn
    }
  };

  // Structured Data Schema: Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://nutricionistajuniorcoelho.com.br"
      },
      ...(path && path !== '/' ? [
        {
          "@type": "ListItem",
          "position": 2,
          "name": title.split('|')[0].trim(),
          "item": currentCanonical
        }
      ] : [])
    ]
  };

  // Structured Data Schema: FAQ (if available)
  const faqSchema = faqItems && faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  // Structured Data Schema: Article (if available)
  const articleSchema = articleData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": articleData.publishedAt,
    "author": {
      "@type": "Person",
      "name": articleData.author || "Junior Coelho",
      "jobTitle": "Nutricionista CRN 8-13752"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Nutricionista Junior Coelho",
      "logo": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.images.logo
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Title & Fundamental Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentCanonical} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#050914" />
      <meta name="author" content="Nutricionista Junior Coelho (CRN 8-13752)" />

      {/* Resource Hints & Font Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
      <link rel="dns-prefetch" href="https://img.supremasite.com.br" />

      {/* Local SEO Geo Tags */}
      <meta name="geo.region" content="BR-PR" />
      <meta name="geo.placename" content="Curitiba" />
      <meta name="geo.position" content="-25.4284;-49.2733" />
      <meta name="ICBM" content="-25.4284, -49.2733" />

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentCanonical} />
      <meta property="og:site_name" content="Nutricionista Junior Coelho" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      {articleSchema && <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>}
    </Helmet>
  );
}
