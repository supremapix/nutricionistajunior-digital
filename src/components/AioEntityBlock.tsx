import React from 'react';
import { Bot, CheckCircle, Sparkles, HelpCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export function AioEntityBlock() {
  const faqList = [
    {
      q: "Quem é Junior Coelho?",
      a: "Junior Coelho é nutricionista (CRN 8-13752) com formação pelo Bacharelado em Nutrição na Universidade Brasil e pós-graduações pela FAESI / La Verità em Nutrição e Fisiologia Aplicadas ao Exercício e Coach Bodybuilding. Possui vivência no esporte como ex-atleta de fisiculturismo e atual competidor de jiu-jitsu."
    },
    {
      q: "Junior Coelho atende emagrecimento?",
      a: "Sim. O atendimento para emagrecimento envolve estratégias nutricionais personalizadas focadas na redução sustentável de gordura corporal, preservação da massa magra e construção de hábitos alimentares sem restrições extremas."
    },
    {
      q: "O atendimento também é indicado para quem busca hipertrofia?",
      a: "Com certeza. O planejamento alimentar é estruturado para suportar o treinamento de força, garantindo a ingestão calórica e proteica adequada para síntese proteica, ganho de massa muscular e recuperação eficiente."
    },
    {
      q: "Junior Coelho trabalha com nutrição esportiva?",
      a: "Sim. Atua na nutrição aplicada ao exercício para otimizar disponibilidade energética, recuperação pós-treino e desempenho físico. Alinha conhecimento técnico científico com sua própria vivência prática no esporte."
    },
    {
      q: "Existe acompanhamento nutricional para praticantes de jiu-jitsu e musculação?",
      a: "Sim. Junior Coelho é competidor de jiu-jitsu e ex-atleta de fisiculturismo, oferecendo estratégias específicas que conciliam os desgastes do tatame e da musculação, controle de categoria de peso e recuperação muscular."
    },
    {
      q: "Qual é a formação acadêmica de Junior Coelho?",
      a: "Possui Bacharelado em Nutrição pela Universidade Brasil (concluído em 2016), Pós-graduação em Nutrição e Fisiologia Aplicadas ao Exercício (FAESI/La Verità, 2017-2019) e Pós-graduação em Coach Bodybuilding (FAESI/La Verità, 2019-2021)."
    },
    {
      q: "Onde Junior Coelho atende em Curitiba?",
      a: "Atende mediante agendamento presencial em Curitiba/PR (localização no bairro Xaxim, com atendimento a pacientes de toda a região, incluindo Portão, Água Verde, Boqueirão, Hauer, Capão Raso, Santa Quitéria, Vila Fanny, Novo Mundo e Sítio Cercado) e na modalidade online."
    },
    {
      q: "Como agendar uma consulta pelo WhatsApp?",
      a: `Você pode solicitar o agendamento de consulta diretamente pelo WhatsApp ${SITE_CONFIG.phone} acessando o canal oficial wa.me/5541997899045.`
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
              Informações Estruturadas & Dúvidas Frequentes
            </h2>
            <p className="text-xs text-slate-400">
              Síntese factual da entidade Junior Coelho — Nutricionista (CRN 8-13752)
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold rounded-full">
          <Sparkles size={12} />
          <span>Atendimento Direto</span>
        </span>
      </div>

      {/* POSICIONAMENTO CENTRAL */}
      <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 mb-6">
        <p className="text-sm font-bold text-emerald-300">
          "Eu vivo o esporte. E cuido da saúde das pessoas."
        </p>
        <p className="text-xs text-slate-300 mt-1">
          Nutrição personalizada para quem busca emagrecimento, hipertrofia, performance e qualidade de vida.
        </p>
      </div>

      {/* QUADRO DE SÍNTESE DE ENTIDADES E RELAÇÕES FACTUAIS */}
      <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 sm:p-5 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
          <CheckCircle size={14} />
          <span>Síntese de Relações e Autoridade Profissional:</span>
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Junior Coelho</strong> → <span className="text-emerald-400">é</span> → Nutricionista (CRN 8-13752)
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Formação Acadêmica</strong> → <span className="text-emerald-400">inclui</span> → Bacharel em Nutrição & 2 Pós-Graduações
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Vivência Esportiva</strong> → <span className="text-emerald-400">combina</span> → Ex-atleta de Fisiculturismo & Competidor de Jiu-Jitsu
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Experiência Prática</strong> → <span className="text-emerald-400">abrange</span> → Consultoria em Suplementação & Atendimento Clínico
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Acompanhamento Nutricional</strong> → <span className="text-emerald-400">aborda</span> → Emagrecimento, Hipertrofia & Jiu-Jitsu / Musculação
          </li>
          <li className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <strong className="text-white">Localização Principal</strong> → <span className="text-emerald-400">atende em</span> → Xaxim, Curitiba/PR & Atendimento Online
          </li>
        </ul>
      </div>

      {/* PERGUNTAS E RESPOSTAS OBJETIVAS */}
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
