# Expansão RMC — bairros urbanos documentados

## Lote 1
95 novos guias: Araucária (16), Pinhais (13), Fazenda Rio Grande (8), Colombo (20), São José dos Pinhais (38). Mantém os 136 destinos publicados anteriormente; total esperado 231 páginas canônicas.

Os nomes são referências urbanas documentadas em fontes municipais, não uma afirmação de limites legais atualizados, presença de consultório ou disponibilidade confirmada. Os 10 destinos já existentes encontrados no inventário são preservados, não recriados.

Santa Maria e Santarém, em Fazenda Rio Grande, são referências populares incorporadas como seções de Estados e Nações; não recebem páginas canônicas duplicadas.

Cada novo guia contém texto educativo próprio, exemplo explicitamente hipotético, exercício de reflexão e duas perguntas respondidas. Não são descritos hábitos presumidos dos moradores. As informações nutricionais são gerais e não substituem avaliação individual.

## Descoberta e validação
Hub pesquisável → município → bairro → município. Breadcrumb visível e dados estruturados. Fonte municipal individual. Sitemap derivado do catálogo, preservação automatizada das 136 URLs publicadas, teste de corpo renderizado/FAQ/janela por página e testes de rotas inválidas.

## Limites do inventário
A pesquisa inicial reuniu 457 referências de tipos diferentes. Após revisão conservadora, 166 novos bairros urbanos são candidatos à expansão; 279 referências ficam excluídas ou adiadas por tipo rural/distrital/institucional, ambiguidade, duplicidade ou evidência insuficiente. Isso não constitui inventário exaustivo de todos os bairros da RMC.

## Lote 2
71 novos bairros urbanos documentados, distribuídos em Campina Grande do Sul (35), Lapa (12), Rio Negro (10), Quitandinha (8), Contenda (5) e Campo do Tenente (1), mais 19 guias municipais de consulta online. Com os nove anteriores, o hub passa a listar os 28 municípios da RMC além de Curitiba. Isso não indica que todos os bairros desses municípios estejam inventariados.

Resultado combinado: 166 novos guias urbanos verificados + 19 guias municipais; site com 321 páginas canônicas. Os nomes classificados de forma ambígua, rurais, distritais ou institucionais não recebem uma página de bairro apenas para ampliar cobertura.

Os 19 textos municipais abordam decisões práticas sobre atendimento online (preparação, privacidade, acessibilidade, organização e avaliação das condições do serviço). Nos textos sobre embalagem e conservação, referência complementar da Anvisa RDC 727/2022; não são prescritos tempos ou temperaturas universais.

O verificador estático libera cada janela JSDOM e cede um ciclo ao event loop entre páginas, permitindo que microtarefas pendentes sejam liberadas em catálogos maiores; isso evita acumulação de memória no teste sem reduzir sua cobertura. A validação interativa continua sendo JSDOM, não inspeção visual em navegador real. O bundle de produção ainda recebe o aviso de tamanho do Vite (aproximadamente 343 kB gzip de JavaScript); não foi feita medição de Core Web Vitals nesta entrega.
