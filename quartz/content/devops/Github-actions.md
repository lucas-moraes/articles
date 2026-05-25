---
title: Github Actions
date: 2026-05-14
tags: [devops]

---

### Github Actions
É o motor de automação integrado diretamente ao [[GitHub]]. Enquanto o Azure DevOps é uma plataforma completa e corporativa, o GitHub Actions foca em workflows baseados em eventos (como um "push" de código ou a abertura de um "Pull Request").  

---

🧩 **Os Componentes do GitHub Actions**. 
Para entender como ele funciona, você precisa conhecer a hierarquia dos arquivos YAML que ficam na pasta .github/workflows/:  

→ **Workflows:** É o arquivo configurável (YAML) que contém o seu processo automatizado.  
→ **Events:** É o "gatilho" que dispara o workflow. Ex: on: push ou on: pull_request.  
→ **Jobs:** Um workflow é composto por um ou mais Jobs. Eles rodam em paralelo, a menos que você diga que um depende do outro.  
→ **Steps:** Dentro de um Job, você define os passos sequenciais. Cada passo pode rodar um comando de terminal ou uma Action.  
→ **Actions:** São blocos reutilizáveis de código (como se fossem "plugins"). Existem milhares prontas no GitHub Marketplace para fazer login na Azure, buildar imagens Docker ou configurar o Kubernetes.  
→ **Runners:** É o servidor onde o código roda. O GitHub oferece máquinas gratuitas (GitHub-hosted), mas você pode usar seu próprio servidor (Self-hosted).  

---



