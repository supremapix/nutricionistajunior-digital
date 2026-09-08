import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ChevronDown, 
  Eye, 
  Sparkles,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackAnalyticsEvent } from '../types';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  highContrast?: boolean;
  setHighContrast?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Header({ currentPath, onNavigate, highContrast = false, setHighContrast }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Acompanhamento", path: "/acompanhamento-nutricional" },
    { name: "E-books", path: "/ebooks" },
    { name: "Sobre", path: "/sobre" },
    { name: "Como Funciona", path: "/como-funciona" },
    { name: "Conteúdos", path: "/conteudos" },
    { name: "Contato", path: "/contato" }
  ];

  const objectiveLinks = [
    { name: "Emagrecimento", path: "/emagrecimento" },
    { name: "Reeducação Alimentar", path: "/reeducacao-alimentar" },
    { name: "Ganho de Massa Muscular", path: "/ganho-de-massa-muscular" },
    { name: "Performance Esportiva", path: "/performance" },
    { name: "Qualidade de Vida", path: "/qualidade-de-vida" },
    { name: "Atendimento & Locais", path: "/atendimento" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      {/* BARRA SUPERIOR EM FORMATO LETREIRO PASSANTE CONTINUO (TICKER MARQUEE CLICÁVEL) */}
      <div className="bg-[#050914] border-b border-slate-800/80 text-slate-300 py-2 overflow-hidden relative z-50 select-none">
        <div className="w-full flex overflow-hidden">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs sm:text-sm font-medium">
            {[1, 2].map((loopIndex) => (
              <React.Fragment key={loopIndex}>
                {/* CRN DESTACADO */}
                <span className="inline-flex items-center gap-1.5 text-white font-black bg-[var(--brand-green)]/20 px-3 py-1 rounded-full border border-[var(--brand-green)]/40">
                  <ShieldCheck size={14} className="text-[var(--brand-green-light)] shrink-0" />
                  <span>CRN 8-13752</span>
                </span>

                <span className="text-slate-700 font-bold">•</span>

                {/* TELEFONE CLICÁVEL */}
                <a 
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  onClick={() => trackAnalyticsEvent('phone_click', { location: 'ticker' })}
                  className="inline-flex items-center gap-2 hover:text-[var(--brand-green-light)] transition cursor-pointer text-slate-200"
                >
                  <Phone size={14} className="text-[var(--brand-green)] shrink-0" />
                  <span><strong>Telefone:</strong> {SITE_CONFIG.phone}</span>
                </a>

                <span className="text-slate-700 font-bold">•</span>

                {/* ENDEREÇO & GPS CLICÁVEL */}
                <button
                  onClick={() => setShowAddressModal(true)}
                  className="inline-flex items-center gap-2 hover:text-[var(--brand-green-light)] transition text-slate-200 cursor-pointer"
                >
                  <MapPin size={14} className="text-[var(--brand-green)] shrink-0" />
                  <span><strong>Local:</strong> Atendimento Presencial em Curitiba/PR (GPS/Bairros)</span>
                </button>

                <span className="text-slate-700 font-bold">•</span>

                {/* ITEM DE HERO RECENTEMENTE MOVIDO */}
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <ShieldCheck size={14} className="text-[var(--brand-green)] shrink-0" />
                  <span>Acompanhamento Nutricional Ético & Individualizado</span>
                </span>

                <span className="text-slate-700 font-bold">•</span>

                {/* DESTAQUE DE DIETAS RESTRITIVAS (REMOVIDO DA HERO) */}
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <Sparkles size={14} className="text-[var(--brand-orange)] shrink-0" />
                  <span>Sem Dietas Restritivas • Plano Adaptado à sua Rotina</span>
                </span>

                <span className="text-slate-700 font-bold">•</span>

                {/* WHATSAPP SUPORTE CLICÁVEL (REMOVIDO DA HERO) */}
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'ticker' })}
                  className="inline-flex items-center gap-2 text-[var(--brand-green-light)] hover:text-white transition font-bold cursor-pointer"
                >
                  <MessageCircle size={14} className="shrink-0" />
                  <span>Suporte Direto via WhatsApp com Junior Coelho</span>
                </a>

                <span className="text-slate-700 font-bold">•</span>

                {/* HORÁRIOS */}
                <span className="inline-flex items-center gap-2 text-slate-400">
                  <Clock size={14} className="text-[var(--brand-green)] shrink-0" />
                  <span>{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2}</span>
                </span>

                <span className="text-slate-700 font-bold">•</span>

                {/* BOTAO ALTO CONTRASTE */}
                <button
                  onClick={() => setHighContrast && setHighContrast(!highContrast)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
                >
                  <Eye size={13} />
                  <span>{highContrast ? "Modo Padrão" : "Alto Contraste"}</span>
                </button>

                <span className="text-slate-700 font-bold me-4">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* MENU PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* LOGO OFICIAL JR.COELHO */}
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center cursor-pointer group focus:outline-none"
          aria-label="Nutricionista Junior Coelho - Início"
        >
          <img 
            src={SITE_CONFIG.images.logo} 
            alt="Logo Nutricionista Junior Coelho" 
            onError={(e) => { e.currentTarget.src = "/logo-site.png"; }}
            className="h-14 sm:h-18 md:h-20 lg:h-24 max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </button>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[44px] ${
                  isActive 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold' 
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                {link.name}
              </button>
            );
          })}

          {/* DROPDOWN DE OBJETIVOS E SERVIÇOS */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 flex items-center gap-1.5 transition min-h-[44px] cursor-pointer"
            >
              <span>Objetivos</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-2 z-50">
                {objectiveLinks.map((obj) => (
                  <button
                    key={obj.path}
                    onClick={() => handleNavClick(obj.path)}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-200 hover:text-emerald-400 hover:bg-slate-800 transition font-medium cursor-pointer"
                  >
                    {obj.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* CTA PRINCIPAL WHATSAPP & BADGE CRN */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 bg-slate-900 border border-slate-700/80 px-3.5 py-2 rounded-full text-xs font-bold text-slate-100 shadow-sm">
            <ShieldCheck size={16} className="text-[var(--brand-green-light)] shrink-0" />
            <span>CRN: <strong className="text-[var(--brand-green-light)]">8-13752</strong></span>
          </div>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'header_cta' })}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm whitespace-nowrap shadow-[0_6px_20px_rgba(121,184,42,0.35)] hover:shadow-[0_8px_25px_rgba(121,184,42,0.5)] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer min-h-[44px]"
          >
            <MessageCircle size={18} className="shrink-0" />
            <span className="whitespace-nowrap">Agendar Consulta</span>
          </a>
        </div>

        {/* BOTAO MENU MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu"
          className="md:hidden text-slate-200 hover:text-white p-2.5 rounded-xl bg-slate-900 border border-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU MOBILE LUXO FULL-SCREEN VIA PORTAL */}
      {mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-[#050914] overflow-y-auto flex flex-col justify-between p-6 animate-in fade-in duration-200">
          
          {/* TOPO DO MENU MOBILE */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center focus:outline-none"
            >
              <img 
                src={SITE_CONFIG.images.logo} 
                alt="Logo Junior Coelho" 
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setHighContrast && setHighContrast(!highContrast)}
                className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition flex items-center gap-1.5"
              >
                <Eye size={16} />
                <span className="hidden sm:inline">Alto Contraste</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar Menu"
                className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition cursor-pointer shadow-lg"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          {/* LISTA PRINCIPAL DE NAVEGAÇÃO DE ALTO PADRÃO */}
          <div className="py-8 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[var(--brand-green-light)] uppercase font-bold">
                Navegação Principal
              </span>

              <nav className="grid grid-cols-1 gap-2">
                {navLinks.map((link, idx) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`w-full text-left py-3.5 px-4 rounded-2xl text-lg font-black transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        isActive 
                          ? 'bg-[var(--brand-green)]/15 text-[var(--brand-green-light)] border border-[var(--brand-green)]/30' 
                          : 'text-slate-100 hover:bg-slate-900/80 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                        <span>{link.name}</span>
                      </span>
                      <ChevronDown size={18} className="-rotate-90 text-slate-600" />
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* ESPECIALIDADES E OBJETIVOS */}
            <div className="space-y-3 pt-4 border-t border-slate-800/60">
              <span className="text-[10px] font-mono tracking-widest text-[var(--brand-orange-light)] uppercase font-bold">
                Especialidades & Objetivos
              </span>

              <div className="grid grid-cols-2 gap-2">
                {objectiveLinks.map((obj) => (
                  <button
                    key={obj.path}
                    onClick={() => handleNavClick(obj.path)}
                    className="text-left px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-300 bg-slate-900/60 border border-slate-800 hover:border-[var(--brand-green)]/40 hover:text-white transition cursor-pointer truncate"
                  >
                    {obj.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RODAPÉ DO MENU MOBILE COM BOTAO WHATSAPP LUXO */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'mobile_menu_cta' })}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-green-light)] text-slate-950 font-black py-4 px-6 rounded-2xl text-base shadow-2xl transition active:scale-98 cursor-pointer"
            >
              <MessageCircle size={22} />
              <span>Agendar pelo WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-xs text-slate-400 px-2 pt-1 font-medium">
              <span>{SITE_CONFIG.hours.days}</span>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-[var(--brand-green-light)] font-bold">
                {SITE_CONFIG.phone}
              </a>
            </div>
          </div>

        </div>,
        document.body
      )}

      {/* MODAL DE ENDEREÇO E BAIRROS COM LINK GPS VIA PORTAL */}
      {showAddressModal && createPortal(
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowAddressModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Localização de Atendimento</h3>
                <p className="text-xs text-emerald-400">Curitiba/PR e Região Metropolitana</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              O atendimento presencial ocorre em Curitiba/PR. Nota de transparência: O endereço cadastrado inicialmente ({SITE_CONFIG.address.street}) está sob validação de confirmação formal.
            </p>

            <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Bairros Prioritários Atendidos em Curitiba:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {SITE_CONFIG.address.priorityNeighborhoods.map((bairro) => (
                  <span key={bairro} className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-200 rounded-md text-xs font-medium">
                    {bairro}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Curitiba+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition min-h-[44px]"
              >
                <ExternalLink size={16} />
                <span>Abrir GPS / Google Maps</span>
              </a>

              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition min-h-[44px]"
              >
                <MessageCircle size={16} />
                <span>Confirmar Local via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
