import React from 'react';
import { HeartPulse, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function QualityOfLifePage() {
  return (
    <>
      <SeoHead 
        title="Qualidade de Vida, Saúde e Disposição Diária"
        description="Acompanhamento nutricional focado na qualidade de vida, disposição diária, sono e saúde intestinal com Junior Coelho."
        path="/qualidade-de-vida"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.28]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Saúde & Vitalidade
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Nutrição para Qualidade de Vida e Vitalidade
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Elimine o cansaço constante, melhore o funcionamento digestivo e sinta mais disposição para trabalhar, estudar e aproveitar os momentos de lazer.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HeartPulse className="text-emerald-400" size={24} />
              <span>Benefícios do Acompanhamento Focado na Saúde</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-200">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Níveis de energia constantes ao longo de toda a jornada de trabalho.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Melhora da saúde intestinal, redução de estufamento e desconfortos abdominais.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Adequação da ingestão de água, fibras, vitaminas e minerais essenciais.</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Prevenção de doenças crônicas e fortalecimento do sistema imunológico.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'quality_of_life_page' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Agendar Consulta para Qualidade de Vida</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Alimentação equilibrada para disposição, sono e saúde integral
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
