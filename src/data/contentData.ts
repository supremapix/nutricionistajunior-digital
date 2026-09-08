import { ArticleItem, ServiceItem, HabitAchievement, AuthorizedTestimonial } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "emagrecimento",
    slug: "emagrecimento",
    title: "Emagrecimento com Reeducação e Respeito à sua Rotina",
    shortDesc: "Acompanhamento individualizado focado na redução sustentável de gordura corporal, sem dietas extremamente restritivas.",
    fullDesc: "O acompanhamento para emagrecimento do Nutricionista Junior Coelho é construído a partir de uma análise minuciosa dos seus hábitos atuais, histórico de saúde, nível de atividade física e preferências alimentares. O objetivo é promover o déficit calórico adequado sem comprometer sua energia, massa magra ou bem-estar.",
    iconName: "Flame",
    targetAudience: [
      "Pessoas que tentaram dietas restritivas e sofreram com efeito sanfona.",
      "Quem precisa reorganizar a alimentação conciliando rotina de trabalho e família.",
      "Indivíduos em busca de perda de gordura mantendo disposição e saúde."
    ],
    howItWorks: [
      "Avaliação individual de hábitos e rotina diária.",
      "Cálculo de necessidades energéticas e distribuição personalizada de macronutrientes.",
      "Acompanhamento constante para ajustes conforme sua evolução e adaptação."
    ],
    benefits: [
      "Estratégia alimentar realista sem proibição de alimentos do seu convívio.",
      "Desenvolvimento de autonomia alimentar e consciência nutricional.",
      "Suporte contínuo via WhatsApp durante todo o período do acompanhamento."
    ]
  },
  {
    id: "reeducacao-alimentar",
    slug: "reeducacao-alimentar",
    title: "Reeducação Alimentar Sustentável",
    shortDesc: "Aprenda a fazer escolhas conscientes e construa uma relação leve e equilibrada com a comida para a vida toda.",
    fullDesc: "A reeducação alimentar é o processo gradual de transformação comportamental. Em vez de impor cardápios rígidos, o Nutricionista Junior Coelho te ensina a entender as necessidades do seu corpo, montar refeições equilibradas e manter consistência em qualquer ambiente.",
    iconName: "Apple",
    targetAudience: [
      "Quem deseja parar de depender de cardápios engessados.",
      "Pessoas que enfrentam ansiedade ou compulsão por determinados alimentos.",
      "Quem quer melhorar marcadores de saúde e digestão no dia a dia."
    ],
    howItWorks: [
      "Mapeamento de comportamentos e gatilhos alimentares.",
      "Substituições inteligentes adaptadas à sua cultura e rotina.",
      "Educação sobre leitura de rótulos e organização de compras."
    ],
    benefits: [
      "Paz de espírito nas refeições em família e eventos sociais.",
      "Maior disposição ao longo de todo o dia.",
      "Resultados duradouros mantidos por hábitos consolidados."
    ]
  },
  {
    id: "ganho-de-massa-muscular",
    slug: "ganho-de-massa-muscular",
    title: "Ganho de Massa Muscular e Hipertrofia",
    shortDesc: "Estratégia nutricional focada na síntese proteica, superávit calórico controlado e recuperação muscular eficiente.",
    fullDesc: "O ganho de massa muscular exige precisão. Não basta comer mais; é fundamental alinhar a ingestão de proteínas, carboidratos e micronutrientes com a intensidade e o volume do seu treinamento físico.",
    iconName: "Dumbbell",
    targetAudience: [
      "Praticantes de musculação que buscam ganho de volume limpo.",
      "Pessoas com dificuldade de ganho de peso e hipertrofia.",
      "Atletas amadores que precisam otimizar a recuperação pós-treino."
    ],
    howItWorks: [
      "Ajuste fino de carboidratos e proteínas em horários estratégicos.",
      "Cálculo exato da ingestão energética diária conforme gasto no treino.",
      "Análise de biomarcadores e sinergia entre alimentação e treino."
    ],
    benefits: [
      "Maximização dos ganhos do treino de força.",
      "Melhora no tempo de recuperação e prevenção de fadiga.",
      "Composição corporal otimizada com baixo acúmulo de gordura."
    ]
  },
  {
    id: "performance",
    slug: "performance",
    title: "Nutrição e Performance Esportiva",
    shortDesc: "Potencialize seus treinos, resistência e rendimento através da nutrição focada em energia e eficiência fisiológica.",
    fullDesc: "Para quem treina com metas de desempenho — corrida, ciclismo, CrossFit, lutas ou treinos de alta intensidade — a nutrição é o combustível decisivo. Junior Coelho desenvolve protocolos nutricionais alinhados aos ciclos de treino e competição.",
    iconName: "Zap",
    targetAudience: [
      "Corredores, ciclistas, praticantes de CrossFit e esportistas.",
      "Quem busca superar marcas pessoais e evitar queda de rendimento.",
      "Atletas que precisam de estratégias de hidratação e reposição energética."
    ],
    howItWorks: [
      "Planejamento pré, intra e pós-treino conforme o tipo de exercício.",
      "Estratégias de periodização nutricional sincronizadas ao calendário esportivo.",
      "Avaliação de necessidades específicas de eletrólitos e micronutrientes."
    ],
    benefits: [
      "Menos câimbras, fadiga precoce e episódios de queda de rendimento.",
      "Recuperação muscular acelerada entre sessões de treino.",
      "Alta energia mantida do início ao fim dos exercícios."
    ]
  },
  {
    id: "qualidade-de-vida",
    slug: "qualidade-de-vida",
    title: "Qualidade de Vida, Disposição e Saúde",
    shortDesc: "Alimentação para otimizar o sono, a digestão, o foco mental, o sistema imunológico e a vitalidade diária.",
    fullDesc: "Nutrição vai muito além do espelho. Alimentar-se bem reflete na saúde do intestino, na clareza mental, na qualidade do sono e na prevenção de doenças crônicas. O foco é proporcionar bem-estar contínuo.",
    iconName: "HeartPulse",
    targetAudience: [
      "Quem sente cansaço constante, indisposição ou oscilações de humor.",
      "Pessoas com desconfortos digestivos ou sono não reparador.",
      "Qualquer pessoa que queira envelhecer com saúde e vitalidade."
    ],
    howItWorks: [
      "Adequação de ingestão de fibras, micronutrientes e água.",
      "Distribuição estratégica de refeições ao longo da jornada de trabalho.",
      "Orientações para modulação da saúde intestinal e bem-estar geral."
    ],
    benefits: [
      "Mais foco e clareza mental nas atividades diárias.",
      "Digestão leve e intestino regulado.",
      "Disposição constante sem picos extremos de fadiga."
    ]
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "art-1",
    slug: "como-funciona-acompanhamento-nutricional",
    title: "Como funciona o acompanhamento nutricional individualizado?",
    description: "Entenda o passo a passo de uma consulta com nutricionista, desde a avaliação inicial até os retornos e suporte contínuo.",
    category: "Acompanhamento",
    readTime: "4 min de leitura",
    publishedAt: "2026-02-15",
    summaryBlock: {
      question: "Como funciona uma consulta com o Nutricionista Junior Coelho?",
      directAnswer: "O acompanhamento nutricional inicia com uma anamnese detalhada sobre sua rotina, preferências, exames e objetivos. A partir desses dados, é elaborado um plano alimentar individualizado, ajustado continuamente por meio de retornos periódicos e suporte pelo WhatsApp."
    },
    content: [
      "Muitas pessoas adiam a visita ao nutricionista por acreditarem que receberão uma folha impressa genérica com proibições. No acompanhamento profissional com Junior Coelho, o processo é o oposto: a dieta é construída *para* e *com* você.",
      "Na consulta inicial, investigamos seu estilo de vida completo: horários de trabalho, rotina de sono, nível de atividade física, digestão, histórico alimentar e alimentos que você mais gosta ou não tolera.",
      "Com base nesses parâmetros, calculamos suas necessidades de calorias e macronutrientes. O plano alimentar é entregue de forma clara e prática, contendo opções flexíveis para que você não passe fome e consiga seguir com facilidade.",
      "Além da consulta, o grande diferencial do acompanhamento está na continuidade: você conta com canal direto no WhatsApp para tirar dúvidas do dia a dia e realizar ajustes conforme surgem imprevistos na sua rotina."
    ],
    faq: [
      {
        question: "Preciso levar exames de sangue na primeira consulta?",
        answer: "Se você tiver exames recentes (últimos 6 meses), é muito útil levá-los. Caso não tenha, o nutricionista poderá solicitar exames pertinentes na própria consulta."
      },
      {
        question: "Com qual frequência acontecem os retornos?",
        answer: "Normalmente os reajustes são combinados conforme o plano estabelecido, variando entre 30 a 60 dias dependendo da necessidade de monitoramento de cada paciente."
      }
    ]
  },
  {
    id: "art-2",
    slug: "nutricionista-para-emagrecimento-quando-procurar",
    title: "Nutricionista para emagrecimento: quando e por que procurar?",
    description: "Descubra os sinais de que é hora de buscar orientação profissional para emagrecer com saúde e sem efeito sanfona.",
    category: "Emagrecimento",
    readTime: "5 min de leitura",
    publishedAt: "2026-02-18",
    summaryBlock: {
      question: "Quando procurar um nutricionista especialista em emagrecimento?",
      directAnswer: "Você deve procurar um nutricionista quando perceber que tentativas por conta própria causam frustração, cansaço, perda de massa muscular ou efeito sanfona. A orientação profissional garante déficit calórico seguro e reeducação de hábitos."
    },
    content: [
      "O desejo de emagrecer é comum, mas o caminho escolhido por muitos costuma envolver dietas extremamente restritivas encontradas na internet. Essas estratégias falham porque não levam em conta a vida real.",
      "A hora certa de procurar acompanhamento é quando você decide parar de tentar métodos milagrosos e busca construir hábitos duradouros. O acompanhamento é indicado se você sente fraqueza nos treinos, fome constante ou estagnação no peso.",
      "Com a orientação do Nutricionista Junior Coelho, o foco muda da 'perda rápida de peso na balança' para a 'perda de gordura corporal com preservação de massa muscular e disposição'."
    ],
    faq: [
      {
        question: "É possível emagrecer sem cortar o pão ou arroz?",
        answer: "Com certeza! O emagrecimento depende do déficit calórico global ao longo do dia, e não do banimento de carboidratos específicos. Eles são ajustados com equilíbrio."
      }
    ]
  },
  {
    id: "art-3",
    slug: "reeducacao-alimentar-por-onde-comecar",
    title: "Reeducação alimentar: por onde começar de forma prática?",
    description: "Passos fundamentais para reorganizar sua alimentação sem radicalismo e de forma adaptada à sua rotina.",
    category: "Reeducação Alimentar",
    readTime: "4 min de leitura",
    publishedAt: "2026-02-20",
    summaryBlock: {
      question: "Por onde começar a reeducação alimentar?",
      directAnswer: "A reeducação alimentar começa pela organização das refeições principais, melhora da hidratação diária e inclusão gradual de comida de verdade (vegetais, frutas, proteínas magras), sem proibições radicais."
    },
    content: [
      "Mudar hábitos de uma vida inteira do dia para a noite raramente funciona. A reeducação alimentar é uma jornada de pequenas vitórias diárias.",
      "O primeiro passo recomendado por Junior Coelho é mapear o que você já come e identificar os pontos mais críticos, como ficar muitas horas em jejum não planejado e acabar exagerando na refeição seguinte.",
      "Em seguida, ajusta-se a qualidade dos nutrientes sem eliminar o convívio social. Você aprende a comer de tudo com proporção e consciência."
    ],
    faq: [
      {
        question: "Reeducação alimentar demora muito para dar resultado?",
        answer: "Os primeiros benefícios — como melhora no funcionamento intestinal, diminuição do inchaço e aumento da energia — são percebidos já nas primeiras semanas."
      }
    ]
  },
  {
    id: "art-4",
    slug: "como-alimentacao-e-treino-se-relacionam-no-ganho-de-massa",
    title: "Como alimentação e treino se relacionam no ganho de massa muscular?",
    description: "Entenda por que treinar pesado sem o aporte nutricional adequado impede a hipertrofia e gera desgaste muscular.",
    category: "Ganho de Massa",
    readTime: "5 min de leitura",
    publishedAt: "2026-02-22",
    summaryBlock: {
      question: "Qual a relação entre treino e alimentação no ganho de massa?",
      directAnswer: "O treino de força sinaliza para os músculos a necessidade de hipertrofia, enquanto a alimentação fornece os tijolos (proteínas) e a energia necessária (carboidratos e calorias) para reconstruir o tecido muscular mais forte."
    },
    content: [
      "Para ganhar massa muscular, o estímulo do treino de musculação precisa ser correspondido por uma nutrição bem calculada.",
      "Se faltar carboidrato, o corpo utilizará aminoácidos como fonte de energia durante o treino, prejudicando o ganho de massa. Se faltar proteína, a síntese proteica pós-treino não atingirá o pico ideal.",
      "Junior Coelho planeja a distribuição dos nutrientes de acordo com os horários e intensidades dos seus treinos, garantindo ganho de tecido muscular com mínimo acúmulo de gordura."
    ],
    faq: [
      {
        question: "Preciso tomar suplemento obrigatoriamente para ganhar massa?",
        answer: "Não. A suplementação é um recurso prático quando não é possível atingir a meta diária apenas via alimentos. Comida de verdade é sempre a prioridade."
      }
    ]
  },
  {
    id: "art-5",
    slug: "o-que-avaliar-ao-procurar-um-nutricionista",
    title: "O que avaliar ao procurar um nutricionista profissional?",
    description: "Critérios essenciais como registro profissional, individualização do atendimento e ética na prescrição.",
    category: "Acompanhamento",
    readTime: "4 min de leitura",
    publishedAt: "2026-02-24",
    summaryBlock: {
      question: "O que observar antes de escolher um nutricionista?",
      directAnswer: "Avalie se o profissional possui registro no CRN, oferece atendimento personalizado sem promessas irrealistas ou milagrosas, e escuta suas necessidades individuais antes de prescrever um plano alimentar."
    },
    content: [
      "A escolha do profissional de nutrição é decisiva para a sua saúde. Fuja de perfis que prometem 'perda de X quilos em 7 dias' ou que vendem fórmulas mágicas de cura e garantia.",
      "Um nutricionista ético analisa sua individualidade biológica, rotina de trabalho, limitações orçamentárias e preferências interpessoais.",
      "Junior Coelho pauta sua conduta na ciência da nutrição e no respeito ao código de ética, oferecendo clareza e transparência em todas as etapas."
    ],
    faq: [
      {
        question: "Como confirmar o registro de um nutricionista?",
        answer: "Você pode consultar a inscrição ativa do profissional diretamente no site do Conselho Regional de Nutricionistas (CRN) de sua região."
      }
    ]
  },
  {
    id: "art-6",
    slug: "como-organizar-alimentacao-em-uma-rotina-corrida",
    title: "Como organizar a alimentação mesmo em uma rotina corrida?",
    description: "Estratégias práticas de marmitas, substituições rápidas e escolhas fora de casa para quem trabalha muito.",
    category: "Rotina & Hábitos",
    readTime: "4 min de leitura",
    publishedAt: "2026-02-26",
    summaryBlock: {
      question: "Como manter a dieta quando se tem uma rotina muito atarefada?",
      directAnswer: "Com planejamento prévio simples: preparar porções de proteínas e vegetais no fim de semana, ter lanches práticos de fácil transporte e saber fazer boas escolhas em restaurantes a quilo ou reuniões de trabalho."
    },
    content: [
      "Falta de tempo é a desculpa mais frequente para comer mal, mas também a que mais facilmente se resolve com método.",
      "A chave não é cozinhar todos os dias do zero, mas simplificar o preparo de refeições básicas e estocar opções estratégicas (frutas, sementes, iogurtes, sanduíches naturais).",
      "No acompanhamento com Junior Coelho, cada paciente recebe sugestões personalizadas para o seu dia a dia real, seja almoçando fora em restaurantes a quilo ou viajando a trabalho."
    ],
    faq: [
      {
        question: "Comer em restaurante por quilo estraga a dieta?",
        answer: "De forma alguma! Restaurantes por quilo costumam oferecer excelentes opções de saladas, carnes grelhadas e vegetais cozidos. Basta saber fazer as montagens certas."
      }
    ]
  },
  {
    id: "art-7",
    slug: "nutricao-e-performance-o-que-muda-no-acompanhamento",
    title: "Nutrição e performance: o que muda no acompanhamento nutricional?",
    description: "Como a estratégia nutricional atua diretamente na energia durante o treino, tolerância ao esforço e recuperação esportiva.",
    category: "Performance",
    readTime: "5 min de leitura",
    publishedAt: "2026-02-27",
    summaryBlock: {
      question: "O que muda na dieta focada em performance esportiva?",
      directAnswer: "Na nutrição voltada para performance, a atenção se volta para a crononutrição (timing de carboidratos pré, intra e pós-treino), hidratação adequada e manutenção do rendimento sob estresse físico elevado."
    },
    content: [
      "Enquanto a nutrição clínica básica foca na saúde e peso corporal, a nutrição para performance busca extrair a eficiência máxima do organismo em movimento.",
      "Seja para correr 10km, treinar forte na academia ou encarar provas de resistência, o tempo de digestão dos alimentos e o tipo de combustível consumido antes do treino determinam o seu sucesso.",
      "Junior Coelho alinha os horários das suas refeições com os picos do seu treino para que você nunca falhe por falta de energia."
    ],
    faq: [
      {
        question: "Mesmo sem ser atleta profissional posso buscar performance?",
        answer: "Sim! Qualquer praticante regular de exercícios beneficia-se imensamente de ter mais energia, menos fadiga e melhor recuperação entre os treinos."
      }
    ]
  }
];

