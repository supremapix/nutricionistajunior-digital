import React from 'react';
import { 
  MessageCircle, 
  Calendar, 
  Globe, 
  BookOpen, 
  Star, 
  MapPin, 
  Instagram, 
  Phone, 
  ExternalLink, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  QrCode,
  CheckCircle2
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { EBOOKS_DATA } from '../data/ebooksData';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

interface LinksPageProps {
  onNavigate?: (path: string) => void;
}

export function LinksPage({ onNavigate }: LinksPageProps) {
  const handleNav = (path: string, eventName: any) => {
    trackAnalyticsEvent(eventName, { location: 'links_page', path });
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  const profileImageUrl = SITE_CONFIG.images.profile || "https://img.supremasite.com.br/nutri/junior-coelho-nutricionista-no-xaxim-em-curitiba-parana-br.webp";

  return (
    <>
      <SeoHead
        title="Junior Coelho Nutricionista | Contato, E-books e Links Oficiais"
        description="Acesse os links oficiais do Nutricionista Junior Coelho em Curitiba: WhatsApp, agendamento de consultas, e-books, localização e avaliações."
        path="/links"
        canonicalUrl="https://www.nutricionistajunior.digital/links"
      />

      <div className="min-h-screen bg-[#050914] text-slate-100 py-10 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
        {/* VÍDEO E GLOW DE FUNDO DA IDENTIDADE JR. COELHO */}
        <HeroVideoBg brightness="brightness-[0.80]" overlayGradient="from-[#050914] via-[#050914]/85 to-[#050914]/90" />
        
        {/* LUZES AMBIENTES SUAVES */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--brand-green)]/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-xl w-full relative z-10 space-y-8 my-auto">

          {/* 1. TOPO / IDENTIDADE COMPACTA E ELEGANTE */}
          <div className="text-center space-y-4 pt-2">
            <div className="relative inline-block">
              <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-[var(--brand-green)] via-emerald-400 to-amber-500 shadow-2xl shadow-[var(--brand-green)]/20">
                <img
                  src={profileImageUrl}
                  alt="Nutricionista Junior Coelho"
                  className="w-full h-full object-cover rounded-full bg-slate-900 border-2 border-slate-900 shadow-inner"
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-emerald-500 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-950" title="Profissional Verificado">
                <CheckCircle2 size={18} />
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Junior Coelho
              </h1>
              
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full border border-emerald-500/30">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>Nutricionista registrado CRN 8-13752</span>
              </div>

              <p className="text-xs sm:text-sm font-medium text-emerald-400 pt-1 tracking-wide">
                Emagrecimento, Performance Esportiva e Qualidade de Vida
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto pt-1 leading-relaxed">
              Selecione uma das opções abaixo para entrar em contato ou obter mais informações sobre o atendimento nutricional.
            </p>
          </div>

          {/* 2. BOTÕES PRINCIPAIS DE NAVEGAÇÃO E CONTATO (DESIGN DE ALTA ACESSIBILIDADE) */}
          <div className="space-y-3.5">

            {/* 1. WHATSAPP */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_whatsapp', { location: 'links_page' })}
              className="w-full min-h-[64px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white py-4 px-5 rounded-2xl shadow-xl shadow-emerald-950/40 border border-emerald-400/50 flex items-center justify-between gap-4 transition-all duration-200 active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={24} className="text-white fill-white/20" />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight">Falar comigo no WhatsApp</span>
                  <span className="block text-xs sm:text-sm font-normal text-emerald-100 opacity-95">Atendimento rápido para dúvidas e agendamentos</span>
                </div>
              </div>
              <ChevronRight size={22} className="text-emerald-100 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* 2. AGENDAR CONSULTA */}
            <button
              type="button"
              onClick={() => handleNav('/acompanhamento-nutricional', 'click_agendamento')}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-emerald-500/60 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Calendar size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">Agendar Consulta Nutricional</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">Atendimento presencial em Curitiba ou Online</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </button>

            {/* 3. CONHECER MEU SITE */}
            <a
              href="https://www.nutricionistajunior.digital/"
              onClick={(e) => {
                if (onNavigate && window.location.pathname === '/') {
                  e.preventDefault();
                  handleNav('/', 'click_site');
                } else {
                  trackAnalyticsEvent('click_site', { location: 'links_page' });
                }
              }}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-slate-600 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Globe size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">Acessar Site Oficial</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">www.nutricionistajunior.digital</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </a>

            {/* 4. E-BOOKS DE NUTRIÇÃO */}
            <button
              type="button"
              onClick={() => handleNav('/ebooks', 'click_ebooks')}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-slate-600 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <BookOpen size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">E-books e Guias de Alimentação</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">Guias práticos e receitas para o dia a dia</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </button>

            {/* 5. AVALIAR NO GOOGLE */}
            <a
              href={SITE_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_google_review', { location: 'links_page' })}
              className="w-full min-h-[64px] bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 hover:from-amber-950 hover:to-slate-900 border-2 border-amber-500/70 hover:border-amber-400 text-white py-3.5 px-5 rounded-2xl shadow-lg shadow-amber-950/30 flex items-center justify-between gap-4 transition-all duration-200 active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <Star size={24} className="fill-amber-400 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="block font-bold leading-tight text-amber-100 text-base sm:text-lg">Avaliar Atendimento no Google</span>
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 uppercase tracking-wide">Destaque</span>
                  </div>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">Sua avaliação no perfil do Google é muito importante</span>
                </div>
              </div>
              <ExternalLink size={20} className="text-amber-400 group-hover:scale-110 transition shrink-0" />
            </a>

            {/* 6. VER LOCALIZAÇÃO / ATENDIMENTO */}
            <button
              type="button"
              onClick={() => handleNav('/atendimento', 'click_location')}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-slate-600 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MapPin size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">Ver Localização e Endereço</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">Bairro Xaxim em Curitiba e Atendimento Online</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </button>

            {/* 7. INSTAGRAM */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_instagram', { location: 'links_page' })}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-pink-500/40 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/20">
                  <Instagram size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">Instagram Profissional</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">@juniorcoelho_nutri</span>
                </div>
              </div>
              <ExternalLink size={20} className="text-slate-400 group-hover:text-pink-400 transition shrink-0" />
            </a>

            {/* 8. LIGAR AGORA */}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={() => trackAnalyticsEvent('click_phone', { location: 'links_page' })}
              className="w-full min-h-[60px] bg-slate-900/90 hover:bg-slate-800/90 text-white py-3.5 px-5 rounded-2xl border border-slate-700 hover:border-slate-600 flex items-center justify-between gap-4 transition-all active:scale-[0.99] group focus:outline-none focus:ring-2 focus:ring-emerald-400"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone size={22} />
                </div>
                <div className="text-left">
                  <span className="block text-base sm:text-lg font-bold leading-tight text-slate-100">Ligar por Telefone</span>
                  <span className="block text-xs sm:text-sm font-medium text-slate-300">{SITE_CONFIG.phone}</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </a>

          </div>

          {/* 3. SEÇÃO E-BOOKS DE NUTRIÇÃO */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                <BookOpen size={22} className="text-emerald-400" />
                <span>Conteúdos e E-books</span>
              </h2>
              <button
                type="button"
                onClick={() => handleNav('/ebooks', 'click_ebooks')}
                className="text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1 focus:outline-none focus:underline"
              >
                <span>Ver todos</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="space-y-3.5">
              {EBOOKS_DATA.map((ebook) => (
                <div
                  key={ebook.id}
                  className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 p-4 rounded-2xl flex items-center gap-4 transition group"
                >
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-xl shrink-0 border border-slate-700 shadow-md"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0 space-y-1.5 text-left">
                    <span className="inline-block text-[11px] sm:text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                      {ebook.tag}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white truncate leading-snug">
                      {ebook.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                      {ebook.description}
                    </p>
                    <a
                      href={ebook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackAnalyticsEvent('ebook_click', { ebook_id: ebook.id, location: 'links_page' })}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 pt-1 group-hover:translate-x-0.5 transition"
                    >
                      <span>Conhecer E-book</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SEÇÃO QR CODE */}
          <div className="pt-2 text-center">
            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-7 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <QrCode size={20} />
                <span>Salve os Dados de Contato</span>
              </div>
              
              <div className="flex justify-center py-2">
                <img
                  src="https://img.supremasite.com.br/nutri/qr-code.webp"
                  alt="QR Code de contato do Nutricionista Junior Coelho"
                  style={{ width: '100%', maxWidth: '220px', height: 'auto', objectFit: 'contain' }}
                  className="rounded-2xl border-2 border-slate-700 p-2.5 bg-white shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                  onClick={() => trackAnalyticsEvent('click_qrcode', { location: 'links_page' })}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xs mx-auto leading-relaxed">
                Aponte a câmera do celular para o QR Code para acessar diretamente os canais oficiais de atendimento.
              </p>
            </div>
          </div>

          {/* 5. CONTATO E INFORMAÇÕES DE ATENDIMENTO */}
          <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl text-center space-y-3.5 shadow-lg">
            <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-semibold uppercase tracking-wider bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>Nutricionista Inscrito CRN 8-13752</span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white">
              Junior Coelho | Nutricionista em Curitiba
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              <p>
                <strong className="text-slate-100">WhatsApp para Contato:</strong> {SITE_CONFIG.phone}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Clock size={16} className="text-emerald-400 shrink-0" />
                <span><strong>Horário de Atendimento:</strong> Segunda a sexta, das 07:00 às 09:30 e 15:00 às 18:00</span>
              </p>
              <p className="flex items-center justify-center gap-2 text-slate-300 pt-1">
                <MapPin size={16} className="text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.address.street} - {SITE_CONFIG.address.city} / {SITE_CONFIG.address.state}</span>
              </p>
            </div>

            <p className="text-xs text-slate-400 pt-3 border-t border-slate-800 leading-relaxed">
              Atendimento presencial e online voltado para emagrecimento saudável, reeducação alimentar, hipertrofia muscular e melhoria da saúde.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

