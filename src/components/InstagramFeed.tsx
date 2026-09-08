import React from 'react';
import { Instagram, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/juniorcoelho_nutri/";
  const embedUrl = "https://www.instagram.com/juniorcoelho_nutri/embed";

  return (
    <section className="relative bg-gray-50/50 border-y border-gray-200/80 py-12 sm:py-16 px-4 overflow-hidden">
      {/* EFEITOS DE LUZ DE FUNDO DIFUSA (SOFT GLOW) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-pink-500/15 via-purple-500/15 to-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-5 right-5 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8 text-center">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {/* BADGE GRADIENTE INSTAGRAM */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md shadow-purple-500/20">
            <Instagram size={15} className="shrink-0" />
            <span>Social Real @juniorcoelho_nutri</span>
          </div>

          {/* TÍTULO PRINCIPAL */}
          <h3 className="text-2xl sm:text-4xl font-black uppercase text-gray-950 tracking-tight leading-snug">
            Siga-nos no Instagram •{' '}
            <span className="text-amber-500 drop-shadow-sm">@juniorcoelho_nutri</span>
          </h3>

          {/* DESCRIÇÃO */}
          <p className="text-gray-600 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Acompanhe o dia a dia da consultoria nutricional, dicas de alimentação consciente, receitas práticas, bastidores e conteúdos exclusivos nos stories e feed.
          </p>
        </motion.div>

        {/* FEED INCORPORADO (EMBED) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xl shadow-gray-200/60 p-2 sm:p-3 hover:scale-[1.01] transition-transform duration-300 overflow-hidden">
            <div className="w-full h-[400px] sm:h-[420px] rounded-2xl overflow-hidden bg-gray-100 relative">
              <iframe
                src={embedUrl}
                title="Feed do Instagram do Nutricionista Junior Coelho"
                className="w-full h-full border-0 rounded-2xl"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* BOTÕES DE AÇÃO (CTA) E SELO DE AUTORIDADE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          {/* BOTAO PRINCIPAL GRADIENTE INSTAGRAM */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-95 cursor-pointer min-h-[52px] w-full sm:w-auto"
          >
            <Instagram size={20} className="shrink-0" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight size={18} className="shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* SELO FLUTUANTE DE AUTORIDADE */}
          <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm text-gray-800 text-xs font-mono font-bold">
            <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
            <span>Comunidade 100% Organizada de Curitiba</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
