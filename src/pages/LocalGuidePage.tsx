import { RMC_POPULAR_ALIASES } from '../data/rmcGuideMeta';
import React from 'react';
import { SeoHead } from '../components/SeoHead';
import { HeroVideoBg } from '../components/HeroVideoBg';
import { SITE_CONFIG } from '../config/siteConfig';
import { LOCAL_GUIDES, LocalGuide } from '../data/localGuides';
import { NEIGHBORHOODS_DATA } from '../data/neighborhoodsData';
import { LOCAL_COVERAGE } from '../data/localCoverage';

const guideSource = 'https://www.gov.br/saude/pt-br/composicao/saps/promocao-da-saude/guias-alimentares/guias-alimentares';
export function LocalGuidePage({ guide }: { guide: LocalGuide }) {
  const popular = LOCAL_COVERAGE.popular.find(item => item.name === guide.name);
  const parentName = popular?.officialParent;
  const parentGuide = LOCAL_GUIDES.find(item => item.kind === 'official_neighborhood' && item.name === parentName);
  const parentExisting = Object.values(NEIGHBORHOODS_DATA).find(item => item.name === parentName);
  const parentPath = parentGuide?.route || (parentExisting ? new URL(parentExisting.canonicalUrl).pathname : undefined);
  const cityGuide = LOCAL_GUIDES.find(item => item.kind === 'municipality' && item.name === guide.municipality);
  const cityLocalities = guide.kind === 'municipality' ? Object.values(NEIGHBORHOODS_DATA).filter(item => item.name.includes(guide.municipality)) : [];
  const newCityLocalities = guide.kind === 'municipality' ? LOCAL_GUIDES.filter(item => item.parentRoute === guide.route && item.kind === 'urban_locality') : [];
  const breadcrumbs = guide.kind === 'urban_locality' && cityGuide ? [{name:'Início',path:'/'},{name:'Atendimento',path:'/atendimento'},{name:guide.municipality,path:cityGuide.route},{name:guide.name,path:guide.route}] : undefined;
  const kindLabel = guide.kind === 'municipality' ? 'Município' : guide.kind === 'official_neighborhood' ? 'Bairro oficial de Curitiba' : guide.kind === 'urban_locality' ? 'Bairro ou localidade urbana documentada' : 'Vila ou nome popular documentado';
  const placeTitle = guide.kind === 'urban_locality' ? `${guide.name}, ${guide.municipality}` : guide.name;
  return <>
    <SeoHead title={`Nutricionista online para ${placeTitle} | Junior Coelho`} description={`${guide.heading} Orientações educativas para organizar a consulta online com Junior Coelho, para quem está em ${placeTitle}.`} path={guide.route} breadcrumbs={breadcrumbs} faqItems={guide.faq} />
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[#050914]">
      <HeroVideoBg brightness="brightness-[0.85]" overlayGradient="from-[#050914] via-[#050914]/60 to-[#050914]/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        {breadcrumbs && <nav aria-label="Trilha de navegação"><ol className="flex flex-wrap gap-2 text-sm text-emerald-300">{breadcrumbs.map((item,index) => <li key={item.path}>{index > 0 && <span aria-hidden="true"> / </span>}{index === breadcrumbs.length - 1 ? <span aria-current="page">{item.name}</span> : <a className="underline" href={item.path}>{item.name}</a>}</li>)}</ol></nav>}
        <a href="/atendimento" className="text-sm text-emerald-300 underline">Ver todas as regiões e modalidades</a>
        <p className="text-xs uppercase tracking-wider font-bold text-emerald-400">{kindLabel} · {guide.municipality}/PR</p>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Nutricionista online para quem está em {placeTitle}</h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">Conheça possibilidades de apoio nutricional à distância e prepare uma conversa que faça sentido para sua rotina. A adequação da consulta online e a disponibilidade devem ser confirmadas com Junior.</p>
      </div>
    </section>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Entenda a referência de localização</h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{guide.kind === 'municipality' ? `${guide.name} é um município distinto de Curitiba. Esta página trata da possibilidade de consulta online, não de uma unidade física local.` : guide.kind === 'official_neighborhood' ? `${guide.name} consta na relação de bairros oficiais de Curitiba. O nome ajuda a identificar sua região; não significa que exista consultório de Junior neste bairro.` : guide.kind === 'urban_locality' ? `${guide.name} está documentado como referência urbana de ${guide.municipality} na fonte municipal indicada. Esta identificação não estabelece limites legais atualizados nem significa que Junior tenha consultório na localidade.` : `${guide.name} é uma referência popular documentada${parentName ? ` relacionada a ${parentName}` : ''}. Não é apresentada como um bairro oficial adicional ou uma unidade física.`}</p>
        {guide.name === 'Bairro Novo' && <p className="text-sm text-slate-300">Aqui, Bairro Novo se refere ao conjunto habitacional no Sítio Cercado. A Regional Bairro Novo é uma divisão administrativa diferente.</p>}
        <p className="text-sm text-slate-400">Para atendimento presencial, confirme o endereço atual antes de se deslocar. Não há promessa de atendimento domiciliar, consultório nesta região ou resultado garantido.</p>
        {guide.source && <a href={guide.source} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-300 underline">Conferir referência geográfica na fonte municipal</a>}
        {cityLocalities.length > 0 && <div className="space-y-2"><h3 className="font-bold text-slate-200">Outras referências desta cidade no site</h3><ul className="space-y-2 text-sm">{cityLocalities.map(item => <li key={item.slug}><a className="text-emerald-300 underline" href={new URL(item.canonicalUrl).pathname}>{item.name}</a></li>)}</ul></div>}
        {newCityLocalities.length > 0 && <div data-rmc-city-links className="space-y-3"><h3 className="font-bold text-slate-200">Bairros e localidades urbanas com guia próprio</h3><ul className="grid sm:grid-cols-2 gap-2 text-sm">{newCityLocalities.map(item => <li key={item.route}><a className="text-emerald-300 underline" href={item.route}>{item.name}</a></li>)}</ul><p className="text-xs text-slate-400">Seleção documentada em fontes municipais, não uma relação exaustiva de bairros nem de consultórios.</p></div>}
        {RMC_POPULAR_ALIASES.filter(item => item.route === guide.route).map(item => <section id={item.anchor} key={item.anchor} className="space-y-2"><h3 className="font-bold text-slate-200">{item.name}: nome popular relacionado a {item.parent}</h3><p className="text-sm text-slate-300">A documentação municipal registra este nome associado a {item.parent}, em {item.municipality}. É uma referência de localização, não um bairro oficial adicional, delimitação territorial ou unidade de atendimento. As informações sobre consulta online desta página também ajudam quem usa esse nome para se localizar.</p><a className="text-xs text-emerald-300 underline" href={item.source} target="_blank" rel="noopener noreferrer">Consultar documento municipal</a></section>)}
        {parentPath && <p><a href={parentPath} className="text-sm text-emerald-300 underline">Conhecer a página de {parentName}</a></p>}
        {cityGuide && cityGuide.route !== guide.route && <p><a href={cityGuide.route} className="text-sm text-emerald-300 underline">Guia de consulta online para {guide.municipality}</a></p>}
      </section>
      <article data-local-guide-article className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{guide.heading}</h2>
        <p className="text-xs text-slate-400">O exemplo abaixo é hipotético e educativo. Não descreve os hábitos dos moradores desta região.</p>
        <p>{guide.scenario}</p><p>{guide.explanation}</p>
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3"><h3 className="font-bold text-emerald-300">Um exercício para preparar sua conversa</h3><p>{guide.practicalStep}</p></div>
        <p className="text-xs text-slate-400">Base educativa: <a href={guideSource} target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline">Guias Alimentares do Ministério da Saúde</a>. Informação geral, sem prescrição individual ou atribuição de demanda local.</p>
      </article>
      <section className="space-y-5"><h2 className="text-2xl font-bold text-white">Perguntas para decidir com mais clareza</h2>{guide.faq.map(item => <div key={item.question} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3"><h3 className="font-bold text-emerald-300">{item.question}</h3><p className="text-sm sm:text-base text-slate-300 leading-relaxed">{item.answer}</p></div>)}</section>
      <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4"><h2 className="text-2xl font-bold text-white">Como organizar uma consulta online</h2><p className="text-sm sm:text-base text-slate-300 leading-relaxed">Antes de agendar, esclareça modalidade, valores, duração, retornos e limites dos canais de contato. Separe um local reservado e confirme recursos de acessibilidade ou apoio tecnológico de que precisa. Informações clínicas e documentos devem ser tratados pelo canal combinado com o profissional, não por comentários públicos.</p><p className="text-sm text-slate-300">A consulta online não substitui exame físico quando necessário nem atendimento médico de urgência. Adaptações alimentares são individuais; não é preciso iniciar restrições ou comprar suplementos para conversar.</p><div className="flex flex-wrap gap-4 text-sm"><a href="/como-funciona" className="text-emerald-300 underline">Etapas do acompanhamento</a><a href="/conteudos/inchaco-abdominal-gastrite-refluxo-nutricionista-online" className="text-emerald-300 underline">Inchaço e desconfortos digestivos: entenda os limites do apoio nutricional</a></div><a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center bg-emerald-500 text-slate-950 rounded-full px-6 py-3 font-bold text-sm">Conversar sobre consulta online, se eu quiser</a></section>
    </div>
  </>;
}
