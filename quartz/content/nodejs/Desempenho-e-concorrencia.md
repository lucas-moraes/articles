---
title: Desempenho-e-concorrencia
date: 2026-04-27
tags: [nodejs]
---

### Desempenho e Concorrência
[[0-NodeJS-introducao]]

NodeJS é single-thread, mas o que é thread? Thread (linha de execução) é a menor unidade de processamento dentro de um programa. Ela representa um fluxo de execução independente que o sistema operacional pode agendar e executar.  

De forma simples:  
⭐️ Um processo pode ter várias threads, e cada thread executa tarefas ao mesmo tempo ou de forma intercalada.  

No NodeJS:  
🔸 - Existe uma thread principal;  
🔸 - Ela executa o Event loop;  
🔸 - Operações pesadas podem bloquear essa thread;  

Por isso:  
+  Tarefas de I/O são assíncronas;  
+  Tarefas de CPU devem usar Worker Threads ou serviços externos;  

|Vantagens|Desvantagens|
|:-------|:------------|
|Melhor uso do processador |Complexidade maior |
|Maior desempenho |Risco de condições de corrida (race conditions) |
|Melhor experiência do usuário |Necessidade de sincronização (locks, mutex) |

**O desempenho do NodeJs está diretamente ligada a arquitetura de execução dos processos da API, podemos colocar o paralelismo e concorrência nessa arquitetura.**. 

### ⛏️ - Worker Thread

No NodeJS, worker thread é um recurso que permite executar tarefas pesadas de CPU em paralelo, sem bloquear a thread principal (onde roda o Event Loop).  

Worker Thread:  
🟢 - É uma thread real do sistema operacional;  
🟢 - É criada dentro do mesmo processo do NodeJS;  
🟢 - Tem seu próprio Event Loop;  
🟢 - Tem memória isolada da Thread principal;  
🟢 - Ela se comunica com a thread principal por mensagens;  
🟢 - Isolamento: Cada worker thread tem sua própria instância V8 (para executar o JS) e sua própria pilha de eventos de I/O, rodando em um processo separado da thread principal;  

**Comunicação**
A comunicação acontece via:  
```postMessage()```  
//Eventos message. 
MessageChannel.  
//Casos avançados SharedArrayBuffer.  

⚠️ - Por padrão, os dados são copiados (clonados), não compartilhados;  

**Quando usar Worker threads?**
Use quando:  
→ Há tarefas CPU-bound;  
→ O Event Loop está sendo bloqueado;  
→ Você precisa de paralelismo real;  

Não use quando:  
→ O problema é apenas I/O;  
→ Uma simples operação assíncrona resolve;  
→ O overhead de criar threads supera o ganho;  

### ⚒️ - Cluster

Cluster é um mecanismo que permite executar múltiplas instâncias do NodeJS (processos) para aproveitar todos os núcleos da CPU e aumentar a escalabilidade de aplicações, principalmente servidores web.  
Ele é fornecido pelo módulo nativo <b>cluster</b>.  
O cluster cria processos NodeJS, geralmente por núcleo de CPU.  

Como o cluster funciona?  
🔵 - Existe um processo master (primary);  
🔵 - O master cria vários workers (processos filhos);  
🔵 - Todos os workers:
  + Executam o mesmo código;  
  + Escutam a mesma porta;  
🔵 - O sistema operacional é um processo independente, com memória própria;  

⚠️ - Cada worker é um processo independente, com memória própria;  

|Vantagens|Desvantagens|
|:-------|:------------|
|Melhor uso dos núcleos da CPU | Maior uso de memória |
|Alta disponibilidade | Comunicação entre processos é mais lenta (IPC) |
|Isolamento (um worker cair não derruba tudo) | Estado não compartilhado (necessita cache externo) |
|Escala horizontal dentro da mesma máquina |       |

**Quando usar cluster?**. 
Use quando:  
→ sua aplicação é um servidor web;  
→ há muitas conexões simultâneas;  
→ você quer escalar em uma única máquina;  

Evite quando:  
→ precisa compartilhar muito estado em memória;  
→ o gargalo é processamento pesado (use Worker Threads);  

Em resumo, a Thread worker paraleliza, o Cluster escala.