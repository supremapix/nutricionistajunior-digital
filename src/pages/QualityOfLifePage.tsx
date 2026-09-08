import React from 'react';
import { HeartPulse, MessageCircle, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { trackAnalyticsEvent } from '../types';

export function QualityOfLifePage() {
  return (
    <>
      <SeoHead 
        title="Qualidade de Vida, Saúde e Disposição Diária"
        description="Acompanhamento nutricional focado na qualidade de vida, disposição diária, sono e saúde intestinal com Junior Coelho."
        path="/qualidade-de-vida"
      />

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
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

            <div className="pt-4 text-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'quality_of_life_page' })}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-full text-sm shadow-xl transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Agendar Consulta para Qualidade de Vida</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
