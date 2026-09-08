import React from 'react';
import { EnhancedSEO } from './EnhancedSEO';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  articleData?: {
    publishedAt: string;
    author: string;
  };
  faqItems?: { question: string; answer: string }[];
}

export function SeoHead({ title, description, path, type = 'website', articleData, faqItems }: SeoHeadProps) {
  return (
    <EnhancedSEO
      title={title}
      description={description}
      path={path}
      type={type}
      articleData={articleData}
      faqItems={faqItems}
    />
  );
}
