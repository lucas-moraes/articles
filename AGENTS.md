# AGENTS.md

Static vanilla JS site. Articles are served from a separate GitHub repo.

## Project Structure

```
articles/
├── index.html      # Entry point (loads marked via CDN, js/index.js as module)
├── css/styles.css
├── js/
│   ├── global.js   # Article fetching via GitHub API, renders markdown→HTML
│   └── index.js    # Router (hashless SPA via popstate)
└── .github/workflows/static.yml  # CI: minifies, creates dist/, deploys to GitHub Pages
```

## How it works

- `js/global.js` hardcodes `FOLDER_URL` pointing to `lucas-moraes/articles` repo on GitHub API
- Articles live in that repo's `md/` folder, fetched as base64-encoded content
- Local `md/` folder is empty/unused
- Router uses `popstate` (no hash), relies on 404.html fallback for direct article URLs

## Commands

No build needed for local dev. Serve statically:
```bash
python3 -m http.server 8000
# or
npx serve .
```

## CI / Deployment

Push to `main` triggers GitHub Pages deploy via `.github/workflows/static.yml`:
1. Copies all files to `dist/`
2. Minifies CSS (`css-minify`) and JS (`terser`)
3. Rewrites `index.html` refs from `*.css` → `*.min.css` and `./*.js` → `./*.min.js`
4. Creates `dist/404.html` for SPA fallback (reads `sessionStorage.redirect` and redirects to `/`)
5. Deploys to GitHub Pages

## Key quirks

- **No local build** but CI builds a minified `dist/` — don't edit `dist/` directly
- Articles fetched from remote GitHub API, not local files
- 404.html redirect uses `sessionStorage`, not URL parameters
- `marked` loaded from CDN in `index.html`, not an npm dep
