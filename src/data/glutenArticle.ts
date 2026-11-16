import type { ArticleItem } from '../types';

export const GLUTEN_ARTICLE: ArticleItem = {
  id: 'art-inchaco-gluten',
  slug: 'barriga-inchada-gluten-antes-de-cortar',
  title: 'Barriga inchada: será que é o glúten? O que avaliar antes de cortar',
  description: 'O aumento do volume abdominal não revela a causa do inchaço. Entenda por que investigar antes de retirar o glúten e quando procurar atendimento.',
  category: 'Saúde digestiva',
  readTime: '3 min de leitura',
  publishedAt: '2026-11-16',
  author: 'Conteúdo educativo do site',
  authorType: 'Organization',
  editorialNote: 'Conteúdo educativo baseado em fontes públicas consultadas em 16 de novembro de 2026. Não é diagnóstico nem revisão clínica assinada pelo nutricionista.',
  summaryBlock: {
    question: 'Retirar o glúten resolve a barriga inchada?',
    directAnswer: 'Não necessariamente. O aspecto do abdômen não identifica a causa. Se houver suspeita de doença celíaca, converse com um médico antes de excluir o glúten: a retirada pode interferir nos exames.'
  },
  content: ['A barriga aumenta ao longo do dia e a roupa começa a incomodar? Essa experiência merece atenção, não julgamento sobre o seu corpo. Em vez de comparar a aparência com uma gravidez ou escolher um alimento como culpado, descreva o desconforto e quando ele acontece.'],
  sections: [
    {
      heading: 'A aparência não fecha um diagnóstico',
      paragraphs: ['Gases, constipação, intolerâncias alimentares e diferentes condições digestivas podem estar associados ao inchaço. Ter desconforto depois de comer não confirma doença celíaca nem sensibilidade ao glúten. A investigação considera sintomas, histórico e exames quando indicados.'],
      sources: [{label:'NHS — Inchaço abdominal',url:'https://www.nhs.uk/symptoms/bloating/'}]
    },
    {
      heading: 'Por que não fazer um teste sem glúten sozinho?',
      paragraphs: ['Na investigação da doença celíaca, retirar o glúten antes dos exames pode alterar os resultados. Procure orientação médica antes de começar uma dieta de exclusão. Se você já retirou o glúten, informe isso ao profissional: não faça uma reintrodução por conta própria.', 'Doença celíaca não é diagnosticada apenas pelos sintomas. Melhorar após mudar a alimentação também não confirma esse diagnóstico. O cuidado adequado depende da causa identificada.'],
      sources: [{label:'NIDDK — Diagnóstico da doença celíaca',url:'https://www.niddk.nih.gov/health-information/digestive-diseases/celiac-disease/diagnosis'}]
    },
    {
      heading: 'Uma conversa mais útil com o nutricionista',
      paragraphs: ['Para aproveitar a consulta, leve suas dúvidas: quando a barriga incomoda? O sintoma é novo? Houve mudança na alimentação ou no funcionamento do intestino? Organize essas informações para uma conversa individual, sem se autodiagnosticar ou cortar vários grupos alimentares.', 'O acompanhamento nutricional pode ajudar a organizar a alimentação conforme a avaliação do seu caso. Ele não substitui investigação médica. Confirme disponibilidade e modalidade de atendimento pelos canais do site; reserve informações clínicas para um canal combinado com o profissional.'],
      sources: []
    },
    {
      heading: 'Quando não esperar uma consulta nutricional',
      paragraphs: ['Inchaço frequente ou persistente merece avaliação médica, especialmente com perda de peso involuntária ou sangue nas fezes. Dor intensa e repentina, vômito com sangue ou dificuldade importante para respirar exigem urgência. Procure atendimento prontamente se houver piora com febre, vômitos ou impossibilidade de evacuar ou eliminar gases.'],
      sources: [{label:'NHS — Sinais para procurar atendimento',url:'https://www.nhs.uk/symptoms/bloating/'}]
    }
  ],
  faq: [
    {question:'Barriga inchada significa intolerância ao glúten?',answer:'Não. O sintoma tem diferentes causas possíveis e não permite identificar uma intolerância pela aparência.'},
    {question:'Já tirei o glúten. Devo voltar a comer antes dos exames?',answer:'Informe ao médico o que foi retirado e há quanto tempo. A decisão de reintroduzir e de investigar deve ser individualizada; não faça isso sozinho.'}
  ]
};
