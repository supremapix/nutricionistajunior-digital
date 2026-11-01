import { ARTICLE_INSIGHTS } from '../data/pageInsights';
import React from 'react';
import { ARTICLES_DATA } from '../data/contentData';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { ArrowLeft, Clock, MessageCircle, Share2, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackAnalyticsEvent } from '../types';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function ArticleDetailPage({ slug, onNavigate }: ArticleDetailPageProps) {
  const article = ARTICLES_DATA.find(a => a.slug === slug) || ARTICLES_DATA[0];

  return (
    <>
      <SeoHead 
        title={article.title}
        description={article.description}
        path={`/conteudos/${article.slug}`}
        type="article"
        image={article.imageUrl}
        faqItems={article.sections ? article.faq : undefined}
        articleData={{
          publishedAt: article.publishedAt,
          author: article.author,
          authorType: article.authorType
        }}
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <button
            onClick={() => onNavigate('/conteudos')}
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition cursor-pointer bg-slate-900 px-4 py-2 rounded-full border border-slate-800"
          >
            <ArrowLeft size={16} />
            <span>Voltar para todos os artigos</span>
          </button>

          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full border border-emerald-500/20">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {article.readTime}
              </span>
              <span>•</span>
              <span>Por {article.author}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {article.description}
            </p>
          </div>

          {article.editorialNote && <p className="text-xs text-slate-400">{article.editorialNote}</p>}

          {/* CAPA DO ARTIGO (IMAGEM 16:9) */}
          {article.imageUrl && (
            <div className="space-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
                <img 
                  src={article.imageUrl} 
                  alt={article.imageAlt || article.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>Imagem ilustrativa gerada por inteligência artificial</span>
                <span>CRN 8-13752</span>
              </div>
            </div>
          )}

          {article.sections && <section className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3"><h2 className="text-xl font-bold text-white">{article.summaryBlock.question}</h2><p className="text-slate-300 text-sm sm:text-base leading-relaxed">{article.summaryBlock.directAnswer}</p></section>}

          {/* CORPO DO ARTIGO COM RESPOSTAS RÁPIDAS CITÁVEIS */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}
          </div>

          {article.sections?.map(section => <section key={section.heading} className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{section.heading}</h2>
            {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            <p className="text-xs text-slate-400">Fontes: {section.sources.map((source, index) => <React.Fragment key={source.url}>{index > 0 && ' · '}<a href={source.url} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline">{source.label}</a></React.Fragment>)}</p>
          </section>)}

          {/* SÍNTESE DO ARTIGO */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 my-8">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Resumo Prático em 3 Pontos:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              {(ARTICLE_INSIGHTS[article.slug]?.summary || [article.summaryBlock.directAnswer]).map((point, index) => (
                <li key={point}>{index + 1}. {point}</li>
              ))}
            </ul>
          </div>

          {article.sections && <section className="space-y-4"><h2 className="text-xl font-bold text-white">Dúvidas frequentes</h2>{article.faq.map(item => <div key={item.question} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-2"><h3 className="font-bold text-emerald-300">{item.question}</h3><p className="text-sm text-slate-300 leading-relaxed">{item.answer}</p></div>)}</section>}

          {/* CTA DENTRO DO ARTIGO */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quer aplicar esses princípios na sua rotina?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              {article.sections ? 'Se desejar apoio para organizar sua alimentação, converse com Junior sobre a adequação da consulta online ao seu caso. Sintomas persistentes também precisam de avaliação médica.' : 'Agende uma consulta com o Nutricionista Junior Coelho e receba um plano alimentar feito exclusivamente para você.'}
            </p>
            <div className="flex flex-col items-center pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: `article_${article.slug}` })}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-3.5 rounded-full text-xs sm:text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span className="whitespace-nowrap">Conversar no WhatsApp</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Tire suas dúvidas diretamente com o Nutricionista
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
