# NodeJS como funciona

### Introdução

NodeJS não é uma linguagem de programação nem um framework, mas sim um ambiente de execução JavaScript, que antes era usado primariamente apneas no lado do cliente (browser), possa ser usado também do lado do servidor.

___

<details>
<summary>Características principais do NodeJS</summary>

- **Ambiente de execução**: Ele utiliza o motor v8 do google (o mesmo usado no navegador do chrome) para interpretar e executar o código JavaScript de forma rápida de um navegador web.
- **Back-end com JavaScript**: Permite usar a mesma linguagem , o JavaScript, tanto para o front-end quanto para o back-end, facilitandp o desenvolvimento full-stack.
- **Arquitetura assincrona e orientada a eventos**:
  - Sua principal característica é a **arquitetura não bloqueante** (non-bloquing I/O) e o uso de um Event loop (Single-thred).
  - Isso significa que, em vez de esperar por operações demoradas (como acesso a banco de dados ou arquivos), o NodeJS as coloca em segundo plano e continua processando outras requisições.Quando a operação demorada é concluída, ele é notificado por um evento.
  - Essa abordagem o torna muito eficiente para aplicações que exigem **escalabilidade** e **tempo real**, lidando com um grande número de conexões simultâneas (como chats, jogos multiplayer e APIs).
  - O segredo está em como o NodeJS lida com as operações de Entrada e Saída (I/O), que são as mais lentas (acesso a banco de dados, leitura/escrita de arquivos, requisições de rede).
    - **Event Loop (Single Thread)**: é a thread principal onde o seu código JavaScript (JS) é executado. Ele nunca é bloqueado.
      - Quando o seu código JS precisa iniciar uma operação lenta (Ex: buscar dados no MongoDB), ele **não espera** pelo resultado. Em vez disso, ele passa essa tarefa para o "segundo plano" e imediatamente **continua executando** o próximo pedaço de código JS.
    - O **segundo plano (Pool de threads em C++)**: é na verdade um conjunto de threads separadas (conhecido como **Thread Pool**), que são mantidas e gerenciadas pela biblioteca **libuv**.
      - **libuv** e uma biblioteca de código aberto, escrita em C/C++, que faz parte do coração do NodeJS.
      - Quando o Event Loop encontra uma operação de I/O bloqueante (como a leitura de um arquivo no disco), ele a delega para uma das threads nesse **Thread Pool** da libuv.
      - Essas threads C++ executam a operação demorada de forma sícrona, fora da thread principal do NodeJS.
      - Uma vez que a operação é concluída (o aruqivo foi lido ou o dado do banco de dados foi recuperado), a thread C++ envia uma notificação de evento de volta ao Event Loop.
    - **A notificação e o callback**: O event loop recebe a notificação (o "evento"). Ele pega a função de callback (o código JS que você escreveu para lidar com o resultado) e a coloca na fila para ser executada. Quando o Event loop terminar as tarefas atuais, ele processa essa calback na sua única thread, e é aí que você manipula o resultado da operação (ex; evibe os dados do banco de dados.)
- Exemplo de código:

<code>

const fs = require('fs'); // Módulo nativo para operações de Sistema de Arquivos

console.log('1. INÍCIO do programa.');

// --- Operação Assíncrona 1 (Não Bloqueante) --- </br>
// Node.js inicia a leitura do Arquivo 1 e passa a tarefa para o Thread Pool (libuv). </br>
// Ele NÃO espera a conclusão e segue imediatamente para a linha seguinte.

fs.readFile('arquivo1.txt', 'utf8', (err, data) => { </br>
  if (err) throw err; </br>
  console.log('4. DADOS DO ARQUIVO 1 LIDOS.'); </br>
  // Esta função (callback) será executada SOMENTE quando o Thread< /br>
  //Pool avisar que a leitura terminou. </br>
});

// --- Operação Assíncrona 2 (Não Bloqueante) --- </br>
// Node.js inicia a leitura do Arquivo 2 e passa a tarefa para o Thread Pool (libuv). </br>
// Ele NÃO espera a conclusão e segue imediatamente para a linha seguinte.

