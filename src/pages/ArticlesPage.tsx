import React from 'react';
import { BookOpen, ChevronRight, Clock, HelpCircle } from 'lucide-react';
import { ARTICLES_DATA } from '../data/contentData';
import { SeoHead } from '../components/SeoHead';

interface ArticlesPageProps {
  onNavigate: (path: string) => void;
}

export function ArticlesPage({ onNavigate }: ArticlesPageProps) {
  return (
    <>
      <SeoHead 
        title="Conteúdos e Artigos sobre Nutrição e Saúde"
        description="Artigos educativos sobre emagrecimento, hipertrofia, reeducação alimentar e performance esportiva com o Nutricionista Junior Coelho."
        path="/conteudos"
      />

      <section className="py-16 sm:py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="bg-emerald-500/10 text-emerald-400 font-bold px-3 py-1 rounded-full text-xs border border-emerald-500/30 uppercase tracking-wider">
              Hub Semântico de Informação
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Conteúdos & Artigos sobre Nutrição
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Respostas diretas e embasadas para as principais dúvidas sobre acompanhamento nutricional, hábitos e rendimento físico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES_DATA.map((art) => (
              <div 
                key={art.id} 
                className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 p-6 rounded-2xl space-y-4 transition duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="bg-emerald-500/10 text-emerald-400 font-bold px-2.5 py-1 rounded-md border border-emerald-500/20">
                      {art.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock size={12} />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white hover:text-emerald-400 transition leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {art.description}
                  </p>
                </div>

                <button
                  onClick={() => onNavigate(`/conteudos/${art.slug}`)}
                  className="pt-4 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer border-t border-slate-800"
                >
                  <span>Ler artigo completo</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
