---
title: Azure Devops
date: 2026-05-13
tags: [devops]

---

### Azure DevOps
Já que estamos falando de Azure DevOps, saímos da "ferramenta isolada" e entramos no conceito de Plataforma de Ciclo de Vida de Aplicação (ALM).  
Se o Docker é o container e o Kubernetes é o orquestrador, o Azure DevOps é a "fábrica" completa onde tudo isso é construído, testado e despachado. **Ele é um conjunto de serviços integrados que cobrem desde o planejamento da tarefa até o monitoramento em produção**.  

---

Aqui estão os 5 pilares principais que compõem o Azure DevOps:  
🔵 **Azure Boards (O Cérebro do Planejamento)**. 
É onde o trabalho é organizado. Baseado em metodologias ágeis (Scrum/Kanban).  
**O que faz:** Gerencia backlogs, sprints, quadros Kanban e itens de trabalho (Work Items).  
**Ponto Chave:** Permite rastreabilidade total. Você consegue saber qual linha de código resolveu qual tarefa específica.  

🔵 **Azure Repos (O Cofre do Código)**  
É o sistema de controle de versão.  
**O que faz:** Oferece repositórios Git privados ilimitados.  
**Ponto Chave:** Suporta Pull Requests e políticas de branch (ex: o código só entra na branch principal se dois colegas revisarem e os testes passarem).  

🔵 **Azure Pipelines (O Coração do CI/CD)**. 
É aqui que o Docker e o Kubernetes entram no jogo.  
**CI (Integração Contínua):** Toda vez que você salva o código no Repo, o Pipeline cria a imagem Docker e roda testes automáticos.  
**CD (Entrega Contínua):** Se os testes passarem, o Pipeline envia essa imagem para o seu Registry (ACR, GHCR ou ECR) e atualiza o seu cluster Kubernetes.  

🔵 **Azure Artifacts (O Armazém de Pacotes)**. 
Diferente do Docker Registry (que guarda imagens), o Artifacts guarda pacotes de código (NuGet, npm, Maven, Python).  
**O que faz:** Permite que você compartilhe bibliotecas de código entre diferentes times da empresa de forma privada e segura.  

🔵 **Azure Test Plans (A Garantia de Qualidade)**. 
Focado em testes manuais e exploratórios.  
**O que faz:** Fornece ferramentas para que testadores humanos sigam roteiros de teste, capturem vídeos de erros e reportem bugs diretamente para o Azure Boards.  

---

### Como tudo se conecta? (Fluxo de Trabalho)
Imagine este cenário integrando o que você aprendeu até agora:  
→ Você recebe uma tarefa no Azure Boards.  
→ Você altera o código no seu computador e envia para o Azure Repos.  
→ O Azure Pipelines detecta a mudança, inicia um "build", cria uma Imagem Docker e faz o "Push" para um Container Registry.  
→ O mesmo Pipeline executa um comando no Kubernetes para atualizar o Deployment com a nova imagem.  
→ O sistema está atualizado para o usuário final sem intervenção manual.  







