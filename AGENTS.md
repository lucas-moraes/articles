# AGENTS.md - Guidelines for Agentic Coding

This is a simple vanilla JavaScript static site. There is no build system, testing framework, or linting configuration.

## Project Structure

```
articles/
├── index.html      # Main HTML entry point
├── css/
│   └── styles.css  # Global styles
├── js/
│   ├── global.js   # Core utilities (fetch, article rendering)
│   └── index.js    # Router initialization
├── md/             # Markdown articles (fetched from GitHub API)
└── .github/
    └── workflows/
        └── static.yml  # GitHub Pages deployment
```

## Commands

### No build system
This is a static site - no build commands available. Open `index.html` directly in a browser or serve with any static file server:

```bash
# Using Python
python3 -m http.server 8000

# Using npx serve
npx serve .
```

### Running a single test
No tests exist in this project.

### Linting/formatting
No linting or formatting tools configured.

### Deployment
The site auto-deploys to GitHub Pages via `.github/workflows/static.yml` on push to main.

## Code Style Guidelines

### General Principles
- Keep code simple and readable
- Avoid unnecessary dependencies
- Use vanilla JavaScript (no frameworks)

### JavaScript
- Use ES6+ features (const/let, arrow functions, async/await)
- Use semicolons consistently
- Use double quotes for strings
- Use camelCase for variable and function names
- Use PascalCase for class-like structures (if any)
- Always use strict mode or modules (use `export`/`import`)
- Prefer async/await over raw promises
- Handle errors with try/catch blocks

### CSS
- Use meaningful class names (lowercase, kebab-case)
- Use CSS custom properties for colors and reusable values
- Keep selectors simple and specific
- Use flexbox/grid for layout
- Include fallbacks for older browsers when using modern properties

### HTML
- Use semantic HTML5 elements (header, nav, main, article, footer)
- Include appropriate meta tags
- Use lowercase for tags and attributes
- Quote attribute values

### Naming Conventions
- Files: lowercase, kebab-case (e.g., `global.js`, `styles.css`)
- Functions/variables: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: kebab-case

### Error Handling
- Always use try/catch for async operations
- Log errors to console with descriptive messages
- Show user-friendly error messages in the UI
- Never expose sensitive information in error messages

### Git Conventions
- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`
- Keep commits atomic and focused
- Write descriptive commit messages

### Browser Compatibility
- Target modern browsers (last 2 versions)
- Avoid polyfills unless specifically needed

## Dependencies

This project intentionally has no npm dependencies. External libraries are loaded via CDN in HTML:
- `marked` - Markdown parsing (loaded in index.html)

## Important Notes

1. **No local build required** - Just edit the source files directly
2. **JavaScript modules** - Use ES6 modules with `type="module"` in script tags
3. **API integration** - Articles are fetched from a GitHub repository via the GitHub API (configured in `js/global.js`)
4. **CORS considerations** - The GitHub API may have rate limits; testing should be done locally or with proper authentication