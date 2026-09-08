import React from 'react';
import { EthicalNoticeBanner } from '../components/EthicalNoticeBanner';
import { HABIT_ACHIEVEMENTS, AUTHORIZED_TESTIMONIALS } from '../data/contentData';
import { SeoHead } from '../components/SeoHead';
import { Users, HeartPulse, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackAnalyticsEvent } from '../types';

export function EvolutionsPage() {
  return (
    <>
      <SeoHead 
        title="Evolução e Metas Éticas no Acompanhamento Nutricional"
        description="Acompanhamento de evolução focado em mudança de hábitos, adesão à rotina, qualidade de vida e depoimentos autorizados de pacientes."
        path="/evolucao"
      />

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Acompanhamento Ético
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Evolução no Acompanhamento Nutricional
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              O sucesso nutricional é mensurado pela consolidação de hábitos saudáveis, melhora nos marcadores de saúde e ganho de qualidade de vida real.
            </p>
          </div>

          {/* BANNER ÉTICO OBRIGATÓRIO */}
          <EthicalNoticeBanner />

          {/* CONQUISTAS RELACIONADAS A HÁBITOS */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <HeartPulse className="text-emerald-400" size={24} />
              <span>Indicadores de Evolução Acompanhados na Consulta</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HABIT_ACHIEVEMENTS.map((hab) => (
                <div key={hab.id} className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      {hab.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{hab.metric}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{hab.description}</p>
                  <div className="pt-3 border-t border-slate-800 text-xs font-medium text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{hab.indicator}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEPOIMENTOS TEXTUAIS AUTORIZADOS */}
          <div className="bg-slate-900/50 border border-slate-800/80 p-6 sm:p-8 rounded-3xl space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Users className="text-emerald-400" size={24} />
              <span>Relatos Textuais Autorizados por Pacientes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AUTHORIZED_TESTIMONIALS.map((test) => (
                <div key={test.id} className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                    "{test.text}"
                  </p>
                  <div className="pt-3 border-t border-slate-800 text-xs">
                    <p className="font-bold text-white">{test.patientName}</p>
                    <p className="text-emerald-400">{test.goal} • {test.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA FINAL */}
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Pronto para construir sua própria evolução?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Agende sua consulta e comece um acompanhamento nutricional feito sob medida para você.
            </p>
            <div>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'evolutions_page' })}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-full text-sm shadow-xl transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Agendar Consulta no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
