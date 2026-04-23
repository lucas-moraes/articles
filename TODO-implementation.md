# TODO — Implementação Quartz 4.x

## Feature 1: Setup Quartz 4.x (clone personalizado)
- [ ] Verificar Node v22+ (`node -v`)
- [ ] `git clone https://github.com/jackyzha0/quartz.git` no repo `lucas-moraes/articles`
- [ ] `npm i` + `npx quartz create`
- [ ] Configurar `quartz.config.ts`:
  - `baseUrl: "lucas-moraes.github.io/articles"`
  - `pageTitle: "Articles"`
  - `enableSPA: true`

## Feature 2: Migração de Conteúdo
- [ ] Limpar `content/` default do Quartz
- [ ] Mover `.md` de `md/` para `content/`
- [ ] Adicionar frontmatter (title, date, tags) em cada artigo

## Feature 3: Workflow CI
- [ ] Criar `.github/workflows/deploy.yml` com `npx quartz build`

## Feature 4: Config GitHub Pages
- [ ] Configurar Pages para servir de `gh-pages` branch

## Feature 5: Cleanup
- [ ] Remover/desativar repo `vanilla/articles`

## Feature 6: Validação
- [ ] Testar build local + deploy