export const HABIT_ACHIEVEMENTS: HabitAchievement[] = [
  {
    id: "hab-1",
    category: "Adesão Alimentar",
    metric: "Regularidade nas Refeições",
    description: "Acompanhamento focado na consistência de horários e no fim dos episódios de fome descontrolada ao fim do dia.",
    indicator: "Aumento no índice de saciedade e adesão sem sensação de privação."
  },
  {
    id: "hab-2",
    category: "Composição Corporal",
    metric: "Monitoramento por Dobras/Medidas",
    description: "Análise quantitativa de evolução de circunferência abdominal e preservação de tecido muscular.",
    indicator: "Melhora nos parâmetros antropométricos individualizados."
  },
  {
    id: "hab-3",
    category: "Disposição & Vigor",
    metric: "Nível de Energia Diário",
    description: "Adequação do aporte de micronutrientes e água para eliminação da fadiga crônica vespertina.",
    indicator: "Relatos de maior vitalidade do despertar até a hora de dormir."
  },
  {
    id: "hab-4",
    category: "Rendimento Esportivo",
    metric: "Carga e Tolerância ao Treino",
    description: "Otimização da ingestão de carboidratos pré e pós-treino para melhora no rendimento das séries e provas.",
    indicator: "Progresso constante de carga e redução do tempo de recuperação."
  }
];

