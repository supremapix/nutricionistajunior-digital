import React from 'react';
import { BookOpen, ShoppingBag, ShieldCheck, Download, CheckCircle2, ArrowRight, Sparkles, HelpCircle, Smartphone, Lock, Award } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { EBOOKS_DATA } from '../data/ebooksData';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function EbooksPage() {
  const ebooks = EBOOKS_DATA;

  return (
    <>
      <SeoHead 
        title="E-books e Guias Nutricionais - Nutricionista Junior Coelho"
        description="Adquira os e-books de nutrição, receitas fitness, dieta inteligente e cuidados com tatuagem/piercing do Nutricionista Junior Coelho no Hotmart."
        path="/ebooks"
      />

      {/* HERO DA PÁGINA DE EBOOKS */}
      <section className="relative py-16 sm:py-24 bg-[#050914] overflow-hidden border-b border-slate-800/80">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/70 to-[#050914]/30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black border border-[var(--brand-green)]/30 uppercase tracking-wider">
            <BookOpen size={18} />
            <span>Guias Digitais Exclusivos</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            E-books de Nutrição, Saúde & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-green-light)] to-emerald-400">Qualidade de Vida</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Aprenda a transformar sua alimentação com métodos práticos, científicos e validados pelo <strong>Nutricionista Junior Coelho (CRN 8-13752)</strong>. Acesso imediato pelo Hotmart.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold text-slate-200">
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl">
              <Download size={18} className="text-[var(--brand-green-light)]" />
              <span>Download Imediato em PDF</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl">
              <Lock size={18} className="text-[var(--brand-green-light)]" />
              <span>Checkout Seguro Hotmart</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-4 py-2 rounded-xl">
              <Smartphone size={18} className="text-[var(--brand-green-light)]" />
              <span>Acesso no Celular e PC</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATÁLOGO DE EBOOKS */}
      <section className="py-16 sm:py-24 bg-[#050914] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Escolha o E-book Ideal para Você
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Clique para acessar a página oficial de compra e receba o livro digital em seu e-mail imediatamente.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div 
                key={ebook.id}
                className="bg-slate-900/90 backdrop-blur-md rounded-3xl border-2 border-slate-800 hover:border-[var(--brand-green)]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group"
              >
                <div>
                  {/* IMAGEM DO EBOOK */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-slate-950">
                    <img 
                      src={ebook.image} 
                      alt={ebook.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    <span className="absolute top-4 right-4 bg-[var(--brand-green)] text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg">
                      {ebook.tag}
                    </span>
                  </div>

                  {/* CONTEÚDO */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <span className="text-xs font-bold text-[var(--brand-green-light)] uppercase tracking-wider block mb-1">
                        Livro Digital • Formato PDF
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                        {ebook.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1">
                        {ebook.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {ebook.description}
                    </p>

                    {/* Destaques */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">O que você aprenderá:</p>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                        {ebook.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[var(--brand-green-light)] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* BOTÃO COMPRAR HOTMART */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href={ebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAnalyticsEvent('ebook_click', { ebook_id: ebook.id, ebook_title: ebook.title })}
                    className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[var(--brand-green)] via-[var(--brand-green-light)] to-[var(--brand-green)] text-slate-950 font-black text-sm px-6 py-4 rounded-2xl shadow-[0_8px_25px_rgba(121,184,42,0.35)] hover:shadow-[0_10px_30px_rgba(121,184,42,0.5)] hover:scale-[1.02] active:scale-95 transition duration-300 min-h-[52px] cursor-pointer"
                  >
                    <ShoppingBag size={20} className="shrink-0" />
                    <span>Garantir E-book no Hotmart</span>
                    <ArrowRight size={18} className="shrink-0" />
                  </a>
                  <span className="block text-center text-[11px] text-slate-400 mt-2 font-medium">
                    Pagamento 100% seguro processado via Hotmart
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VANTAGENS HOTMART & SEGURANÇA */}
      <section className="py-16 bg-slate-950 border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] flex items-center justify-center font-bold shrink-0 border border-[var(--brand-green)]/30">
                <Download size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Acesso Imediato</h4>
                <p className="text-xs text-slate-400 mt-1">Após a confirmação do pagamento, você recebe o e-book direto em seu e-mail.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] flex items-center justify-center font-bold shrink-0 border border-[var(--brand-green)]/30">
                <Lock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Pagamento Seguro</h4>
                <p className="text-xs text-slate-400 mt-1">Plataforma Hotmart com criptografia para Pix, Cartão de Crédito e Boleto.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] flex items-center justify-center font-bold shrink-0 border border-[var(--brand-green)]/30">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Qualquer Dispositivo</h4>
                <p className="text-xs text-slate-400 mt-1">Leia no celular, computador, tablet ou e-reader no formato PDF.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[var(--brand-green)]/20 text-[var(--brand-green-light)] flex items-center justify-center font-bold shrink-0 border border-[var(--brand-green)]/30">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Autoria Profissional</h4>
                <p className="text-xs text-slate-400 mt-1">Elaborado pelo Nutricionista Junior Coelho (CRN 8-13752).</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DÚVIDAS FREQUENTES */}
      <section className="py-16 sm:py-24 bg-[#050914]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-[var(--brand-green-light)] text-xs font-bold uppercase tracking-wider">
              <HelpCircle size={18} />
              <span>Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Perguntas Frequentes sobre os E-books
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-white text-base sm:text-lg">Como receberei o e-book após comprar?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Assim que a compra for aprovada pelo Hotmart, você receberá um e-mail com os dados de acesso e o link direto para download do arquivo em formato PDF. Se você pagar via PIX ou Cartão de Crédito, o envio é praticamente instantâneo!
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-white text-base sm:text-lg">O e-book substitui a consulta presencial com o nutricionista?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Não. Os e-books são materiais educativos e práticos focados em guiar e enriquecer seus conhecimentos. Eles não substituem a avaliação individualizada e o acompanhamento nutricional personalizado oferecido em consulta.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-2xl space-y-2">
              <h3 className="font-bold text-white text-base sm:text-lg">Quais são as formas de pagamento aceitas?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A Hotmart aceita PIX, Cartões de Crédito (com parcelamento), Cartão Virtual Caixa e Boleto Bancário.
              </p>
            </div>
          </div>

          {/* BANNER CONSULTA INDIVIDUALIZADA */}
          <div className="bg-slate-900 border-2 border-[var(--brand-green)]/40 p-8 rounded-3xl text-center space-y-4 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Quer um Plano Alimentar Exclusivo para Sua Rotina?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Além dos e-books, você pode contar com o acompanhamento nutricional individualizado do Nutricionista Junior Coelho em Curitiba ou Online.
            </p>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'ebooks_consultation_banner' })}
              className="inline-flex items-center gap-3 bg-[var(--brand-green)] hover:bg-[var(--brand-green-light)] text-slate-950 font-black px-6 py-3.5 rounded-full shadow-lg transition hover:scale-105 cursor-pointer text-sm"
            >
              <span>Agendar Consulta Nutricional</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
