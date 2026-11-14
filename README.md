# Portfólio Pessoal — CP4 | Nycolas Robert Batista Ramos

## Sobre o projeto
Site pessoal desenvolvido ao longo dos quatro checkpoints de Desenvolvimento Front-end para Web. A versão final preserva as cinco páginas e integra responsividade, JavaScript com persistência local, Bootstrap e melhorias de acessibilidade.

## Páginas
- `index.html` — apresentação, foto e interesses.
- `curriculo.html` — formação, experiência, habilidades e tabela.
- `formulario.html` — formulário com validação nativa + feedback escrito na tela, sem envio para servidor.
- `multimidia.html` — áudio local e mapa incorporado.
- `graficos.html` — Canvas desenhado por JavaScript e SVG estilizado.

## Evolução CP1 → CP4
- **CP1:** HTML semântico, cinco páginas, navegação, formulário, áudio, `iframe`, Canvas, SVG e CSS externo.
- **CP2:** CSS mobile-first, Flexbox no menu e nos cards, Grid no currículo, media queries `min-width`, imagens fluidas.
- **CP3:** versionamento Git/GitHub, publicação planejada via GitHub Pages, JavaScript com tema persistido em `localStorage`, validação e mensagens do formulário.
- **CP4:** Bootstrap 5.3.8 carregado via CDN, classes utilitárias no HTML, foco visível, link para pular ao conteúdo, melhoria de descrições e layout do cabeçalho.

## Bootstrap no CP4
O CSS do Bootstrap 5.3.8 é carregado **antes** de `css/estilos.css`, para preservar as cores e o visual já construídos. Exemplos de classes aplicadas:
- `rounded-3` — cantos arredondados dos cards nas páginas.
- `gap-3` — espaçamento entre cards e entre botões.
- `d-flex` e `flex-wrap` — alinhamento e quebra dos botões no formulário.
- `img-fluid` — foto da página inicial adaptável.
- `table-responsive` — tabela do currículo com rolagem horizontal dentro do seu próprio contêiner.

## JavaScript: como demonstrar a persistência
1. Abra o site **publicado**.
2. Clique em **Tema claro** ou **Tema escuro** no cabeçalho.
3. Abra `F12` → **Application** → **Local Storage** → endereço do site.
4. Veja a chave `portfolio-tema`, com valor `claro` ou `escuro`.
5. Atualize com `F5` e navegue para outra página: o tema continua igual.

**Observação:** esse dado fica salvo no navegador do visitante. A navegação anônima usa um armazenamento separado.

## Validação do formulário
Os campos possuem `required`, tipos apropriados e rótulos. O JavaScript utiliza `checkValidity()` e `reportValidity()` e exibe um feedback na página para erros e preenchimento correto. Nenhuma mensagem é enviada para um servidor e nenhum dado pessoal do formulário é persistido.

## Acessibilidade
- `alt` informativo na foto, `title` no `iframe`, descrição no Canvas e nome acessível no SVG.
- Contraste entre texto e fundo definido pelas variáveis CSS para temas claro e escuro.
- Navegação pelo teclado, estados `:focus-visible` e link **Pular para o conteúdo principal**.
- Área mínima de 44px para os principais controles.
- Animações reduzidas para quem solicita menos movimento.

## Publicação e entrega
1. Abra esta pasta em um repositório Git e garanta que a branch usada pelo GitHub Pages contém os arquivos.
2. Faça o commit/push da versão final **antes** de criar a tag.
3. Crie a tag `cp4-entrega` no commit final e envie-a ao GitHub.
4. Confira a aba **Settings → Pages** e publique a branch correta na pasta `/ (root)`.
5. Abra a URL publicada usando HTTPS em janela anônima e teste as cinco páginas.
6. Grave o vídeo obrigatório de **1min30s a 2min30s** mostrando o site no endereço público, a feature persistente e a evolução CP1→CP4.

Há um passo a passo em `GUIA_ENTREGA_CP4.md` e um roteiro cronometrado em `ROTEIRO_VIDEO_CP4.md`.

## Autor do código original
Nycolas Robert Batista Ramos. Revise a identificação pessoal do site e dos arquivos para garantir que corresponde ao aluno que entregará o trabalho.
