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

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (path: string) => {
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* GLOW DISCRETO NO FUNDO DO FOOTER */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* COLUNA 1: IDENTIDADE PROFISSIONAL & REGISTRO */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={SITE_CONFIG.images.logo} 
                alt="Logo Nutricionista Junior Coelho" 
                onError={(e) => { e.currentTarget.src = "/logo-site.png"; }}
                className="h-11 sm:h-14 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {SITE_CONFIG.positioning}. Acompanhamento individualizado voltado para reeducação alimentar, saúde, hipertrofia e alto rendimento.
            </p>

            {/* CRN PLACEHOLDER VISÍVEL */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs text-slate-300 font-mono">
              <ShieldCheck size={14} className="text-emerald-400 shrink-0" />
              <span>CRN: <strong className="text-amber-400">{SITE_CONFIG.crn}</strong> (Pendente de inserção formal)</span>
            </div>
          </div>

          {/* COLUNA 2: NAVEGAÇÃO RÁPIDA */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "Início", path: "/" },
                { name: "Sobre o Nutricionista", path: "/sobre" },
                { name: "Acompanhamento Nutricional", path: "/acompanhamento-nutricional" },
                { name: "Como Funciona a Consulta", path: "/como-funciona" },
                { name: "Evolução & Metas Éticas", path: "/evolucao" },
                { name: "Conteúdos & Artigos", path: "/conteudos" },
                { name: "Locais de Atendimento", path: "/atendimento" },
                { name: "Contato Direto", path: "/contato" },
                { name: "Política de Privacidade", path: "/politica-de-privacidade" }
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNav(link.path)}
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition text-slate-400 cursor-pointer min-h-[32px]"
                  >
                    <ChevronRight size={12} className="text-emerald-500/60" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: OBJETIVOS ATENDIDOS */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Objetivos Nutricionais
            </h4>
            <ul className="space-y-2 text-xs font-medium">
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
                    className="flex items-center gap-1.5 hover:text-emerald-400 transition text-slate-400 cursor-pointer min-h-[32px]"
                  >
                    <ChevronRight size={12} className="text-emerald-500/60" />
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800/60">
              <p className="text-[11px] text-slate-400 leading-tight">
                <strong className="text-slate-300">Aviso Ético:</strong> Não prometemos resultados garantidos. Cada organismo responde de forma individual conforme a adesão e limitações biológicas.
              </p>
            </div>
          </div>

          {/* COLUNA 4: ATENDIMENTO, HORÁRIOS & CONTATO */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Atendimento & Contato
            </h4>

            <div className="space-y-2.5 text-xs text-slate-300">
              {/* WHATSAPP */}
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'footer' })}
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition font-bold"
              >
                <MessageCircle size={16} className="shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>

              {/* EMAIL */}
              <a
                href={SITE_CONFIG.emailUrl}
                onClick={() => trackAnalyticsEvent('email_click', { location: 'footer' })}
                className="flex items-center gap-2 hover:text-white transition text-slate-400"
              >
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.email}</span>
              </a>

              {/* HORÁRIOS */}
              <div className="flex items-start gap-2 text-slate-400">
                <Clock size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">{SITE_CONFIG.hours.days}</p>
                  <p className="text-[11px] text-slate-400">{SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2}</p>
                </div>
              </div>

              {/* LOCALIDADE & BAIRROS */}
              <div className="flex items-start gap-2 text-slate-400 pt-2 border-t border-slate-800/80">
                <MapPin size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200 font-semibold">Atendimento Curitiba/PR</p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Bairros: Xaxim, Portão, Água Verde, Boqueirão, Hauer, Capão Raso, Santa Quitéria, Vila Fanny, Novo Mundo, Sítio Cercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* DIREITOS E CREDITO SUPREMA SITES */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Nutricionista Junior Coelho. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleNav('/politica-de-privacidade')} 
              className="hover:text-emerald-400 transition cursor-pointer"
            >
              Política de Privacidade (LGPD)
            </button>
            <span>•</span>
            <button 
              onClick={() => handleNav('/como-funciona')} 
              className="hover:text-emerald-400 transition cursor-pointer"
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
