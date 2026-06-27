---
title: CircleCI
date: 2026-05-14
tags: [br,devops]

---

### CircleCI

O CircleCI é outra ferramenta de peso no mundo do CI/CD (Integração Contínua e Entrega Contínua), conhecida principalmente por sua velocidade e por ser uma das pioneiras no uso intensivo de containers para rodar pipelines.  
Se o Jenkins é o "clássico customizável" e o GitHub Actions é o "integrado", o CircleCI se posiciona como a escolha de alta performance para times que buscam eficiência máxima e facilidade de configuração.  

🟣 **Diferenciais do CircleCI**. 
O que faz o CircleCI se destacar entre as outras opções:  
**Configuração "Cloud-Native"**: Ele foi desenhado desde o início para rodar em containers. Toda a sua configuração é feita em um arquivo YAML (.circleci/config.yml).  

**Velocidade e Cache**: Ele possui um sistema de cache muito agressivo e eficiente, o que reduz drasticamente o tempo de build ao não precisar baixar dependências (como node_modules ou bibliotecas Python) do zero a cada execução.  

**Orbs (O equivalente às Actions)**: O CircleCI usa o conceito de Orbs, que são pacotes de configuração reutilizáveis. Existem Orbs oficiais para Docker, AWS, Kubernetes e Azure, que simplificam comandos complexos para uma única linha.  

**SSH Debugging**: Um dos recursos favoritos dos desenvolvedores: você pode acessar o container onde o build falhou via SSH para investigar o erro em tempo real.  

🟣 **Estrutura do Workflow**.  
A lógica do CircleCI é dividida em três partes:  
**Executors**: Você define o ambiente onde o trabalho vai rodar (uma imagem Docker específica, uma VM Linux, macOS ou até Windows).  
**Jobs**: As etapas do processo (ex: um job para rodar testes e outro para fazer o build da imagem Docker).

Workflows: Onde você orquestra os Jobs. Você pode dizer que o Job de "Deploy" só deve rodar se o Job de "Testes" passar.