export const AUTHORIZED_TESTIMONIALS: AuthorizedTestimonial[] = [
  {
    id: "test-1",
    patientName: "Paciente A.M. (Acompanhamento Individual)",
    goal: "Reeducação Alimentar e Emagrecimento",
    text: "O acompanhamento com o Junior me mostrou que é possível ter rotina saudável sem neuras. Ele adaptou tudo ao meu horário de trabalho corrido e nunca me proibiu de comer com a minha família no fim de semana.",
    duration: "4 meses de acompanhamento"
  },
  {
    id: "test-2",
    patientName: "Paciente R.S. (Treinos & Musculação)",
    goal: "Hipertrofia e Desempenho",
    text: "Eu treinava pesado há 2 anos sem mudar muito o físico. Depois do ajuste de carboidratos e proteínas no horário certo, minha energia no treino subiu demais e ganhei massa muscular de forma nítida.",
    duration: "6 meses de acompanhamento"
  },
  {
    id: "test-3",
    patientName: "Paciente C.F. (Qualidade de Vida)",
    goal: "Melhora de Hábitos e Sono",
    text: "Tinha muita indisposição à tarde e dormia mal. O Junior reorganizou os alimentos da noite e a hidratação diária. Em poucas semanas me senti outra pessoa para trabalhar e me exercitar.",
    duration: "3 meses de acompanhamento"
  }
];
