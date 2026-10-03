export interface NeighborhoodInfo {
  slug: string; // e.g. "xaxim"
  name: string; // e.g. "Xaxim"
  fullName: string; // e.g. "Nutricionista em Xaxim - Curitiba/PR"
  canonicalUrl: string; // e.g. "https://www.nutricionistajunior.digital/nutricionista-em-xaxim-curitiba"
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-xaxim-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-portao-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-agua-verde-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-boqueirao-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-hauer-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-capao-raso-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-santa-quiteria-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-fanny-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-novo-mundo-curitiba',
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
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-sitio-cercado-curitiba',
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
  },
  // --- PRIMEIRO LOTE SOLICITADO: ARAUCÁRIA (2), SÃO JOSÉ DOS PINHAIS (2), PINHAIS (2) ---
  'araucaria-centro': {
    slug: 'araucaria-centro',
    name: 'Centro (Araucária)',
    fullName: 'Nutricionista Online para o Centro de Araucária/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-araucaria-centro',
    altUrl: '/atendimento/araucaria-centro',
    description: 'Atendimento nutricional online para moradores do Centro de Araucária/PR. Emagrecimento, reeducação alimentar e hipertrofia com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Araucária',
    heroSubheadline: 'Consultoria nutricional online especializada com suporte diário via WhatsApp para moradores e trabalhadores do Centro de Araucária.',
    locationDetails: 'Atendimento online estruturado para residentes do Centro de Araucária, com plano alimentar adaptado à rotina local e comércios da região.',
    nearbyLandmarks: ['Prefeitura Municipal de Araucária', 'Praça Dr. Vicente Machado', 'Rodovia do Xisto'],
    popularObjectives: ['Emagrecimento Sustentável', 'Hipertrofia e Performance', 'Reeducação Alimentar', 'Avaliação de Exames'],
    faq: [
      {
        question: 'Como funciona o atendimento online para o Centro de Araucária?',
        answer: 'A consulta é realizada via vídeo chamada com anamnese completa, cálculo de necessidades e entrega de plano alimentar e suporte via WhatsApp.'
      },
      {
        question: 'Exige deslocamento até Curitiba?',
        answer: 'Não. O atendimento para Araucária é 100% online, com toda a segurança e acompanhamento direto.'
      }
    ]
  },
  'costeira-araucaria': {
    slug: 'costeira-araucaria',
    name: 'Costeira (Araucária)',
    fullName: 'Nutricionista Online para o Bairro Costeira em Araucária/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-costeira-araucaria',
    altUrl: '/atendimento/costeira-araucaria',
    description: 'Atendimento nutricional online para o bairro Costeira em Araucária/PR. Emagrecimento e ganho de massa com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Costeira – Araucária',
    heroSubheadline: 'Planos alimentares personalizados para objetivos de emagrecimento e saúde no bairro Costeira em Araucária.',
    locationDetails: 'Atendimento online dedicado aos moradores do bairro Costeira em Araucária, com diretrizes práticas e acessíveis.',
    nearbyLandmarks: ['Parque Cachoeira', 'Rodovia do Xisto', 'UPA Araucária'],
    popularObjectives: ['Perda de Gordura', 'Ganho de Massa Muscular', 'Saúde Digestiva', 'Alimentação Saudável'],
    faq: [
      {
        question: 'Como agendar consulta online para o bairro Costeira?',
        answer: 'Você pode agendar pelo WhatsApp (41) 99789-9045 com atendimento rápido e prático.'
      }
    ]
  },
  'sjp-centro': {
    slug: 'sjp-centro',
    name: 'Centro (São José dos Pinhais)',
    fullName: 'Nutricionista Online para o Centro de São José dos Pinhais/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-sao-jose-dos-pinhais-centro',
    altUrl: '/atendimento/sjp-centro',
    description: 'Nutricionista online para o Centro de São José dos Pinhais/PR. Emagrecimento, reeducação alimentar e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de São José dos Pinhais',
    heroSubheadline: 'Acompanhamento nutricional especializado e individualizado para moradores do Centro de São José dos Pinhais.',
    locationDetails: 'Atendimento online com suporte contínuo para o Centro de São José dos Pinhais, facilitando a rotina de quem busca resultados sólidos.',
    nearbyLandmarks: ['Catedral São José', 'Rua XV de Novembro', 'Shopping São José'],
    popularObjectives: ['Emagrecimento', 'Hipertrofia', 'Nutrição Esportiva', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'O atendimento para São José dos Pinhais é presencial ou online?',
        answer: 'O atendimento para São José dos Pinhais é realizado na modalidade online, com alto padrão técnico e acompanhamento diário via WhatsApp.'
      }
    ]
  },
  'afonso-pena': {
    slug: 'afonso-pena',
    name: 'Afonso Pena (São José dos Pinhais)',
    fullName: 'Nutricionista Online para o Bairro Afonso Pena em São José dos Pinhais/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-afonso-pena',
    altUrl: '/atendimento/afonso-pena',
    description: 'Nutricionista online para o bairro Afonso Pena em São José dos Pinhais/PR. Planos de emagrecimento e ganho de massa com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Afonso Pena – São José dos Pinhais',
    heroSubheadline: 'Consultoria nutricional focada em praticidade, saúde e performance para moradores do Afonso Pena.',
    locationDetails: 'Atendimento online estruturado para a região do Afonso Pena, polo comercial e residencial de São José dos Pinhais.',
    nearbyLandmarks: ['Rua Almirante Alexandrino', 'Terminal Afonso Pena', 'Av. das Torres'],
    popularObjectives: ['Perda de Peso', 'Ganho de Massa', 'Energia para o Dia a Dia', 'Controle Nutricional'],
    faq: [
      {
        question: 'Como faço para iniciar o acompanhamento no Afonso Pena?',
        answer: 'Basta entrar em contato pelo WhatsApp (41) 99789-9045 para agendar sua consulta online.'
      }
    ]
  },
  'pinhais-centro': {
    slug: 'pinhais-centro',
    name: 'Centro (Pinhais)',
    fullName: 'Nutricionista Online para o Centro de Pinhais/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-pinhais-centro',
    altUrl: '/atendimento/pinhais-centro',
    description: 'Nutricionista online para o Centro de Pinhais/PR. Emagrecimento, reeducação alimentar e nutrição esportiva com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Pinhais',
    heroSubheadline: 'Planejamento alimentar personalizado e orientação nutricional profissional para moradores do Centro de Pinhais.',
    locationDetails: 'Atendimento online dedicado aos residentes do Centro de Pinhais, com foco em metas reais e sustentáveis.',
    nearbyLandmarks: ['Avenida Camilo di Lellis', 'Prefeitura de Pinhais', 'Bosque Municipal'],
    popularObjectives: ['Emagrecimento Definitivo', 'Hipertrofia', 'Qualidade de Vida', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'As consultas de Pinhais ocorrem online?',
        answer: 'Sim, atendimento 100% online com videochamada e suporte contínuo via WhatsApp.'
      }
    ]
  },
  pineville: {
    slug: 'pineville',
    name: 'Pineville (Pinhais)',
    fullName: 'Nutricionista Online para o Bairro Pineville em Pinhais/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-pineville',
    altUrl: '/atendimento/pineville',
    description: 'Nutricionista online para o bairro Pineville em Pinhais/PR. Planos alimentares para saúde e hipertrofia com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Pineville – Pinhais',
    heroSubheadline: 'Consultoria nutricional de alta performance e emagrecimento para o bairro Pineville em Pinhais.',
    locationDetails: 'Atendimento online adaptado à rotina dos moradores do bairro Pineville em Pinhais.',
    nearbyLandmarks: ['Autódromo Internacional de Curitiba (região)', 'Rodovia João Leopoldo Jacomel'],
    popularObjectives: ['Performance Esportiva', 'Emagrecimento', 'Ganho de Massa', 'Saúde Geral'],
    faq: [
      {
        question: 'Como agendar consulta para o Pineville?',
        answer: 'Agende de forma simples pelo WhatsApp oficial (41) 99789-9045.'
      }
    ]
  },
  // --- SEGUNDO LOTE SOLICITADO: COLOMBO (2), FAZENDA RIO GRANDE (2), CAMPO LARGO (2) ---
  'colombo-centro': {
    slug: 'colombo-centro',
    name: 'Centro (Colombo)',
    fullName: 'Nutricionista Online para o Centro de Colombo/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-colombo-centro',
    altUrl: '/atendimento/colombo-centro',
    description: 'Atendimento nutricional online para moradores do Centro de Colombo/PR. Emagrecimento, reeducação alimentar e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Colombo',
    heroSubheadline: 'Consultoria nutricional online especializada com acompanhamento contínuo via WhatsApp para moradores e trabalhadores do Centro de Colombo.',
    locationDetails: 'Atendimento online estruturado para residentes do Centro de Colombo, com plano alimentar adaptado à rotina local.',
    nearbyLandmarks: ['Prefeitura Municipal de Colombo', 'Parque Municipal da Uva', 'Rua XV de Novembro'],
    popularObjectives: ['Emagrecimento Sustentável', 'Hipertrofia', 'Reeducação Alimentar', 'Qualidade de Vida'],
    faq: [
      {
        question: 'Como funciona a consulta online para o Centro de Colombo?',
        answer: 'Realizada via videochamada com anamnese detalhada, cálculo de necessidades e suporte diário via WhatsApp.'
      }
    ]
  },
  'maracana-colombo': {
    slug: 'maracana-colombo',
    name: 'Maracanã (Colombo)',
    fullName: 'Nutricionista Online para o Bairro Maracanã em Colombo/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-maracana-colombo',
    altUrl: '/atendimento/maracana-colombo',
    description: 'Atendimento nutricional online para o bairro Maracanã em Colombo/PR. Emagrecimento e ganho de massa com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Maracanã – Colombo',
    heroSubheadline: 'Planos alimentares personalizados para objetivos de emagrecimento e saúde no bairro Maracanã em Colombo.',
    locationDetails: 'Atendimento online dedicado aos moradores do bairro Maracanã em Colombo, com diretrizes práticas e acessíveis.',
    nearbyLandmarks: ['Terminal do Maracanã', 'Rodovia do Uva', 'Av. Abel Scuissiato'],
    popularObjectives: ['Perda de Gordura', 'Ganho de Massa Muscular', 'Saúde Digestiva', 'Alimentação Saudável'],
    faq: [
      {
        question: 'Como agendar consulta online para o Maracanã?',
        answer: 'Você pode agendar pelo WhatsApp (41) 99789-9045 com atendimento rápido e prático.'
      }
    ]
  },
  'fazenda-rio-grande-centro': {
    slug: 'fazenda-rio-grande-centro',
    name: 'Centro (Fazenda Rio Grande)',
    fullName: 'Nutricionista Online para o Centro de Fazenda Rio Grande/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-fazenda-rio-grande-centro',
    altUrl: '/atendimento/fazenda-rio-grande-centro',
    description: 'Nutricionista online para o Centro de Fazenda Rio Grande/PR. Emagrecimento, reeducação alimentar e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Fazenda Rio Grande',
    heroSubheadline: 'Acompanhamento nutricional especializado e individualizado para moradores do Centro de Fazenda Rio Grande.',
    locationDetails: 'Atendimento online com suporte contínuo para o Centro de Fazenda Rio Grande.',
    nearbyLandmarks: ['Prefeitura de Fazenda Rio Grande', 'Av. Brasil', 'Terminal Eucaliptos'],
    popularObjectives: ['Emagrecimento', 'Hipertrofia', 'Nutrição Esportiva', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'O atendimento para Fazenda Rio Grande é online?',
        answer: 'Sim, modalidade online com alto padrão técnico e acompanhamento diário via WhatsApp.'
      }
    ]
  },
  'eucaliptos-fazenda': {
    slug: 'eucaliptos-fazenda',
    name: 'Eucaliptos (Fazenda Rio Grande)',
    fullName: 'Nutricionista Online para o Bairro Eucaliptos em Fazenda Rio Grande/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-eucaliptos',
    altUrl: '/atendimento/eucaliptos-fazenda',
    description: 'Nutricionista online para o bairro Eucaliptos em Fazenda Rio Grande/PR. Planos de emagrecimento e ganho de massa com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Eucaliptos – Fazenda Rio Grande',
    heroSubheadline: 'Consultoria nutricional focada em praticidade, saúde e performance para moradores do bairro Eucaliptos.',
    locationDetails: 'Atendimento online estruturado para a região do Eucaliptos em Fazenda Rio Grande.',
    nearbyLandmarks: ['Terminal Eucaliptos', 'Rodovia BR-116', 'Parque Verde'],
    popularObjectives: ['Perda de Peso', 'Ganho de Massa', 'Energia para o Dia a Dia', 'Controle Nutricional'],
    faq: [
      {
        question: 'Como faço para iniciar o acompanhamento no Eucaliptos?',
        answer: 'Basta entrar em contato pelo WhatsApp (41) 99789-9045 para agendar sua consulta online.'
      }
    ]
  },
  'campo-largo-centro': {
    slug: 'campo-largo-centro',
    name: 'Centro (Campo Largo)',
    fullName: 'Nutricionista Online para o Centro de Campo Largo/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-campo-largo-centro',
    altUrl: '/atendimento/campo-largo-centro',
    description: 'Nutricionista online para o Centro de Campo Largo/PR. Emagrecimento, reeducação alimentar e nutrição esportiva com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Campo Largo',
    heroSubheadline: 'Planejamento alimentar personalizado e orientação nutricional profissional para moradores do Centro de Campo Largo.',
    locationDetails: 'Atendimento online dedicado aos residentes do Centro de Campo Largo, com foco em metas reais e sustentáveis.',
    nearbyLandmarks: ['Praça Getúlio Vargas', 'Igreja Matriz Nossa Senhora da Piedade', 'Rua XV de Novembro'],
    popularObjectives: ['Emagrecimento Definitivo', 'Hipertrofia', 'Qualidade de Vida', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'As consultas para Campo Largo ocorrem online?',
        answer: 'Sim, atendimento 100% online com videochamada e suporte contínuo via WhatsApp.'
      }
    ]
  },
  'bancaria-campo-largo': {
    slug: 'bancaria-campo-largo',
    name: 'Vila Bancária (Campo Largo)',
    fullName: 'Nutricionista Online para a Vila Bancária em Campo Largo/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-bancaria-campo-largo',
    altUrl: '/atendimento/bancaria-campo-largo',
    description: 'Nutricionista online para o bairro Vila Bancária em Campo Largo/PR. Planos alimentares para saúde e hipertrofia com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Vila Bancária – Campo Largo',
    heroSubheadline: 'Consultoria nutricional de alta performance e emagrecimento para a Vila Bancária em Campo Largo.',
    locationDetails: 'Atendimento online adaptado à rotina dos moradores da Vila Bancária em Campo Largo.',
    nearbyLandmarks: ['Rodovia BR-277', 'Estádio Municipal', 'Centro de Campo Largo'],
    popularObjectives: ['Performance Esportiva', 'Emagrecimento', 'Ganho de Massa', 'Saúde Geral'],
    faq: [
      {
        question: 'Como agendar consulta para a Vila Bancária?',
        answer: 'Agende de forma simples pelo WhatsApp oficial (41) 99789-9045.'
      }
    ]
  },
  // --- TERCEIRO LOTE SOLICITADO: ALMIRANTE TAMANDARÉ (2), CAMPO MAGRO (2), QUATRO BARRAS (2) ---
  'tamandare-centro': {
    slug: 'tamandare-centro',
    name: 'Centro (Almirante Tamandaré)',
    fullName: 'Nutricionista Online para o Centro de Almirante Tamandaré/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-tamandare-centro',
    altUrl: '/atendimento/tamandare-centro',
    description: 'Atendimento nutricional online para moradores do Centro de Almirante Tamandaré/PR. Emagrecimento, reeducação alimentar e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Almirante Tamandaré',
    heroSubheadline: 'Consultoria nutricional online especializada com acompanhamento contínuo via WhatsApp para moradores e trabalhadores do Centro de Almirante Tamandaré.',
    locationDetails: 'Atendimento online estruturado para residentes do Centro de Almirante Tamandaré, com plano alimentar adaptado à rotina local.',
    nearbyLandmarks: ['Prefeitura Municipal de Almirante Tamandaré', 'Parque Municipal Anibal Khury', 'Rodovia dos Minérios'],
    popularObjectives: ['Emagrecimento Sustentável', 'Hipertrofia', 'Reeducação Alimentar', 'Qualidade de Vida'],
    faq: [
      {
        question: 'Como funciona a consulta online para Almirante Tamandaré?',
        answer: 'Realizada via videochamada com anamnese detalhada, cálculo de necessidades e suporte diário via WhatsApp.'
      }
    ]
  },
  'tamboado-tamandare': {
    slug: 'tamboado-tamandare',
    name: 'Tamboado (Almirante Tamandaré)',
    fullName: 'Nutricionista Online para o Bairro Tamboado em Almirante Tamandaré/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-tamboado',
    altUrl: '/atendimento/tamboado-tamandare',
    description: 'Atendimento nutricional online para o bairro Tamboado em Almirante Tamandaré/PR. Emagrecimento e ganho de massa com o Nutricionista Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Tamboado – Almirante Tamandaré',
    heroSubheadline: 'Planos alimentares personalizados para objetivos de emagrecimento e saúde no bairro Tamboado em Almirante Tamandaré.',
    locationDetails: 'Atendimento online dedicado aos moradores do bairro Tamboado em Almirante Tamandaré, com diretrizes práticas e acessíveis.',
    nearbyLandmarks: ['Rodovia dos Minérios', 'Comércio Local', 'Área Residencial de Tamandaré'],
    popularObjectives: ['Perda de Gordura', 'Ganho de Massa Muscular', 'Saúde Digestiva', 'Alimentação Saudável'],
    faq: [
      {
        question: 'Como agendar consulta online para o Tamboado?',
        answer: 'Você pode agendar pelo WhatsApp (41) 99789-9045 com atendimento rápido e prático.'
      }
    ]
  },
  'campo-magro-centro': {
    slug: 'campo-magro-centro',
    name: 'Centro (Campo Magro)',
    fullName: 'Nutricionista Online para o Centro de Campo Magro/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-campo-magro-centro',
    altUrl: '/atendimento/campo-magro-centro',
    description: 'Nutricionista online para o Centro de Campo Magro/PR. Emagrecimento, reeducação alimentar e performance com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Campo Magro',
    heroSubheadline: 'Acompanhamento nutricional especializado e individualizado para moradores do Centro de Campo Magro.',
    locationDetails: 'Atendimento online com suporte contínuo para o Centro de Campo Magro.',
    nearbyLandmarks: ['Prefeitura de Campo Magro', 'Rodovia PR-090', 'Igreja Matriz'],
    popularObjectives: ['Emagrecimento', 'Hipertrofia', 'Nutrição Esportiva', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'O atendimento para Campo Magro é online?',
        answer: 'Sim, modalidade online com alto padrão técnico e acompanhamento diário via WhatsApp.'
      }
    ]
  },
  'laranjeiras-campo-magro': {
    slug: 'laranjeiras-campo-magro',
    name: 'Laranjeiras (Campo Magro)',
    fullName: 'Nutricionista Online para o Bairro Laranjeiras em Campo Magro/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-laranjeiras',
    altUrl: '/atendimento/laranjeiras-campo-magro',
    description: 'Nutricionista online para o bairro Laranjeiras em Campo Magro/PR. Planos de emagrecimento e ganho de massa com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Bairro Laranjeiras – Campo Magro',
    heroSubheadline: 'Consultoria nutricional focada em praticidade, saúde e performance para moradores do bairro Laranjeiras.',
    locationDetails: 'Atendimento online estruturado para a região de Laranjeiras em Campo Magro.',
    nearbyLandmarks: ['PR-090', 'Região Residencial Laranjeiras', 'Comércio Local'],
    popularObjectives: ['Perda de Peso', 'Ganho de Massa', 'Energia para o Dia a Dia', 'Controle Nutricional'],
    faq: [
      {
        question: 'Como faço para iniciar o acompanhamento em Laranjeiras?',
        answer: 'Basta entrar em contato pelo WhatsApp (41) 99789-9045 para agendar sua consulta online.'
      }
    ]
  },
  'quatro-barras-centro': {
    slug: 'quatro-barras-centro',
    name: 'Centro (Quatro Barras)',
    fullName: 'Nutricionista Online para o Centro de Quatro Barras/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-quatro-barras-centro',
    altUrl: '/atendimento/quatro-barras-centro',
    description: 'Nutricionista online para o Centro de Quatro Barras/PR. Emagrecimento, reeducação alimentar e nutrição esportiva com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para o Centro de Quatro Barras',
    heroSubheadline: 'Planejamento alimentar personalizado e orientação nutricional profissional para moradores do Centro de Quatro Barras.',
    locationDetails: 'Atendimento online dedicado aos residentes do Centro de Quatro Barras, com foco em metas reais e sustentáveis.',
    nearbyLandmarks: ['Prefeitura de Quatro Barras', 'Igreja Matriz São Sebastião', 'Av. Dom Pedro II'],
    popularObjectives: ['Emagrecimento Definitivo', 'Hipertrofia', 'Qualidade de Vida', 'Reeducação Alimentar'],
    faq: [
      {
        question: 'As consultas para Quatro Barras ocorrem online?',
        answer: 'Sim, atendimento 100% online com videochamada e suporte contínuo via WhatsApp.'
      }
    ]
  },
  'borda-do-campo-quatro-barras': {
    slug: 'borda-do-campo-quatro-barras',
    name: 'Borda do Campo (Quatro Barras)',
    fullName: 'Nutricionista Online para a Localidade de Borda do Campo em Quatro Barras/PR',
    canonicalUrl: 'https://www.nutricionistajunior.digital/nutricionista-em-borda-do-campo',
    altUrl: '/atendimento/borda-do-campo-quatro-barras',
    description: 'Nutricionista online para a localidade e região de Borda do Campo em Quatro Barras/PR. Planos alimentares para saúde e hipertrofia com Junior Coelho (CRN 8-13752).',
    heroHeadline: 'Nutricionista para a Região de Borda do Campo – Quatro Barras',
    heroSubheadline: 'Consultoria nutricional de alta performance e emagrecimento para moradores da localidade de Borda do Campo em Quatro Barras.',
    locationDetails: 'Atendimento online adaptado à rotina dos moradores da região de Borda do Campo em Quatro Barras.',
    nearbyLandmarks: ['Rodovia BR-116', 'Represa do Iraí (região)', 'Área Industrial e Residencial'],
    popularObjectives: ['Performance Esportiva', 'Emagrecimento', 'Ganho de Massa', 'Saúde Geral'],
    faq: [
      {
        question: 'Como agendar consulta para Borda do Campo?',
        answer: 'Agende de forma simples pelo WhatsApp oficial (41) 99789-9045.'
      }
    ]
  }
};

