import React from 'react';
import { AlertTriangle, ShieldCheck, HeartPulse, CheckCircle2 } from 'lucide-react';

export function EthicalNoticeBanner() {
  return (
    <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-5 sm:p-6 shadow-xl mb-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
          <AlertTriangle size={22} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="bg-amber-500/20 text-amber-300 text-xs font-black px-2.5 py-1 rounded-md border border-amber-500/40 tracking-wider uppercase">
              REVISÃO ÉTICA NECESSÁRIA
            </span>
            <span className="text-xs text-slate-400 font-mono">Conforme Resolução CFN / Código de Ética Profissional</span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white">
            Evolução Centrada em Hábitos, Saúde e Metas Individuais
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Em conformidade com as diretrizes do Conselho Federal de Nutricionistas (CFN), fotos de exposição corporal (antes e depois) não são publicadas automaticamente de forma comercial. O acompanhamento do Nutricionista Junior Coelho prioriza a análise ética de parâmetros de saúde, melhora de composição corporal, disposição diária e depoimentos textuais expressamente autorizados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              <span>Sem garantias irrealistas</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>Respeito ao biobiotipo e rotina</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
              <HeartPulse size={16} className="text-emerald-400 shrink-0" />
              <span>Indicadores reais de saúde</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
