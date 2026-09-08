import React from 'react';
import { Home, ArrowLeft, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { SeoHead } from '../components/SeoHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <>
      <SeoHead 
        title="Página não encontrada (404)"
        description="A página solicitada não foi encontrada no site do Nutricionista Junior Coelho."
        path="/404"
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-slate-950 text-center px-4">
        <div className="max-w-md space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 font-black text-2xl flex items-center justify-center mx-auto border border-emerald-500/30">
            404
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Página não encontrada
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            O endereço acessado não existe ou foi alterado. Você pode retornar à página inicial ou falar conosco pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3 px-6 rounded-full text-xs transition cursor-pointer"
            >
              <Home size={16} />
              <span>Página Inicial</span>
            </button>

            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 py-3 px-6 rounded-full text-xs font-bold transition cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
