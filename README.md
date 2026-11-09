# Portfólio Pessoal — Nycolas Robert Batista Ramos (CP3)

## Descrição
Portfólio acadêmico com cinco páginas interligadas: início, currículo, formulário, multimídia e gráficos. O projeto evolui o CP2 com versionamento, publicação web e interatividade em JavaScript.

## Tecnologias
- HTML5 semântico e CSS3 responsivo
- JavaScript (DOM e eventos)
- `localStorage` para persistir a preferência de tema
- Canvas e SVG

## Estrutura
- `index.html` — página inicial
- `curriculo.html` — currículo
- `formulario.html` — formulário de contato
- `multimidia.html` — recursos multimídia
- `graficos.html` — gráficos e desenhos
- `css/estilos.css` — estilos externos
- `js/scripts.js` — funcionalidades compartilhadas
- `img/` e `media/` — arquivos de mídia

## Feature com localStorage: tema claro/escuro
O botão **Tema claro/Tema escuro** aparece em todas as páginas. Ao alternar, a escolha é gravada no navegador com a chave `portfolio-tema` e o valor `claro` ou `escuro`. Ao abrir outra página ou recarregar o site, o JavaScript recupera a preferência e aplica o mesmo tema.

### Como testar
1. Abra qualquer página do site em um navegador.
2. Clique em **Tema claro** para alternar para o tema claro.
3. Recarregue a página e navegue entre as cinco páginas: a preferência deve continuar aplicada.
4. Abra DevTools (F12) → **Application** → **Local Storage** → domínio do site.
5. Confira a chave `portfolio-tema` e seu valor (`claro` ou `escuro`).

### Campos persistidos
- Chave: `portfolio-tema`
- Valor: `claro` ou `escuro`

Nenhum dado pessoal do formulário é armazenado no `localStorage`. O formulário valida os campos e apresenta feedback visível; como o projeto não possui backend, a mensagem informa que a validação ocorreu, mas não simula envio real.

## Formulário
O formulário utiliza validação dos campos obrigatórios e do formato de e-mail pelo navegador. O JavaScript exibe feedback de sucesso ou orientação de correção diretamente na página.

## Versionamento e publicação
O repositório deve ser publicado no GitHub e o site pode ser implantado pelo GitHub Pages, Netlify ou Vercel. Configure HTTPS e teste as cinco páginas em uma janela anônima.

### Sugestão de histórico de commits
Faça commits por etapa, com mensagens descritivas, por exemplo:
- `Atualizar estrutura e identificação do projeto para CP3`
- `Adicionar alternância de tema persistida no localStorage`
- `Adicionar validação e feedback ao formulário`
- `Documentar feature e instruções de publicação`

Antes da entrega, crie a tag `cp3-entrega` e envie commits e tag ao GitHub. Não inclua a pasta `.git` no ZIP de entrega.

## Autor
Nycolas Robert Batista Ramos
