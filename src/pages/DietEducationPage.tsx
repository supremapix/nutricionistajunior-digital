import React from 'react';
import { Apple, MessageCircle, CheckCircle2, HeartPulse } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function DietEducationPage() {
  return (
    <>
      <SeoHead 
        title="Reeducação Alimentar Sustentável"
        description="Reeducação alimentar sem terrorismo com o Nutricionista Junior Coelho. Aprenda a comer de forma consciente para resultados duradouros."
        path="/reeducacao-alimentar"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Autonomia Alimentar
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Reeducação Alimentar Sustentável
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O caminho definitivo para parar de depender de cardápios impostos e criar uma relação leve, equilibrada e saudável com a comida.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-white">Por que focar em Reeducação Alimentar?</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Dietas temporárias geram resultados temporários. A reeducação proposta por Junior Coelho te ensina como fazer substituições inteligentes no dia a dia, como se comportar em restaurantes, eventos sociais e viagens sem colocar tudo a perder.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Substituição consciente de alimentos processados sem abrir mão do sabor.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Aprenda a entender seus sinais biológicos de fome física e saciedade.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Organização de compras e rotina de preparo sem gastar horas na cozinha.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Melhora constante da saúde digestiva, disposição e bem-estar geral.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'diet_education_page' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Iniciar Reeducação Alimentar</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Desenvolva autonomia alimentar sem restrições extremas
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
