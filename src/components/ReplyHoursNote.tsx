/** Hours already published on the site: seg–sex 7h–9h30 and 15h–18h. */
export function ReplyHoursNote({ className = '' }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-slate-300 ${className}`}>
      Você pode enviar mensagem a qualquer momento. As respostas são feitas de segunda a sexta, das 7h às 9h30 e das 15h às 18h.
    </p>
  );
}
