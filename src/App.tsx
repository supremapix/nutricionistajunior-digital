import React, { useState, useEffect } from 'react';
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
import { NeighborhoodPage } from './pages/NeighborhoodPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
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
      return <ArticleDetailPage slug={slug} onNavigate={handleNavigate} />;
    }
    if (path === '/contato') {
      return <ContactPage />;
    }
    if (path === '/politica-de-privacidade') {
      return <PrivacyPage />;
    }

    // Neighborhood SEO pages (e.g. /nutricionista-em-xaxim-curitiba or /atendimento/xaxim)
    if (path.startsWith('/nutricionista-em-')) {
      const bairroSlug = path.replace('/nutricionista-em-', '').replace('-curitiba', '');
      return <NeighborhoodPage slug={bairroSlug} />;
    }
    if (path.startsWith('/atendimento/')) {
      const bairroSlug = path.replace('/atendimento/', '');
      return <NeighborhoodPage slug={bairroSlug} />;
    }

    return <NotFoundPage onNavigate={handleNavigate} />;
  };

  if (isLinksPage) {
    return (
      <div className="min-h-screen bg-[#050914] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
        <main className="flex-1">
          <LinksPage onNavigate={handleNavigate} />
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
      </main>

      {/* FOOTER GLOBAL COM SUPREMA CREDIT E AVISO ÉTICO */}
      <Footer onNavigate={handleNavigate} />

      {/* AÇÕES FLUTUANTES (WHATSAPP, TELEFONE, COMPARTILHAMENTO, TOP) */}
      <FloatingActions />
    </div>
  );
}
