import React from 'react';
import { EnhancedSEO } from './EnhancedSEO';

interface SeoHeadProps {
  breadcrumbs?: { name: string; path: string }[];
  noindex?: boolean;
  title: string;
  description: string;
  path: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  image?: string;
  articleData?: {
    publishedAt: string;
    author: string;
    authorType?: 'Person' | 'Organization';
  };
  faqItems?: { question: string; answer: string }[];
}

export function SeoHead({ breadcrumbs, noindex, title, description, path, canonicalUrl, type = 'website', image, articleData, faqItems }: SeoHeadProps) {
  return (
    <EnhancedSEO
      breadcrumbs={breadcrumbs}
      noindex={noindex}
      title={title}
      description={description}
      path={path}
      canonicalUrl={canonicalUrl}
      type={type}
      image={image}
      articleData={articleData}
      faqItems={faqItems}
    />
  );
}
