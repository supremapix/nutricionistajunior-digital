import React, { useState, useEffect } from 'react';
import { PageInsight } from './components/PageInsight';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ConsultingPage } from './pages/ConsultingPage';
import { WeightLossPage } from './pages/WeightLossPage';
import { DietEducationPage } from './pages/DietEducationPage';
import { MuscleGainPage } from './pages/MuscleGainPage';
import { PerformancePage } from './pages/PerformancePage';
import { QualityOfLifePage } from './pages/QualityOfLifePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { LocationPage } from './pages/LocationPage';
import { EvolutionsPage } from './pages/EvolutionsPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { EbooksPage } from './pages/EbooksPage';
import { LinksPage } from './pages/LinksPage';
import { getLocalGuide } from './data/localGuides';
import { LocalGuidePage } from './pages/LocalGuidePage';
import { NeighborhoodPage } from './pages/NeighborhoodPage';
import { ARTICLES_DATA } from './data/contentData';
import { NEIGHBORHOODS_DATA } from './data/neighborhoodsData';
import { NotFoundPage } from './pages/NotFoundPage';

export function normalizePath(path: string) {
  const normalized = path.toLowerCase().replace(/\/+$/, '') || '/';
  const aliases: Record<string, string> = { '/resultados': '/evolucao', '/artigos': '/conteudos', '/blog': '/conteudos', '/e-book': '/ebooks', '/ebook': '/ebooks', '/nutricionista-em-vila-fanny-curitiba': '/nutricionista-em-fanny-curitiba' };
  if (normalized.startsWith('/atendimento/')) {
    const slug = normalized.slice('/atendimento/'.length);
    if (NEIGHBORHOODS_DATA[slug]) return new URL(NEIGHBORHOODS_DATA[slug].canonicalUrl).pathname;
  }
  const legacyNeighborhood = Object.values(NEIGHBORHOODS_DATA).find(info => normalized === `/nutricionista-em-${info.slug}-curitiba`);
  return legacyNeighborhood ? new URL(legacyNeighborhood.canonicalUrl).pathname : aliases[normalized] || normalized;
}

export default function App({ initialPath = '/' }: { initialPath?: string }) {
  const [currentPath, setCurrentPath] = useState<string>(() => normalizePath(typeof window === 'undefined' ? initialPath : window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    path = normalizePath(path);
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isLinksPage = currentPath.toLowerCase() === '/links' || currentPath.toLowerCase() === '/links/';

  // Render correct page view based on path
  const renderCurrentView = () => {
    const path = currentPath.toLowerCase();

    if (path === '/links' || path === '/links/') {
      return <LinksPage onNavigate={handleNavigate} />;
    }
    if (path === '/' || path === '') {
      return <HomePage onNavigate={handleNavigate} />;
    }
    if (path === '/sobre') {
      return <AboutPage />;
    }
    if (path === '/acompanhamento-nutricional') {
      return <ConsultingPage />;
    }
    if (path === '/emagrecimento') {
      return <WeightLossPage />;
    }
    if (path === '/reeducacao-alimentar') {
      return <DietEducationPage />;
    }
    if (path === '/ganho-de-massa-muscular') {
      return <MuscleGainPage />;
    }
    if (path === '/performance') {
      return <PerformancePage />;
    }
    if (path === '/qualidade-de-vida') {
      return <QualityOfLifePage />;
    }
    if (path === '/como-funciona') {
      return <HowItWorksPage />;
    }
    if (path === '/atendimento') {
      return <LocationPage />;
    }
    if (path === '/evolucao' || path === '/resultados') {
      return <EvolutionsPage />;
    }
    if (path === '/conteudos' || path === '/artigos' || path === '/blog') {
      return <ArticlesPage onNavigate={handleNavigate} />;
    }
    if (path === '/ebooks' || path === '/e-book' || path === '/ebook') {
      return <EbooksPage />;
    }
    if (path.startsWith('/conteudos/')) {
      const slug = path.replace('/conteudos/', '');
      if (!ARTICLES_DATA.some(article => article.slug === slug)) return <NotFoundPage onNavigate={handleNavigate} />;
      return <ArticleDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    if (path === '/contato') {
      return <ContactPage />;
    }
    if (path === '/politica-de-privacidade') {
      return <PrivacyPage />;
    }

    const localGuide = getLocalGuide(path);
    if (localGuide) return <LocalGuidePage guide={localGuide} />;

    // Match verified canonical URLs; some municipality URLs differ from their data keys.
    const neighborhood = Object.values(NEIGHBORHOODS_DATA).find(info => new URL(info.canonicalUrl).pathname === path);
    if (neighborhood) return <NeighborhoodPage slug={neighborhood.slug} />;

    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  if (isLinksPage) {
    return (
      <div className="min-h-screen bg-[#050914] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
        <main className="flex-1">
          <LinksPage onNavigate={handleNavigate} />
          <PageInsight path={currentPath} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* HEADER GLOBAL */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* RENDERIZADOR DE PÁGINAS */}
      <main className="flex-1">
        {renderCurrentView()}
        <PageInsight path={currentPath} />
      </main>

      {/* FOOTER GLOBAL COM SUPREMA CREDIT E AVISO ÉTICO */}
      <Footer onNavigate={handleNavigate} />

      {/* AÇÕES FLUTUANTES (WHATSAPP, TELEFONE, COMPARTILHAMENTO, TOP) */}
      <FloatingActions />
    </div>
  );
}
