import React, { useState } from 'react';
import { LOCAL_COVERAGE } from '../data/localCoverage';
import { NEIGHBORHOODS_DATA } from '../data/neighborhoodsData';
import { SITE_CONFIG } from '../config/siteConfig';
const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export function LocalCoverage() {
  const [query, setQuery] = useState('');
  const matches = (text: string) => normalize(text).includes(normalize(query.trim()));
  const official = LOCAL_COVERAGE.official.filter(area => matches(area.name));
  const popular = LOCAL_COVERAGE.popular.filter(area => matches(`${area.name} ${area.officialParent}`));
  const metropolitan = Object.values(NEIGHBORHOODS_DATA).filter(area => !area.canonicalUrl.endsWith('-curitiba') && matches(area.name));
  return <section className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl space-y-6" aria-labelledby="coverage-title">
    <h2 id="coverage-title" className="text-2xl font-bold text-white">Bairros, vilas e cidades: encontre sua região</h2>
    <p className="text-sm text-slate-300 leading-relaxed">Este guia distingue os 75 bairros oficiais de Curitiba, nomes populares documentados e cidades da região metropolitana já citadas no site. Ele ajuda a conversar sobre a modalidade de consulta; não representa unidades em cada local nem confirmação de agenda. Confirme a disponibilidade e, para consultas presenciais, o endereço antes de sair.</p>
    <div className="space-y-2"><label htmlFor="coverage-search" className="block text-sm font-semibold text-slate-200">Buscar bairro, vila ou cidade</label><input id="coverage-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Ex.: Batel, Rebouças, Champagnat ou Pinhais" className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white" /></div>
    <details open={Boolean(query) || undefined} className="space-y-3"><summary className="cursor-pointer text-base font-bold text-emerald-400">Bairros oficiais de Curitiba ({official.length} de 75)</summary><ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-slate-300">{official.map(area => <li key={area.name}>{area.existingSlug ? <a className="underline hover:text-emerald-400" href={new URL(NEIGHBORHOODS_DATA[area.existingSlug].canonicalUrl).pathname}>{area.name}</a> : <span>{area.name}</span>}</li>)}</ul></details>
    <details open={Boolean(query) || undefined} className="space-y-3"><summary className="cursor-pointer text-base font-bold text-emerald-400">Vilas e nomes populares documentados ({popular.length})</summary><ul className="space-y-2 text-sm text-slate-300">{popular.map(area => <li key={area.name}><strong>{area.name}</strong> — referência em {area.officialParent}. <a className="underline hover:text-emerald-400" href={area.source} target="_blank" rel="noopener noreferrer">Fonte municipal</a></li>)}</ul><p className="text-xs text-slate-400">Nomes populares não são bairros oficiais adicionais. “Bairro Novo” também é nome de uma regional administrativa; aqui indica o conjunto habitacional documentado no Sítio Cercado.</p></details>
    <details open={Boolean(query) || undefined} className="space-y-3"><summary className="cursor-pointer text-base font-bold text-emerald-400">Localidades de outras cidades já citadas ({metropolitan.length})</summary><ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">{metropolitan.map(area => <li key={area.slug}><a className="underline hover:text-emerald-400" href={new URL(area.canonicalUrl).pathname}>{area.name}</a></li>)}</ul><p className="text-xs text-slate-400">Estas localidades pertencem a outros municípios, não a Curitiba. Consulte com o profissional a adequação do atendimento online e as condições para sua região.</p></details>
    {official.length + popular.length + metropolitan.length === 0 && <p role="status" className="text-sm text-slate-300">Não encontramos esse nome na lista. Informe sua cidade e bairro ao consultar as modalidades disponíveis.</p>}
    <p className="text-xs text-slate-400">Classificação consultada em 1 de novembro de 2026. <a className="underline" href={LOCAL_COVERAGE.officialListSource} target="_blank" rel="noopener noreferrer">Lista da Prefeitura de Curitiba</a>. Não é uma lista de consultórios.</p>
    <a className="inline-flex bg-emerald-500 text-slate-950 font-bold px-5 py-3 rounded-full text-sm" href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer">Consultar modalidade para minha região</a>
  </section>;
}
