# AGENTS.md

Static site built with Quartz 4.x.

## Project Structure

```
articles/
├── quartz/                  # Quartz 4.x source
│   ├── content/            # Markdown content (source)
│   │   ├── index.md       # Home page
│   │   ├── welcome.md
│   │   ├── nodejs-como-funciona.md
│   │   └── dev-ops.md
│   ├── quartz.config.ts    # Quartz configuration
│   └── public/         # Build output (generated)
└── .github/workflows/deploy.yml  # CI: builds Quartz, deploys to GitHub Pages
```

## How it works

- Quartz generates static HTML from markdown in `quartz/content/`
- Build output in `quartz/public/`
- Deployed to GitHub Pages at `lucas-moraes.github.io/articles/`

## Commands

```bash
# Local dev
cd quartz && npx quartz serve

# Build
cd quartz && npx quartz build
```

## CI / Deployment

Push to `main` triggers `.github/workflows/deploy.yml`:
1. Install npm dependencies
2. Build with `npx quartz build`
3. Deploy to GitHub Pages (gh-pages branch)

## Key quirks

- Workflow file must be in `.github/workflows/` (root), not in subfolders
- Content files need frontmatter (title, date, tags)
- `baseUrl` is configured in `quartz/quartz.config.ts`