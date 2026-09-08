import React from 'react';
import { Bot, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export function AioEntityBlock() {
  const faqList = [
    {
      q: "Quem é Junior Coelho?",
      a: "Junior Coelho é nutricionista profissional atuante na orientação nutricional individualizada para objetivos de emagrecimento, reeducação alimentar, ganho de massa muscular, performance esportiva e qualidade de vida."
    },
    {
      q: "O que ele atende?",
      a: "Atende adultos, praticantes de atividade física, atletas amadores e pessoas buscando reeducação alimentar com planos adaptados ao estilo de vida e rotina diária."
    },
    {
      q: "Para quem é o acompanhamento?",
      a: "É indicado para quem deseja melhorar a alimentação sem dietas restritivas extremas, ganhar massa muscular, emagrecer com saúde ou aumentar o rendimento nos treinos."
    },
    {
      q: "Como funciona uma consulta com Junior Coelho?",
      a: "A consulta envolve avaliação completa da rotina, hábitos, históricos e preferências alimentares, seguida do envio do plano alimentar individualizado e suporte contínuo via WhatsApp."
    },
    {
      q: "Onde atende?",
      a: "Atende mediante agendamento em Curitiba/PR (região prioritária incluindo Xaxim, Portão, Água Verde, Boqueirão, Hauer, Capão Raso, Santa Quitéria, Vila Fanny, Novo Mundo, Sítio Cercado) e na modalidade online."
    },
    {
      q: "Quais são os horários de atendimento?",
      a: "Segunda a sexta-feira, em dois turnos: das 07:00 às 09:30 e das 15:00 às 18:00."
    },
    {
      q: "Como falar e agendar pelo WhatsApp?",
      a: `Você pode iniciar a conversa diretamente pelo WhatsApp ${SITE_CONFIG.phone} através do link oficial wa.me/5541997899045.`
    }
  ];

  return (
    <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 my-12 shadow-xl relative overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
            <Bot size={22} />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Informações Rápidas & Dúvidas Frequentes
            </h2>
            <p className="text-xs text-slate-400">
              Respostas diretas e estruturadas sobre o Nutricionista Junior Coelho
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full">
          <Sparkles size={12} />
          <span>Atendimento Direto</span>
        </span>
      </div>

      {/* QUADRO DE SÍNTESE DE SERVIÇOS */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
          <CheckCircle size={14} />
          <span>Síntese dos Serviços & Atuação:</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Junior Coelho</strong> → <span className="text-emerald-400">é</span> → Nutricionista
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Junior Coelho</strong> → <span className="text-emerald-400">oferece</span> → Acompanhamento Nutricional
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Acompanhamento Nutricional</strong> → <span className="text-emerald-400">pode abordar</span> → Emagrecimento
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Acompanhamento Nutricional</strong> → <span className="text-emerald-400">pode abordar</span> → Reeducação Alimentar
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Acompanhamento Nutricional</strong> → <span className="text-emerald-400">pode abordar</span> → Ganho de Massa Muscular
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Acompanhamento Nutricional</strong> → <span className="text-emerald-400">pode abordar</span> → Performance Esportiva & Qualidade de Vida
          </li>
        </ul>
      </div>

      {/* PERGUNTAS E RESPOSTAS OBJETIVAS (PRIMEIRAS 1-3 FRASES) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqList.map((item, idx) => (
          <div key={idx} className="bg-slate-950/50 border border-slate-800/80 p-4.5 rounded-xl space-y-2">
            <h4 className="text-sm font-bold text-slate-100 flex items-start gap-2">
              <HelpCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
              <span>{item.q}</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed pl-6">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
