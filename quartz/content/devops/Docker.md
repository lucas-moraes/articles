---
title: Docker
date: 2026-04-24
tags: [devops]
---

## Docker
[[0-Devops-introducao]]

Antes do Docker, tínhamos o clássico problema: "Na minha máquina funciona, mas no servidor não". Isso acontecia por diferenças de versões de software e sistemas.  

**Diferença entre Máquina Virtual (VM) e Container:**
・**VM:** Emula um hardware completo e roda um Sistema Operacional (SO) inteiro dentro de outro. É pesado e lento.
・**Container:** Compartilha o kernel do SO da máquina hospedeira. É leve, inicia em segundos e ocupa pouco espaço.

### Conceitos Chave
・**Dockerfile:** O "receituário", um arquivo de texto com as instruções para criar sua imagem.
・**Imagem:** O "pacote" estático, É o resultado do build do Dockerfile.
・**Container:** A "instância" em execução. É a imagem rodando como um processo.
・**Docker Hub:**  O "GitHub das imagens". Onde você baixa imagens prontas (Node, Python, MySQL).

### Persistência de Dados (Volumes)
Containers são efêmeros (se você deletar o container, os dados somem). Para salvar arquivos permanentemente (como um banco de dados), usamos:
・**Volumes:** Gerenciados pelo Docker.
・**Bind Mounts:** Mapeiam uma pasta específica do seu PC para dentro do container.

### Redes (Networking)
O Docker cria redes virtuais para que os containers conversem entre si.
・**Bridge:** A rede padrão para containers isolados.
・**Host:** Remove o isolamento entre o container e a máquina real.

### Docker Compose
Ninguém sobe um sistema complexo rodando 10 comandos ```docker run```. Usamos o Docker Compose (arquivo ```docker-compose.yml```) para definir e rodar multi-containers com um único comando: ```docker-compose up<```.

### Otimização de Imagens
Imagens gigantes são lentas para transferir. Técnicas avançadas incluem:
・**Multi-stage Builds:** Você usa uma imagem pesada para compilar o código (ex: Java/Go) e copia apenas o executável final para uma imagem mínima (como Alpine Linux).
・**Camadas (Layers):** Cada comando no Dockerfile cria uma camada. Ordem importa para aproveitar o cache.

### Orquestração
Quando você tem centenas de containers, o Docker sozinho não basta. É aqui que entram os orquestradores:
・**Docker Swarm:** A solução nativa do Docker para clusters (mais simples).
・**[[Kubernetes]] (K8s):**  O padrão da indústria para gerenciar containers em escala global, cuidando de auto-scaling e auto-recuperação.

### Segurança
・**Rootless mode:** Rodar o Docker sem privilégios de administrador.
・**Scanning:** Ferramentas que varrem suas imagens em busca de vulnerabilidades conhecidas.

### Docker engine
É o que fica instalado no sistema, dividido em três partes:
→ **Docker CLI (Command Line Interface):** É onde você digita os comandos (ex: docker run). Na imagem, ela aparece no topo porque é o seu ponto de entrada como usuário.
→ **Docker API:** Funciona como a "ponte" de comunicação. A CLI não fala diretamente com o Daemon; ela envia requisições através desta API REST.
→ **Docker Daemon:** O coração do sistema. Ele recebe as ordens da API e gerencia os objetos (containers e imagens). Note que ele é o único que se comunica diretamente com o Host OS (Sistema Operacional Hospedeiro) para gerenciar recursos de hardware.

### A Base: Host OS
Na base de tudo está o Host OS. Isso reforça um conceito fundamental do Docker: ele não é uma Máquina Virtual.
O Docker Daemon utiliza o Kernel do seu sistema operacional hospedeiro (seja Linux, Windows ou Mac) para isolar processos, o que o torna muito mais leve e rápido que   virtualização tradicional.

## Docker compose
É o orquestrador de containers do docker, nele usando um único arquivo, é possível subir diversos containers.

### Principais seções:
→ **Services:** Define cada container da sua aplicação. Você pode especificar a imagem, portas, variáveis de ambiente e limites de memória.  
→ **Networks:** Por padrão, o Compose cria uma rede única para todos os serviços do arquivo. Isso permite que o web converse com o db usando apenas o nome do serviço (ex: host: db), sem precisar saber o IP.  
→ **Volumes:** Define onde os dados serão persistidos fora dos containers. Essencial para bancos de dados.  
→ **Configs e Secrets:** Para gerenciar configurações sensíveis de forma mais segura.  


