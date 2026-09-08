import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { PRERENDER_ROUTES } from '../prerender.config.js';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

async function runPrerender() {
  console.log('🚀 [Pre-Rendering System] Starting static HTML generation for all routes...');

  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Template ${TEMPLATE_PATH} not found. Please run 'vite build' first.`);
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  for (const route of PRERENDER_ROUTES) {
    const dom = new JSDOM(baseHtml);
    const document = dom.window.document;

    // 1. Title
    let titleEl = document.querySelector('title');
    if (!titleEl) {
      titleEl = document.createElement('title');
      document.head.appendChild(titleEl);
    }
    titleEl.textContent = route.title;

    // Helper for Meta Tags
    const setMeta = (nameAttr: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${nameAttr}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Meta Description
    setMeta('name', 'description', route.description);
    setMeta('name', 'author', 'Nutricionista Junior Coelho (CRN 8-13752)');
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'theme-color', '#050914');

    // 3. Canonical Link
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', route.canonical);

    // 4. OpenGraph Tags
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', route.title);
    setMeta('property', 'og:description', route.description);
    setMeta('property', 'og:url', route.canonical);
    setMeta('property', 'og:site_name', 'Nutricionista Junior Coelho');
    setMeta('property', 'og:locale', 'pt_BR');
    setMeta('property', 'og:image', 'https://img.supremasite.com.br/nutri/og-card.webp');
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');

    // 5. Twitter Card Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', route.title);
    setMeta('name', 'twitter:description', route.description);
    setMeta('name', 'twitter:image', 'https://img.supremasite.com.br/nutri/og-card.webp');

    // 6. Local SEO Geo Tags
    setMeta('name', 'geo.region', 'BR-PR');
    setMeta('name', 'geo.placename', 'Curitiba');
    setMeta('name', 'geo.position', '-25.4284;-49.2733');
    setMeta('name', 'ICBM', '-25.4284, -49.2733');

    // 7. Structured Data (Physician & Breadcrumb)
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Physician",
      "@id": "https://nutricionistajuniorcoelho.com.br/#physician",
      "name": "Nutricionista Junior Coelho",
      "image": "https://img.supremasite.com.br/nutri/og-card.webp",
      "telephone": "(41) 99789-9045",
      "email": "nutricionistajuniorcoelho@gmail.com",
      "url": "https://nutricionistajuniorcoelho.com.br",
      "priceRange": "$$",
      "medicalSpecialty": ["Dietetics", "SportsNutrition", "WeightManagement"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Alírio Pencai, 56 casa",
        "addressLocality": "Curitiba",
        "addressRegion": "PR",
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
      "identifier": {
        "@type": "PropertyValue",
        "propertyID": "CRN",
        "value": "8-13752"
      }
    };

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
        ...(route.path !== '/' ? [
          {
            "@type": "ListItem",
            "position": 2,
            "name": route.title.split('|')[0].trim(),
            "item": route.canonical
          }
        ] : [])
      ]
    };

    const scriptPhysician = document.createElement('script');
    scriptPhysician.setAttribute('type', 'application/ld+json');
    scriptPhysician.textContent = JSON.stringify(localBusinessSchema);
    document.head.appendChild(scriptPhysician);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.setAttribute('type', 'application/ld+json');
    scriptBreadcrumb.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    // Write file
    const renderedHtml = dom.serialize();
    if (route.path === '/') {
      fs.writeFileSync(TEMPLATE_PATH, renderedHtml, 'utf-8');
      console.log(`  ✓ Prerendered root index.html [${route.path}]`);
    } else {
      const cleanPath = route.path.startsWith('/') ? route.path.slice(1) : route.path;
      const targetDir = path.join(DIST_DIR, cleanPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFilePath = path.join(targetDir, 'index.html');
      fs.writeFileSync(targetFilePath, renderedHtml, 'utf-8');
      console.log(`  ✓ Prerendered ${cleanPath}/index.html`);
    }
  }

  // Ensure public/_redirects and sitemap.xml exist in dist/
  const redirectsSrc = path.resolve(process.cwd(), 'public', '_redirects');
  const redirectsDist = path.join(DIST_DIR, '_redirects');
  if (fs.existsSync(redirectsSrc)) {
    fs.copyFileSync(redirectsSrc, redirectsDist);
    console.log('  ✓ Copied public/_redirects to dist/_redirects');
  }

  const sitemapSrc = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  const sitemapDist = path.join(DIST_DIR, 'sitemap.xml');
  if (fs.existsSync(sitemapSrc)) {
    fs.copyFileSync(sitemapSrc, sitemapDist);
    console.log('  ✓ Copied public/sitemap.xml to dist/sitemap.xml');
  }

  console.log('✨ [Pre-Rendering System] All pages pre-rendered successfully!');
}

runPrerender().catch((err) => {
  console.error('❌ Error during prerendering:', err);
  process.exit(1);
});
