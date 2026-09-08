import React from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Dumbbell, 
  Zap, 
  HeartPulse, 
  Apple, 
  Clock, 
  Award,
  BookOpen,
  Users,
  ChevronRight
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SERVICES_DATA, ARTICLES_DATA, HABIT_ACHIEVEMENTS, AUTHORIZED_TESTIMONIALS } from '../data/contentData';
import { AioEntityBlock } from '../components/AioEntityBlock';
import { EthicalNoticeBanner } from '../components/EthicalNoticeBanner';
import { SeoHead } from '../components/SeoHead';
import { InstagramFeed } from '../components/InstagramFeed';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const handleNav = (path: string) => {
    onNavigate(path);
  };

  return (
    <>
      <SeoHead 
        title="Nutricionista Junior Coelho | Emagrecimento, Performance e Qualidade de Vida"
        description="Acompanhamento nutricional com Junior Coelho para emagrecimento, reeducação alimentar, ganho de massa, performance e qualidade de vida."
        path="/"
      />

      {/* 1. HERO SECTION MINIMALISTA & ULTRA LIMPO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 lg:py-28 bg-[#050914]">
        {/* VIDEO DE FUNDO HERO DE ALTA VISIBILIDADE */}
        <HeroVideoBg 
          brightness="brightness-[0.95]" 
          overlayGradient="from-[#050914] via-[#050914]/40 to-[#050914]/10" 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-8">

            {/* H1 LIMPO E MAJESTOSO COM SOMBRA DE TEXTO PARA LEITURA PERFEITA */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
              Nutricionista para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-green-light)] via-[var(--brand-green)] to-[var(--brand-orange-light)]">Emagrecimento, Performance</span> e Qualidade de Vida
            </h1>

            {/* SUBHEADLINE ELEGANTE E LIMPA */}
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed font-normal max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              Acompanhamento nutricional individualizado desenhado para transformar sua saúde, composição corporal e rendimento sem abrir mão da sua rotina.
            </p>

            {/* BOTÕES DE AÇÃO REFINADOS EM LINHA ÚNICA COM SUBTEXTO DISCRETO E ELEGANTE */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-5 pt-2">
              
              <div className="flex flex-col items-center sm:items-start">
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'hero_primary_cta' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 px-8 py-4 rounded-full font-black text-base whitespace-nowrap shadow-[0_10px_35px_rgba(121,184,42,0.4)] hover:shadow-[0_15px_45px_rgba(121,184,42,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer min-h-[54px]"
                >
                  <MessageCircle size={20} className="shrink-0" />
                  <span className="whitespace-nowrap">Agendar pelo WhatsApp</span>
                </a>
                <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 px-1 flex items-center gap-1.5 opacity-90 drop-shadow">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Resposta rápida em horário comercial
                </span>
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <button
                  onClick={() => handleNav('/acompanhamento-nutricional')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-950/80 hover:bg-slate-900/90 text-white border border-slate-600/80 hover:border-[var(--brand-green)]/60 px-7 py-4 rounded-full font-bold text-base whitespace-nowrap transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[54px] backdrop-blur-md shadow-lg"
                >
                  <span className="whitespace-nowrap">Conhecer o Acompanhamento</span>
                  <ArrowRight size={18} className="text-[var(--brand-green-light)] shrink-0" />
                </button>
                <span className="text-[11px] text-slate-300/80 font-medium tracking-wide mt-2 px-1 opacity-85 drop-shadow">
                  Entenda nossa metodologia completa
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FAIXA MARQUEE EM CONTINUO APÓS O HERO (LADO INVERSO) */}
      <div className="bg-[#080d1a] border-y border-slate-800/90 py-3.5 overflow-hidden relative z-10 shadow-xl">
        <div className="animate-marquee-reverse flex items-center whitespace-nowrap gap-8 text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-200 font-bold">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Nutrição de Alto Padrão
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2 text-slate-100">
                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                Atendimento Curitiba/PR & Online
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2 text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                Estratégias Sob Medida
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-2 text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                Evolução Sustentável
              </span>
              <span className="text-slate-600">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. RESPOSTA DIRETA ÀS INTENÇÕES DE BUSCA (SEO + LLM CITÁVEL) */}
      <section className="py-16 bg-slate-950 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Para quem é o Acompanhamento Nutricional com Junior Coelho?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Atendimento focado em responder suas reais necessidades e metas com clareza e acompanhamento contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Flame size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Emagrecimento & Reeducação</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Para quem deseja eliminar gordura corporal mantendo a massa magra, sem sofrer com dietas radicais ou privação de convívio social.
              </p>
              <button 
                onClick={() => handleNav('/emagrecimento')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Saiba mais sobre emagrecimento</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Dumbbell size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Ganho de Massa & Hipertrofia</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estratégias nutricionais precisas para praticantes de musculação e esportistas ajustando calorias e macronutrientes para o máximo aproveitamento do treino.
              </p>
              <button 
                onClick={() => handleNav('/ganho-de-massa-muscular')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Saiba mais sobre ganho de massa</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 p-6 rounded-2xl space-y-3 hover:border-emerald-500/40 transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">Performance & Qualidade de Vida</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Alimentação organizada para aumentar a energia no trabalho, melhorar a qualidade do sono, regular a digestão e evitar fadiga durante o dia.
              </p>
              <button 
                onClick={() => handleNav('/performance')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Saiba mais sobre performance</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO "SOBRE O JUNIOR" (COM IMAGEM 5: SOBRE CORPO MUSCULAÇÃO) */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* FOTO E MOLDURA EDITORIAL (IMAGEM 5) */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
                <img 
                  src={SITE_CONFIG.images.about} 
                  alt="Nutricionista Junior Coelho - Foco em Performance e Musculação"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800">
                  <p className="text-sm font-bold text-white">Junior Coelho</p>
                  <p className="text-xs text-emerald-400">Nutricionista • CRN: {SITE_CONFIG.crn}</p>
                </div>
              </div>
            </div>

            {/* CONTEÚDO EDITORIAL CONFORTÁVEL */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Award size={16} />
                <span>Sobre o Nutricionista</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Orientação Nutricional Científica, Prática e Sem Radicalismos
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Junior Coelho atua no acompanhamento nutricional individualizado com o propósito de transformar a relação das pessoas com a alimentação. O trabalho não se baseia em restrições extremas nem em modelos de dieta genéricos, mas sim em adequar a nutrição à realidade e aos objetivos específicos de cada indivíduo.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Atendimento Individualizado:</strong>
                    <span>Análise profunda da sua rotina de trabalho, treinos, preferências e histórico de saúde.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Adaptação à Vida Real:</strong>
                    <span>Planejamento realista para quem precisa conciliar alimentação saudável com rotina corrida.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => handleNav('/sobre')}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-full font-bold text-sm transition duration-300 hover:scale-105 cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Conhecer a trajetória profissional</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SEÇÃO "COMO FUNCIONA A CONSULTORIA" (COM IMAGEM 4) */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Clock size={16} />
                <span>Metodologia de Acompanhamento</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Como Funciona a Consultoria e o Atendimento Nutricional?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                O processo é desenhado para dar total suporte e clareza ao paciente em cada etapa do seu desenvolvimento.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Avaliação Inicial Detalhada</h4>
                    <p className="text-slate-300 text-xs mt-1">
                      Análise de hábitos alimentares, rotina de horários, hábitos de sono, preferências e objetivos principais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Plano Alimentar Personalizado</h4>
                    <p className="text-slate-300 text-xs mt-1">
                      Cálculo preciso das suas necessidades de energia e nutrientes com opções flexíveis de substituição.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">Acompanhamento e Suporte Contínuo</h4>
                    <p className="text-slate-300 text-xs mt-1">
                      Canal de atendimento pelo WhatsApp para tirar dúvidas, ajustar refeições em imprevistos e manter o foco.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/como-funciona')}
                  className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 px-6 py-3 rounded-full text-xs font-bold transition cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Ver detalhes da consulta</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* IMAGEM 4 NA SEÇÃO COMO FUNCIONA */}
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900/50">
                <img 
                  src={SITE_CONFIG.images.consulting} 
                  alt="Como funciona a consultoria nutricional com Junior Coelho"
                  className="w-full max-w-full h-auto block object-contain object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. EVOLUÇÃO NO ACOMPANHAMENTO (COM IMAGEM 3 DE FUNDO REPETIDO E BANNER ÉTICO) */}
      <section 
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${SITE_CONFIG.images.sectionsBg})` }}
      >
        <div className="absolute inset-0 bg-slate-950/92"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Evolução no Acompanhamento Nutricional
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Conquistas fundamentadas na consolidação de hábitos saudáveis, adesão à rotina e relatórios de progresso éticos.
            </p>
          </div>

          {/* BANNER ÉTICO OBRIGATÓRIO */}
          <EthicalNoticeBanner />

          {/* CARDS DE INDICADORES DE CONQUISTAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
            {HABIT_ACHIEVEMENTS.map((hab) => (
              <div key={hab.id} className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  {hab.category}
                </span>
                <h4 className="text-base font-bold text-white pt-1">{hab.metric}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{hab.description}</p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300 font-medium">
                  • {hab.indicator}
                </div>
              </div>
            ))}
          </div>

          {/* DEPOIMENTOS TEXTUAIS AUTORIZADOS */}
          <div className="mt-12 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="text-emerald-400" size={20} />
              <span>Depoimentos Textuais Autorizados de Pacientes</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AUTHORIZED_TESTIMONIALS.map((test) => (
                <div key={test.id} className="bg-slate-950/70 border border-slate-800/80 p-5 rounded-2xl flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    "{test.text}"
                  </p>
                  <div className="pt-3 border-t border-slate-800 text-xs">
                    <p className="font-bold text-white">{test.patientName}</p>
                    <p className="text-[11px] text-emerald-400">{test.goal} • {test.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. BLOCO CITÁVEL GEO / AIO PARA IAs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AioEntityBlock />
      </div>

      {/* 7. HUB SEMÂNTICO DE CONTEÚDOS / BLOG */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <BookOpen size={16} />
                <span>Educação Nutricional & Artigos</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Conteúdos sobre Nutrição e Hábitos
              </h2>
            </div>

            <button
              onClick={() => handleNav('/conteudos')}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Ver todos os artigos</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLES_DATA.slice(0, 3).map((art) => (
              <div 
                key={art.id} 
                className="bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl space-y-4 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-md border border-emerald-500/30">
                      {art.category}
                    </span>
                    <span className="text-slate-400">{art.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white hover:text-emerald-400 transition">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {art.description}
                  </p>
                </div>

                <button
                  onClick={() => handleNav(`/conteudos/${art.slug}`)}
                  className="pt-4 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer border-t border-slate-800"
                >
                  <span>Ler artigo completo</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

          {/* BANNER DE DESTAQUE DE E-BOOKS */}
          <div className="mt-12 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-2 border-[var(--brand-green)]/40 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--brand-green)]/30">
                Lançamento • Materiais Digitais
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Conheça nossos E-books & Guias Nutricionais Práticos
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                Aprenda sobre Nutrição & Receitas Fitness, Dieta Inteligente e Cuidados com Tatuagem/Piercing com conteúdos exclusivos.
              </p>
            </div>

            <button
              onClick={() => handleNav('/ebooks')}
              className="inline-flex items-center gap-2 bg-[var(--brand-green)] hover:bg-[var(--brand-green-light)] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full shadow-lg transition hover:scale-105 cursor-pointer whitespace-nowrap shrink-0"
            >
              <BookOpen size={18} />
              <span>Ver Todos os E-books</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* 8. FEED DO INSTAGRAM EMPOERADO (INSTAGRAM EMBED FEED) */}
      <InstagramFeed />

      {/* 9. CTA FINAL DE AGENDAMENTO VIA WHATSAPP */}
      <section className="py-16 bg-gradient-to-br from-emerald-950/60 to-slate-950 border-t border-emerald-500/30">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Pronto para Iniciar seu Acompanhamento Nutricional?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tire suas dúvidas, conheça a metodologia e agende sua consulta diretamente pelo WhatsApp de forma rápida e prática.
          </p>

          <div className="pt-2 flex flex-col items-center">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'home_bottom_cta' })}
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 px-8 py-4 rounded-full font-black text-base whitespace-nowrap shadow-[0_10px_35px_rgba(121,184,42,0.4)] hover:shadow-[0_15px_45px_rgba(121,184,42,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer min-h-[52px]"
            >
              <MessageCircle size={20} className="shrink-0" />
              <span className="whitespace-nowrap">Quero iniciar meu acompanhamento</span>
            </a>
            <span className="text-[11px] text-slate-300 font-medium tracking-wide mt-2 opacity-85">
              Atendimento direto pelo WhatsApp • Vagas limitadas para este mês
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
