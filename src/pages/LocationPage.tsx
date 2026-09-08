import React from 'react';
import { MapPin, ExternalLink, MessageCircle, Clock, Phone, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function LocationPage() {
  return (
    <>
      <SeoHead 
        title="Locais de Atendimento Nutricional em Curitiba"
        description="Informações sobre locais de atendimento presencial e online com o Nutricionista Junior Coelho na região de Curitiba/PR."
        path="/atendimento"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Localização & Modalidades
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Locais de Atendimento
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Atendimento presencial na região de Curitiba/PR e modalidade online com suporte contínuo.
            </p>
          </div>

          {/* PAINEL DE NOTA DE TRANSPARÊNCIA GEOGRÁFICA */}
          <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-400 shrink-0 mt-1" size={24} />
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">Confirmação de Endereço Presencial</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Nota de transparência: O cadastro original informado ({SITE_CONFIG.address.street}) está sob validação formal de confirmação de sede. O atendimento principal aos pacientes ocorre com foco na região metropolitana de <strong>Curitiba/PR</strong> (DDD 41).
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Bairros Prioritários de Atendimento em Curitiba:
              </h4>
              <div className="flex flex-wrap gap-2">
                {SITE_CONFIG.address.priorityNeighborhoods.map((bairro) => (
                  <span key={bairro} className="bg-slate-900 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
                    • {bairro}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Clock size={18} />
                  <span>Horários de Atendimento</span>
                </div>
                <p className="text-xs text-slate-300">
                  {SITE_CONFIG.hours.days}
                </p>
                <p className="text-xs text-slate-400">
                  Manhã: {SITE_CONFIG.hours.period1} | Tarde/Noite: {SITE_CONFIG.hours.period2}
                </p>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <Phone size={18} />
                  <span>Telefone e WhatsApp</span>
                </div>
                <p className="text-xs text-slate-300">
                  {SITE_CONFIG.phone}
                </p>
                <p className="text-xs text-slate-400">
                  Agendamentos e confirmações de consultório via mensagem rápida.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://maps.google.com/?q=Curitiba+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold py-3.5 px-6 rounded-full text-xs transition cursor-pointer"
              >
                <ExternalLink size={16} />
                <span>Abrir GPS no Google Maps</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'location_page' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-6 rounded-full text-xs transition cursor-pointer shadow-xl"
              >
                <MessageCircle size={18} />
                <span>Confirmar Endereço no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
