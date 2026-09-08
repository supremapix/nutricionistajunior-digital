import React from 'react';
import { Apple, MessageCircle, CheckCircle2, HeartPulse } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { trackAnalyticsEvent } from '../types';

export function DietEducationPage() {
  return (
    <>
      <SeoHead 
        title="Reeducação Alimentar Sustentável"
        description="Reeducação alimentar sem terrorismo com o Nutricionista Junior Coelho. Aprenda a comer de forma consciente para resultados duradouros."
        path="/reeducacao-alimentar"
      />

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
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

            <div className="pt-4 text-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'diet_education_page' })}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-full text-sm shadow-xl transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Iniciar Reeducação Alimentar</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
