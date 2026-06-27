---
title: LangChain
date: 2026-06-09
tags: [br,ai]
#
---

### LangChain
O LangChain é um dos frameworks de código aberto mais importantes do mercado para o desenvolvimento de aplicações baseadas em Modelos de Linguagem (LLMs).  

Para entender de forma simples: se os modelos de IA (como o Claude, o GLM ou o DeepSeek) são os "cérebros", o LangChain é o sistema nervoso e os músculos. Ele fornece a infraestrutura necessária para conectar esses cérebros aos seus bancos de dados, APIs, sistemas de arquivos e ferramentas de terminal.  

Antes do LangChain, se você quisesse criar um agente que lê um arquivo, consulta um banco de dados SQL e toma uma decisão, você precisaria escrever centenas de linhas de código bruto para gerenciar as chamadas de API, formatar os textos e controlar a memória do chat. O LangChain padronizou e simplificou todo esse processo.  

### Os 4 Pilares do LangChain
A arquitetura do LangChain é dividida em blocos modulares que você pode combinar como se fossem peças de Lego:  

**I/O com Modelos (Model I/O)**.  
Gerencia a comunicação com as IAs. Ele padroniza a forma como você envia comandos e recebe respostas, não importa o provedor.
- **Prompt Templates**: Permite criar modelos de instruções dinâmicos (ex: "Você é um assistente especialista na linguagem {linguagem}").
- **Language Models**: Uma interface única para alternar entre diferentes modelos (você pode trocar o código de Claude para DeepSeek mudando apenas uma linha).
- **Output Parsers**: Força a IA a devolver a resposta em um formato estruturado exato que o seu software entenda (como um JSON limpo), em vez de texto puro.

**Recuperação de Dados (Retrieval / RAG)**.  
É o pilar responsável por dar "memória externa" para a IA, permitindo que ela consulte arquivos locais, PDFs ou documentações (o conceito de RAG que vimos anteriormente).  
- **Document Loaders**: Conectores nativos para ler mais de 100 fontes de dados (Slack, GitHub, PDFs, Notion, Google Drive).
- **Text Splitters**: Quebram arquivos gigantescos em pedaços menores e lógicos para caberem na janela de contexto da IA.
- **Vector Stores**: Conecta o sistema a bancos de dados vetoriais (como Pinecone, Chroma, Milvus) para buscar trechos de texto por proximidade de significado (busca semântica).

**Cadeias (Chains)**.  
O nome "LangChain" vem justamente daqui (Cadeia de Linguagem). Uma Chain permite interligar vários componentes ou várias chamadas de IA em sequência.
- **Exemplo de Cadeia**: O componente A pega a pergunta do usuário e busca um contexto no banco de dados → O componente B junta a pergunta + o contexto e envia para o modelo de IA → O componente C pega a resposta da IA e a traduz para o português.

**Agentes (Agents)**.  
É o nível mais avançado e o que rege ferramentas como a OpenCode CLI que você está usando. Em uma Chain comum, o caminho do código é rígido. Em um Agente, você entrega ferramentas para a IA (como acesso à internet, calculadora ou terminal bash) e o próprio modelo decide, passo a passo, qual ferramenta usar para resolver o problema.

**A Evolução Moderna: LangGraph**. 
Conforme os sistemas de agentes foram ficando mais complexos, as cadeias lineares do LangChain tradicional começaram a apresentar limitações para fluxos de trabalho que exigem ciclos e repetições (como o loop de agência de terminal: tentar rodar o código → ler o erro → reescrever → tentar rodar de novo).  

Para resolver isso, os criadores do LangChain lançaram o LangGraph. Ele estende o framework permitindo criar agentes baseados em grafos (com nós e arestas), onde você pode definir estados complexos, fluxos de decisão não lineares e controle total sobre o comportamento do agente.








