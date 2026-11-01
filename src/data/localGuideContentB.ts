// Cenários hipotéticos originais; não descrevem hábitos de moradores nem substituem avaliação individual.
type LocalGuideContent = { heading: string; scenario: string; explanation: string; practicalStep: string; faq: { question: string; answer: string }[]; insightQuestion: string; insightAnswer: string; insightStep: string };
export const LOCAL_GUIDE_CONTENT_B: Record<string, LocalGuideContent> = {
  "/nutricionista-em-mossungue-curitiba": {
    "heading": "A compra planejada funcionou no prato?",
    "scenario": "Imagine uma situação hipotética: a lista de compras pareceu ótima, mas parte dos alimentos ficou esquecida e faltou uma opção nos dias mais corridos. Esse contraste pode ser levado ao retorno, sem esconder o que não deu certo.",
    "explanation": "Revisar uma compra não significa avaliar sua disciplina. Vale separar o que foi comprado, o que foi realmente preparado e o que exigiu mais trabalho do que você esperava. Talvez a quantidade tenha sido inadequada para a semana, um ingrediente precisasse de um preparo desconhecido ou o horário das refeições tenha mudado. Na conversa online, essas diferenças ajudam a formular ajustes concretos, em vez de repetir a mesma lista com mais cobrança.",
    "practicalStep": "Escolha dois itens da última compra: um aproveitado e outro que sobrou. Registre o motivo, não uma nota para seu desempenho.",
    "faq": [
      {
        "question": "Preciso guardar todos os comprovantes?",
        "answer": "Não. Uma lembrança aproximada das compras e do que aconteceu já ajuda. Se quiser usar uma lista, omita dados de pagamento e informações pessoais desnecessárias."
      },
      {
        "question": "Uma compra que sobrou foi um fracasso?",
        "answer": "Não necessariamente. Ela fornece pistas sobre quantidade, armazenamento, preparo e preferências. A próxima decisão pode ser comprar menos ou escolher outra forma de usar aquele alimento."
      }
    ],
    "insightQuestion": "O que uma compra esquecida ensina sobre o planejamento?",
    "insightAnswer": "O alimento pode não ter encontrado espaço na rotina real. Investigar a tarefa que ficou pelo caminho costuma ser mais útil do que aumentar a cobrança.",
    "insightStep": "Leve um exemplo de sobra e conte em qual etapa o preparo parou."
  },
  "/nutricionista-em-orleans-curitiba": {
    "heading": "Expectativas possíveis para a próxima ida ao mercado",
    "scenario": "Em um exemplo hipotético, alguém decide renovar toda a alimentação em uma única compra. Ao chegar em casa, encontra ingredientes novos, pouco tempo para cozinhar e dúvidas sobre por onde começar.",
    "explanation": "Uma compra não precisa representar uma mudança completa de vida. Antes de acrescentar novidades, pode ser útil reconhecer as refeições que já são viáveis e os ingredientes que você sabe preparar. A consulta online permite conversar sobre prioridades: experimentar um preparo, ajustar a frequência das compras ou aproveitar melhor o que já existe. A escolha deve considerar interesse, recursos e possibilidades, não a aparência de uma despensa ideal nas redes sociais.",
    "practicalStep": "Antes de comprar, descreva uma mudança que você deseja testar e o recurso necessário para realizá-la: tempo, utensílio, conhecimento ou companhia.",
    "faq": [
      {
        "question": "É obrigatório comprar produtos especiais?",
        "answer": "Não há uma lista universal de produtos para iniciar acompanhamento. Informe o que costuma estar disponível e o que cabe no orçamento para discutir alternativas adequadas."
      },
      {
        "question": "Posso repetir ingredientes conhecidos?",
        "answer": "Sim, conhecer um ingrediente pode facilitar a organização. Variedade pode ser discutida gradualmente, inclusive por diferentes preparos, sem exigir uma coleção de alimentos novos."
      }
    ],
    "insightQuestion": "Sua lista exige mais habilidades do que você tem tempo de aprender?",
    "insightAnswer": "Nem toda dificuldade está na escolha do alimento. Um planejamento pode pedir etapas de cozinha que ainda não cabem na semana.",
    "insightStep": "Identifique uma receita da lista e confira se sabe executar suas etapas."
  },
  "/nutricionista-em-parolin-curitiba": {
    "heading": "A primeira consulta pode começar pela sua lista de compras",
    "scenario": "Considere um caso hipotético: você quer conversar com um nutricionista, mas não sabe descrever sua alimentação. Uma lista habitual de compras parece mais fácil de lembrar do que todas as refeições da semana.",
    "explanation": "Essa lista pode servir como ponto de partida, sem se tornar uma prova ou inventário obrigatório. Ela mostra ingredientes disponíveis, alimentos compartilhados e dúvidas frequentes. Também importa explicar quem compra, quem cozinha e o que acontece quando falta algum item. Na consulta online, o profissional pode fazer perguntas para compreender esse contexto; não é necessário apresentar marcas caras, fotos elaboradas ou uma organização que não existe na prática.",
    "practicalStep": "Separe uma lista simples e marque três itens sobre os quais gostaria de perguntar. Não envie comprovantes com dados financeiros pelo contato público.",
    "faq": [
      {
        "question": "Preciso registrar tudo que compro antes de agendar?",
        "answer": "Não. A preparação é uma ajuda, não uma condição. Você pode começar relatando uma refeição típica e esclarecer como complementar informações durante o atendimento."
      },
      {
        "question": "O nutricionista vai avaliar minha família inteira pela lista?",
        "answer": "A lista compartilhada não substitui avaliação de cada pessoa. Explique quais compras são suas e quais são usadas por outras pessoas, sem presumir necessidades iguais."
      }
    ],
    "insightQuestion": "Qual pergunta sua lista de compras ainda não responde?",
    "insightAnswer": "Saber o que existe em casa não revela sozinho como aquilo vira refeição. Quem prepara, em que momento e com quais dificuldades também importa.",
    "insightStep": "Escolha uma compra frequente e conte como ela costuma ser utilizada."
  },
  "/nutricionista-em-pilarzinho-curitiba": {
    "heading": "Quando a pausa existe, mas a refeição não está organizada",
    "scenario": "Imagine, apenas como exemplo, uma pessoa com intervalo entre aulas ou reuniões. O tempo existe, mas decidir o que comer, buscar os alimentos e organizar a refeição ocupa quase toda a pausa.",
    "explanation": "O problema pode estar nas etapas anteriores, não na falta de vontade. Separar decisão, compra, preparo e momento de comer ajuda a descobrir qual parte precisa de apoio. Uma conversa online pode explorar o que pode ser decidido antes e o que depende do próprio dia. O objetivo não é transformar todos os intervalos em uma rotina rígida, mas reduzir decisões desnecessárias e preservar condições para uma refeição compatível com a realidade.",
    "practicalStep": "Escreva as etapas de uma pausa recente. Circule a etapa que consumiu mais tempo e leve esse exemplo para discutir possibilidades.",
    "faq": [
      {
        "question": "Preciso preparar todas as refeições antecipadamente?",
        "answer": "Não. Pode ser mais útil antecipar uma única decisão ou conhecer opções disponíveis. O planejamento deve respeitar espaço de armazenamento, segurança e preferência pessoal."
      },
      {
        "question": "E se meu intervalo mudar todos os dias?",
        "answer": "Conte como ele varia e quais decisões ficam imprevisíveis. O profissional pode discutir alternativas para cenários diferentes, em vez de depender de um horário perfeito."
      }
    ],
    "insightQuestion": "O que ocupa sua pausa antes de você conseguir comer?",
    "insightAnswer": "Escolher, deslocar-se e organizar utensílios são tarefas diferentes. Identificar o obstáculo específico abre espaço para uma adaptação mais simples.",
    "insightStep": "Reconstrua uma pausa de ontem, sem julgar o alimento escolhido."
  },
  "/nutricionista-em-pinheirinho-curitiba": {
    "heading": "Um orçamento de alimentação precisa enxergar o dia inteiro",
    "scenario": "Num cenário hipotético, uma pessoa considera apenas o preço da compra semanal. Pequenos gastos durante o trabalho ou estudo acabam surgindo sem planejamento e tornam o total difícil de compreender.",
    "explanation": "Observar o conjunto pode ajudar a discutir escolhas sem transformar a alimentação em uma planilha de culpa. Gastos fora de casa, alimentos compartilhados e itens que não foram aproveitados são partes da mesma rotina. O valor disponível precisa ser dito com clareza na consulta; isso permite conversar sobre possibilidades reais. Comparar sua compra com a de outra pessoa, sem conhecer necessidades, acesso e tempo de preparo, costuma oferecer pouca informação útil.",
    "practicalStep": "Faça uma estimativa simples de onde costuma comprar refeições ou alimentos. Use categorias, sem compartilhar dados bancários ou comprovantes completos.",
    "faq": [
      {
        "question": "Devo escolher sempre o produto de menor preço?",
        "answer": "Preço é um dos critérios. Quantidade que será utilizada, facilidade de preparo e composição da refeição também precisam entrar na conversa, dentro do seu limite financeiro."
      },
      {
        "question": "Posso falar de orçamento sem constrangimento?",
        "answer": "Sim. Um valor aproximado já ajuda a explicar o contexto. Não é necessário justificar renda nem apresentar documentos financeiros para discutir organização alimentar."
      }
    ],
    "insightQuestion": "Qual gasto pequeno não aparece no seu planejamento?",
    "insightAnswer": "Uma compra ocasional pode se repetir várias vezes na semana. Perceber essa repetição permite decidir com mais informação, sem proibir automaticamente.",
    "insightStep": "Anote um lugar ou momento em que costuma comprar algo não previsto."
  },
  "/nutricionista-em-prado-velho-curitiba": {
    "heading": "Observar intervalos sem impor um relógio à fome",
    "scenario": "Imagine uma situação hipotética: um trabalho ou estudo prolongado faz a pessoa perceber que passou bastante tempo sem comer. Em outros dias, ela sente vontade de comer em horários diferentes.",
    "explanation": "Horário, fome percebida e oportunidade de fazer uma refeição não são a mesma coisa. Registrar essas diferenças pode ajudar a conversa com o nutricionista, sem concluir que existe um intervalo correto para todos. Condições de saúde, atividades e tratamentos precisam ser considerados individualmente. A proposta é compreender o que acontece durante o dia e quais obstáculos impedem escolhas possíveis, não criar regras de compensação ou ignorar desconfortos persistentes.",
    "practicalStep": "Escolha um dia habitual e anote horário aproximado, disponibilidade de pausa e como você se sentia antes de uma refeição.",
    "faq": [
      {
        "question": "Existe uma frequência obrigatória para comer?",
        "answer": "Não é adequado definir uma regra universal por uma página do site. A organização depende das necessidades e do contexto que serão avaliados no atendimento."
      },
      {
        "question": "Devo esperar sentir muita fome para comer?",
        "answer": "Não use esse conteúdo para testar limites ou substituir orientações recebidas. Relate suas percepções ao profissional e discuta o planejamento apropriado para você."
      }
    ],
    "insightQuestion": "Foi a fome que mudou ou a chance de fazer uma pausa?",
    "insightAnswer": "Às vezes a dificuldade principal é o acesso a um momento para comer. Diferenciar sensação e oportunidade ajuda a explicar a rotina.",
    "insightStep": "Leve um episódio em que a pausa foi interrompida ou adiada."
  },
  "/nutricionista-em-reboucas-curitiba": {
    "heading": "Recomeçar sem levar a antiga dieta para a nova rotina",
    "scenario": "Em um exemplo hipotético, alguém tenta retomar uma dieta antiga enquanto concilia trabalho e estudo. As regras foram pensadas para outro momento e agora parecem impossíveis de cumprir.",
    "explanation": "Uma estratégia anterior não precisa ser repetida apenas porque já foi escrita. Horários, preferências, saúde e recursos podem ter mudado. Recomeçar pode incluir identificar o que aquela experiência ensinou: orientações pouco claras, preparo trabalhoso ou restrições que dificultaram a convivência. Na consulta online, falar dessas dificuldades ajuda a construir uma conversa mais precisa, sem prometer que a próxima tentativa será perfeita ou exigir compensações pelo período sem acompanhamento.",
    "practicalStep": "Separe uma orientação antiga que não cabia no seu dia e descreva o obstáculo concreto, sem tentar corrigi-la por conta própria.",
    "faq": [
      {
        "question": "Preciso seguir a dieta antiga antes da primeira consulta?",
        "answer": "Não inicie restrições apenas para chegar ao atendimento com uma rotina supostamente melhor. Explique como você se alimenta hoje e quais orientações ainda utiliza."
      },
      {
        "question": "E se eu tiver vergonha de contar tentativas anteriores?",
        "answer": "Você pode começar pelo que se sente confortável em compartilhar. Dizer que uma abordagem foi difícil já é uma informação relevante para orientar a conversa."
      }
    ],
    "insightQuestion": "Qual regra antiga ficou sem sentido na sua vida atual?",
    "insightAnswer": "Mudanças de rotina podem tornar uma orientação pouco prática. Rever o contexto é diferente de considerar a pessoa incapaz de seguir um plano.",
    "insightStep": "Escolha uma regra e explique o que mudou desde que ela foi proposta."
  },
  "/nutricionista-em-riviera-curitiba": {
    "heading": "O treino mudou de horário: o que vale contar na consulta?",
    "scenario": "Considere uma situação hipotética: uma atividade antes feita no fim da tarde passa para um intervalo entre compromissos. A pessoa tenta manter exatamente a mesma organização alimentar e encontra dificuldades.",
    "explanation": "O horário da atividade é uma informação útil, mas não determina sozinho o que ou quanto comer. A consulta pode considerar tempo disponível, acesso a alimentos, conforto durante o exercício e orientações de outros profissionais. Relatar essas condições é mais útil do que copiar o lanche de um colega. O planejamento nutricional precisa acompanhar a realidade sem transformar cada treino diferente em motivo para iniciar suplementos ou restrições por conta própria.",
    "practicalStep": "Descreva o caminho entre a última refeição, a atividade e o compromisso seguinte. Inclua dificuldades práticas, não apenas o objetivo esportivo.",
    "faq": [
      {
        "question": "Qual alimento é obrigatório antes de treinar?",
        "answer": "Uma página geral não define um alimento obrigatório. Necessidades, modalidade, duração e tolerância devem ser avaliadas individualmente com o profissional."
      },
      {
        "question": "Preciso comprar suplemento quando mudo o horário?",
        "answer": "A mudança de horário não estabelece automaticamente essa necessidade. Informe produtos já usados e peça orientação antes de incluir ou aumentar qualquer suplemento."
      }
    ],
    "insightQuestion": "O que mudou ao redor do treino, além do relógio?",
    "insightAnswer": "Transporte, pausa, acesso à água e compromisso seguinte podem alterar a organização. Esses detalhes ajudam a discutir uma estratégia viável.",
    "insightStep": "Liste uma condição nova que surgiu com a mudança do horário."
  },
  "/nutricionista-em-santa-candida-curitiba": {
    "heading": "Preferências também precisam aparecer no planejamento do trabalho",
    "scenario": "Imagine um caso hipotético: a opção disponível no trabalho ou na escola é prática, mas inclui alimentos que a pessoa não aprecia. Ela aceita a sugestão sem comentar e depois abandona o planejamento.",
    "explanation": "Preferência não é um detalhe que precisa ser escondido. Explicar sabores, texturas e preparos aceitos ajuda a discutir alternativas. Isso não significa que toda escolha será possível em qualquer lugar; o contexto pode impor limites que precisam ser conhecidos. Na consulta online, vale diferenciar o que você não gosta, o que nunca experimentou e o que associa a algum sintoma, sem tratar essas situações como equivalentes ou concluir uma intolerância sem avaliação.",
    "practicalStep": "Escolha uma refeição frequente e descreva o que funciona nela e o que gostaria de adaptar: textura, temperatura, tempero ou apresentação.",
    "faq": [
      {
        "question": "Preciso aprender a gostar de tudo?",
        "answer": "Não existe essa exigência universal. A conversa pode explorar possibilidades de variedade respeitando preferências e necessidades, sem transformar experimentação em obrigação."
      },
      {
        "question": "Não gostar é a mesma coisa que não tolerar?",
        "answer": "Não. Uma preferência e um desconforto após comer são informações diferentes. Sintomas devem ser relatados e avaliados, sem autodiagnóstico ou exclusões extensas."
      }
    ],
    "insightQuestion": "Qual detalhe de um preparo muda sua vontade de comê-lo?",
    "insightAnswer": "Textura e temperatura podem importar tanto quanto o ingrediente. Descrever esse detalhe torna a orientação mais concreta do que dizer apenas que não gosta.",
    "insightStep": "Leve um exemplo de alimento que aceita em um preparo, mas não em outro."
  },
  "/nutricionista-em-santa-felicidade-curitiba": {
    "heading": "Quando a embalagem promete uma rotina que não é a sua",
    "scenario": "Num exemplo hipotético, alguém compra um produto anunciado como ideal para estudar ou trabalhar. A mensagem parece convincente, mas não esclarece se ele faz sentido na alimentação daquela pessoa.",
    "explanation": "Publicidade pode destacar uma característica e deixar outras em segundo plano. Antes de atribuir uma função especial ao produto, vale perguntar o que a mensagem realmente informa e o que apenas sugere. O contexto da refeição, a frequência de uso e suas necessidades não cabem em uma frase de embalagem. Na consulta online, você pode levar o nome ou o rótulo para discutir a dúvida sem assumir que existe um alimento capaz de garantir concentração ou desempenho.",
    "practicalStep": "Escolha uma promessa da embalagem e reescreva como pergunta: o que essa expressão significa e qual informação falta para decidir?",
    "faq": [
      {
        "question": "Uma palavra como natural resolve a escolha?",
        "answer": "Uma palavra isolada não descreve toda a composição nem sua necessidade individual. Ela pode ser o começo de uma pergunta, não uma conclusão automática."
      },
      {
        "question": "Devo enviar fotos de tudo que consumo?",
        "answer": "Não é necessário transformar a preparação em fiscalização permanente. Escolha uma dúvida relevante e combine com o profissional como compartilhar informações durante o atendimento."
      }
    ],
    "insightQuestion": "Você comprou pelo conteúdo ou pela promessa da frente da embalagem?",
    "insightAnswer": "Reconhecer o que chamou sua atenção ajuda a separar informação de expectativa. Não é preciso se culpar por uma mensagem persuasiva.",
    "insightStep": "Leve uma embalagem que gerou dúvida e destaque a frase que influenciou a escolha."
  },
  "/nutricionista-em-santo-inacio-curitiba": {
    "heading": "Cozinhar depois de um dia cheio: qual etapa pode ficar mais simples?",
    "scenario": "Imagine, como hipótese, chegar em casa com pouca disposição para decidir e preparar uma refeição. A receita escolhida exige muitos utensílios, etapas e uma limpeza que não estava prevista.",
    "explanation": "A praticidade de uma preparação inclui o começo e o final da tarefa. Escolher ingredientes, separar utensílios e lavar a cozinha também consome tempo. A consulta pode explorar quais preparos conhecidos exigem menos decisões naquele momento, sem exigir que todas as refeições sejam elaboradas. É possível conversar sobre divisão de tarefas e opções de preparo compatíveis com seus recursos. O objetivo é tornar a organização compreensível, não provar dedicação pela complexidade do prato.",
    "practicalStep": "Descreva uma preparação que você já sabe fazer e identifique qual etapa costuma desanimar: decisão, execução, espera ou limpeza.",
    "faq": [
      {
        "question": "Preciso cozinhar todos os dias?",
        "answer": "Não há uma obrigação universal. Frequência de preparo e alternativas dependem da rotina, da estrutura disponível e das necessidades discutidas no atendimento."
      },
      {
        "question": "Uma receita simples tem menos valor?",
        "answer": "Complexidade culinária não é um critério suficiente para avaliar a alimentação. Uma preparação simples pode integrar um planejamento individualizado e respeitar suas preferências."
      }
    ],
    "insightQuestion": "Qual parte da cozinha você gostaria de tornar menos trabalhosa?",
    "insightAnswer": "Nem sempre é preciso trocar a refeição inteira. Uma etapa mal dimensionada pode tornar uma boa ideia difícil de repetir.",
    "insightStep": "Escolha uma etapa para explicar ao nutricionista, sem mudar tudo ao mesmo tempo."
  },
  "/nutricionista-em-seminario-curitiba": {
    "heading": "A meta da semana precisa caber na semana real",
    "scenario": "Considere um cenário hipotético: uma pessoa estabelece várias mudanças alimentares durante um período cheio de entregas e provas. Quando não realiza todas, sente que nenhum avanço aconteceu.",
    "explanation": "Uma expectativa útil precisa considerar os compromissos já existentes. Separar o que depende de você do que depende de horários, acesso ou outras pessoas ajuda a escolher uma prioridade. O acompanhamento pode avaliar mudanças observáveis, como compreender uma orientação ou organizar uma pausa, sem reduzir tudo a uma medida corporal. O prazo e o significado de progresso devem ser discutidos individualmente, não definidos por comparações com relatos publicados na internet.",
    "practicalStep": "Escolha uma ação pequena que possa ser observada e diga em qual momento da semana seria possível realizá-la, incluindo um plano caso o horário mude.",
    "faq": [
      {
        "question": "Preciso mudar vários hábitos para valer a consulta?",
        "answer": "Não. Uma dificuldade bem compreendida pode orientar decisões úteis. O atendimento não precisa começar com uma lista extensa de tarefas simultâneas."
      },
      {
        "question": "Como saber se estou avançando sem me comparar?",
        "answer": "Converse sobre indicadores relevantes para sua situação. Compreensão, viabilidade e dificuldades percebidas podem complementar avaliações profissionais, sem prometer um ritmo igual para todos."
      }
    ],
    "insightQuestion": "Sua meta descreve uma ação ou um resultado que você não controla sozinho?",
    "insightAnswer": "Ações podem ser planejadas; resultados dependem de diferentes fatores. Fazer essa distinção ajuda a formular expectativas mais claras.",
    "insightStep": "Transforme uma expectativa ampla em uma pergunta concreta para o próximo atendimento."
  },
  "/nutricionista-em-sao-braz-curitiba": {
    "heading": "Consulta online entre compromissos: preparação sem exposição",
    "scenario": "Imagine uma situação hipotética: você encontra um horário para a consulta, mas ele coincide com um ambiente compartilhado de trabalho ou estudo. A conexão existe, porém a privacidade é limitada.",
    "explanation": "O formato online envolve mais do que abrir uma chamada. É importante combinar um local em que você consiga ouvir, perguntar e decidir o que deseja compartilhar. Se isso não for possível no horário escolhido, avise antes para discutir alternativas disponíveis. Preparar perguntas em uma anotação pessoal pode ajudar, mas não é necessário enviar histórico clínico por mensagens públicas. Também vale esclarecer como a consulta acontece e quais informações são realmente necessárias.",
    "practicalStep": "Antes de confirmar, verifique três condições: tempo reservado, conexão e privacidade. Leve dúvidas sobre o formato para o contato de agendamento.",
    "faq": [
      {
        "question": "Posso fazer a consulta em qualquer pausa curta?",
        "answer": "Confirme a duração e as condições do atendimento antes de escolher a pausa. Uma conversa apressada ou interrompida pode dificultar a compreensão das orientações."
      },
      {
        "question": "Preciso falar sobre saúde na primeira mensagem?",
        "answer": "Para perguntar sobre agenda e modalidade, você pode manter a mensagem geral. Combine diretamente com o profissional um canal adequado para informações clínicas."
      }
    ],
    "insightQuestion": "O horário livre também oferece espaço para uma conversa reservada?",
    "insightAnswer": "Disponibilidade no calendário e privacidade não são a mesma coisa. Conferir as duas evita começar a consulta em condições desconfortáveis.",
    "insightStep": "Teste onde poderia conversar sem precisar divulgar informações a outras pessoas."
  },
  "/nutricionista-em-sao-francisco-curitiba": {
    "heading": "Refeições compartilhadas sem transformar o encontro em um teste",
    "scenario": "Em um exemplo hipotético, um almoço de fim de semana reúne pessoas com horários e preferências diferentes. Alguém se preocupa em seguir um planejamento e deixa de aproveitar a conversa à mesa.",
    "explanation": "A organização alimentar pode considerar convivência e ocasiões que fazem parte da vida. Vale conversar previamente sobre o que costuma acontecer nesses encontros, sem exigir um cardápio separado ou classificar a ocasião como desvio. A consulta pode ajudar a compreender suas dúvidas e os limites do planejamento. Não é preciso compensar uma refeição social com restrições automáticas; decisões devem respeitar necessidades individuais e a relação com a alimentação.",
    "practicalStep": "Pense em um encontro habitual e anote o que gera dúvida: horário, opções, comentários de outras pessoas ou receio de sair da rotina.",
    "faq": [
      {
        "question": "Preciso avisar todo mundo que faço acompanhamento?",
        "answer": "Essa escolha é sua. Você pode discutir formas de lidar com a situação sem tornar informações de saúde um assunto obrigatório do encontro."
      },
      {
        "question": "Uma refeição diferente exige compensação depois?",
        "answer": "Não adote restrições ou exercício como punição por conta própria. Leve a dúvida ao profissional para compreender como o planejamento pode lidar com variações reais."
      }
    ],
    "insightQuestion": "O que você gostaria de preservar nos encontros à mesa?",
    "insightAnswer": "Convivência, tradição e prazer podem integrar a conversa sobre alimentação. Reconhecer esses valores ajuda a discutir orientações com mais contexto.",
    "insightStep": "Conte qual aspecto de uma refeição compartilhada é importante para você."
  },
  "/nutricionista-em-sao-joao-curitiba": {
    "heading": "Receber pessoas sem perder a noção do orçamento",
    "scenario": "Considere uma situação hipotética: você organiza uma refeição para visitas e compra muitos itens por receio de faltar. Depois do encontro, percebe sobras e um gasto maior do que esperava.",
    "explanation": "Planejar uma ocasião social envolve estimativas, preferências e divisão de tarefas. Separar o que é essencial do que foi acrescentado por insegurança pode ajudar na próxima organização. Não existe uma quantidade universal definida por este conteúdo; o número de pessoas, o tipo de encontro e as condições de armazenamento importam. Na consulta, você pode discutir como essas ocasiões se relacionam com a rotina sem precisar escolher entre convivência e cuidado com recursos.",
    "practicalStep": "Anote o que foi realmente utilizado no último encontro e quais itens foram comprados apenas por dúvida. Use isso como memória para planejar melhor.",
    "faq": [
      {
        "question": "É necessário oferecer muitas preparações diferentes?",
        "answer": "Não há obrigação de variedade ilimitada em uma única ocasião. É possível conversar sobre opções conhecidas, preferências dos participantes e o trabalho envolvido."
      },
      {
        "question": "Posso pedir que outras pessoas contribuam?",
        "answer": "Dividir tarefas ou combinar contribuições é uma decisão de convivência que pode aliviar a organização. Considere o que é confortável para os envolvidos."
      }
    ],
    "insightQuestion": "Você planejou para as pessoas presentes ou para o medo de faltar?",
    "insightAnswer": "Compras feitas por incerteza nem sempre correspondem ao que será usado. Uma lembrança concreta do encontro ajuda a ajustar expectativas.",
    "insightStep": "Registre um item que sobrou e uma tarefa que poderia ser compartilhada."
  },
  "/nutricionista-em-sao-lourenco-curitiba": {
    "heading": "Cardápio de restaurante: decidir sem procurar uma escolha perfeita",
    "scenario": "Imagine um cenário hipotético: você sai para comer com amigos e encontra um cardápio extenso. A dúvida sobre a opção ideal ocupa mais atenção do que o próprio encontro.",
    "explanation": "Uma decisão alimentar não precisa ser resolvida por uma regra isolada encontrada na internet. O que está disponível, suas preferências, necessidades de saúde e o contexto da refeição são informações relevantes. Na consulta online, você pode levar exemplos de cardápios que costuma encontrar e perguntar como pensar sobre eles. Isso pode ampliar compreensão e autonomia, sem exigir que o nutricionista escolha remotamente cada prato ou garantir que uma opção seja adequada para todas as pessoas.",
    "practicalStep": "Lembre de uma decisão recente no restaurante e formule a dúvida que apareceu. Evite transformar a preparação da consulta em comparação obsessiva de cardápios.",
    "faq": [
      {
        "question": "Preciso escolher sempre a mesma opção fora de casa?",
        "answer": "Não há essa regra universal. A conversa pode abordar diferentes situações e esclarecer quais aspectos merecem atenção no seu caso."
      },
      {
        "question": "Posso aproveitar a ocasião mesmo sem conhecer a receita?",
        "answer": "Você pode conversar sobre limites de informação e fazer perguntas necessárias ao estabelecimento, especialmente quando já possui orientações específicas de saúde ou segurança alimentar."
      }
    ],
    "insightQuestion": "Qual informação realmente faltou para você escolher com tranquilidade?",
    "insightAnswer": "Às vezes a dúvida não é sobre todos os pratos, mas sobre um ingrediente, preparo ou orientação que ficou pouco clara.",
    "insightStep": "Leve uma pergunta específica do último cardápio que encontrou."
  },
  "/nutricionista-em-sao-miguel-curitiba": {
    "heading": "Quando o horário do encontro muda o horário da refeição",
    "scenario": "Num exemplo hipotético, um encontro começa mais tarde do que o combinado e a refeição é adiada. A pessoa tenta ignorar o desconforto porque acredita que deve esperar o grupo.",
    "explanation": "Eventos sociais nem sempre seguem o horário previsto. Conversar sobre essas situações permite discutir alternativas compatíveis com suas necessidades, sem estabelecer uma regra igual para todos. A percepção de fome, o tempo de espera e a disponibilidade de opções podem ser relatados ao nutricionista. O importante é não usar uma orientação geral como justificativa para testar limites, desconsiderar sintomas ou alterar cuidados específicos já recebidos.",
    "practicalStep": "Descreva uma ocasião em que a espera foi maior do que você imaginava. Conte quais opções existiam e qual dúvida surgiu naquele momento.",
    "faq": [
      {
        "question": "Devo ficar sem comer para acompanhar o horário do grupo?",
        "answer": "Não transforme uma situação social em obrigação de restringir a alimentação. Discuta como lidar com esperas considerando seu contexto e orientações individuais."
      },
      {
        "question": "Como conversar sobre isso sem constrangimento?",
        "answer": "Você pode preparar uma frase simples sobre sua necessidade de organizar a refeição, sem divulgar diagnósticos ou justificar detalhes pessoais para todos."
      }
    ],
    "insightQuestion": "O combinado do encontro deixa espaço para suas necessidades?",
    "insightAnswer": "Um horário coletivo pode não atender a todas as pessoas. Reconhecer isso ajuda a planejar a conversa e as alternativas sem culpa.",
    "insightStep": "Anote como explicaria, de forma breve, uma necessidade durante um encontro."
  },
  "/nutricionista-em-taboao-curitiba": {
    "heading": "Passeio ativo no fim de semana não exige uma receita copiada",
    "scenario": "Considere um caso hipotético: uma caminhada ou atividade recreativa é incluída no fim de semana. A pessoa procura na internet um cardápio de atleta, embora a situação seja diferente da sua rotina.",
    "explanation": "A presença de movimento não define automaticamente uma estratégia alimentar específica. Duração, intensidade, condições de saúde e organização do restante do dia precisam ser consideradas. A consulta online pode ajudar a diferenciar necessidades pessoais de mensagens voltadas a outros contextos. Relatar como será o passeio, quais refeições costumam ocorrer e que dúvidas existem é mais útil do que adotar produtos ou protocolos só porque aparecem associados ao esporte.",
    "practicalStep": "Conte uma atividade que pretende fazer e o que você sabe sobre sua duração e condições. Separe fatos do que ainda precisa confirmar.",
    "faq": [
      {
        "question": "Qualquer passeio pede suplemento?",
        "answer": "Não. A necessidade de suplementação não pode ser deduzida apenas da presença de atividade física e deve ser avaliada individualmente."
      },
      {
        "question": "E se eu sentir mal-estar durante uma atividade?",
        "answer": "Não use o planejamento alimentar do site como avaliação de sintomas. Interrompa a atividade conforme a situação e procure o cuidado de saúde adequado quando necessário."
      }
    ],
    "insightQuestion": "A orientação que você encontrou foi feita para o mesmo tipo de atividade?",
    "insightAnswer": "Conteúdos esportivos podem abordar demandas muito diferentes. Identificar para quem a informação foi escrita ajuda a evitar uma aplicação automática.",
    "insightStep": "Leve a dúvida sobre uma recomendação vista online, sem testá-la por conta própria."
  },
  "/nutricionista-em-taruma-curitiba": {
    "heading": "Tradições de família podem entrar na conversa nutricional",
    "scenario": "Imagine uma situação hipotética: uma preparação tradicional aparece nos encontros da família. A pessoa gosta dela, mas acha que precisará deixá-la de fora para iniciar acompanhamento.",
    "explanation": "Alimentos e preparações podem carregar lembranças, relações e significado cultural. Explicar esse valor ajuda o profissional a compreender o que você deseja preservar. Isso não elimina a necessidade de avaliar condições individuais, mas evita que a conversa comece por uma lista de proibições imaginada. É possível discutir frequência, contexto e alternativas de preparo quando pertinentes, sem tratar toda tradição como obstáculo ou prometer que qualquer adaptação atende a todas as pessoas.",
    "practicalStep": "Escolha uma preparação importante para você e conte em quais ocasiões ela aparece, quem costuma prepará-la e o que gostaria de esclarecer.",
    "faq": [
      {
        "question": "Preciso mudar a receita da família antes de consultar?",
        "answer": "Não é necessário modificar algo apenas para demonstrar interesse no acompanhamento. Primeiro explique a situação e suas dúvidas ao profissional."
      },
      {
        "question": "O valor afetivo de um alimento importa?",
        "answer": "Sim, ele ajuda a compreender preferências e convivência. A avaliação individual pode considerar esses aspectos junto das necessidades de saúde e da rotina."
      }
    ],
    "insightQuestion": "O que existe nessa receita além dos ingredientes?",
    "insightAnswer": "Uma preparação pode representar encontro, memória e pertencimento. Nomear esse significado ajuda a construir uma conversa menos centrada em proibições.",
    "insightStep": "Leve uma história breve sobre uma refeição que gostaria de preservar."
  },
  "/nutricionista-em-tatuquara-curitiba": {
    "heading": "Promoções do fim de semana: comparar antes de decidir",
    "scenario": "Em um exemplo hipotético, uma oferta de produtos aparece perto de uma ocasião social. A quantidade parece vantajosa, mas a pessoa não sabe se conseguirá utilizar tudo depois.",
    "explanation": "Uma promoção pode ser avaliada pelo uso previsto, não apenas pelo desconto anunciado. Tamanho da embalagem, espaço disponível e frequência com que aquele item entra na rotina ajudam a contextualizar a decisão. O nutricionista pode conversar sobre composição e planejamento quando houver dúvida, sem transformar toda compra em uma escolha moral. Uma embalagem maior não será necessariamente a opção mais prática para quem utiliza pouco daquele produto.",
    "practicalStep": "Compare o que a oferta promete com o que você pretende utilizar. Anote uma pergunta sobre quantidade, aproveitamento ou informação do rótulo.",
    "faq": [
      {
        "question": "Comprar em maior quantidade sempre economiza?",
        "answer": "O preço por quantidade é uma informação, mas o aproveitamento também importa. Um item que não será utilizado pode não atender ao objetivo da compra."
      },
      {
        "question": "Um produto anunciado para compartilhar serve para qualquer ocasião?",
        "answer": "A apresentação publicitária não conhece os participantes nem suas necessidades. Considere o contexto real e esclareça dúvidas específicas quando necessário."
      }
    ],
    "insightQuestion": "O desconto atende a uma necessidade ou cria uma compra nova?",
    "insightAnswer": "Reconhecer a diferença ajuda a decidir sem pressa. A oferta pode ser útil, mas não precisa determinar o planejamento da ocasião.",
    "insightStep": "Escolha uma promoção recente e explique por que ela chamou sua atenção."
  },
  "/nutricionista-em-tingui-curitiba": {
    "heading": "O retorno pode incluir o que aconteceu fora da semana padrão",
    "scenario": "Considere uma situação hipotética: durante a semana, o planejamento parece viável. Nos encontros do fim de semana, surgem dúvidas que a pessoa deixa de mencionar por achar que não fazem parte da consulta.",
    "explanation": "Essas ocasiões também fazem parte da rotina e podem trazer informações importantes. Ao relatar um encontro, vale explicar o que mudou: horário, disponibilidade, companhia ou dificuldade de interpretar uma orientação. Não é necessário apresentar a ocasião como erro. O retorno pode servir para esclarecer decisões e adaptar o planejamento quando pertinente, sem inventar compensações ou estabelecer que todo fim de semana precisa seguir um roteiro idêntico.",
    "practicalStep": "Escolha uma situação do último fim de semana e leve uma pergunta que ficou sem resposta. Conte o contexto antes de avaliar a escolha.",
    "faq": [
      {
        "question": "Devo esconder uma refeição diferente do combinado?",
        "answer": "Não é preciso transformar o relato em prestação de contas. Informações reais ajudam a compreender dificuldades e discutir ajustes com mais clareza."
      },
      {
        "question": "E se o encontro foi agradável e não gerou problema?",
        "answer": "Isso também é uma informação útil. Identificar o que funcionou pode ajudar a preservar estratégias que cabem na sua vida."
      }
    ],
    "insightQuestion": "Qual situação de fim de semana nunca entrou na sua consulta?",
    "insightAnswer": "O planejamento não precisa considerar apenas dias previsíveis. Conversar sobre exceções frequentes pode torná-lo mais representativo da sua rotina.",
    "insightStep": "Leve um exemplo concreto, sem tentar resumir todos os encontros de uma vez."
  },
  "/nutricionista-em-uberaba-curitiba": {
    "heading": "Preparar algo para compartilhar sem assumir todas as tarefas",
    "scenario": "Imagine um caso hipotético: você aceita levar uma preparação para um encontro. A receita exige uma tarde inteira, embora outras tarefas já estivessem previstas para o mesmo dia.",
    "explanation": "Escolher uma preparação envolve tempo, experiência, transporte e combinação com os demais participantes. Uma opção conhecida pode ser mais viável do que uma receita complexa escolhida para impressionar. Na conversa nutricional, esse contexto ajuda a discutir organização sem exigir que cozinhar seja uma obrigação individual permanente. Dividir tarefas e explicar limites pode fazer parte de um planejamento possível, respeitando preferências e recursos de quem participa.",
    "practicalStep": "Liste as etapas da preparação antes de aceitar uma tarefa: compra, execução, armazenamento e transporte. Identifique o que precisa ser combinado com outras pessoas.",
    "faq": [
      {
        "question": "Preciso fazer uma receita nova para levar algo adequado?",
        "answer": "Não. Novidade não é requisito. Você pode conversar sobre preparações que já conhece e esclarecer dúvidas específicas sobre sua organização."
      },
      {
        "question": "Como saber se a tarefa cabe no meu dia?",
        "answer": "Considere o processo inteiro, não só o tempo de cozimento. Se houver etapas incertas, confirme antes ou negocie uma contribuição mais simples."
      }
    ],
    "insightQuestion": "Você escolheu o prato considerando também o trabalho que vem com ele?",
    "insightAnswer": "Uma boa ideia pode ficar difícil quando compra, limpeza e transporte são esquecidos. Enxergar essas etapas ajuda a dividir responsabilidades.",
    "insightStep": "Conte qual etapa você gostaria de tornar mais previsível na próxima ocasião."
  },
  "/nutricionista-em-umbara-curitiba": {
    "heading": "Um fim de semana diferente não precisa definir a semana seguinte",
    "scenario": "Num cenário hipotético, uma viagem curta ou visita muda os horários habituais. Ao voltar, a pessoa decide fazer restrições para corrigir o que considera ter saído do planejamento.",
    "explanation": "Variações acontecem e podem ser discutidas sem punição. Em vez de decidir compensações por conta própria, vale observar quais dificuldades realmente apareceram e quais foram apenas expectativas de perfeição. O acompanhamento pode ajudar a retomar a organização a partir das condições atuais. Isso não significa ignorar necessidades de saúde, mas evitar que uma experiência isolada vire uma regra rígida sobre o que será permitido depois.",
    "practicalStep": "Escolha uma ação cotidiana que deseja reorganizar ao voltar, como conferir alimentos disponíveis ou reservar uma pausa, sem criar uma compensação alimentar.",
    "faq": [
      {
        "question": "Preciso começar tudo de novo depois de um encontro?",
        "answer": "Não há motivo para considerar automaticamente que todo o aprendizado foi perdido. Relate a situação e discuta o que precisa ser ajustado."
      },
      {
        "question": "Como diferenciar ajuste de punição?",
        "answer": "Uma pergunta útil é se a mudança responde a uma necessidade prática ou tenta pagar por uma refeição. Dúvidas sobre restrição e culpa merecem espaço na conversa."
      }
    ],
    "insightQuestion": "O próximo passo cuida da sua rotina ou tenta castigar uma escolha?",
    "insightAnswer": "Uma retomada pode ser simples e prática. Ela não precisa apagar o que aconteceu nem transformar convivência em dívida.",
    "insightStep": "Formule uma necessidade concreta para o próximo dia, sem usar linguagem de compensação."
  },
  "/nutricionista-em-vila-izabel-curitiba": {
    "heading": "Uma consulta pode conversar com a sua vida social",
    "scenario": "Imagine uma situação hipotética: você pensa em agendar uma consulta, mas acredita que terá de suspender encontros e refeições compartilhadas até aprender a seguir um plano.",
    "explanation": "Esse receio pode ser levado ao primeiro atendimento. Conhecer ocasiões importantes, horários variáveis e preferências ajuda a compreender sua realidade. A consulta online não precisa começar por uma versão idealizada da semana: contar como os encontros acontecem pode gerar perguntas mais úteis. Também é importante esclarecer o que está incluído no acompanhamento e como serão discutidas dúvidas posteriores, sem presumir disponibilidade ilimitada do profissional.",
    "practicalStep": "Antes de agendar, anote uma ocasião social que deseja manter e uma dúvida sobre como o acompanhamento considera esse contexto.",
    "faq": [
      {
        "question": "Posso perguntar sobre encontros já na primeira consulta?",
        "answer": "Sim. Eles fazem parte da rotina e podem influenciar organização, preferências e expectativas. Não é necessário esperar surgir uma dificuldade maior para mencionar o tema."
      },
      {
        "question": "Preciso enviar detalhes pessoais das outras pessoas?",
        "answer": "Não. Descreva a situação sem identificar participantes ou compartilhar dados de saúde de terceiros. O foco é compreender sua própria experiência."
      }
    ],
    "insightQuestion": "Qual parte da sua convivência você teme perder ao buscar orientação?",
    "insightAnswer": "Explicar esse receio permite discutir expectativas antes de imaginar proibições. O atendimento deve considerar a vida que você realmente leva.",
    "insightStep": "Transforme esse receio em uma pergunta para o profissional, sem antecipar a resposta."
  },
  "/nutricionista-em-vista-alegre-curitiba": {
    "heading": "Mudou a rotina: por qual refeição vale começar?",
    "scenario": "Considere um exemplo hipotético: um novo horário de trabalho, estudo ou cuidado familiar muda a organização do dia. A pessoa tenta reorganizar todas as refeições ao mesmo tempo e se sente sobrecarregada.",
    "explanation": "Uma mudança de rotina pode ser observada por partes. Identificar a refeição mais afetada ajuda a escolher uma questão concreta para discutir. Talvez o desafio seja comprar, preparar, fazer uma pausa ou compartilhar tarefas. Não é necessário concluir que todo o planejamento anterior deixou de servir; algumas estratégias podem continuar úteis. A consulta online pode apoiar essa revisão, respeitando o que está estabelecido e o que ainda é incerto.",
    "practicalStep": "Compare um dia antigo com um dia atual e marque a refeição que mais mudou. Descreva qual condição deixou de existir ou passou a ser necessária.",
    "faq": [
      {
        "question": "Preciso esperar a nova rotina ficar estável?",
        "answer": "Você pode buscar orientação enquanto ela se organiza. Explique o que ainda não sabe para que a conversa considere possibilidades, sem depender de previsões perfeitas."
      },
      {
        "question": "Posso aproveitar parte do planejamento anterior?",
        "answer": "Essa possibilidade pode ser avaliada. Conte o que continua funcionando e o que deixou de caber, em vez de descartar tudo automaticamente."
      }
    ],
    "insightQuestion": "Qual refeição sentiu primeiro a mudança da sua agenda?",
    "insightAnswer": "Um ponto específico pode mostrar melhor o problema do que a sensação de que tudo se desorganizou. Começar por ele torna a conversa mais concreta.",
    "insightStep": "Leve um antes e depois simples de uma refeição habitual."
  },
  "/nutricionista-online-em-champagnat-curitiba": {
    "heading": "Um novo horário pode mudar a forma como você percebe as pausas",
    "scenario": "Imagine uma situação hipotética: após mudar de turno, você percebe fome em momentos diferentes dos anteriores. Tenta manter os mesmos horários porque acredita que qualquer mudança será inadequada.",
    "explanation": "Uma transição pode exigir observação e conversa, não regras automáticas. Horário de acordar, oportunidade de comer e compromissos mudam o contexto em que as refeições acontecem. A percepção de fome pode ser relatada junto dessas condições, sem se tornar uma medida que você precisa controlar ou ignorar. Se houver sintomas persistentes ou orientações relacionadas a alguma condição de saúde, informe ao profissional e busque avaliação apropriada.",
    "practicalStep": "Anote uma diferença entre o turno anterior e o atual: quando surge a primeira oportunidade de comer, quanto tempo ela dura e quais opções existem.",
    "faq": [
      {
        "question": "Devo manter os horários antigos a qualquer custo?",
        "answer": "Não tome essa decisão a partir de uma regra geral. Explique a mudança e discuta quais adaptações são adequadas ao seu caso."
      },
      {
        "question": "Um registro precisa incluir quantidades exatas?",
        "answer": "Não necessariamente. Para iniciar a conversa, horários aproximados e dificuldades práticas podem ser suficientes; o profissional orientará o que precisa ser complementado."
      }
    ],
    "insightQuestion": "Você está tentando seguir o relógio de uma rotina que já mudou?",
    "insightAnswer": "Uma referência antiga pode deixar de representar suas oportunidades atuais. Reconhecer a transição ajuda a formular perguntas sem concluir que seu corpo está errado.",
    "insightStep": "Descreva uma pausa nova e uma pausa que deixou de existir."
  },
  "/nutricionista-online-em-vila-nossa-senhora-da-luz-curitiba": {
    "heading": "Recomeçar depois de uma mudança sem buscar a dieta mais rígida",
    "scenario": "Em um caso hipotético, uma mudança de casa ou agenda interrompe hábitos antigos. A pessoa pensa em resolver a dificuldade escolhendo uma dieta mais restritiva do que as anteriores.",
    "explanation": "A intensidade das regras não garante que elas sejam viáveis. Antes de escolher outra estratégia, pode ser útil compreender o que mudou no acesso a alimentos, na cozinha e no tempo disponível. Experiências anteriores ajudam a identificar orientações pouco claras ou exigências difíceis de manter. A consulta online pode partir dessas informações, sem pedir que você esconda tentativas ou prometa uma rotina perfeita desde o início.",
    "practicalStep": "Escolha uma dificuldade nova e uma dificuldade antiga. Explique o que elas têm de diferente para não repetir uma solução que já não funcionava.",
    "faq": [
      {
        "question": "Uma dieta mais difícil demonstra mais compromisso?",
        "answer": "Não. Exigência e adequação são coisas diferentes. O planejamento deve considerar necessidades e condições reais, não servir como teste de merecimento."
      },
      {
        "question": "Posso conversar sobre culpa em relação às tentativas?",
        "answer": "Sim. Esse tema pode ser relatado, e o profissional pode avaliar como acolhê-lo e quando outro apoio é necessário, sem transformar o site em diagnóstico."
      }
    ],
    "insightQuestion": "Você precisa de regras mais fortes ou de uma estratégia mais compatível?",
    "insightAnswer": "Quando o contexto muda, aumentar exigências pode não resolver o obstáculo. Descrever a dificuldade permite avaliar caminhos com mais clareza.",
    "insightStep": "Conte qual exigência de uma tentativa anterior você não deseja repetir."
  },
  "/nutricionista-online-em-vila-oficinas-curitiba": {
    "heading": "Voltar a se movimentar não exige recuperar uma rotina antiga inteira",
    "scenario": "Imagine, apenas como hipótese, retomar uma atividade após uma mudança de agenda. Você tenta usar o mesmo planejamento alimentar de outra época, embora frequência e horários sejam diferentes.",
    "explanation": "Uma retomada pode ter condições próprias. Informar como a atividade está organizada hoje ajuda a discutir alimentação sem presumir que necessidades e objetivos permaneceram iguais. Também vale contar o que ainda está sendo definido, como duração ou acesso a refeições. O nutricionista pode considerar essas informações na avaliação, em diálogo com orientações de outros profissionais quando necessário. Não é preciso acrescentar produtos ou reproduzir protocolos antigos para demonstrar empenho.",
    "practicalStep": "Descreva a atividade atual em termos práticos e marque o que ainda é provisório. Evite estimar necessidades nutricionais apenas por comparação com o passado.",
    "faq": [
      {
        "question": "Posso reutilizar um suplemento antigo?",
        "answer": "Não decida pela familiaridade com o produto. Informe o que está usando ou pretende usar e discuta necessidade, condições e segurança com profissional habilitado."
      },
      {
        "question": "É importante contar que o treino mudou?",
        "answer": "Sim. Mesmo sem detalhes técnicos completos, horários e frequência ajudam a contextualizar a avaliação. Você pode complementar informações depois conforme orientação."
      }
    ],
    "insightQuestion": "O plano antigo descreve a atividade que você faz hoje?",
    "insightAnswer": "Retomar não significa repetir exatamente o passado. Conferir diferenças evita que uma referência antiga determine decisões sem avaliação atual.",
    "insightStep": "Liste uma mudança no exercício e outra na organização das refeições."
  },
  "/nutricionista-online-em-vila-osternack-curitiba": {
    "heading": "Novas possibilidades de cozinha, mesmas preferências?",
    "scenario": "Considere um cenário hipotético: após mudar de casa, você passa a ter utensílios ou espaço diferentes. Algumas refeições conhecidas ficam mais difíceis, e outras passam a ser possíveis.",
    "explanation": "Preferências e estrutura precisam ser consideradas juntas. Não conseguir preparar algo no novo ambiente não significa ter deixado de gostar ou precisar excluir aquele alimento. A conversa pode explorar formas de preparo conhecidas, alternativas disponíveis e tarefas que você deseja aprender. Também importa dizer o que não está ao alcance agora, sem receber uma lista baseada em uma cozinha imaginária. A orientação pode ser discutida a partir dos recursos que realmente existem.",
    "practicalStep": "Faça uma lista curta de utensílios e condições que mudaram. Escolha uma refeição que gostaria de adaptar e explique o que ficou difícil.",
    "faq": [
      {
        "question": "Preciso comprar equipamentos para iniciar acompanhamento?",
        "answer": "Não existe essa exigência geral. Conte quais recursos possui e esclareça dúvidas antes de assumir gastos para executar uma orientação."
      },
      {
        "question": "E se outra pessoa decide o preparo em casa?",
        "answer": "Essa informação é importante. Você pode explicar como as decisões são compartilhadas sem atribuir culpa a quem cozinha ou exigir que todos sigam o mesmo plano."
      }
    ],
    "insightQuestion": "Sua preferência mudou ou foi a forma de preparar que deixou de caber?",
    "insightAnswer": "Separar essas questões ajuda a encontrar alternativas mais específicas. Nem toda dificuldade pede a retirada de um alimento.",
    "insightStep": "Conte como uma preparação era feita antes e o que mudou no ambiente."
  },
  "/nutricionista-online-em-bairro-novo-curitiba": {
    "heading": "Uma rotina nova não precisa começar com uma compra anunciada como solução",
    "scenario": "Em um exemplo hipotético, alguém muda de horário e passa a ver anúncios de produtos para facilitar a alimentação. A promessa de resolver tudo parece atraente em meio à adaptação.",
    "explanation": "Antes de comprar, vale identificar qual problema precisa ser resolvido. Falta de tempo para preparar, dificuldade de fazer pausas e dúvida sobre composição são questões distintas. Um produto pode não responder a todas elas, mesmo quando a publicidade sugere praticidade completa. Na consulta online, você pode discutir a função que espera daquele item e quais informações faltam para decidir, sem assumir que uma marca ou formato será indispensável.",
    "practicalStep": "Escreva a tarefa que você espera que o produto facilite. Depois confira se a embalagem informa algo concreto sobre essa tarefa ou apenas cria uma expectativa.",
    "faq": [
      {
        "question": "Prático significa adequado para mim?",
        "answer": "Praticidade é relevante, mas não substitui avaliação das necessidades e do contexto. Uma solução conveniente para outra pessoa pode não atender ao seu objetivo."
      },
      {
        "question": "Preciso abandonar um produto antes de perguntar?",
        "answer": "Você pode levar a dúvida sem fazer mudanças precipitadas. Informe seu uso habitual e evite iniciar produtos com promessas de tratamento por conta própria."
      }
    ],
    "insightQuestion": "Qual problema o anúncio promete resolver que você ainda não definiu?",
    "insightAnswer": "Nomear a dificuldade pode evitar uma compra baseada apenas em expectativa. A decisão fica mais clara quando o objetivo é concreto.",
    "insightStep": "Transforme a promessa do anúncio em uma pergunta que possa ser esclarecida."
  },
  "/nutricionista-online-em-vila-sandra-curitiba": {
    "heading": "No retorno, conte o que mudou antes de avaliar o que não foi feito",
    "scenario": "Imagine uma situação hipotética: entre consultas, surgem novos horários e responsabilidades. No retorno, a pessoa pensa em relatar apenas as orientações que não conseguiu seguir.",
    "explanation": "O contexto das dificuldades é uma informação essencial. Uma mudança de rotina pode explicar por que uma tarefa antes viável se tornou complicada. Separar orientação, circunstância e resultado ajuda a conversar com mais precisão. O retorno não precisa ser um julgamento sobre obediência; pode ser uma oportunidade de esclarecer o que ainda faz sentido e o que merece revisão. Não altere cuidados específicos por conta própria enquanto aguarda, especialmente se houver orientação clínica individual.",
    "practicalStep": "Organize o relato em três partes: o que mudou, qual orientação foi afetada e o que você tentou fazer. Não precisa apresentar um registro perfeito.",
    "faq": [
      {
        "question": "Devo esperar o retorno para mencionar uma mudança importante?",
        "answer": "Confirme com o profissional quais canais e situações permitem contato entre consultas. Não presuma disponibilidade contínua nem use o site para urgências."
      },
      {
        "question": "Uma orientação pode ser ajustada?",
        "answer": "A adequação pode ser reavaliada conforme novas informações. Explique a dificuldade concretamente para que a decisão não dependa apenas de uma impressão geral."
      }
    ],
    "insightQuestion": "O que aconteceu entre a orientação recebida e a tentativa de aplicá-la?",
    "insightAnswer": "Essa sequência pode revelar um obstáculo que não era previsível na consulta anterior. Contá-la ajuda a discutir ajustes possíveis.",
    "insightStep": "Leve um exemplo com começo, dificuldade e tentativa, sem transformar o relato em defesa."
  },
  "/nutricionista-online-em-almirante-tamandare": {
    "heading": "Autonomia começa por reconhecer dúvidas sobre o próprio ritmo",
    "scenario": "Num cenário hipotético, uma pessoa recebe conselhos diferentes sobre quando comer. Cada opinião parece estabelecer uma regra e ela perde confiança para descrever o que acontece no seu dia.",
    "explanation": "Autonomia não significa decidir tudo sem apoio. Pode começar por formular boas perguntas e reconhecer quais orientações foram feitas para sua situação. Fome percebida, oportunidade de pausa e condições de saúde precisam ser contextualizadas. Uma consulta online pode ajudar a organizar essas informações, sem impor uma resposta universal ou pedir que você ignore sinais persistentes. O objetivo é compreender a lógica de um planejamento, não depender de aprovação para cada decisão cotidiana.",
    "practicalStep": "Escolha dois conselhos contraditórios que recebeu e anote de onde vieram. Leve a dúvida sobre como avaliá-los, sem tentar seguir ambos.",
    "faq": [
      {
        "question": "Preciso ter todas as respostas antes da consulta?",
        "answer": "Não. Saber o que gera dúvida já permite iniciar uma conversa. O atendimento pode ajudar a organizar perguntas e identificar informações que faltam."
      },
      {
        "question": "Autonomia dispensa acompanhamento?",
        "answer": "Não necessariamente. Apoio profissional e participação nas decisões podem caminhar juntos. Você pode pedir explicações e discutir adaptações sem assumir responsabilidades clínicas sozinho."
      }
    ],
    "insightQuestion": "Qual orientação você repete sem compreender o motivo?",
    "insightAnswer": "Entender a finalidade de uma recomendação ajuda a contextualizá-la. Perguntar não é sinal de falta de compromisso com o cuidado.",
    "insightStep": "Escolha uma orientação e peça que sua finalidade seja explicada em linguagem clara."
  },
  "/nutricionista-online-em-araucaria": {
    "heading": "Recuperar confiança após muitas regras alimentares",
    "scenario": "Considere um exemplo hipotético: depois de diferentes dietas, você acumulou listas de alimentos permitidos e proibidos. Algumas regras se contradizem e tornam escolhas simples difíceis.",
    "explanation": "Organizar esse histórico pode ser um passo útil. Não é necessário defender uma tentativa nem escolher qual foi a mais correta antes da consulta. Vale contar o que cada experiência exigia e como isso afetava preparo, convivência e relação com a comida. O profissional pode avaliar necessidades atuais e ajudar a esclarecer dúvidas, sem prometer que existe um método perfeito. Se houver sofrimento importante com alimentação ou corpo, esse aspecto merece ser dito e pode exigir cuidado compartilhado.",
    "practicalStep": "Escolha uma regra que ainda interfere nas suas escolhas e anote o que você teme que aconteça se não a seguir. Compartilhe apenas o que desejar na consulta.",
    "faq": [
      {
        "question": "Preciso descartar todo o aprendizado anterior?",
        "answer": "Não automaticamente. Algumas habilidades podem continuar úteis. A avaliação pode distinguir aprendizado prático de restrições que precisam ser revistas."
      },
      {
        "question": "Como participar sem concordar com tudo de imediato?",
        "answer": "Você pode pedir esclarecimentos, explicar limitações e discutir alternativas. Compreender uma orientação é diferente de aceitá-la sem perguntas."
      }
    ],
    "insightQuestion": "Qual regra tornou uma escolha cotidiana mais difícil do que precisava?",
    "insightAnswer": "Identificar o efeito da regra ajuda a conversar sobre sua utilidade atual. Não é necessário resolver essa dúvida sozinho antes do atendimento.",
    "insightStep": "Leve uma situação em que duas orientações antigas entraram em conflito."
  },
  "/nutricionista-online-em-campo-largo": {
    "heading": "Entender a estratégia alimentar sem depender do prato de outra pessoa",
    "scenario": "Imagine uma situação hipotética: você acompanha pessoas que praticam atividades parecidas e tenta reproduzir as refeições que elas mostram. Quando a própria rotina é diferente, fica sem referência.",
    "explanation": "Uma prática esportiva semelhante não torna necessidades e condições iguais. Horários, preferências, saúde e organização do treinamento são partes da avaliação individual. Na consulta, pedir explicações sobre o planejamento pode ajudar a compreender decisões sem transformar o profissional em alguém que precisa autorizar cada refeição. Isso também permite reconhecer quando uma mudança relevante precisa ser comunicada, em vez de adaptar quantidades ou suplementos apenas por comparação com terceiros.",
    "practicalStep": "Escolha uma recomendação vista em outro perfil e formule a pergunta: quais informações sobre mim seriam necessárias para avaliar essa ideia?",
    "faq": [
      {
        "question": "Posso usar um cardápio de alguém com o mesmo objetivo?",
        "answer": "O objetivo em comum não substitui avaliação individual. Use a dúvida como assunto para conversa, não como prescrição pronta."
      },
      {
        "question": "Como saber o que devo comunicar ao nutricionista?",
        "answer": "Pergunte quais mudanças de rotina, atividade e saúde são importantes para o acompanhamento e quais canais devem ser usados para relatá-las."
      }
    ],
    "insightQuestion": "Você entende a função da orientação ou está apenas copiando a forma?",
    "insightAnswer": "Compreender o raciocínio ajuda a diferenciar uma ideia educativa de uma indicação pessoal. A aparência do prato não revela toda a avaliação.",
    "insightStep": "Peça explicação sobre uma escolha do seu planejamento que ainda parece arbitrária."
  },
  "/nutricionista-online-em-campo-magro": {
    "heading": "Participar das escolhas sem transformar preferência em culpa",
    "scenario": "Em um exemplo hipotético, você concorda com uma sugestão alimentar apenas para não parecer difícil. Depois evita a preparação porque não gosta do sabor ou da textura.",
    "explanation": "A participação na consulta inclui dizer o que não funciona. Preferências podem ser descritas de forma concreta, permitindo discutir possibilidades dentro das necessidades avaliadas. Também é útil separar aversão, falta de familiaridade e desconforto após comer, pois não são a mesma questão. O objetivo não é obrigar você a gostar de todos os alimentos nem prometer que qualquer preferência dispensa avaliação, mas construir uma conversa em que as decisões sejam compreendidas.",
    "practicalStep": "Escolha uma sugestão que você aceitou sem convicção e explique qual característica dificultou seu uso. Pense em como gostaria de comunicar isso com clareza.",
    "faq": [
      {
        "question": "Posso dizer que não gostei de uma orientação?",
        "answer": "Sim. Explique o que aconteceu na prática. Essa informação pode ajudar a discutir alternativas em vez de abandonar silenciosamente o acompanhamento."
      },
      {
        "question": "Preciso testar um alimento que me causa sintomas?",
        "answer": "Não use esta página como orientação para testes ou exposições. Relate os sintomas e siga a avaliação profissional adequada ao seu caso."
      }
    ],
    "insightQuestion": "O que você deixou de dizer para não parecer uma pessoa difícil?",
    "insightAnswer": "Uma dificuldade não compartilhada pode parecer falta de interesse quando é, na verdade, uma orientação pouco viável. Explicá-la ajuda o diálogo.",
    "insightStep": "Prepare uma frase simples que descreva a dificuldade sem se desculpar por tê-la."
  },
  "/nutricionista-online-em-colombo": {
    "heading": "Ler informações sem transformar o rótulo em uma sentença",
    "scenario": "Considere um caso hipotético: ao comparar produtos, você encontra informações que não entende e decide classificar tudo como bom ou ruim. A decisão fica mais confusa, não mais informada.",
    "explanation": "Um rótulo oferece dados sobre um produto, mas não descreve sozinho toda a alimentação ou suas necessidades. Aprender a formular perguntas pode ser mais útil do que buscar uma palavra que resolva a compra. Na consulta online, você pode escolher uma informação específica para esclarecer e discutir o contexto de uso. Não é necessário decorar termos técnicos nem transformar cada refeição em uma avaliação detalhada de embalagens.",
    "practicalStep": "Selecione uma informação que não compreendeu e leve a pergunta ao atendimento. Evite comparar produtos de usos diferentes como se fossem equivalentes.",
    "faq": [
      {
        "question": "Preciso entender todos os termos antes de escolher?",
        "answer": "Não é necessário dominar tudo de uma vez. Uma dúvida bem definida pode orientar o aprendizado e tornar as próximas decisões mais claras."
      },
      {
        "question": "Um único ingrediente determina toda a escolha?",
        "answer": "Uma decisão precisa de contexto. Se houver uma orientação específica relacionada à sua saúde, ela deve ser considerada; fora disso, evite conclusões universais a partir de um detalhe isolado."
      }
    ],
    "insightQuestion": "Qual informação do rótulo você gostaria de compreender, não apenas obedecer?",
    "insightAnswer": "A leitura pode ser uma habilidade construída aos poucos. Perguntar sobre um ponto concreto evita que termos desconhecidos virem proibições automáticas.",
    "insightStep": "Escolha uma linha da embalagem e descreva o que ela faz você imaginar."
  },
  "/nutricionista-online-em-fazenda-rio-grande": {
    "heading": "O retorno como espaço para aprender a ajustar decisões",
    "scenario": "Imagine uma situação hipotética: você consegue seguir uma orientação em alguns dias, mas fica inseguro quando os alimentos previstos não estão disponíveis. Aguarda a próxima consulta sem saber como explicar a dúvida.",
    "explanation": "O retorno pode ajudar a compreender a lógica das escolhas e quais alternativas precisam ser combinadas. Isso não significa alterar prescrições por conta própria ou esperar que toda situação tenha uma resposta instantânea. Relatar exemplos concretos permite discutir limites, possibilidades e sinais de que é necessário novo contato. Aprender a fazer perguntas sobre substituições e organização pode apoiar a autonomia sem transformar o acompanhamento em uma lista infinita de autorizações.",
    "practicalStep": "Leve uma situação em que faltou um item ou condição prevista. Conte quais opções existiam e qual informação você gostaria de ter entendido melhor.",
    "faq": [
      {
        "question": "Posso pedir explicações sobre alternativas?",
        "answer": "Sim. Perguntar como lidar com situações frequentes ajuda a compreender o planejamento. As possibilidades devem considerar as necessidades avaliadas no atendimento."
      },
      {
        "question": "Existe contato ilimitado entre consultas?",
        "answer": "Não presuma essa condição. Confirme diretamente quais canais, horários e tipos de dúvida fazem parte do serviço contratado."
      }
    ],
    "insightQuestion": "Qual decisão cotidiana continua parecendo impossível sem uma autorização?",
    "insightAnswer": "Essa insegurança pode indicar uma explicação que faltou, não incapacidade pessoal. Levar o exemplo permite discutir o raciocínio e os limites do plano.",
    "insightStep": "Escolha uma situação recorrente para pedir orientação sobre como pensar nela."
  },
  "/nutricionista-online-em-pinhais": {
    "heading": "Aprender uma preparação pode ampliar suas opções",
    "scenario": "Num exemplo hipotético, você depende de poucas refeições porque acredita que cozinhar exige habilidade avançada. Quando uma delas não está disponível, parece não haver alternativa.",
    "explanation": "Uma habilidade culinária pode ser aprendida em etapas, respeitando interesse, tempo e segurança. Identificar uma preparação simples que você gostaria de compreender pode ser um início mais concreto do que comprar muitos utensílios. A consulta nutricional pode discutir como essa habilidade se relaciona com a organização alimentar, sem exigir que você cozinhe tudo sozinho. Também é importante reconhecer limitações físicas, de espaço ou de acesso que precisam ser consideradas.",
    "practicalStep": "Escolha uma preparação que você já observa alguém fazer e diga qual etapa gostaria de aprender. Pense em quem ou qual recurso seguro poderia ajudar.",
    "faq": [
      {
        "question": "Preciso saber cozinhar para cuidar da alimentação?",
        "answer": "Não é uma condição obrigatória. Você pode explicar quais opções utiliza e discutir organização compatível com suas condições atuais."
      },
      {
        "question": "Uma habilidade pequena faz diferença na autonomia?",
        "answer": "Ela pode ampliar possibilidades práticas, mas não precisa virar uma meta imediata. O valor depende de ser útil e possível na sua rotina."
      }
    ],
    "insightQuestion": "Qual preparo você gostaria de entender antes de tentar fazer sozinho?",
    "insightAnswer": "Começar por uma dúvida específica pode tornar o aprendizado menos intimidante. Conhecer etapas é diferente de se cobrar uma refeição completa.",
    "insightStep": "Descreva uma habilidade que gostaria de desenvolver e o apoio de que precisaria."
  },
  "/nutricionista-online-em-quatro-barras": {
    "heading": "Expectativas claras ajudam a decidir se o acompanhamento faz sentido",
    "scenario": "Considere uma situação hipotética: você procura orientação esperando receber todas as respostas já no primeiro encontro. Ao pensar nas próprias dúvidas, percebe que algumas dependem de informações ainda não avaliadas.",
    "explanation": "Esclarecer expectativas pode melhorar a conversa inicial. Você pode perguntar o que é possível discutir na consulta, quais informações serão necessárias e como serão avaliadas mudanças ao longo do acompanhamento. Nem toda questão terá uma resposta imediata, e isso não deve ser preenchido com promessas de resultados. Autonomia inclui compreender os limites do serviço e decidir se a proposta atende às suas necessidades, sem pressão para contratar ou comparação com histórias de outras pessoas.",
    "practicalStep": "Escreva duas expectativas: uma sobre o que deseja aprender e outra sobre como gostaria de ser acompanhado. Leve ambas para esclarecer antes de decidir.",
    "faq": [
      {
        "question": "Posso perguntar o que o serviço não inclui?",
        "answer": "Sim. Conhecer limites, retornos, canais de contato e condições comerciais ajuda a tomar uma decisão informada, sem presumir benefícios que não foram combinados."
      },
      {
        "question": "O profissional pode garantir um resultado?",
        "answer": "Resultados individuais não devem ser tratados como promessa universal. Procure compreender a proposta de cuidado e como ela considera sua situação."
      }
    ],
    "insightQuestion": "Você sabe o que espera aprender, além do resultado que deseja?",
    "insightAnswer": "Uma expectativa de aprendizado pode tornar a conversa mais concreta. Ela ajuda a avaliar a proposta sem depender de garantias sobre o futuro.",
    "insightStep": "Formule uma pergunta que gostaria de conseguir responder melhor após o acompanhamento."
  },
  "/nutricionista-online-em-sao-jose-dos-pinhais": {
    "heading": "Sua primeira consulta também é um espaço para fazer perguntas",
    "scenario": "Imagine um caso hipotético: você prepara muitas informações para a consulta online, mas esquece de pensar no que deseja entender. Ao final, percebe que ainda tem dúvidas sobre o próprio atendimento.",
    "explanation": "Participar do encontro não significa apenas responder ao profissional. Perguntar sobre etapas, linguagem das orientações, formato de retorno e adequação da modalidade pode ajudar a compreender a proposta. Não é necessário conhecer termos técnicos para explicar uma dificuldade. Também vale dizer quando uma informação ficou confusa e combinar como revisar o que foi discutido, respeitando os canais do serviço. A decisão de seguir com acompanhamento deve ocorrer com informações claras, não por pressão.",
    "practicalStep": "Antes da consulta, escreva a pergunta que considera mais importante. Reserve um momento para confirmar se a resposta ficou compreensível para você.",
    "faq": [
      {
        "question": "Posso pedir que uma explicação seja repetida?",
        "answer": "Sim. Entender uma orientação faz parte da participação no cuidado. Você pode pedir exemplos ou linguagem mais simples sem precisar fingir que compreendeu."
      },
      {
        "question": "E se a modalidade online não atender minha necessidade?",
        "answer": "Converse sobre os limites identificados e possíveis encaminhamentos. Nem toda avaliação pode ser substituída por chamada online, e a adequação precisa ser discutida."
      }
    ],
    "insightQuestion": "Qual pergunta você gostaria de fazer, mas costuma deixar para depois?",
    "insightAnswer": "Preparar uma pergunta pode ajudar a ocupar seu espaço na consulta. O atendimento não precisa ser uma conversa de mão única.",
    "insightStep": "Anote a pergunta principal em um lugar acessível e confirme se foi esclarecida."
  }
};
