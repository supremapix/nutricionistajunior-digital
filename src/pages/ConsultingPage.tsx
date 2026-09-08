import React from 'react';
import { 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  Target, 
  Users, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function ConsultingPage() {
  const steps = [
    {
      title: "1. Agendamento e Pré-Consulta",
      description: "Contato inicial pelo WhatsApp para alinhamento de horários, envio do questionário prévio de hábitos e orientações de exames (se houver)."
    },
    {
      title: "2. Anamnese Nutricional Completa",
      description: "Conversa aprofundada investigando sua rotina de trabalho, horários de refeição, histórico de saúde, preferências de paladar, aversões e rotina de treinos."
    },
    {
      title: "3. Avaliação de Composição Corporal",
      description: "Coleta e análise de parâmetros físicos e antropométricos para definir o ponto de partida do seu acompanhamento."
    },
    {
      title: "4. Elaboração do Plano Alimentar",
      description: "Cálculo minucioso de calorias e distribuição de proteínas, carboidratos e gorduras ajustados aos seus objetivos."
    },
    {
      title: "5. Suporte Contínuo via WhatsApp",
      description: "Comunicação direta para tirar dúvidas cotidianas, adaptações em viagens, eventos sociais ou mudanças na rotina de treino."
    },
    {
      title: "6. Consultas de Retorno e Reavaliação",
      description: "Acompanhamento periódico para verificar adesão, analisar evolução de medidas e realizar ajustes graduais na estratégia."
    }
  ];

  const faqs = [
    {
      q: "Para quem é indicado o acompanhamento nutricional?",
      a: "Para qualquer pessoa que busca emagrecimento, reeducação alimentar, ganho de massa muscular, melhora do rendimento físico ou mais disposição no dia a dia com orientação profissional."
    },
    {
      q: "O plano alimentar é entregue no mesmo dia?",
      a: "Sim, o plano e as orientações são apresentados e disponibilizados de forma clara logo após a estruturação da sua estratégia individual."
    },
    {
      q: "Quanto tempo dura o acompanhamento?",
      a: "O acompanhamento é um processo contínuo de consolidação de hábitos. A duração e a frequência das consultas de retorno são ajustadas individualmente conforme a evolução do paciente."
    },
    {
      q: "Preciso parar de comer o que gosto?",
      a: "Não. A filosofia do acompanhamento com Junior Coelho busca o equilíbrio. Nenhum alimento isolado é proibido se encaixado no contexto calórico e nutricional correto."
    }
  ];

  return (
    <>
      <SeoHead 
        title="Acompanhamento Nutricional Individualizado"
        description="Acompanhamento nutricional completo com Junior Coelho. Avaliação de rotina, plano alimentar personalizado e suporte constante pelo WhatsApp."
        path="/acompanhamento-nutricional"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.28]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* TOPO DA PÁGINA */}
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Serviço Principal
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Acompanhamento Nutricional Individualizado
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Um método de trabalho estruturado para adaptar a nutrição à sua realidade, garantindo clareza, autonomia e suporte constante.
            </p>
          </div>

          {/* BANNER COM IMAGEM 4 */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
            <img 
              src={SITE_CONFIG.images.accompaniment || SITE_CONFIG.images.consulting} 
              alt="Acompanhamento Nutricional com Junior Coelho"
              className="w-full h-[300px] sm:h-[400px] object-cover filter brightness-75"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-10">
              <div className="max-w-xl space-y-2">
                <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">Atendimento Prático & Científico</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Sem dietas de prateleira ou restrições severas</h3>
              </div>
            </div>
          </div>

          {/* PASSO A PASSO DO ACOMPANHAMENTO */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Como funciona o passo a passo da consulta?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ DA CONSULTA */}
          <div className="bg-slate-900/40 border border-slate-800/80 p-6 sm:p-8 rounded-3xl space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="text-emerald-400" size={24} />
              <span>Dúvidas Frequentes sobre a Consulta</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((f, i) => (
                <div key={i} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="font-bold text-white text-sm">{f.q}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA DE AGENDAMENTO */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-xl sm:text-3xl font-bold text-white">
              Quer tirar suas dúvidas e agendar sua consulta?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Fale diretamente com o Nutricionista Junior Coelho via WhatsApp e saiba os horários disponíveis para atendimento.
            </p>
            <div className="flex flex-col items-center pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'consulting_page_cta' })}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-[0_8px_30px_rgba(121,184,42,0.35)] hover:shadow-[0_12px_40px_rgba(121,184,42,0.55)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Iniciar Atendimento no WhatsApp</span>
              </a>
              <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 block opacity-85">
                Atendimento direto pelo WhatsApp • Resposta em horário comercial
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
