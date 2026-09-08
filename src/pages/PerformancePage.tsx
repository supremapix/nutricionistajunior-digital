import React from 'react';
import { Zap, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function PerformancePage() {
  return (
    <>
      <SeoHead 
        title="Nutrição e Performance Esportiva"
        description="Otimização de energia e desempenho físico para atletas amadores e esportistas com o Nutricionista Junior Coelho."
        path="/performance"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.28]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Rendimento Esportivo
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Nutrição e Performance Esportiva
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Estratégias para corrida, CrossFit, ciclismo e musculação focando em aporte de energia, reposição hídrica e recuperação eficiente.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Zap className="text-emerald-400" size={24} />
              <span>O que muda no Acompanhamento para Performance?</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Crononutrição: Aporte de carboidratos sincronizado com o horário e intensidade dos treinos.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Redução da fadiga precoce e episódios de queda brusca de rendimento durante o exercício.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Estratégia de hidratação e eletrólitos adaptada à taxa de sudorese do praticante.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Recuperação acelerada entre sessões exaustivas de exercícios físicos.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'performance_page' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Agendar Atendimento para Performance</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Maximize sua energia, foco e capacidade de recuperação no esporte
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
