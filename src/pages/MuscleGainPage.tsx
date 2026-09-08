import React from 'react';
import { Dumbbell, MessageCircle, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function MuscleGainPage() {
  return (
    <>
      <SeoHead 
        title="Ganho de Massa Muscular e Hipertrofia em Curitiba"
        description="Estratégias de nutrição para ganho de massa muscular e hipertrofia com Junior Coelho. Distribuição de refeições alinhada aos seus treinos."
        path="/ganho-de-massa-muscular"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.28]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Hipertrofia & Força
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ganho de Massa Muscular e Hipertrofia
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Superávit calórico controlado e timing de nutrientes sincronizado ao seu cronograma de treinos para maximizar o ganho de tecido muscular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Dumbbell className="text-emerald-400" size={22} />
                <span>O que é trabalhado?</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Distribuição adequada de gramas de proteína por quilo de peso corporal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Aporte de carboidratos em horários estratégicos do treino (pré e pós-treino).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Maximização da síntese proteica e otimização do descanso muscular.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldAlert className="text-amber-400" size={22} />
                <span>Princípios Éticos de Prescrição</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A nutrição é prescrita exclusivamente na consulta individualizada após análise biológica. Não há prescrição genérica de dietas ou indicação de marcas comerciais de suplementos neste site público.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Quer acelerar seus ganhos de hipertrofia?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Agende sua consulta individual e alinhe sua alimentação à sua rotina de treinos.
            </p>
            <div className="flex flex-col items-center pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'muscle_gain_page' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Agendar Consulta de Hipertrofia</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Alinhamento nutricional preciso para sincronizar com seu treino
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
