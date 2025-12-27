const FOLDER_URL = "https://api.github.com/repos/lucas-moraes/articles/contents/md";

const fetchAndDecodeArticle = async (filename) => {
  const ARTICLE_URL = `${FOLDER_URL}/${String(filename)}.md`;

  try {
    const resp = await fetch(ARTICLE_URL);
    if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);

    const data = await resp.json();

    const base64String = data.content;

    const binaryString = atob(base64String);

    const markdownContent = decodeURIComponent(
      Array.prototype.map
        .call(binaryString, function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(""),
    );

    const htmlContent = marked.parse(markdownContent);

    window.appRoot.innerHTML = `
        <a href="" onclick="router()">Voltar para a Lista</a>
        <div class="article-content">${htmlContent}</div>
    `;
  } catch (error) {
    console.error(`Error fetching article ${filename}:`, error);
    return `<p style="color: red;">Erro ao carregar o artigo: ${filename}.</p>`;
  }
};
window.fetchAndDecodeArticle = fetchAndDecodeArticle;

export const listArticles = async () => {
  try {
    const resp = await fetch(FOLDER_URL);
    if (!resp.ok) throw new Error(`HTTP Error: ${resp.status}`);

    const files = await resp.json();

    const articleFiles = files.filter((item) => item.type === "file" && item.name.endsWith(".md"));

    const fileListHTML = articleFiles
      .map((file) => {
        const slug = file.name.replace(".md", "");
        const title = slug.replace(/-/g, " ");

        return `
              <div class="card" onclick="fetchAndDecodeArticle('${slug}')">
                  * ${title}
              </div>
         `;
      })
      .join("");

    return `
        <div class="articles-header">
          <h1>Articles</h1>
          <a href="https://lucas-moraes.github.io/">
            <span> 🏠 Home</span>
          </a>
        </div>
        <p>Selecione o artigo:</p>
        <div class="container">${fileListHTML}</div>
    `;
  } catch (error) {
    console.error("Error listing files:", error);
    return `<p style="color: red;">Não foi possível listar os artigos.</p>`;
  }
};
