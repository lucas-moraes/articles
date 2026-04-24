---
title: Libuv-event-loop
date: 2026-04-27
tags: [nodejs]
---

### Libuv e Event loop
[[0-NodeJS-introducao]]

**Libuv: O coração assíncrono do NodeJS**. 
A Libuv é uma biblioteca multiplataforma de código aberto, escrita em C, que fornece a camada de abstração para operações de Entrada/Saída (I/O) assíncronas. Ela é o que permite ao NodeJS lidar com operações lentas sem bloquear a thread principal do JavaScript.  

Funções principais da libuv:  
**Gerenciamento de I/O assíncrono**: A libuv interage com os sistemas operacionais subjacentes para delegar operações de I/O (como sockets de rede, arquivos e timers) de froma não bloqueante.  
**Event Loop Implementation**: A Libuv é responsável por implementar e gerenciar o Event Loop em si, atuando como o orquestrador central.  
**Thread Pool**: Para operações que são inerentemente bloqueantes nos sitemas operacionais (como a leitura de arquivos muito grandes no disco), a Libuv mantém um **Pool de Threads** separadas. Essas threads nativas (C++) executam o trabalho pesado fora do Event Loop, garantindo que a thread principal do JavaScript continue livre.  

**Event Loop: A Single thread orquestradora**. 
O Evento loop é o ciclo de execução que gerencia a fila de tarefas e a execução do código JavaScript. Ele opera em uma **única thread** e é a razão pela qual o NodeJS é considerado singlre-threaded para a execução do código JS.  
O ciclo de vida do Event loop, o event loop opera em um ciclo contínuo,  passando por várias "fases" para processar diferentes tipos de eventos.  
**1 - Timers**: Executa callbacks agendadas por **setTimeout()** e **setInterval()**;  
Exemplo: O código de um **setTimeout(..., 0)** é executado aqui;  
**2 - Pending callbacks**: Executa callbacks pendentes do sistema (exceto I/O, timers, e <b>close</b> callbacks);  
Exemplo: Error de rede (se o SO disparar o erro);  
**3 - Idle, Prepare**: Usado apenas internamente pelo NodeJS;  
**Obs**: Essas fases não são destinadas à execução de código assíncrono escrito pelo usuário (como timers ou callbacks de I/O).  

Fase **Prepare**:    
*Função*: É executada <b>antes</b> que o Event loop inicie seu próximo ciclo principal de I/O, que é a fase <b>Poll</b> (onde a maioria das callbacks de I/O são processadas);  
*Uso interno*: Seu principal objetivo é praparar a Libuv para receber novos eventos de I/O. Ela pode ser usada internamente para limpar ou resetar estruturas de dados antes que a Libuv comece a procurar ativamente por eventos concluídos;  

Fase **Idle**:  
*Função*: É executada imediatamente após a fase **Prepare**. Ela atua como um ponto de interrupção para tarefas de baixa prioridade;  
*Uso interno*: Ela é usada pela Libuv para executar verificações de rotina ou tarefas de manutenção que não são essenciais para o processamento imediato de eventos, ou que precisam ser executadas somente quando o Event loop está relativamente ocioso (Idle);  

**4 - Poll (Sondagem)**:  
1. <i>Verifca I/O</i>: Busca novas conexões de rede ou dados lidos de arquivos;  
2. <i>Executa callbacks</i>: Executa as callbacks de I/O que foram concluídas no Thread Pool;  
Exemplo: **fs.readFile** calbacks, **neet.Socket** callbacks;  
**5 - Check**: Executa callbacks agendadas por **setImmediate()**;  
Exemplo: O código de um <b>setImmediate()</b> é executado aqui;  
**6 - Close callbacks**: Executa callbacks para fechamento de handles;  
Exemplo: <b>socket.on('close', ...) ou db.close()</b>;  

**Microtasks vs Macrotasks**. 
Além das fases acima(que são **Macrotasks**), existem as **Microtasks**, que têm prioridade de execução e são processadas imediatamente após a conclusão de uma fase completa do Event loop ou após a execução de uma callback sincrona:  
**Microtasks (alta prioridade)**: Incluem **Promises** (```.then()```, ```.catch()```, ```.finally()```) e **process.nextTick()**. 
**Regra de ouro**: O NodeJS sem pre esvazia toda a fila de **Microtasks** antes de passar para a próxima fase do **Event loop (Macrotasks)**. O **process.nextTick()** tem a prioridade mais alta de todas, sendo executado antes de qualquer outra Microtask.

