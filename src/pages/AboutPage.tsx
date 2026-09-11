import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  MessageCircle, 
  HeartPulse, 
  Target, 
  UserCheck, 
  BookOpen,
  Dumbbell,
  GraduationCap,
  Briefcase,
  Sparkles
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
        title="Sobre o Nutricionista Junior Coelho (CRN 8-13752)"
        description="Conheça a trajetória, formação acadêmica, vivência no esporte e experiência profissional do Nutricionista Junior Coelho em Curitiba."
        path="/sobre"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* CABEÇALHO DA PÁGINA COM POSICIONAMENTO CENTRAL */}
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Perfil Profissional & Trajetória
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Junior Coelho — Nutricionista
            </h1>
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-emerald-300 font-medium text-sm sm:text-base leading-relaxed">
              <strong className="text-white block font-extrabold text-base sm:text-lg mb-1">
                Eu vivo o esporte. E cuido da saúde das pessoas.
              </strong>
              <span>
                Nutrição personalizada para quem busca emagrecimento, hipertrofia, performance e qualidade de vida.
              </span>
            </div>
          </div>

          {/* SESSÃO PRINCIPAL DE BIOGRAFIA E REGISTRO */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* IMAGEM PROFISSIONAL */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img 
                  src={SITE_CONFIG.images.about} 
                  alt="Nutricionista Junior Coelho - Emagrecimento, Performance e Qualidade de Vida" 
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
                    Nutrição Esportiva, Emagrecimento, Hipertrofia e Qualidade de Vida.
                  </p>
                </div>
              </div>
            </div>

            {/* TEXTO DE APRESENTAÇÃO EDITORIAL */}
            <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl font-bold text-white border-l-4 border-emerald-500 pl-3">
                Quem é Junior Coelho
              </h2>

              <p>
                Sou Junior Coelho, nutricionista, com atuação em nutrição esportiva, emagrecimento, ganho de massa muscular, performance e qualidade de vida.
              </p>

              <p>
                Minha relação com o esporte vai além da profissão. Já fui atleta de fisiculturismo e, atualmente, sou competidor de jiu-jitsu. Essa vivência me permite compreender, na prática, os desafios de quem treina, busca evolução física e precisa conciliar alimentação, recuperação e rotina.
              </p>

              <p>
                Ao longo da minha trajetória profissional, também desenvolvi experiência com suplementação esportiva, consultoria técnica, educação científica e atendimento de praticantes de jiu-jitsu e musculação.
              </p>

              <p>
                Meu objetivo é transformar o conhecimento científico em estratégias nutricionais que façam sentido para cada pessoa, respeitando seus objetivos, suas necessidades e sua realidade.
              </p>

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

          {/* NOVA SEÇÃO — MINHA EXPERIÊNCIA COM O ESPORTE */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Dumbbell size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                  Minha experiência com o esporte
                </h2>
                <h3 className="text-sm font-semibold text-emerald-400">
                  Do fisiculturismo às lutas marciais
                </h3>
              </div>
            </div>

            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                O esporte faz parte da minha história e da forma como compreendo a nutrição.
              </p>
              <p>
                A experiência como atleta de fisiculturismo me aproximou dos desafios relacionados à composição corporal, preparação, disciplina e evolução física.
              </p>
              <p>
                Hoje, como competidor de jiu-jitsu, continuo vivenciando as exigências do treinamento, do condicionamento, da recuperação e da preparação para competir.
              </p>
              <p>
                Essa experiência, somada à minha formação e atuação profissional, contribui para um olhar mais prático sobre as necessidades de quem busca melhorar a saúde, o físico ou o desempenho esportivo.
              </p>
            </div>
          </div>

          {/* BLOCOS DE FORMAÇÃO ACADÊMICA E EXPERIÊNCIA PROFISSIONAL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* FORMAÇÃO ACADÊMICA */}
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <GraduationCap size={20} />
                </div>
                <h2 className="text-xl font-bold text-white">Formação Acadêmica</h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-1">
                  <h3 className="font-bold text-white text-sm sm:text-base">Bacharelado em Nutrição</h3>
                  <p className="text-emerald-400 font-medium">Universidade Brasil</p>
                  <p className="text-slate-400 text-xs">Conclusão: 21 de dezembro de 2016.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-1">
                  <h3 className="font-bold text-white text-sm sm:text-base">Pós-graduação em Nutrição e Fisiologia Aplicadas ao Exercício</h3>
                  <p className="text-emerald-400 font-medium">FAESI / Instituto de Pós-Graduação La Verità Ltda.</p>
                  <p className="text-slate-400 text-xs">2017–2019 · Concluída.</p>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-1">
                  <h3 className="font-bold text-white text-sm sm:text-base">Pós-graduação em Coach Bodybuilding</h3>
                  <p className="text-emerald-400 font-medium">FAESI / Instituto de Pós-Graduação La Verità Ltda.</p>
                  <p className="text-slate-400 text-xs">2019–2021 · Concluída.</p>
                </div>
              </div>
            </div>

            {/* EXPERIÊNCIA PROFISSIONAL E APERFEIÇOAMENTO */}
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Briefcase size={20} />
                  </div>
                  <h2 className="text-xl font-bold text-white">Experiência Profissional & Aperfeiçoamento</h2>
                </div>

                <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3">
                  <p>
                    Além da atuação clínica, Junior Coelho possui experiência com consultoria em suplementação esportiva, suporte técnico de produtos, educação científica e relacionamento com atletas e praticantes de atividade física.
                  </p>
                  <p>
                    Atuou também como palestrante na <strong className="text-white font-semibold">Athletica Nutrition</strong>, compartilhando conhecimentos relacionados à nutrição e à suplementação esportiva, fortalecendo sua atuação em comunicação científica e educação nutricional.
                  </p>
                  <p>
                    Durante um ano, participou de um projeto de aperfeiçoamento em nutrição com <strong className="text-white font-semibold">Renato Cariani e Júlio Balestrin</strong>, experiência que contribuiu para ampliar e aprimorar suas referências, conhecimentos e perspectivas relacionadas à nutrição e ao esporte.
                  </p>
                  <p>
                    Também possui experiência no atendimento de praticantes de jiu-jitsu e musculação, relacionando alimentação, treinamento, recuperação, composição corporal, desempenho e qualidade de vida.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 mt-4">
                <strong className="text-slate-200 block mb-0.5">Atendimento em Curitiba/PR & Online</strong>
                Presencial no bairro Xaxim e atendimento remoto para pacientes em todo o Brasil.
              </div>
            </div>

          </div>

          {/* DIFERENCIAIS */}
          <div className="bg-slate-900/80 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Sparkles size={22} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                O que diferencia meu atendimento
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h3 className="font-bold text-white text-sm sm:text-base text-emerald-400">Ciência aplicada à prática</h3>
                <p className="text-slate-300">Conhecimento científico traduzido em estratégias aplicáveis à rotina.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h3 className="font-bold text-white text-sm sm:text-base text-emerald-400">Vivência real no esporte</h3>
                <p className="text-slate-300">Experiência como ex-atleta de fisiculturismo e atual competidor de jiu-jitsu.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h3 className="font-bold text-white text-sm sm:text-base text-emerald-400">Experiência com jiu-jitsu e musculação</h3>
                <p className="text-slate-300">Compreensão prática das demandas de pessoas que treinam por saúde, estética ou desempenho.</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <h3 className="font-bold text-white text-sm sm:text-base text-emerald-400">Atendimento individualizado</h3>
                <p className="text-slate-300">Planejamento construído considerando objetivos, rotina e necessidades individuais.</p>
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
