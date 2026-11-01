import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { SITE_CONFIG } from '../config/siteConfig';

export function PrivacyPage() {
  return (
    <>
      <SeoHead 
        title="Política de Privacidade e Proteção de Dados"
        description="Termos de privacidade e proteção de dados LGPD do site do Nutricionista Junior Coelho."
        path="/politica-de-privacidade"
      />

      <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
        <HeroVideoBg brightness="brightness-[0.22]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-300 text-xs sm:text-sm leading-relaxed relative z-10">
          
          <div className="space-y-3">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Privacidade e Transparência
            </span>
            <h1 className="text-3xl font-black text-white">Política de Privacidade</h1>
            <p className="text-slate-400">Última atualização: 1 de novembro de 2026</p>
          </div>

          <div className="space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">1. Coleta e Uso de Dados</h2>
              <p>
                O formulário de contato prepara, no seu navegador, uma mensagem com o nome, objetivo e dúvida informados. Ao continuar, você é direcionado ao WhatsApp para revisar e decidir se deseja enviá-la. Não envie exames, diagnósticos ou outros dados sensíveis pelo formulário. Para tratar informações clínicas, combine o canal adequado com o profissional.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">2. Serviços Externos</h2>
              <p>
                Este site utiliza recursos externos, como fontes, imagens e conteúdo do Instagram. Ao carregar esses recursos ou acessar WhatsApp, Instagram e Google, esses serviços podem receber informações técnicas da conexão e aplicar suas próprias políticas de privacidade. O site também pode armazenar arquivos públicos no navegador para acesso offline; o formulário não é salvo nesse cache.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">3. Ética e Imagens Corporais</h2>
              <p>
                O conteúdo do site tem finalidade informativa e não substitui a avaliação individual. Resultados de acompanhamento variam entre pessoas. Dúvidas sobre informações pessoais ou imagens apresentadas neste site podem ser encaminhadas ao contato abaixo.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">4. Direitos do Titular (LGPD)</h2>
              <p>
                Você pode solicitar a exclusão ou alteração de seus dados de contato a qualquer momento pelo e-mail {SITE_CONFIG.email}.
              </p>
            </section>
          </div>

        </div>
      </section>
    </>
  );
}