fs.readFile('arquivo2.txt', 'utf8', (err, data) => { </br>
  if (err) throw err;</br>
  console.log('5. DADOS DO ARQUIVO 2 LIDOS.');</br>
});

// --- Operação Síncrona (Código JS Comum) ---</br>
// O Event Loop executa este log imediatamente, sem depender das leituras.</br>
console.log('2. O Event Loop está livre e processando esta linha imediatamente.');

console.log('3. FIM do código principal. O Event Loop aguarda eventos.');

Order de execução:

1. INÍCIO do programa.
2. O Event Loop está livre e processando esta linha imediatamente.
3. FIM do código principal. O Event Loop aguarda eventos.
4. DADOS DO ARQUIVO 1 LIDOS.
5. DADOS DO ARQUIVO 2 LIDOS.

</code>

![Image](https://github.com/user-attachments/assets/4b07e31f-7942-431c-9f56-cf9d546bc3dd)

- **NPM (Node Package Manager)**: Possui o maior ecossistema de bibliotecas de código do mundo, o npm, que facilita a instalação, o compartilhamento e o gerenciamneto de módulos e pacotes reutilizáveis.
</details>

___


<details>  
<summary>V8 engine</summary>

O motor v8 do google é o coração do NodeJS. Ele é quem realmente transforma o código JavaScript que você escreve em instruções que o computador pode entender e executar de forma extremamente rápida.</br>
Relação entre eles pode ser resumida na seguinte divisão de responsabilidades:</br>
**NodeJS**: Fornece o ambiente, APIs de I/O (rede, arquivos) e a arquitetura assíncrona (libuv e Event loop) que o V8 não possui por padrão.</br>
**V8 Engine**: Executa o Javascript, pega o código JS, compila-o para código de máquina e o executa.</br>
Lida com chamadas de função, variáveis e gerenciamento de memória (Garbage collection).</br>
V8 é um motor de execução de JavaScript de código aberto escrito em c++.</br>
**Sua principal função é garantir a velocidade e a eficiência do código.**

- Compilação Just-in-Time (JIT)
  - O v8 não é um mero interpretador. Ele usa uma técnica chamada **Compilação JIT** (Just-in-Time) que envolve dois passos principais:
    - **Ignition** (Interpretador): Inicialmente, o v8 interpreta o código JavaScript rapidamente para começar a execução;
    - **Turbofan** (Compilador e otimizador): Conforme o código é executado e o V8 percebe que certas partes (funções, loops) são chamadas frequentemente, o Turbofan compila essas partes para **código de máquina** nativo, tornando a execução subsequente muito mais rápida.
- Garbage Collection (Gerenciamento de memória)
  - O v8 é responsável por alocar e desalocar memória (Heap).
    - Ele implementa o **Garbage Collector (GC)**, que monitora a memória.
    - Quando o GC percebe que um objeto na memória não pode mais ser acessado pelo programa, ele o remove, **liberando a memória** para novos objetos. Isso evita o vazamento de memória e garante que o NodeJS funcione por longos períodos sem falhas.
- Gerenciamento de Call Stack
  - O V8 mantém o controle da ordem das funções a serem executadas usando a Call Stack. No NodeJS, esta é a pilha que pertence à single thread do **Event Loop**.

  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/1f46b6de-fdea-4b50-b0f3-aa060707ac7b" />
</details>

___

<details>
<summary>Libuv e Event loop</summary>

**Libuv: O coração assíncrono do NodeJS**</br>
A Libuv é uma biblioteca multiplataforma de código aberto, escrita em C, que fornece a camada de abstração para operações de Entrada/Saída (I/O) assíncronas. Ela é o que permite ao NodeJS lidar com operações lentas sem bloquear a thread principal do JavaScript.
- Funções principais da libuv:
  - **Gerenciamento de I/O assíncrono**: A libuv interage com os sistemas operacionais subjacentes para delegar operações de I/O (como sockets de rede, arquivos e timers) de froma não bloqueante.
  - **Event Loop Implementation**: A Libuv é responsável por implementar e gerenciar o Event Loop em si, atuando como o orquestrador central.
  - **Thread Pool**: Para operações que são inerentemente bloqueantes nos sitemas operacionais (como a leitura de arquivos muito grandes no disco), a Libuv mantém um **Pool de Threads** separadas. Essas threads nativas (C++) executam o trabalho pesado fora do Event Loop, garantindo que a thread principal do JavaScript continue livre.

**Event Loop: A Single thread orquestradora**</br>
O Evento loop é o ciclo de execução que gerencia a fila de tarefas e a execução do código JavaScript. Ele opera em uma **única thread** e é a razão pela qual o NodeJS é considerado singlre-threaded para a execução do código JS.,/br>
- O ciclo de vida do Event loop
  - O event loop opera em um ciclo contínuo,  passando por várias "fases" para processar diferentes tipos de eventos.</br>

  1. **Timers**: Executa callbacks agendadas por <code>setTimeout()</code> e <code>setinterval()</code>;
     - Exemplo: O código de um `setTimeout(..., 0)` é executado aqui;
  3. **Pending callbacks**: Executa callbacks pendentes do sistema (exceto I/O, timers, e `close` callbacks);
     - Exemplo: Error de rede (se o SO disparar o erro);
  5. **Idle, Prepare**: Usado apenas internamente pelo NodeJS;
     - Exemplo: N/A
     - <b>Obs</b>: Essas fases não são destinadas à execução de código assíncrono escrito pelo usuário (como timers ou callbacks de I/O).
     - Fase `Prepare`:
        - <ins>Função</ins>: É executada <b>antes</b> que o Event loop inicie seu próximo ciclo principal de I/O, que é a fase <b>Poll</b> (onde a maioria das callbacks de I/O são processadas);
        - <ins>Uso interno</ins>: Seu principal objetivo é praparar a Libuv para receber novos eventos de I/O. Ela pode ser usada internamente para limpar ou resetar estruturas de dados antes que a Libuv comece a procurar ativamente por eventos concluídos;
      - fase `Idle`:
        - <ins>Função</ins>: É executada imefiatamente após a fase `Prepare`. Ela atua como um ponto de interrupção para tarefas de baixa prioridade;
        - <ins>Uso interno</ins>: Ela é usada pela Libuv para executar verificações de rotina ou tarefas de manutenção que não são essenciais para o processamento imediato de eventos, ou que precisam ser executadas somente quando o Event loop está relativamente ocioso (Idle);
  7. **Poll**:
     1. <i>Verifca I/O</i>: Busca novas conexões de rede ou dados lidos de arquivos;
     2. <i><Executa callbacks/i>: Executa as callbacks de I/O que foram concluídas no Thread Pool;
     - Exemplo: `fs.readFile` calbacks, `neet.Socket` callbacks;
  8. **Check**: Executa callbacks agendadas por `setImmediate()`;
     - Exemplo: O código de um `setImmediate()` é executado aqui;
  9. **Close callbacks**: Executa callbacks para fechamento de handles;
      - Exemplo: `socket.on('close', ...)`;
- Microtasks vs Macrotasks
  - Além das fases acima(que são **Macrotasks**), existem as **Microtasks**, que têm prioridade de execução e são processadas imediatamente após a conclusão de uma fase completa do Event loop ou após a execução de uma callback sincrona:
    - **Microtasks (alta prioridade)**: Incluem **Promises** (`.then()`, `.catch()`, `.finally()`) e `process.nextTick()`
    - **Regra de ouro**: O NodeJS sem pre esvazia toda a fila de **Microtasks** antes de passar para a próxima fase do **Event loop (Macrotasks)**. O `process.nextTick()` tem a prioridade mais alta de todas, sendo executado antes de qualquer outra Microtask.
    
</details>

___


















