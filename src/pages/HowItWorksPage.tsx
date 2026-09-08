import React from 'react';
import { Clock, MessageCircle, CheckCircle2, FileText, Calendar, Smartphone } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { trackAnalyticsEvent } from '../types';

export function HowItWorksPage() {
  return (
    <>
      <SeoHead 
        title="Como Funciona a Consulta Nutricional"
        description="Entenda o passo a passo de como funciona a consulta e o acompanhamento nutricional com o Nutricionista Junior Coelho."
        path="/como-funciona"
      />

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Transparência no Atendimento
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Como Funciona a Consulta Nutricional?
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tudo o que você precisa saber sobre as etapas do atendimento, desde a primeira conversa até o suporte diário.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Calendar size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">1. Agendamento</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você entra em contato via WhatsApp {SITE_CONFIG.phone}, escolhe o melhor dia e horário disponível e recebe as instruções prévias.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <FileText size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">2. Anamnese & Avaliação</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Análise completa da sua rotina, horários, histórico de exames, digestão, rotina de treinos e preferências alimentares.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">3. Plano Alimentar & Suporte</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Elaboração de planejamento individualizado e canal direto pelo WhatsApp para tirar dúvidas e realizar ajustes.
              </p>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Pronto para agendar?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Acesse o WhatsApp e converse diretamente com o Nutricionista Junior Coelho.
            </p>
            <div>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'how_it_works_page' })}
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-full text-sm shadow-xl transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Agendar Consulta Agora</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
