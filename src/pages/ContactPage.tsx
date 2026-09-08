import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { trackAnalyticsEvent } from '../types';

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackAnalyticsEvent('contact_form_submit', { location: 'contact_page' });
    window.open(SITE_CONFIG.whatsappUrl, '_blank');
  };

  return (
    <>
      <SeoHead 
        title="Contato e Agendamento de Consulta Nutricional"
        description="Fale diretamente com o Nutricionista Junior Coelho via WhatsApp, e-mail ou telefone. Agendamentos presenciais e online."
        path="/contato"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Canais Diretos
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Fale com o Nutricionista Junior Coelho
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tire suas dúvidas sobre o atendimento, horários e valores de consulta.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* INFORMAÇÕES DE CONTATO */}
            <div className="space-y-6 bg-slate-900/80 border border-slate-800 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-white">Canais de Atendimento</h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <a 
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackAnalyticsEvent('whatsapp_click', { location: 'contact_page_card' })}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white transition cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <strong className="block font-bold">WhatsApp Principal</strong>
                    <span className="text-slate-300">{SITE_CONFIG.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong className="block font-bold">E-mail Profissional</strong>
                    <span className="text-slate-300">{SITE_CONFIG.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-white">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong className="block font-bold">Horários de Atendimento</strong>
                    <span className="text-slate-300">{SITE_CONFIG.hours.days} ({SITE_CONFIG.hours.period1} | {SITE_CONFIG.hours.period2})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULÁRIO RÁPIDO QUE ENCAMINHA AO WHATSAPP */}
            <form onSubmit={handleSubmit} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl space-y-4">
              <h2 className="text-2xl font-bold text-white">Envie uma Mensagem Rápida</h2>
              <p className="text-xs text-slate-400">
                Preencha os dados para iniciar o contato via WhatsApp com suas dúvidas pré-preenchidas.
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Seu Nome Completo</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Digite seu nome"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Seu Objetivo Principal</label>
                  <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none">
                    <option value="emagrecimento">Emagrecimento & Reeducação Alimentar</option>
                    <option value="massa">Ganho de Massa Muscular / Hipertrofia</option>
                    <option value="performance">Performance Esportiva</option>
                    <option value="qualidade">Qualidade de Vida & Saúde</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Mensagem ou Dúvida</label>
                  <textarea 
                    rows={3}
                    placeholder="Como o nutricionista pode te ajudar?"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl text-sm shadow-xl transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={18} />
                  <span>Enviar e Iniciar no WhatsApp</span>
                </button>
              </div>
            </form>

          </div>

        </div>
      </section>
    </>
  );
}
