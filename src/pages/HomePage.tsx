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

      {/* 1. HERO SECTION PREMIUM (COM IMAGEM 2: FUNDO BANNER HERO) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28">
        {/* IMAGEM 2 NO TOPO (HERO) COMO IMAGEM DE FUNDO COM OVERLAY ELEGANTE */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-referrer filter brightness-50 scale-105"
          style={{ backgroundImage: `url(${SITE_CONFIG.images.heroBg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* BADGE DE CREDIBILIDADE */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded-full text-xs sm:text-sm font-bold backdrop-blur-md">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>Acompanhamento Nutricional Ético & Individualizado</span>
            </div>

            {/* H1 OBRIGATÓRIO */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Nutricionista para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A5D63F] to-[#79B82A]">Emagrecimento, Performance</span> e Qualidade de Vida
            </h1>

            {/* SUBHEADLINE OBRIGATÓRIA */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
              Acompanhamento nutricional individualizado para quem deseja melhorar a alimentação, composição corporal, desempenho e qualidade de vida com orientação profissional.
            </p>

            {/* BOTÕES DE AÇÃO HERO */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'hero_primary_cta' })}
                className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-black text-base shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer min-h-[52px]"
              >
                <MessageCircle size={22} />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <button
                onClick={() => handleNav('/acompanhamento-nutricional')}
                className="flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 cursor-pointer min-h-[52px] backdrop-blur-md"
              >
                <span>Conhecer o acompanhamento</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* DESTAQUES RÁPIDOS SEM PROMESSAS FALSAS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-8 border-t border-slate-800/80 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Sem Dietas Restritivas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Plano Adaptado à Rotina</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Suporte via WhatsApp</span>
              </div>
            </div>

          </div>
        </div>
      </section>

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
              <div className="rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl">
                <img 
                  src={SITE_CONFIG.images.consulting} 
                  alt="Como funciona a consultoria nutricional com Junior Coelho"
                  className="w-full h-[350px] sm:h-[450px] object-cover"
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

          <div className="pt-2">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'home_bottom_cta' })}
              className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-full font-black text-base shadow-2xl transition duration-300 hover:scale-105 active:scale-95 cursor-pointer min-h-[52px]"
            >
              <MessageCircle size={22} />
              <span>Quero iniciar meu acompanhamento</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
