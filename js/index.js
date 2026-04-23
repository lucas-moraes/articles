import { listArticles } from "./global.js";

const appRoot = document.getElementById("root");
window.appRoot = appRoot;

const router = async () => {
  const contentHTML = await listArticles();
  appRoot.innerHTML = contentHTML;
};
window.router = router;

document.addEventListener("DOMContentLoaded", router);
window.addEventListener("popstate", router);
