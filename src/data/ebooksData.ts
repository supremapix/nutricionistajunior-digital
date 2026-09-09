export interface EbookItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  link: string;
  description: string;
  highlights: string[];
  tag: string;
}

export const EBOOKS_DATA: EbookItem[] = [
  {
    id: 'tatuagem-e-piercing',
    title: 'Tatuagem e Perfuração Corporal: Cuidados, Informações e Alimentação',
    subtitle: 'Guia Essencial para Cicatrização Perfeita & Nutrição Anti-inflamatória',
    price: 'Hotmart Marketplace',
    image: 'https://img.supremasite.com.br/nutri/perfuracao-corporal.webp',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/tattoo-e-body-piercing-cuidados-informacoes-dicas-e-alimentacao/C64093831E',
    description: 'Manual completo desenvolvido pelo Nutricionista Junior Coelho para orientar sobre os cuidados essenciais, de higiene e nutricionais antes e após fazer tatuagens e piercings. Descubra como a alimentação acelera a cicatrização e evita inflamações.',
    highlights: [
      'Nutrição Anti-inflamatória para acelerar a regeneração celular',
      'Alimentos que devem ser evitados na fase de cicatrização',
      'Dicas práticas de cuidados e higiene com a pele recém-perfurada',
      'Mitos e verdades sobre alimentação, cicatrização e gordura'
    ],
    tag: 'Mais Vendido'
  },
  {
    id: 'receitas-fitness',
    title: 'Nutrição & Receitas Fitness Práticas',
    subtitle: 'Pratos Deliciosos, Nutritivos e Fáceis de Preparar para o Dia a Dia',
    price: 'Hotmart Marketplace',
    image: 'https://img.supremasite.com.br/nutri/receitas-fitness.webp',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/nutricao-receitas-fitness/K64678712T',
    description: 'Coleção exclusiva de receitas fitness desenvolvidas para quem busca emagrecer ou ganhar massa muscular sem abrir mão do prazer de comer. Pratos práticos, com ingredientes acessíveis do mercado.',
    highlights: [
      'Cafés da manhã rápidos e energéticos para sua rotina',
      'Almoços e jantares ricos em proteínas e fibras',
      'Doces e lanches fitness para matar a vontade sem sair da dieta',
      'Instruções passo a passo de preparo e conservação de marmitas'
    ],
    tag: 'Mais Popular'
  },
  {
    id: 'dieta-inteligente',
    title: 'Dieta Inteligente: Seu Guia Alimentar Prático',
    subtitle: 'Aprenda a Montar seus Pratos e Garanta Autonomia Alimentar',
    price: 'Hotmart Marketplace',
    image: 'https://img.supremasite.com.br/nutri/dieta-inteligente.webp',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/nutricao-seu-guia-alimentar/X63627482N',
    description: 'Guia definitivo de Reeducação Alimentar para você entender o funcionamento dos macronutrientes, aprender a fazer substituições inteligentes de alimentos e manter os resultados para sempre.',
    highlights: [
      'Como montar pratos saudáveis e saciantes no dia a dia',
      'Guia prático de substituição inteligente de alimentos',
      'Estratégias simples para evitar a compulsão por doces',
      'Aprenda a fazer compras eficientes no supermercado'
    ],
    tag: 'Recomendado'
  },
  {
    id: 'nutricao-e-performance',
    title: 'Nutrição e Performance',
    subtitle: 'Estratégias Nutricionais para Treinos de Alta Intensidade & Recuperação',
    price: 'Hotmart Marketplace',
    image: 'https://img.supremasite.com.br/nutri/nutri-performance-junior-coelho-nutricionista.webp',
    link: 'https://hotmart.com/pt-br/marketplace/produtos/nutricao-e-performance/M107532418F',
    description: 'Guia completo desenvolvido pelo Nutricionista Junior Coelho focado na otimização da performance esportiva, recuperação muscular acelerada, hidratação estratégica e uso eficiente de suplementação para atletas e praticantes de atividade física.',
    highlights: [
      'Nutrição pré, intra e pós-treino para energia e rendimento máximo',
      'Estratégias de hidratação e reposição de eletrólitos',
      'Guia prático sobre suplementação alimentar e ergogênicos',
      'Aceleração da recuperação muscular e prevenção de lesões'
    ],
    tag: 'Alta Performance'
  }
];
