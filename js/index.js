const FOLDER_URL = "https://api.github.com/repos/lucas-moraes/articles/contents/md";
const appRoot = document.getElementById("root");

async function listArticles() {
  try {
    const resp = await fetch(FOLDER_URL);
    if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);

    const files = await resp.json();

    const articleFiles = files.filter((item) => item.type === "file" && item.name.endsWith(".md"));

    const fileListHTML = articleFiles
      .map((file) => {
        const slug = file.name.replace(".md", "");

        return `
              <li>
                <a href="/articles/${slug}" onclick="route(event)">
                  ${file.name}
                </a>
              </li>
         `;
      })
      .join("");

    return `
        <h1>Articles</h1>
        <p>Select the article:</p>
        <h2>Artigos Disponíveis</h2>
        <ul>${fileListHTML}</ul>
    `;
  } catch (error) {
    console.error("Error listing files:", error);
    return `<p style="color: red;">Não foi possível listar os artigos.</p>`;
  }
}

async function fetchAndDecodeArticle(filename) {
  const ARTICLE_URL = `${FOLDER_URL}/${filename}.md`;

  try {
    const resp = await fetch(ARTICLE_URL);
    if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);

    const data = await resp.json();
    const decodedContent = atob(data.content);

    return `
        <a href="/articles" onclick="route(event)">Voltar para a Lista</a>
        <h2>${filename}</h2>
        <pre>${decodedContent}</pre>
    `;
  } catch (error) {
    console.error(`Error fetching article ${filename}:`, error);
    return `<p style="color: red;">Erro ao carregar o artigo: ${filename}.</p>`;
  }
}

const routes = {
  "/": listArticles,
  "/articles": listArticles,
  404: () => `<h1>404</h1><p>Página não encontrada.</p>`,
};

const router = async () => {
  const path = window.location.pathname;

  if (path.startsWith("/articles/")) {
    const slug = path.replace("/articles/", "");

    if (slug) {
      appRoot.innerHTML = "<h2>Carregando Artigo...</h2>";
      const contentHTML = await fetchAndDecodeArticle(slug);
      appRoot.innerHTML = contentHTML;
      return;
    }
  }

  const normalizedPath = path.endsWith("/") && path.length > 1 ? path.slice(0, -1) : path;
  const routeHandler = routes[normalizedPath];

  if (routeHandler) {
    appRoot.innerHTML = "<h2>Carregando Página...</h2>";
    const contentHTML = await routeHandler();
    appRoot.innerHTML = contentHTML;
  } else {
    appRoot.innerHTML = routes["404"]();
  }
};

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  router();
};

window.route = route;

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);
