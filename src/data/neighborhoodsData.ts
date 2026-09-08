export interface NeighborhoodInfo {
  slug: string; // e.g. "xaxim"
  name: string; // e.g. "Xaxim"
  fullName: string; // e.g. "Nutricionista em Xaxim - Curitiba/PR"
  canonicalUrl: string; // e.g. "https://nutricionistajuniorcoelho.com.br/nutricionista-em-xaxim-curitiba"
  altUrl: string; // e.g. "/atendimento/xaxim"
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  locationDetails: string;
  nearbyLandmarks: string[];
  popularObjectives: string[];
  faq: { question: string; answer: string }[];
}

export const NEIGHBORHOODS_DATA: Record<string, NeighborhoodInfo> = {
  xaxim: {
    slug: 'xaxim',
    name: 'Xaxim',
    fullName: 'Nutricionista no Bairro Xaxim em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-xaxim-curitiba',
    altUrl: '/atendimento/xaxim',
    description: 'Acompanhamento nutricional focado em emagrecimento, reeducação alimentar e ganho de massa no bairro Xaxim e região em Curitiba/PR. Agende com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Xaxim – Curitiba',
    heroSubheadline: 'Atendimento nutricional de alta performance, emagrecimento saudável e reeducação alimentar para moradores e trabalhadores da região do Xaxim.',
    locationDetails: 'Localizado na zona sul de Curitiba, o bairro Xaxim possui fácil acesso pela Av. Derosso e Linha Verde. Oferecemos atendimento presencial com horários flexíveis e consultas online.',
    nearbyLandmarks: ['Av. Francisco H. dos Santos', 'Rua David Tows', 'Av. Brasília', 'Shopping Boulevard Curitiba'],
    popularObjectives: ['Emagrecimento Sustentável', 'Hipertrofia Muscular', 'Reeducação Alimentar', 'Saúde Digestiva'],
    faq: [
      {
        question: 'O Nutricionista Junior Coelho atende moradores do Xaxim?',
        answer: 'Sim! Atendemos moradores e trabalhadores do Xaxim com consultas presenciais em Curitiba e acompanhamento online contínuo via WhatsApp.'
      },
      {
        question: 'Como agendar uma consulta no Xaxim?',
        answer: 'Você pode agendar diretamente clicando no botão do WhatsApp ou pelo telefone (41) 99789-9045.'
      }
    ]
  },
  portao: {
    slug: 'portao',
    name: 'Portão',
    fullName: 'Nutricionista no Bairro Portão em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-portao-curitiba',
    altUrl: '/atendimento/portao',
    description: 'Atendimento nutricional presencial e online no bairro Portão em Curitiba. Emagrecimento, reeducação alimentar e hipertrofia com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Portão – Curitiba',
    heroSubheadline: 'Consultas nutricionais estratégicas para otimizar sua composição corporal, saúde e qualidade de vida no bairro Portão.',
    locationDetails: 'Região centralizada do Portão, próxima ao Terminal do Portão e Av. República Argentina, facilitando o acesso de pacientes de toda a zona oeste e sul.',
    nearbyLandmarks: ['Shopping Palladium', 'Shopping Ventura', 'Terminal do Portão', 'Av. República Argentina'],
    popularObjectives: ['Emagrecimento Definitivo', 'Performance Esportiva', 'Ganho de Massa Muscular', 'Acompanhamento de Exames'],
    faq: [
      {
        question: 'Qual a localização do atendimento no Portão?',
        answer: 'Oferecemos atendimento presencial em Curitiba com rápido acesso para quem mora ou trabalha no Portão, além de consultas online.'
      }
    ]
  },
  'agua-verde': {
    slug: 'agua-verde',
    name: 'Água Verde',
    fullName: 'Nutricionista no Bairro Água Verde em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-agua-verde-curitiba',
    altUrl: '/atendimento/agua-verde',
    description: 'Nutricionista no Água Verde em Curitiba. Planos alimentares personalizados para emagrecimento, ganho de massa e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Água Verde – Curitiba',
    heroSubheadline: 'Planejamento alimentar científico, prático e adaptado à sua rotina profissional e pessoal no bairro Água Verde.',
    locationDetails: 'Bairro nobre tradicional de Curitiba, com acesso facilitado pelas avenidas Sete de Setembro, Silva Jardim e Iguaçu.',
    nearbyLandmarks: ['Praça do Japão', 'Av. Silva Jardim', 'Av. Iguaçu', 'Clube Curitibano'],
    popularObjectives: ['Gestão de Estresse e Sono', 'Performance de Treino', 'Emagrecimento com Saúde', 'Hipertrofia'],
    faq: [
      {
        question: 'O plano alimentar inclui receitas para quem trabalha no Água Verde?',
        answer: 'Sim! Os planos são construídos levando em conta suas escolhas de restaurantes, marmitas e horários de trabalho.'
      }
    ]
  },
  boqueirao: {
    slug: 'boqueirao',
    name: 'Boqueirão',
    fullName: 'Nutricionista no Bairro Boqueirão em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-boqueirao-curitiba',
    altUrl: '/atendimento/boqueirao',
    description: 'Atendimento com nutricionista no Boqueirão em Curitiba. Consultas para emagrecimento, hipertrofia e reeducação alimentar com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Boqueirão – Curitiba',
    heroSubheadline: 'Acompanhamento nutricional direto e eficiente para pacientes do Boqueirão e entorno da Linha Verde.',
    locationDetails: 'Fácil acesso para residentes do Boqueirão, próximo ao Terminal Carmo e Marechal Floriano Peixoto.',
    nearbyLandmarks: ['Terminal do Carmo', 'Av. Marechal Floriano Peixoto', 'Rua Bley Zornig'],
    popularObjectives: ['Perda de Gordura', 'Ganho de Força', 'Melhora da Disposição', 'Adequação Nutricional'],
    faq: [
      {
        question: 'Como funciona a primeira consulta para moradores do Boqueirão?',
        answer: 'A primeira consulta avalia seus hábitos, rotina, exames de sangue e objetivos para elaborar um plano alimentar único.'
      }
    ]
  },
  hauer: {
    slug: 'hauer',
    name: 'Hauer',
    fullName: 'Nutricionista no Bairro Hauer em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-hauer-curitiba',
    altUrl: '/atendimento/hauer',
    description: 'Nutricionista no Hauer, Curitiba. Emagrecimento, reeducação e plano alimentar sob medida com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Hauer – Curitiba',
    heroSubheadline: 'Resultados reais e duradouros com acompanhamento nutricional personalizado para quem vive ou trabalha no Hauer.',
    locationDetails: 'Próximo ao Terminal do Hauer e Linha Verde, permitindo deslocamento rápido para consultas presenciais.',
    nearbyLandmarks: ['Terminal do Hauer', 'Linha Verde', 'Rua Waldemar Kost'],
    popularObjectives: ['Reeducação Alimentar', 'Definição Muscular', 'Nutrição Clínica', 'Emagrecimento'],
    faq: [
      {
        question: 'O Nutricionista atende presencialmente na região do Hauer?',
        answer: 'Sim! Atendemos a região do Hauer e bairros vizinhos com fácil acesso presencial e atendimento via WhatsApp.'
      }
    ]
  },
  'capao-raso': {
    slug: 'capao-raso',
    name: 'Capão Raso',
    fullName: 'Nutricionista no Bairro Capão Raso em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-capao-raso-curitiba',
    altUrl: '/atendimento/capao-raso',
    description: 'Atendimento nutricional especializado no Capão Raso em Curitiba. Consultas para emagrecer com saúde e hipertrofia com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Capão Raso – Curitiba',
    heroSubheadline: 'Consultoria nutricional individualizada para quem busca evolução física e saúde no Capão Raso.',
    locationDetails: 'Região com fácil mobilidade urbana pelo eixo da Av. Winston Churchill e Terminal Capão Raso.',
    nearbyLandmarks: ['Terminal do Capão Raso', 'Av. Winston Churchill', 'Rua Pedro Gusso'],
    popularObjectives: ['Emagrecimento', 'Nutrição Esportiva', 'Controle da Fome', 'Disposição e Energia'],
    faq: [
      {
        question: 'Posso fazer a consulta online do Capão Raso?',
        answer: 'Com certeza. Oferecemos tanto a modalidade presencial quanto a consulta online com o mesmo nível de detalhamento.'
      }
    ]
  },
  'santa-quiteria': {
    slug: 'santa-quiteria',
    name: 'Santa Quitéria',
    fullName: 'Nutricionista no Bairro Santa Quitéria em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-santa-quiteria-curitiba',
    altUrl: '/atendimento/santa-quiteria',
    description: 'Acompanhamento nutricional no bairro Santa Quitéria em Curitiba. Reeducação alimentar e alta performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Santa Quitéria – Curitiba',
    heroSubheadline: 'Transformação alimentar sustentável para moradores e profissionais da Santa Quitéria.',
    locationDetails: 'Acesso rápido pelas avenidas Arthur Bernardes e Iguaçu.',
    nearbyLandmarks: ['Av. Arthur Bernardes', 'Rua João Alencar Guimarães', 'UniAndrade'],
    popularObjectives: ['Massa Magra', 'Qualidade do Sono', 'Reeducação Alimentar', 'Atletas de Fim de Semana'],
    faq: [
      {
        question: 'Quanto tempo dura a consulta nutricional?',
        answer: 'A consulta dura em média 50 a 60 minutos com anamnese profunda e entrega de diretrizes claras.'
      }
    ]
  },
  fanny: {
    slug: 'fanny',
    name: 'Vila Fanny',
    fullName: 'Nutricionista na Vila Fanny em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-fanny-curitiba',
    altUrl: '/atendimento/fanny',
    description: 'Nutricionista na Vila Fanny em Curitiba. Emagrecimento, reeducação e nutrição esportiva com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista na Vila Fanny – Curitiba',
    heroSubheadline: 'Proximidade e atendimento ético para pacientes da Vila Fanny e arredores.',
    locationDetails: 'Bairro situado entre o Hauer, Lindóia e Parolin, cortado pela Linha Verde.',
    nearbyLandmarks: ['Linha Verde Sul', 'Rua Maestro Francisco Antonello', 'Av. Wenceslau Braz'],
    popularObjectives: ['Perda de Peso', 'Aumento de Força', 'Saúde Digestiva', 'Rotina Saudável'],
    faq: [
      {
        question: 'O plano alimentar é fácil de seguir na rotina da Vila Fanny?',
        answer: 'Sim, todos os alimentos prescritos são simples e encontrados nos mercados da sua região.'
      }
    ]
  },
  'novo-mundo': {
    slug: 'novo-mundo',
    name: 'Novo Mundo',
    fullName: 'Nutricionista no Bairro Novo Mundo em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-novo-mundo-curitiba',
    altUrl: '/atendimento/novo-mundo',
    description: 'Consulta com nutricionista no Novo Mundo em Curitiba. Foco em emagrecimento, massa muscular e hábitos saudáveis com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Novo Mundo – Curitiba',
    heroSubheadline: 'Plano alimentar personalizado e suporte constante para quem mora no Novo Mundo.',
    locationDetails: 'Eixo da Av. Brasília e Linha Verde, garantindo comodidade de acesso aos pacientes.',
    nearbyLandmarks: ['Av. Brasília', 'Rua Eduardo Carlos Pereira', 'Terminal do Capão Raso'],
    popularObjectives: ['Definição Muscular', 'Emagrecimento', 'Saúde do Coração', 'Energia para Treino'],
    faq: [
      {
        question: 'Como agendar pelo WhatsApp?',
        answer: 'Basta enviar uma mensagem para (41) 99789-9045 e escolher o melhor dia e horário.'
      }
    ]
  },
  'sitio-cercado': {
    slug: 'sitio-cercado',
    name: 'Sítio Cercado',
    fullName: 'Nutricionista no Bairro Sítio Cercado em Curitiba',
    canonicalUrl: 'https://nutricionistajuniorcoelho.com.br/nutricionista-em-sitio-cercado-curitiba',
    altUrl: '/atendimento/sitio-cercado',
    description: 'Atendimento nutricional acessível e prático no Sítio Cercado em Curitiba. Agende com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista no Bairro Sítio Cercado – Curitiba',
    heroSubheadline: 'Nutrição descomplicada e resultados comprovados para moradores do Sítio Cercado.',
    locationDetails: 'Atendimento voltado à comunidade do Sítio Cercado com foco em praticidade e custo-benefício na escolha dos alimentos.',
    nearbyLandmarks: ['Rua Izaac Ferreira da Cruz', 'Terminal do Sítio Cercado', 'Bairro Novo'],
    popularObjectives: ['Reeducação Alimentar', 'Emagrecimento Sem Fome', 'Controle do Colesterol', 'Hipertrofia'],
    faq: [
      {
        question: 'O Nutricionista prescreve suplementos caros?',
        answer: 'Não. A prioridade é sempre a comida de verdade. Suplementos só são indicados quando estritamente necessários.'
      }
    ]
  }
};
