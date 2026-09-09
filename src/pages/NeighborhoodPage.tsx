import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, CheckCircle2, AlertCircle, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { NEIGHBORHOODS_DATA, NeighborhoodInfo } from '../data/neighborhoodsData';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

interface NeighborhoodPageProps {
  slug: string;
}

export function NeighborhoodPage({ slug }: NeighborhoodPageProps) {
  // Normalize slug
  const normalizedSlug = slug.toLowerCase().trim();
  const info: NeighborhoodInfo = NEIGHBORHOODS_DATA[normalizedSlug] || {
    slug: normalizedSlug,
    name: normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1).replace(/-/g, ' '),
    fullName: `Nutricionista em ${normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1).replace(/-/g, ' ')} - Curitiba/PR`,
    canonicalUrl: `https://www.nutricionistajunior.digital/nutricionista-em-${normalizedSlug}-curitiba`,
    altUrl: `/atendimento/${normalizedSlug}`,
    description: `Acompanhamento nutricional focado em emagrecimento, reeducação alimentar e ganho de massa muscular no bairro ${normalizedSlug} em Curitiba. Agende com o Nutricionista Junior Coelho (CRN 8-13752).`,
    heroHeadline: `Nutricionista no Bairro ${normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1).replace(/-/g, ' ')} – Curitiba`,
    heroSubheadline: `Acompanhamento individualizado e plano alimentar personalizado para moradores da região de Curitiba.`,
    locationDetails: `Atendimento presencial em Curitiba e consultas online com suporte via WhatsApp para o bairro e região.`,
    nearbyLandmarks: ['Principais Avenidas e Vias de Curitiba'],
    popularObjectives: ['Emagrecimento Sustentável', 'Hipertrofia Muscular', 'Reeducação Alimentar'],
    faq: [
      {
        question: `Como agendar consulta nutricional para o bairro ${normalizedSlug}?`,
        answer: `Você pode agendar pelo WhatsApp (41) 99789-9045 ou pelo formulário de contato do site.`
      }
    ]
  };

  return (
    <>
      <EnhancedSEO 
        title={`${info.fullName} | Atendimento Nutricional`}
        description={info.description}
        canonicalUrl={info.canonicalUrl}
        type="website"
        faqItems={info.faq}
      />

      {/* HERO SECTION DO BAIRRO */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914] border-b border-slate-800">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/70 to-[#050914]/30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              <MapPin size={14} />
              <span>Atendimento Bairro {info.name} • Curitiba/PR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {info.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {info.heroSubheadline}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: `neighborhood_page_${info.slug}` })}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 px-6 py-3.5 rounded-full font-black text-xs sm:text-sm shadow-lg hover:scale-105 transition cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>Agendar Consulta no {info.name}</span>
              </a>

              <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-3.5 rounded-full text-xs font-bold text-slate-200">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>CRN 8-13752</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* DETALHES DE ATENDIMENTO NO BAIRRO */}
      <section className="py-16 sm:py-20 bg-[#050914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLUNA PRINCIPAL DE INFORMAÇÕES GEOGRÁFICAS */}
            <div className="lg:col-span-2 space-y-8 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl">
              <div className="space-y-3">
                <h2 className="text-2xl font-black text-white">
                  Acompanhamento Nutricional para Pacientes do {info.name}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {info.locationDetails}
                </p>
              </div>

              {/* OBJETIVOS POPULARES NO BAIRRO */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  Objetivos Principais Trabalhados no Bairro {info.name}:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {info.popularObjectives.map((obj, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 font-semibold">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* REFERÊNCIAS LOCAIS */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  Pontos de Referência Próximos na Região:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {info.nearbyLandmarks.map((mark, idx) => (
                    <span key={idx} className="bg-slate-950 text-slate-300 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-medium">
                      • {mark}
                    </span>
                  ))}
                </div>
              </div>

              {/* AVISO DE SEGURO E TRANSPARÊNCIA */}
              <div className="bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800 flex items-start gap-3">
                <AlertCircle size={20} className="text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong>Atendimento Presencial e Online:</strong> Realizamos consultas presenciais na estrutura de Curitiba com fácil mobilidade para quem vem do bairro <strong>{info.name}</strong>, além de acompanhamento online com suporte diário via WhatsApp.
                </p>
              </div>
            </div>

            {/* BARRA LATERAL COM HORÁRIOS E CONTATO */}
            <div className="space-y-6">
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
                  Informações de Agendamento
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Horários de Atendimento</strong>
                      <span className="text-slate-300">{SITE_CONFIG.hours.days}</span>
                      <span className="block text-slate-400 text-xs">{SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Telefone & WhatsApp</strong>
                      <span className="text-slate-300">{SITE_CONFIG.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Nutricionista Responsável</strong>
                      <span className="text-slate-300">Junior Coelho (CRN 8-13752)</span>
                    </div>
                  </div>
                </div>

                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAnalyticsEvent('whatsapp_click', { location: `neighborhood_sidebar_${info.slug}` })}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl text-xs sm:text-sm shadow-xl transition cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>Falar no WhatsApp Agora</span>
                </a>
              </div>

              {/* OUTROS BAIRROS PRIORITÁRIOS */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Outros Bairros Atendidos em Curitiba:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {SITE_CONFIG.address.priorityNeighborhoods.map((b) => (
                    <a
                      key={b}
                      href={`/nutricionista-em-${b.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}-curitiba`}
                      className="bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-lg transition"
                    >
                      {b}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* PERGUNTAS FREQUENTES DO BAIRRO */}
          {info.faq && info.faq.length > 0 && (
            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Dúvidas Frequentes - Atendimento no {info.name}
              </h2>

              <div className="space-y-4">
                {info.faq.map((item, index) => (
                  <div key={index} className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                    <h3 className="font-bold text-white text-sm sm:text-base">{item.question}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
