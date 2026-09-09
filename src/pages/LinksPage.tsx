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

  return (
    <>
      <SeoHead
        title="Junior Coelho Nutricionista | Contato, E-books e Links Oficiais"
        description="Acesse os links oficiais do Nutricionista Junior Coelho: WhatsApp, site, e-books, atendimento, localização e avaliação no Google."
        path="/links"
        canonicalUrl="https://www.nutricionistajunior.digital/links"
      />

      <div className="min-h-screen bg-[#050914] text-slate-100 py-10 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
        {/* VÍDEO E GLOW DE FUNDO DA IDENTIDADE JR. COELHO */}
        <HeroVideoBg brightness="brightness-[0.80]" overlayGradient="from-[#050914] via-[#050914]/85 to-[#050914]/90" />
        
        {/* LUZES AMBIENTES SUAVES (VERDE BRAND + TOQUE LARANJA) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--brand-green)]/15 blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none"></div>

        <div className="max-w-lg w-full relative z-10 space-y-8 my-auto">

          {/* 1. TOPO / IDENTIDADE COMPACTA */}
          <div className="text-center space-y-3 pt-2">
            <div className="relative inline-block">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-[var(--brand-green)] via-emerald-400 to-amber-500 shadow-2xl shadow-[var(--brand-green)]/20">
                <img
                  src={SITE_CONFIG.images.logo || 'https://img.supremasite.com.br/nutri/logo-site.png'}
                  alt="Logo Junior Coelho Nutricionista"
                  className="w-full h-full object-cover rounded-full bg-slate-950 p-2 border border-slate-800"
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-emerald-500 text-slate-950 p-1 rounded-full shadow-lg border-2 border-slate-950">
                <CheckCircle2 size={16} />
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Junior Coelho | Nutricionista
              </h1>
              
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                <ShieldCheck size={14} />
                <span>CRN 8-13752</span>
              </div>

              <p className="text-xs sm:text-sm font-semibold text-emerald-400 pt-1">
                Emagrecimento • Performance • Qualidade de Vida
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto pt-1 leading-relaxed">
              Escolha uma opção para falar comigo ou conhecer meu trabalho.
            </p>
          </div>

          {/* 2. BOTÕES PRINCIPAIS DE NAVEGAÇÃO E CONTATO */}
          <div className="space-y-3">

            {/* 1. WHATSAPP */}
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_whatsapp', { location: 'links_page' })}
              className="w-full min-h-[56px] bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold py-3.5 px-5 rounded-2xl shadow-xl shadow-emerald-950/40 border border-emerald-400/40 flex items-center justify-between gap-3 transition-all duration-200 active:scale-[0.99] text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={22} className="text-white fill-white/20" />
                </div>
                <div className="text-left">
                  <span className="block text-sm sm:text-base font-black leading-tight">💬 Falar comigo pelo WhatsApp</span>
                  <span className="block text-[11px] font-normal text-emerald-100 opacity-90">Atendimento rápido & agendamentos</span>
                </div>
              </div>
              <ChevronRight size={20} className="text-emerald-200 group-hover:translate-x-1 transition-transform shrink-0" />
            </a>

            {/* 2. AGENDAR CONSULTA */}
            <button
              type="button"
              onClick={() => handleNav('/acompanhamento-nutricional', 'click_agendamento')}
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-emerald-500/50 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Calendar size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">📅 Agendar Consulta</span>
                  <span className="block text-[11px] font-medium text-slate-400">Presencial em Curitiba ou Online</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
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
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Globe size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">🌐 Conhecer meu Site</span>
                  <span className="block text-[11px] font-medium text-slate-400">www.nutricionistajunior.digital</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </a>

            {/* 4. E-BOOKS DE NUTRIÇÃO */}
            <button
              type="button"
              onClick={() => handleNav('/ebooks', 'click_ebooks')}
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <BookOpen size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">📚 E-books de Nutrição</span>
                  <span className="block text-[11px] font-medium text-slate-400">Guias digitais e receitas práticas</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </button>

            {/* 5. AVALIAR NO GOOGLE (DESTAQUE VISUAL ESPECIAL) */}
            <a
              href={SITE_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_google_review', { location: 'links_page' })}
              className="w-full min-h-[56px] bg-gradient-to-r from-amber-950/70 via-slate-900 to-amber-950/70 hover:from-amber-950 hover:to-slate-900 border-2 border-amber-500/70 hover:border-amber-400 text-white font-extrabold py-3.5 px-5 rounded-2xl shadow-lg shadow-amber-950/30 flex items-center justify-between gap-3 transition-all duration-200 active:scale-[0.99] text-sm sm:text-base group relative overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40">
                  <Star size={22} className="fill-amber-400 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="block font-black leading-tight text-amber-100 text-sm sm:text-base">⭐ Avaliar no Google</span>
                    <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30 uppercase">Destaque</span>
                  </div>
                  <span className="block text-[11px] font-medium text-slate-300">Sua avaliação no Google Profile é muito importante</span>
                </div>
              </div>
              <ExternalLink size={18} className="text-amber-400 group-hover:scale-110 transition shrink-0" />
            </a>

            {/* 6. VER LOCALIZAÇÃO / ATENDIMENTO */}
            <button
              type="button"
              onClick={() => handleNav('/atendimento', 'click_location')}
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MapPin size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">📍 Ver localização / atendimento</span>
                  <span className="block text-[11px] font-medium text-slate-400">Curitiba/PR e atendimento online</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </button>

            {/* 7. INSTAGRAM */}
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('click_instagram', { location: 'links_page' })}
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-pink-500/40 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/20">
                  <Instagram size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">📸 Instagram Oficial</span>
                  <span className="block text-[11px] font-medium text-slate-400">@juniorcoelho_nutri</span>
                </div>
              </div>
              <ExternalLink size={18} className="text-slate-500 group-hover:text-pink-400 transition shrink-0" />
            </a>

            {/* 8. LIGAR AGORA */}
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              onClick={() => trackAnalyticsEvent('click_phone', { location: 'links_page' })}
              className="w-full min-h-[52px] bg-slate-900/90 hover:bg-slate-800/90 text-white font-bold py-3.5 px-5 rounded-2xl border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-all active:scale-[0.99] text-sm sm:text-base group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone size={20} />
                </div>
                <div className="text-left">
                  <span className="block font-extrabold leading-tight text-slate-100">📞 Ligar agora</span>
                  <span className="block text-[11px] font-medium text-slate-400">{SITE_CONFIG.phone}</span>
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition shrink-0" />
            </a>

          </div>

          {/* 3. SEÇÃO E-BOOKS DE NUTRIÇÃO */}
          <div className="pt-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                <BookOpen size={20} className="text-emerald-400" />
                <span>📚 Conteúdos e E-books</span>
              </h2>
              <button
                type="button"
                onClick={() => handleNav('/ebooks', 'click_ebooks')}
                className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1"
              >
                <span>Ver todos</span>
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="space-y-3">
              {EBOOKS_DATA.map((ebook) => (
                <div
                  key={ebook.id}
                  className="bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 p-3.5 rounded-2xl flex items-center gap-3.5 transition group"
                >
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-16 h-20 sm:w-20 sm:h-24 object-cover rounded-xl shrink-0 border border-slate-800 shadow-md"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0 space-y-1 text-left">
                    <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      {ebook.tag}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white truncate leading-snug">
                      {ebook.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                      {ebook.description}
                    </p>
                    <a
                      href={ebook.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackAnalyticsEvent('ebook_click', { ebook_id: ebook.id, location: 'links_page' })}
                      className="inline-flex items-center gap-1 text-xs font-black text-emerald-400 hover:text-emerald-300 pt-0.5 group-hover:translate-x-0.5 transition"
                    >
                      <span>Conhecer E-book</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. SEÇÃO QR CODE */}
          <div className="pt-2 text-center">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3 shadow-xl">
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <QrCode size={18} />
                <span>📱 Salve meus contatos</span>
              </div>
              
              <div className="flex justify-center py-2">
                <img
                  src="https://img.supremasite.com.br/nutri/qr-code.webp"
                  alt="QR Code de contato do Nutricionista Junior Coelho"
                  style={{ width: '100%', maxWidth: '220px', height: 'auto', objectFit: 'contain' }}
                  className="rounded-2xl border-2 border-slate-800 p-2 bg-white shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                  onClick={() => trackAnalyticsEvent('click_qrcode', { location: 'links_page' })}
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-xs mx-auto">
                Escaneie o QR Code para acessar meus canais digitais.
              </p>
            </div>
          </div>

          {/* 5. CONTATO E INFORMAÇÕES DE ATENDIMENTO */}
          <div className="bg-slate-900/80 border border-slate-800/90 p-5 rounded-2xl text-center space-y-3 shadow-lg">
            <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <ShieldCheck size={16} />
              <span>Nutricionista Inscrito CRN 8-13752</span>
            </div>

            <h3 className="text-sm sm:text-base font-black text-white">
              Junior Coelho | Nutricionista
            </h3>

            <div className="space-y-1 text-xs text-slate-300 font-medium">
              <p>
                <strong className="text-slate-100">WhatsApp:</strong> {SITE_CONFIG.phone}
              </p>
              <p className="flex items-center justify-center gap-1">
                <Clock size={13} className="text-emerald-400 shrink-0" />
                <span><strong>Horário:</strong> Segunda a sexta • 07:00 às 09:30 | 15:00 às 18:00</span>
              </p>
              <p className="flex items-center justify-center gap-1 text-slate-400 pt-1">
                <MapPin size={13} className="text-emerald-400 shrink-0" />
                <span>{SITE_CONFIG.address.street} - {SITE_CONFIG.address.city} / {SITE_CONFIG.address.state}</span>
              </p>
            </div>

            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/60 leading-relaxed">
              Atendimento focado em emagrecimento sustentável, reeducação alimentar, hipertrofia muscular, performance e qualidade de vida em Curitiba/PR.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
