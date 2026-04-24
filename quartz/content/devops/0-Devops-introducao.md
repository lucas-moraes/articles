---
title: Devops-introducao
date: 2026-04-24
tags: [devops]
---

### DevOps

O termo DevOps surge da combinação das palavras "Desenvolvimento" (Development) e "Operações" (Operations).  
Mais do que uma ferramenta ou um cargo específico, **DevOps é uma cultura e uma filosofia de trabalho** que visa integrar as equipes que criam o software com as equipes que o mantêm rodando.  
Antigamente, esses dois grupos trabalhavam em "silos": os desenvolvedores escreviam o código e o "jogavam por cima do muro" para a equipe de infraestrutura se virar com a instalação e os bugs. O DevOps derruba esse muro.  

### Pilares de DevOps
Para entender como ele funciona na prática, imagine um ciclo infinito focado em agilidade e qualidade:  
⇢ **Integração Contínua (CI):** Os desenvolvedores enviam mudanças de código com frequência para um repositório central. Testes automáticos rodam na hora para garantir que nada quebrou.  
⇢ **Entrega Contínua (CD):** O código validado é preparado automaticamente para o lançamento. Isso permite que novas funções cheguem ao usuário final em questão de minutos, não meses.  
⇢ **Monitoramento e Feedback:** Após o lançamento, o sistema é monitorado em tempo real. Se algo falhar, a equipe descobre rápido e já planeja a correção, reiniciando o ciclo.  
⇢ **Automação:** Se uma tarefa é repetitiva (como configurar um servidor ou rodar testes), o DevOps prega que ela deve ser automatizada através de scripts e ferramentas.  

### Ferramentas

Como o DevOps cobre todo o ciclo de vida do software, as ferramentas são divididas por "etapas". Imagine que é uma caixa de ferramentas para uma linha de montagem automatizada.  

✯ **Planejamento e Colaboração**.  
Antes de codar, a equipe precisa se organizar.  
⇢ **Jira/Trello/Azure:** O padrão da indústria para gerenciar tarefas e metodologias ágeis (Scrum/Kanban).  
⇢ **Slack / Microsoft Teams:** Para comunicação rápida e alertas automáticos do sistema.  
⇢ **Confluence:** Para documentar processos e arquiteturas.  

✯ **Controle de Versão (O coração de tudo)**.  
Onde o código "mora" e é compartilhado.  
⇢ **Git:** A ferramenta de controle de versão (o motor).  
⇢ **GitHub / GitLab / Bitbucket:** As plataformas que hospedam os repositórios Git e facilitam a revisão de código (Pull Requests).

✯ **CI/CD (Integração e Entrega Contínua)**. 
As ferramentas que pegam o código, testam e levam para o "ar".  
⇢ **Jenkins:** O "vovô" das ferramentas, extremamente flexível e baseado em plugins.  
⇢ **GitHub Actions:** Muito popular hoje por já estar integrado ao repositório.  
⇢ **CircleCI / Azure DevOps:** Opções robustas para pipelines automatizados.  

✯ **Containerização e Orquestração**. 
Para garantir que o software rode do mesmo jeito no seu PC e no servidor.  
⇢ **[[Docker]]:** Cria o "container" (o pacote com tudo que o app precisa).  
⇢ **[[Kubernetes]] (K8s):** O maestro que gerencia centenas ou milhares de containers ao mesmo tempo.  

✯ **Infraestrutura como Código (IaC)**  
Em vez de clicar em botões no painel da nuvem, você escreve um arquivo de texto que cria os servidores para você.  
⇢ **Terraform:** A ferramenta mais usada para criar infraestrutura em qualquer nuvem.  
⇢ **Ansible:** Focado em configurar os softwares e sistemas dentro dos servidores já criados.  

✯ **Monitoramento e Observabilidade**. 
Para saber se o site caiu ou se está lento antes que o cliente reclame.  
⇢ **Grafana / Prometheus:** Para métricas e gráficos em tempo real.  
⇢ **ELK Stack (Elasticsearch, Logstash, Kibana):** Para analisar logs (o "histórico" do que acontece no sistema).  
⇢ **New Relic / Datadog:** Monitoramento completo de performance (APM).  

[[Docker]] [[Kubernetes]]