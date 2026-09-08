/**
 * Configuração de Pre-rendering para Nutricionista Junior Coelho
 * Define todas as rotas estáticas e dinâmicas que serão pré-renderizadas no build
 */

export const PRERENDER_ROUTES = [
  {
    path: '/',
    title: 'Nutricionista Junior Coelho | Emagrecimento, Performance e Qualidade de Vida em Curitiba',
    description: 'Acompanhamento nutricional individualizado com Junior Coelho (CRN 8-13752) para emagrecimento, reeducação alimentar, ganho de massa muscular, performance esportiva e qualidade de vida.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/'
  },
  {
    path: '/sobre',
    title: 'Sobre o Nutricionista Junior Coelho | CRN 8-13752 em Curitiba',
    description: 'Conheça a trajetória, metodologia sem radicalismos e diferenciais do Nutricionista Junior Coelho no atendimento para saúde e resultados reais.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/sobre'
  },
  {
    path: '/acompanhamento-nutricional',
    title: 'Acompanhamento Nutricional Personalizado | Junior Coelho',
    description: 'Entenda como funciona o acompanhamento nutricional contínuo com planos alimentares adaptados à sua rotina, avaliação física e suporte via WhatsApp.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/acompanhamento-nutricional'
  },
  {
    path: '/como-funciona',
    title: 'Como Funciona a Consulta Nutricional | Junior Coelho',
    description: 'Passo a passo da consulta nutricional, desde a anamnese e bioimpedância até a entrega do plano alimentar personalizado.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/como-funciona'
  },
  {
    path: '/atendimento',
    title: 'Locais de Atendimento Nutricional em Curitiba | Junior Coelho',
    description: 'Atendimento presencial na região de Curitiba/PR e modalidade online com suporte via WhatsApp para todo o Brasil.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/atendimento'
  },
  {
    path: '/emagrecimento',
    title: 'Nutricionista para Emagrecimento em Curitiba | Junior Coelho',
    description: 'Emagreça com saúde, sem passar fome e sem dietas restritivas extremas. Estratégias nutricionais para queima de gordura e manutenção.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/emagrecimento'
  },
  {
    path: '/reeducacao-alimentar',
    title: 'Reeducação Alimentar Sem Sofrimento | Junior Coelho',
    description: 'Aprenda a comer bem de forma consciente e sustentável para a vida toda. Mude sua relação com a comida com orientação profissional.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/reeducacao-alimentar'
  },
  {
    path: '/ganho-de-massa-muscular',
    title: 'Nutricionista para Ganho de Massa Muscular e Hipertrofia',
    description: 'Plano alimentar estratégico com distribuição ideal de proteínas e calorias para maximizar a hipertrofia e definição muscular.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/ganho-de-massa-muscular'
  },
  {
    path: '/performance',
    title: 'Nutrição Esportiva e Alta Performance | Junior Coelho',
    description: 'Otimize seu rendimento nos treinos e corridas com nutrição pré e pós-treino elaborada para atletas e praticantes de atividade física.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/performance'
  },
  {
    path: '/qualidade-de-vida',
    title: 'Nutrição para Qualidade de Vida, Energia e Disposição',
    description: 'Melhore seu sono, disposição diária, digestão e imunidade através da nutrição focada em equilíbrio e bem-estar integral.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/qualidade-de-vida'
  },
  {
    path: '/ebooks',
    title: 'E-books e Guias Digitais de Nutrição | Junior Coelho',
    description: 'Adquira e-books práticos de receitas fitness, dieta inteligente e cuidados com tatuagem/piercing no Hotmart.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/ebooks'
  },
  {
    path: '/conteudos',
    title: 'Artigos e Conteúdos sobre Nutrição e Saúde | Junior Coelho',
    description: 'Leia artigos didáticos sobre nutrição, emagrecimento, mitos alimentares e dicas para o dia a dia.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/conteudos'
  },
  {
    path: '/contato',
    title: 'Contato e Agendamento de Consulta | Nutricionista Junior Coelho',
    description: 'Fale diretamente com o Nutricionista Junior Coelho via WhatsApp, e-mail ou telefone para agendar sua consulta presencial ou online.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/contato'
  },
  {
    path: '/politica-de-privacidade',
    title: 'Política de Privacidade | Nutricionista Junior Coelho',
    description: 'Termos de privacidade, tratamento de dados e segurança do site do Nutricionista Junior Coelho.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/politica-de-privacidade'
  },
  // Bairros de Curitiba
  {
    path: '/nutricionista-em-xaxim-curitiba',
    title: 'Nutricionista no Bairro Xaxim em Curitiba | Junior Coelho (CRN 8-13752)',
    description: 'Atendimento nutricional focado em emagrecimento, reeducação e hipertrofia para moradores e trabalhadores do bairro Xaxim em Curitiba/PR.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-xaxim-curitiba'
  },
  {
    path: '/nutricionista-em-portao-curitiba',
    title: 'Nutricionista no Bairro Portão em Curitiba | Junior Coelho (CRN 8-13752)',
    description: 'Consultas nutricionais presenciais e online no bairro Portão em Curitiba. Plano alimentar individualizado para saúde e composição corporal.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-portao-curitiba'
  },
  {
    path: '/nutricionista-em-agua-verde-curitiba',
    title: 'Nutricionista no Bairro Água Verde em Curitiba | Junior Coelho',
    description: 'Acompanhamento nutricional no Água Verde em Curitiba. Emagrecimento, hipertrofia e reeducação alimentar.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-agua-verde-curitiba'
  },
  {
    path: '/nutricionista-em-boqueirao-curitiba',
    title: 'Nutricionista no Bairro Boqueirão em Curitiba | Junior Coelho',
    description: 'Nutricionista no Boqueirão em Curitiba. Planos alimentares sob medida para queima de gordura e saúde.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-boqueirao-curitiba'
  },
  {
    path: '/nutricionista-em-hauer-curitiba',
    title: 'Nutricionista no Bairro Hauer em Curitiba | Junior Coelho',
    description: 'Atendimento nutricional no Hauer, Curitiba. Emagrecimento sustentável e qualidade de vida.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-hauer-curitiba'
  },
  {
    path: '/nutricionista-em-capao-raso-curitiba',
    title: 'Nutricionista no Bairro Capão Raso em Curitiba | Junior Coelho',
    description: 'Consultas com nutricionista no Capão Raso em Curitiba. Resultados reais e acompanhamento contínuo.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-capao-raso-curitiba'
  },
  {
    path: '/nutricionista-em-santa-quiteria-curitiba',
    title: 'Nutricionista no Bairro Santa Quitéria em Curitiba | Junior Coelho',
    description: 'Acompanhamento nutricional no bairro Santa Quitéria em Curitiba. Reeducação e hipertrofia.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-santa-quiteria-curitiba'
  },
  {
    path: '/nutricionista-em-fanny-curitiba',
    title: 'Nutricionista na Vila Fanny em Curitiba | Junior Coelho',
    description: 'Nutricionista na Vila Fanny em Curitiba. Emagrecimento, reeducação alimentar e saúde.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-fanny-curitiba'
  },
  {
    path: '/nutricionista-em-novo-mundo-curitiba',
    title: 'Nutricionista no Bairro Novo Mundo em Curitiba | Junior Coelho',
    description: 'Consulta com nutricionista no Novo Mundo em Curitiba. Foco em emagrecimento e ganho de massa.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-novo-mundo-curitiba'
  },
  {
    path: '/nutricionista-em-sitio-cercado-curitiba',
    title: 'Nutricionista no Bairro Sítio Cercado em Curitiba | Junior Coelho',
    description: 'Atendimento nutricional prático e acessível no Sítio Cercado em Curitiba.',
    canonical: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-sitio-cercado-curitiba'
  }
];
