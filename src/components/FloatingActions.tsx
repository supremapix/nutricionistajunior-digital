import React, { useState, useEffect } from 'react';
import { 
  Share2, 
  PhoneCall, 
  MessageCircle, 
  ArrowUp, 
  Copy, 
  Check, 
  X,
  MessageSquare,
  Facebook,
  Twitter,
  Linkedin,
  Pin,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { trackAnalyticsEvent } from '../types';

const SHARE_TEXT_VARIATIONS = [
  "Indicação de Nutricionista em Curitiba: Conheça o trabalho do Junior Coelho focado em Emagrecimento, Performance Esportiva e Qualidade de Vida!",
  "Estratégia nutricional individualizada e sem dietas radicais com o Nutricionista Junior Coelho. Confira o acompanhamento completo:",
  "Procurando transformar seus hábitos, composição corporal e rendimento nos treinos? Recomendo a consultoria do Nutricionista Junior Coelho:",
  "Qualidade de vida, reeducação alimentar e ganho de massa muscular com orientação nutricional de excelência! Veja mais no site:",
  "Acompanhamento nutricional presencial em Curitiba e consultoria online. Agende seu atendimento com o Nutricionista Junior Coelho:"
];

export function FloatingActions() {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // ROTAÇÃO AUTOMÁTICA A CADA 15 SEGUNDOS
  const [activeTextIndex, setActiveTextIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(15);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CRONÔMETRO DE 15 SEGUNDOS PARA ROTAÇÃO DE TEXTO
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setActiveTextIndex((idx) => (idx + 1) % SHARE_TEXT_VARIATIONS.length);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const rotateToNextText = () => {
    setActiveTextIndex((prev) => (prev + 1) % SHARE_TEXT_VARIATIONS.length);
    setSecondsLeft(15);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getCurrentPageUrl = () => {
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return "https://nutricionistajuniorcoelho.com.br";
  };

  const pageUrl = getCurrentPageUrl();
  const pageTitle = typeof document !== 'undefined' ? document.title : SITE_CONFIG.name;
  const ogImage = "https://img.supremasite.com.br/nutri/consultoria_fitness_og.jpg";

  const currentMessageText = SHARE_TEXT_VARIATIONS[activeTextIndex];
  const fullShareText = `${currentMessageText} ${pageUrl}`;

  const copyShareLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullShareText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = fullShareText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      trackAnalyticsEvent('share_copied', { text_index: activeTextIndex });
      
      // ROTACIONA TEXTO PARA PERMITIR NOVO COMPARTILHAMENTO
      setTimeout(() => {
        setCopied(false);
        rotateToNextText();
      }, 1500);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  };

  const handleShareClick = (platformName: string) => {
    trackAnalyticsEvent('share_platform_click', { platform: platformName, text_index: activeTextIndex });
    // ROTACIONA O TEXTO LOGO APÓS COMPARTILHAR PARA QUE A PRÓXIMA AÇÃO VENHA COM NOVO MENSAGEM
    setTimeout(() => {
      rotateToNextText();
    }, 800);
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-emerald-600 hover:bg-emerald-500 text-white",
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}`
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-500 text-white",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(currentMessageText)}`
    },
    {
      name: "Twitter (X)",
      icon: Twitter,
      color: "bg-sky-600 hover:bg-sky-500 text-white",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentMessageText)}&url=${encodeURIComponent(pageUrl)}`
    },
    {
      name: "Pinterest",
      icon: Pin,
      color: "bg-red-600 hover:bg-red-500 text-white",
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(pageUrl)}&media=${encodeURIComponent(ogImage)}&description=${encodeURIComponent(currentMessageText)}`
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "bg-blue-700 hover:bg-blue-600 text-white",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
    },
    {
      name: "Threads",
      icon: MessageSquare,
      color: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(fullShareText)}`
    }
  ];

  return (
    <>
      {/* CANTO INFERIOR ESQUERDO: BOTÃO DE COMPARTILHAMENTO FLUTUANTE */}
      <div className="fixed bottom-5 left-4 sm:left-6 z-50">
        <div className="relative group">
          {/* Pulso e Brilho de Fundo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-green)] to-[var(--brand-green-light)] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <button
            id="floating-share-button"
            onClick={() => setShowShareModal(!showShareModal)}
            aria-label="Compartilhar página"
            className="relative flex items-center gap-2 bg-slate-900 border border-emerald-500/40 text-emerald-400 hover:text-white px-4 py-3 rounded-full shadow-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <Share2 size={20} className="animate-bounce" />
            <span className="hidden sm:inline font-bold">Compartilhar</span>
          </button>
        </div>

        {/* POPUP DE COMPARTILHAMENTO */}
        {showShareModal && (
          <div className="absolute bottom-16 left-0 w-[320px] sm:w-[360px] bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-4 sm:p-5 shadow-2xl z-50 animate-in fade-in slide-in-from-bottom-5 duration-200">
            
            {/* CABEÇALHO MODAL */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
              <div className="flex items-center gap-2">
                <Share2 size={18} className="text-emerald-400" />
                <h3 className="text-sm font-bold text-white">Compartilhar Site</h3>
              </div>
              <button 
                onClick={() => setShowShareModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* PREVIEW DA IMAGEM OFICIAL DE COMPARTILHAMENTO */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 mb-3 group">
              <img 
                src={ogImage} 
                alt="Consultoria Fitness e Nutrição - Junior Coelho"
                className="w-full h-28 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-slate-200">
                <span className="font-bold text-emerald-400 truncate">nutricionistajuniorcoelho.com.br</span>
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-1.5 py-0.5 rounded">OG Card</span>
              </div>
            </div>

            {/* BARRA DE ROTAÇÃO DE TEXTO A CADA 15s */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-2.5 mb-3">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                  <Sparkles size={12} />
                  <span>Mensagem #{activeTextIndex + 1} de {SHARE_TEXT_VARIATIONS.length}</span>
                </span>
                <button
                  onClick={rotateToNextText}
                  className="text-[10px] font-bold text-slate-400 hover:text-emerald-400 flex items-center gap-1 cursor-pointer transition"
                  title="Trocar mensagem agora"
                >
                  <RefreshCw size={11} className="animate-spin-slow" />
                  <span>Trocar texto ({secondsLeft}s)</span>
                </button>
              </div>
              
              <p className="text-xs text-slate-200 italic leading-snug line-clamp-3 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                "{currentMessageText}"
              </p>
              
              <p className="text-[10px] text-slate-400 mt-1.5 leading-tight">
                💡 O texto altera a cada 15s para você poder compartilhar várias vezes com chamadas diferentes.
              </p>
            </div>

            {/* BOTÕES DAS REDES SOCIAIS */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {shareLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleShareClick(item.name)}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 shadow-md ${item.color}`}
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* BOTÃO COPIAR LINK */}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={copyShareLink}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 py-2.5 px-3 rounded-xl text-xs font-bold transition duration-200 cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-emerald-400" />
                    <span className="text-emerald-400">Texto + Link Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar Texto + Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        )}
      </div>

      {/* CANTO INFERIOR DIREITO: BOTÕES DE CONTATO RÁPIDO E VOLTAR AO TOPO */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col gap-3 items-end">
        {/* BOTÃO VOLTAR AO TOPO */}
        {showBackToTop && (
          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="bg-slate-800/90 hover:bg-slate-700 backdrop-blur-md border border-slate-600 text-slate-200 hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-90 flex items-center justify-center cursor-pointer"
          >
            <ArrowUp size={20} />
          </button>
        )}

        {/* BOTÃO LIGAR AGORA */}
        <a
          id="floating-phone-button"
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          onClick={() => trackAnalyticsEvent('phone_click', { location: 'floating_action' })}
          className="group relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-3 rounded-full shadow-xl font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-400/30"
        >
          <PhoneCall size={18} className="animate-pulse shrink-0" />
          <span className="hidden md:inline">Ligar Agora</span>
        </a>

        {/* BOTÃO WHATSAPP 24H COM LUZ INDICADORA ONLINE */}
        <a
          id="floating-whatsapp-button"
          href={SITE_CONFIG.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'floating_action' })}
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-[var(--brand-green-dark)] to-[var(--brand-green)] hover:from-[var(--brand-green)] hover:to-[var(--brand-green-light)] text-slate-950 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl font-black text-xs sm:text-sm transition-all duration-300 hover:scale-105 active:scale-95 border border-[var(--brand-green-light)]/40"
        >
          {/* LUZ INDICADORA ONLINE PISCANDO */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 border border-white"></span>
          </span>

          <MessageCircle size={20} className="shrink-0 animate-bounce" />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xs sm:text-sm leading-tight">WhatsApp</span>
            <span className="text-[10px] text-emerald-100 opacity-90 hidden sm:inline">Online Agora</span>
          </div>
        </a>
      </div>
    </>
  );
}
