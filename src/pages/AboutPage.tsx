import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  MessageCircle, 
  HeartPulse, 
  Target, 
  UserCheck, 
  BookOpen
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { AioEntityBlock } from '../components/AioEntityBlock';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function AboutPage() {
  return (
    <>
      <SeoHead 
        title="Sobre o Nutricionista Junior Coelho"
        description="Conheça a trajetória e filosofia de trabalho do Nutricionista Junior Coelho. Atendimento nutricional focado em emagrecimento, hipertrofia e saúde."
        path="/sobre"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.25]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* CABEÇALHO DA PÁGINA */}
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Perfil Profissional
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Junior Coelho — Nutricionista
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Atuação pautada na ciência da nutrição, escuta atenta das necessidades individuais e construção de hábitos alimentares sustentáveis para a vida toda.
            </p>
          </div>

          {/* SESSÃO PRINCIPAL DE BIOGRAFIA E REGISTRO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* IMAGEM PROFISSIONAL (IMAGEM 5) */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img 
                  src={SITE_CONFIG.images.about} 
                  alt="Nutricionista Junior Coelho" 
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-base">Junior Coelho</span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
                      CRN: {SITE_CONFIG.crn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Acompanhamento em Emagrecimento, Performance e Qualidade de Vida.
                  </p>
                </div>
              </div>
            </div>

            {/* TEXTO DE BIOGRAFIA FATO A FATO */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-white border-l-4 border-emerald-500 pl-3">
                Trajetória e Propósito de Atendimento
              </h2>

              <p>
                Como nutricionista, Junior Coelho dedica sua prática a orientar pessoas que buscam melhorar a relação com a comida, mudar a composição corporal e alcançar maior rendimento físico e bem-estar.
              </p>

              <p>
                O acompanhamento é desenhado considerando a rotina de trabalho, os hábitos de sono, a intensidade dos exercícios físicos e as preferências de cada paciente. A estratégia alimentar é construída com metas realistas, sem impositivos radicais ou proibições sem fundamentação científica.
              </p>

              {/* FILOSOFIA DE TRABALHO (PONTOS REQUERIDOS) */}
              <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4 my-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <HeartPulse className="text-emerald-400" size={20} />
                  <span>Filosofia e Pilares do Trabalho</span>
                </h3>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Atendimento Individualizado:</strong> Nenhuma dieta é idêntica à outra.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Educação Alimentar:</strong> Compreensão do papel dos nutrientes sem culpa.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Adaptação à Rotina:</strong> Soluções práticas para quem tem pouco tempo.</span>
                  </li>
                  <li className="flex items-start gap-2 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Objetivos Realistas:</strong> Progresso consistente sem promessas milagrosas.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'about_page' })}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-full font-bold text-sm transition duration-300 hover:scale-105 cursor-pointer inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  <span>Agendar Consulta com Junior Coelho</span>
                </a>
              </div>
            </div>

          </div>

          {/* SÍNTESE CITÁVEL PARA LLMS */}
          <AioEntityBlock />

        </div>
      </section>
    </>
  );
}
