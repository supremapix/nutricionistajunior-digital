import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SupremaCredit } from './SupremaCredit';
import { trackAnalyticsEvent } from '../types';

import { HeroVideoBg } from './HeroVideoBg';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: string) => {
    onNavigate(path);
  };

  return (
    <footer className="bg-[#050914] text-slate-200 border-t border-slate-800 pt-12 pb-10 relative overflow-hidden">
      {/* VIDEO DE FUNDO DO FOOTER DE ALTA VISIBILIDADE */}
      <HeroVideoBg 
        brightness="brightness-[0.88]" 
        overlayGradient="from-[#050914]/95 via-[#050914]/65 to-[#050914]/25" 
      />

      {/* GLOW DISCRETO NO FUNDO DO FOOTER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-[var(--brand-green)]/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* BANNER DEDICADO DE ATENDIMENTO FÁCIL & RÁPIDO (ACESSÍVEL PARA PESSOAS IDOSAS) */}
        <div className="bg-slate-950/90 backdrop-blur-md border-2 border-[var(--brand-green)]/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-[var(--brand-green)]/30">
                Atendimento Rápido & Fácil
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Precisa de Informações ou Agendamento?
              </h3>
              <p className="text-sm sm:text-base text-slate-200 font-medium">
                Entre em contato direto pelo WhatsApp ou Telefone. Estamos prontos para te atender!
              </p>
            </div>

            {/* BOTÕES DE AÇÃO DIRETA COM LETRAS GRANDES E TOQUE FÁCIL */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'footer_quick_banner' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black text-base px-6 py-4 rounded-full shadow-[0_8px_25px_rgba(121,184,42,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 min-h-[52px] cursor-pointer"
              >
                <MessageCircle size={22} className="shrink-0" />
                <span className="whitespace-nowrap">WhatsApp: {SITE_CONFIG.phone}</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                onClick={() => trackAnalyticsEvent('phone_click', { location: 'footer_quick_banner' })}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-4 rounded-full border border-slate-700 shadow-md transition duration-200 min-h-[52px] cursor-pointer"
              >
                <Phone size={20} className="text-[var(--brand-green-light)] shrink-0" />
                <span className="whitespace-nowrap">Ligar: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* INFORMAÇÕES ESSENCIAIS DE FÁCIL LEITURA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-slate-200 pt-2">
            
            {/* HORÁRIOS */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
              <Clock size={24} className="text-[var(--brand-green-light)] shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Horário de Atendimento</p>
                <p className="text-sm font-bold text-white">{SITE_CONFIG.hours.days}</p>
                <p className="text-xs text-slate-300 font-medium">{SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2}</p>
              </div>
            </div>

            {/* CONSULTÓRIO E CIDADE */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5">
              <MapPin size={24} className="text-[var(--brand-green-light)] shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Atendimento Presencial & Online</p>
                <p className="text-sm font-bold text-white">Curitiba / PR & Região</p>
                <p className="text-xs text-slate-300 font-medium">Atendimento em Bairros Prioritários & Online</p>
              </div>
            </div>

            {/* REGISTRO PROFISSIONAL */}
            <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800/80 flex items-center gap-3.5 sm:col-span-2 lg:col-span-1">
              <ShieldCheck size={24} className="text-[var(--brand-orange-light)] shrink-0" />
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Nutricionista Responsável</p>
                <p className="text-sm font-bold text-white">Junior Coelho</p>
                <p className="text-xs text-slate-300 font-medium">Registro Profissional CRN: <strong className="text-[var(--brand-orange-light)]">{SITE_CONFIG.crn}</strong></p>
              </div>
            </div>

          </div>
        </div>

        {/* ESTRUTURA PRINCIPAL DO FOOTER (4 COLUNAS DE ALTO CONTRASTE E TEXTO AMPLO) */}
        <div className="bg-slate-950/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* COLUNA 1: LOGO E SOBrE */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={SITE_CONFIG.images.logo} 
                alt="Logo Nutricionista Junior Coelho" 
                onError={(e) => { e.currentTarget.src = "/logo-site.png"; }}
                className="h-16 sm:h-20 max-h-24 w-auto object-contain"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {SITE_CONFIG.positioning}. Acompanhamento focado em saúde, reeducação alimentar, hipertrofia e qualidade de vida.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-bold text-[var(--brand-green-light)] bg-[var(--brand-green)]/10 px-3 py-1.5 rounded-lg border border-[var(--brand-green)]/20">
                ✓ Atendimento Ético & Individualizado
              </span>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA (LINKS COM ALTO CONTRASTE E TOQUE FÁCIL) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-3 border-[var(--brand-green)] pl-3">
              Páginas do Site
            </h4>
            <ul className="space-y-1.5 text-sm font-medium">
              {[
                { name: "Início", path: "/" },
                { name: "E-books & Guias Digitais", path: "/ebooks" },
                { name: "Sobre o Nutricionista", path: "/sobre" },
                { name: "Acompanhamento Nutricional", path: "/acompanhamento-nutricional" },
                { name: "Como Funciona a Consulta", path: "/como-funciona" },
                { name: "Evolução & Metas Éticas", path: "/evolucao" },
                { name: "Conteúdos & Artigos", path: "/conteudos" },
                { name: "Locais de Atendimento", path: "/atendimento" },
                { name: "Links Oficiais", path: "/links" },
                { name: "Contato Direto", path: "/contato" }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="w-full text-left flex items-center gap-2 text-slate-200 hover:text-[var(--brand-green-light)] hover:bg-slate-900/90 px-2.5 py-1.5 rounded-xl transition cursor-pointer min-h-[40px]"
                  >
                    <ChevronRight size={16} className="text-[var(--brand-green-light)] shrink-0" />
                    <span className="font-semibold">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: ESPECIALIDADES */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-3 border-[var(--brand-green)] pl-3">
              Especialidades
            </h4>
            <ul className="space-y-1.5 text-sm font-medium">
              {[
                { name: "Emagrecimento Sustentável", path: "/emagrecimento" },
                { name: "Reeducação Alimentar", path: "/reeducacao-alimentar" },
                { name: "Ganho de Massa Muscular", path: "/ganho-de-massa-muscular" },
                { name: "Performance Esportiva", path: "/performance" },
                { name: "Qualidade de Vida & Energia", path: "/qualidade-de-vida" }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="w-full text-left flex items-center gap-2 text-slate-200 hover:text-[var(--brand-green-light)] hover:bg-slate-900/90 px-2.5 py-1.5 rounded-xl transition cursor-pointer min-h-[40px]"
                  >
                    <ChevronRight size={16} className="text-[var(--brand-green-light)] shrink-0" />
                    <span className="font-semibold">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800/80">
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-300">Compromisso Profissional:</strong> Planos alimentares adaptados à rotina de cada paciente sem promessas irrealistas.
              </p>
            </div>
          </div>

          {/* COLUNA 4: CONTATO & LOCALIZAÇÃO */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-3 border-[var(--brand-green)] pl-3">
              Canais de Contato
            </h4>

            <div className="space-y-3 text-sm text-slate-200">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'footer_col' })}
                className="flex items-center gap-3 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 p-3 rounded-2xl text-[var(--brand-green-light)] font-bold transition min-h-[44px]"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>

              <a
                href={SITE_CONFIG.emailUrl}
                onClick={() => trackAnalyticsEvent('email_click', { location: 'footer_col' })}
                className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 p-3 rounded-2xl text-slate-200 font-medium transition min-h-[44px]"
              >
                <Mail size={18} className="text-[var(--brand-green-light)] shrink-0" />
                <span className="truncate">{SITE_CONFIG.email}</span>
              </a>

              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase">Atendimento Curitiba/PR</p>
                <p className="text-xs text-slate-300 leading-tight">
                  Bairros: Xaxim, Portão, Água Verde, Boqueirão, Hauer, Capão Raso, Santa Quitéria, Vila Fanny, Novo Mundo, Sítio Cercado.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* DIREITOS RESERVADOS E POLÍTICAS */}
        <div className="bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300 font-medium">
          <p>© {new Date().getFullYear()} Nutricionista Junior Coelho • CRN: {SITE_CONFIG.crn}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNav('/politica-de-privacidade')} 
              className="hover:text-[var(--brand-green-light)] transition cursor-pointer min-h-[30px]"
            >
              Política de Privacidade (LGPD)
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNav('/como-funciona')} 
              className="hover:text-[var(--brand-green-light)] transition cursor-pointer min-h-[30px]"
            >
              Termos de Acompanhamento
            </button>
          </div>
        </div>

        {/* COMPONENTE SUPREMA CREDIT EXACT INTEGRATED */}
        <SupremaCredit />
      </div>
    </footer>
  );
}
