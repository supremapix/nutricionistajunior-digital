import React from 'react';
import { EnhancedSEO } from './EnhancedSEO';

interface SeoHeadProps {
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
  };
  faqItems?: { question: string; answer: string }[];
}

export function SeoHead({ noindex, title, description, path, canonicalUrl, type = 'website', image, articleData, faqItems }: SeoHeadProps) {
  return (
    <EnhancedSEO
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
