import React from 'react';
import { 
  Flame, 
  MessageCircle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight,
  TrendingDown,
  Activity
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function WeightLossPage() {
  return (
    <>
      <SeoHead 
        title="Nutricionista para Emagrecimento em Curitiba"
        description="Acompanhamento nutricional para emagrecimento sustentável com Junior Coelho. Déficit calórico individualizado sem dietas extremamente restritivas."
        path="/emagrecimento"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* CABEÇALHO OBRIGATÓRIO */}
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Especialidade
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Acompanhamento Nutricional para Emagrecimento
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Estratégia personalizada focada em redução sustentável de gordura corporal, preservação de massa muscular e eliminação do efeito sanfona.
            </p>
          </div>

          {/* SESSÕES OBRIGATÓRIAS DO SERVIÇO EMAGRECIMENTO */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* PARA QUEM É? */}
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Flame className="text-emerald-400" size={22} />
                <span>Para quem é indicado?</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pessoas frustradas com dietas restritivas e efeito sanfona.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Quem precisa perder gordura sem perder massa muscular e energia.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Indivíduos com rotina corrida de trabalho que precisam de praticidade.</span>
                </li>
              </ul>
            </div>

            {/* O QUE É AVALIADO? */}
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="text-emerald-400" size={22} />
                <span>O que é avaliado na consulta?</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hábitos alimentares atuais, horários e frequência de refeições.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Gasto energético basal, histórico de peso e nível de treino.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sinais de fome emocional, ansiedade e gatilhos de rotina.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* AVISO IMPORTANTE: SEM PRAZOS GARANTIDOS */}
          <div className="bg-slate-900 border-l-4 border-emerald-500 p-6 rounded-r-2xl space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Compromisso com a Verdade e a Ética Profissional
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              O Nutricionista Junior Coelho não estabelece prazos fixos ou promessas de perda de X quilos em determinado tempo. O ritmo de emagrecimento saudável varia entre indivíduos conforme a resposta metabólica, a consistência dos hábitos e o ponto de partida de cada organismo.
            </p>
          </div>

          {/* QUANTO TEMPO DURA E COMO INICIAR */}
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl space-y-6">
            <h2 className="text-2xl font-bold text-white">Como iniciar seu acompanhamento?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 text-sm">Passo 1</span>
                <h4 className="font-bold text-white">Contato no WhatsApp</h4>
                <p className="text-slate-300">Envie uma mensagem e verifique a disponibilidade de agendamento de consulta.</p>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 text-sm">Passo 2</span>
                <h4 className="font-bold text-white">Consulta & Estratégia</h4>
                <p className="text-slate-300">Avaliação completa para estruturação do plano alimentar individualizado.</p>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <span className="font-bold text-emerald-400 text-sm">Passo 3</span>
                <h4 className="font-bold text-white">Acompanhamento Contínuo</h4>
                <p className="text-slate-300">Suporte pelo WhatsApp e reavaliações para manter a consistência.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col items-center">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'weight_loss_page' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Agendar Consulta de Emagrecimento</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Plano nutricional individualizado e suporte direto via WhatsApp
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
