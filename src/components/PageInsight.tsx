import React, { useEffect, useId, useRef } from 'react';
import { getPageInsight, INSIGHT_SOURCES } from '../data/pageInsights';
import { SITE_CONFIG } from '../config/siteConfig';

/** Educação sem coleta de respostas, diagnóstico ou interrupções automáticas. */
export function PageInsight({ path }: { path: string }) {
  const content = getPageInsight(path);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const id = useId();
  const titleId = `${id}-title`;
  const descriptionId = `${id}-description`;
  const dialogId = `${id}-dialog`;
  // Never carry an open question into another page; Back/Forward remains uninterrupted.
  useEffect(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
  }, [path]);
  if (!content) return null;
  const source = content.source ? INSIGHT_SOURCES[content.source] : undefined;
  const isPrivacy = path.replace(/\/+$/, '') === '/politica-de-privacidade';
  const openDialog = () => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open && typeof dialog.showModal === 'function') {
      dialog.showModal();
      closeRef.current?.focus();
    }
  };
  const closeDialog = () => dialogRef.current?.close();
  const restoreFocus = () => triggerRef.current?.focus({ preventScroll: true });
  return (
    <section aria-label="Uma pergunta para a sua rotina" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Para pensar com calma</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white">{content.question}</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{content.answer}</p>
        <p className="text-sm text-slate-200 leading-relaxed"><strong className="text-emerald-300">Um próximo passo possível: </strong>{content.nextStep}</p>
        {source && <div className="pt-3 border-t border-slate-800 space-y-2">
          <p className="text-xs text-slate-400">Leitura de apoio: <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">{source.label}</a></p>
          <p className="text-xs text-slate-400">Conteúdo educativo geral. Não substitui avaliação individual nem prescreve dietas, suplementos ou tratamentos.</p>
        </div>}
        <button ref={triggerRef} data-open-insight type="button" aria-haspopup="dialog" aria-controls={dialogId} onClick={openDialog} className="inline-flex items-center justify-center bg-emerald-500 text-slate-950 font-bold rounded-full px-5 py-3 text-sm min-h-[44px] hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">Explorar esta pergunta com calma</button>
        <p className="text-xs text-slate-400">A janela só abre se você escolher. Você pode fechá-la sem responder nem entrar em contato.</p>
      </div>
      <dialog ref={dialogRef} id={dialogId} data-insight-dialog aria-labelledby={titleId} aria-describedby={descriptionId} onCancel={event => { event.preventDefault(); closeDialog(); }} onClose={restoreFocus} className="m-auto w-[calc(100%_-_2rem)] max-w-xl max-h-[85dvh] overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 text-slate-100 p-6 sm:p-8 backdrop:bg-black/70">
        <div className="flex justify-end"><button ref={closeRef} type="button" aria-label="Fechar janela" onClick={closeDialog} className="min-h-[44px] px-4 py-2 rounded-xl bg-slate-800 font-bold text-sm hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300">Fechar janela</button></div>
        <div className="space-y-4 mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Uma conversa, sem pressa</p>
          <h2 id={titleId} className="text-xl sm:text-2xl font-bold text-white">{content.question}</h2>
          <p id={descriptionId} className="text-sm sm:text-base text-slate-300 leading-relaxed">{content.answer}</p>
          <p className="text-sm sm:text-base leading-relaxed"><strong className="text-emerald-300">Para levar à sua rotina: </strong>{content.nextStep}</p>
          {source && <p className="text-xs text-slate-400">Confira a informação: <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline text-emerald-300">{source.label}</a></p>}
          <p className="text-sm text-slate-300">{isPrivacy ? 'Você pode esclarecer como suas informações são tratadas antes de compartilhar dados pessoais.' : 'Se fizer sentido para você, leve essa pergunta a uma conversa com Junior. Você decide quando entrar em contato; também pode continuar a leitura sem agendar.'}</p>
          <a href={isPrivacy ? SITE_CONFIG.emailUrl : SITE_CONFIG.whatsappUrl} target={isPrivacy ? undefined : '_blank'} rel={isPrivacy ? undefined : 'noopener noreferrer'} className="inline-flex min-h-[44px] items-center justify-center px-5 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300">{isPrivacy ? 'Esclarecer uma dúvida de privacidade' : 'Conversar com Junior, se eu quiser'}</a>
          <p className="text-xs text-slate-400">Nenhuma resposta de saúde é solicitada ou armazenada nesta janela. Informação geral não substitui avaliação individual.</p>
        </div>
      </dialog>
    </section>
  );
}
