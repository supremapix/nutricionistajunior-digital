import React, { useState } from 'react';
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
      {/* BARRA SUPERIOR DE ACESSIBILIDADE E CONTATO RÁPIDO PARA IDOSOS */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 py-2 px-4 sm:px-6 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 flex-wrap">
            {/* TELEFONE RÁPIDO */}
            <a 
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={() => trackAnalyticsEvent('phone_click', { location: 'header_top_bar' })}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition font-medium min-h-[36px] px-1"
            >
              <Phone size={15} className="text-emerald-400 shrink-0" />
              <span>{SITE_CONFIG.phone}</span>
            </a>

            {/* ENDEREÇO & GPS LINK */}
            <button
              onClick={() => setShowAddressModal(true)}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition text-slate-300 min-h-[36px] px-1 cursor-pointer"
            >
              <MapPin size={15} className="text-emerald-400 shrink-0" />
              <span>Atendimento em Curitiba/PR (Ver Bairros/GPS)</span>
            </button>

            {/* HORÁRIOS */}
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock size={15} className="text-emerald-400 shrink-0" />
              <span>{SITE_CONFIG.hours.days}: {SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2}</span>
            </div>
          </div>

          {/* ACESSIBILIDADE - MODO FACILITADO PARA IDOSOS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setHighContrast && setHighContrast(!highContrast)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition min-h-[36px] cursor-pointer ${
                highContrast 
                  ? 'bg-yellow-400 text-slate-950 border-yellow-300' 
                  : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <Eye size={14} />
              <span>{highContrast ? "Modo Padrão" : "Acessibilidade / Alto Contraste"}</span>
            </button>
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
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
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

        {/* CTA PRINCIPAL WHATSAPP */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'header_cta' })}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer min-h-[44px]"
          >
            <MessageCircle size={18} />
            <span>Agendar Consulta</span>
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

      {/* MENU MOBILE SIMPLIFICADO E ACESSÍVEL */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 py-5 animate-in fade-in duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-bold min-h-[48px] flex items-center justify-between transition ${
                    isActive 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                      : 'text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                </button>
              );
            })}

            {/* SEÇÃO OBJETIVOS MOBILE */}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider px-2 mb-2">
                Objetivos & Especialidades
              </p>
              <div className="grid grid-cols-1 gap-1">
                {objectiveLinks.map((obj) => (
                  <button
                    key={obj.path}
                    onClick={() => handleNavClick(obj.path)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-900 transition min-h-[44px]"
                  >
                    • {obj.name}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA WHATSAPP MOBILE */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'mobile_menu_cta' })}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 px-4 rounded-xl text-base shadow-xl min-h-[48px]"
            >
              <MessageCircle size={20} />
              <span>Falar no WhatsApp com Junior</span>
            </a>
          </div>
        </div>
      )}

      {/* MODAL DE ENDEREÇO E BAIRROS COM LINK GPS */}
      {showAddressModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
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
        </div>
      )}
    </header>
  );
}
