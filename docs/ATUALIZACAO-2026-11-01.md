# Atualização técnica e editorial — 1 de novembro de 2026

Base: `supremapix/nutricionistajunior-digital`, `main` em `133d4f47baa40240f1780ba688f57d1ec3e9d1ef`.
Escopo: erros, conteúdo e descoberta; preservação de identidade visual. Alterações locais, sem push/publicação.

## Evidência antes das correções
- 54 URLs deduplicadas do inventário antigo consultadas: 25 retornavam 200, mas sem H1/conteúdo no HTML; 29 retornavam 404 (18 localidades metropolitanas e 11 artigos).
- O suposto prerender só gerava metadados, não corpo React.
- Schema classificava nutricionista como Physician; coordenadas de centro de Curitiba e horário contínuo divergiam da informação publicada.
- Formulário descartava nome, objetivo e mensagem. Botões de navegação não ofereciam href rastreável.
- URLs de localidades não correspondiam às chaves dos dados. Slugs inventados criavam conteúdo por fallback.
- Site listava 10 bairros de Curitiba e 18 localidades de 9 outros municípios. Faltavam 65 dos 75 bairros oficiais no inventário.

## Alterações
- HTML real de cada rota, sitemap sincronizado, aliases, 404 noindex, metadados únicos e atualização correta na navegação.
- Schema Person/LocalBusiness, horários separados; sem coordenadas, preço ou rua não confirmados.
- 55 blocos educativos distintos, 11 resumos de artigos específicos; fontes Ministério da Saúde, OMS e Anvisa. Sem dados de volume de busca nem promessa de inclusão em respostas de IA.
- Retirada de garantias absolutas de saúde/resultados e suporte diário não confirmado.
- Guia pesquisável de 75 bairros oficiais, 6 referências populares documentadas e localidades metropolitanas existentes. Não criadas 65 páginas repetitivas nem falsas filiais.
- Formulário prepara mensagem para revisão/envio pelo próprio visitante no WhatsApp. Objetivo opcional, aviso para não informar dados clínicos. Analytics não recebe texto/nome/objetivo.
- Cache offline restrito a arquivos públicos da origem; sem assets inexistentes ou substituição de URL profunda pela home. Manifest com escopo definido.

## Fatos e limites
- Nome, telefone, CRN e qualificações foram preservados como dados declarados no site. Não houve verificação de registro ativo ou documentos profissionais.
- O próprio código original informa endereço presencial sob confirmação; mantida orientação para confirmar antes de deslocamento. Não afirmar rua como local confirmado em schema.
- Depoimentos e fotos preexistentes não tiveram autenticidade/autorização documental verificada nem foram ampliados.
- Fanny é bairro oficial; Vila Fanny também aparece em referência municipal associada a Lindóia, portanto não se afirma equivalência territorial.
- Tamboado não foi corroborado. URL antiga preservada com texto municipal de Almirante Tamandaré e aviso de confirmação; não substituída arbitrariamente por Vila Tamboara.
- Publicação, indexação/ranking e comportamento em navegador real não são comprovados pelos testes locais.

## Verificação reproduzível
- `npm run lint`
- `npm run build`
- `npm run test:static`
- `npm run test:client` (JSDOM; IntersectionObserver simulado, não teste visual)
- `node --check public/sw.js`
- `git diff --check`

Auditoria HTTP original e classificação geográfica com fontes estão em `docs/audits/`.

## Resultado final local

Lint, build, test:static, test:client e diff-check passaram após os últimos ajustes. Build gera 55 páginas indexáveis com corpo completo mais404 e aliases. Auditoria de18assets externos retornou HTTP200 em todos. Aviso não bloqueante: bundleJS acima de500kB. Nenhuma publicação executada.

## Janelas contextuais — complemento autorizado

Cada uma das 55 páginas ganha um botão voluntário “Explorar esta pergunta com calma”. O diálogo nativo apresenta pergunta, contexto educativo e próximo passo específicos daquela página, com fonte quando aplicável. Não há abertura automática, contagem regressiva, alarmismo, diagnóstico, promessa de resultado ou formulário de saúde. Contato é opcional; na política de privacidade, o CTA é esclarecimento por e-mail.

A janela tem título e descrição acessíveis, botão Fechar, fechamento por Escape, foco inicial no fechamento e retorno ao botão acionador. Navegar para outra página fecha a janela. `npm run test:dialog` verifica a integração em JSDOM com showModal/close simulados; isso não substitui validação do foco modal e top-layer num navegador real. Não foi publicada.

Validação do complemento: lint, build, test:static, test:client e test:dialog passaram; 55 janelas únicas sem abertura automática. Testes de cancelamento e retorno de foco são de integração JSDOM, não teste visual.
