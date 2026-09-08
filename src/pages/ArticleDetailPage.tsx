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
        articleData={{
          publishedAt: article.publishedAt,
          author: article.author
        }}
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.28]" />
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

          {/* CORPO DO ARTIGO COM RESPOSTAS RÁPIDAS CITÁVEIS */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-slate-800/60">
                {paragraph}
              </p>
            ))}
          </div>

          {/* SÍNTESE DO ARTIGO */}
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3 my-8">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Resumo Prático em 3 Pontos:</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li>1. O acompanhamento profissional evita perdas de tempo com estratégias genéricas.</li>
              <li>2. A individualização garante que o plano alimentar seja sustentável na sua rotina.</li>
              <li>3. A constância de hábitos supera qualquer restrição severa e temporária.</li>
            </ul>
          </div>

          {/* CTA DENTRO DO ARTIGO */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Quer aplicar esses princípios na sua rotina?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Agende uma consulta com o Nutricionista Junior Coelho e receba um plano alimentar feito exclusivamente para você.
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
