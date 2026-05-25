---
title: Jenkins
date: 2026-05-14
tags: [devops]

---

### Jenkins
O Jenkins é o veterano e, ainda hoje, o servidor de automação de código aberto mais utilizado no mundo. Se o GitHub Actions e o Azure Pipelines são soluções "as-a-service" (onde você apenas usa a plataforma), o Jenkins é um software que você instala, gerencia e customiza totalmente.  

O Jenkins funciona baseado em **Jobs** (Tarefas) e **Pipelines**. Antigamente, tudo era configurado via interface visual, mas hoje o padrão é o **Pipeline as Code**.  

🟢 **O Jenkinsfile**. 
É o arquivo (geralmente escrito em uma linguagem chamada Groovy) que descreve todo o seu processo de CI/CD.  
**Declarative Pipeline**: Uma forma mais estruturada e moderna de escrever o fluxo.  
**Scripted Pipeline**: Uma forma mais "livre", que permite lógica de programação complexa.  

🟢 **Plugins (A Grande Força)**. 
O Jenkins tem uma comunidade gigantesca que criou mais de 1.800 plugins. Existe um plugin para quase tudo:  
→ Integrar com Docker para construir imagens.  
→ Integrar com Kubernetes para gerenciar o deploy.  
→ Conectar com o Azure DevOps ou GitHub.  

### Arquitetura: Master vs. Agents
Diferente das ferramentas que rodam na nuvem, o Jenkins costuma seguir este modelo:  
**Controller (Master)**: O servidor central que gerencia a interface, os plugins e agenda os trabalhos.  
**Agents (Nodes)**: Máquinas separadas que realmente executam os comandos pesados (build, testes).  

**Dica Pro: No mundo moderno, os Agents do Jenkins costumam ser Pods de Kubernetes que nascem apenas para rodar o build e morrem logo depois, economizando recursos.**

|Recurso|Jenkins|GitHub Actions / Azure DevOps|
|:---|:---|:---|
|Hospedagem|Você instala e mantém (Self-hosted)|A nuvem gerencia para você (SaaS)|
|Custo|Software grátis, mas você paga o servidor|Pago por uso ou gratuito com limites|
|Flexibilidade|Infinita. Você pode customizar tudo|Alta, mas dentro dos limites da plataforma|
|Complexidade|Alta (exige manutenção e atualizações)|Baixa (foco apenas no workflow).|














