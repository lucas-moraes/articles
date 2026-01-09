# NodeJS como funciona

### Introdução

NodeJS não é uma linguagem de programação nem um framework, mas sim um ambiente de execução JavaScript, que antes era usado primariamente apneas no lado do cliente (browser), possa ser usado também do lado do servidor.

___

<details>
<summary> ❇️ Características principais do NodeJS</summary>

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
      - Uma vez que a operação é concluída (o arquivo foi lido ou o dado do banco de dados foi recuperado), a thread C++ envia uma notificação de evento de volta ao Event Loop.
    - **A notificação e o callback**: O event loop recebe a notificação (o "evento"). Ele pega a função de callback (o código JS que você escreveu para lidar com o resultado) e a coloca na fila para ser executada. Quando o Event loop terminar as tarefas atuais, ele processa essa calback na sua única thread, e é aí que você manipula o resultado da operação (ex: exibe os dados do banco de dados.)
- Exemplo de código:

![Image](https://github.com/user-attachments/assets/0f3b149e-3b51-4e0a-b63b-f689aad31bc9)


![Image](https://github.com/user-attachments/assets/4b07e31f-7942-431c-9f56-cf9d546bc3dd)

- **NPM (Node Package Manager)**: Possui o maior ecossistema de bibliotecas de código do mundo, o npm, que facilita a instalação, o compartilhamento e o gerenciamneto de módulos e pacotes reutilizáveis.
</details>

___


<details>  
<summary> ❇️ V8 engine</summary>

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
</br>
  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/1f46b6de-fdea-4b50-b0f3-aa060707ac7b" />

</br>
</br>

- Gerenciamento de memória
  - A memoria do NodeJS é dividida em duas áreas principais com comportamentos bem diferentes:
    |característica|memória Stack (Pilha)|memória Heap (Monte)|
    |--------------|:--------------------|:-------------------|
    |O que armazena|Tipos primitivos (number, string, boolean) e ponteiros|Objetos, arrays, closures e funções|
    |Organização|Estrutura LIFO (Last In, First Out). Muito rápida|Estrutura complexa e dinâmica|
    |Gerenciamento|Automático pelo SO (limpa quando a função acaba|Gerenciado pelo Garbage Collector|
      
  - A estrutura do Heeap na V8
    - O Heap não é um "balde" único, ele é segmentado para otimizar o trabalho do Garbage Collector:
      - **New Space (Young Generation)**: É onde a maioria dos objetos nascem. É uma área pequena (1mb a 8mb) projetada para ser limpa com muita frequência. Objetos que sobrevivem a dois ciclos de limpeza aqui são "promovidos" para o Old Space.
      - **Old Space (Old Generation**: Contém objetos que já existem há mais tempo. É uma área muito maior, e o processo de limpeza aqui é mais custoso e demorado.
      - **Large Object Space**: Reservado para objetos que são grandes demais para as outras áreas. O Garbage Collector, nunca move esse objetos para evitar custo de processamento.
    - Como funciona o Garbage Collector (GC)?
      - O GC usa um algoritmo chamado **Mark-and-sweep** (Marcar e Varrer). O processo funciona basicamente assim:
        1. **Marking (Marcação)**: O GC começa pelas 'raízes' (objetos globais, variáveis na stack) e segue todas as referências para marcar o que está sendo usado.
        2. **Sweeping (Varredura)**: Ele percorre o heap e identifica os objetos que não foram marcados. Esses objetos são considerados 'lixo'.
        3. **Compacting (Compactação)**: Para evitar que a memória fique cheia de buracos (fragmentação), o GC move os objetos sobreviventes para que fiquem juntos, liberando blocos continuos de memória.
        - **Important!** **Stop-the-world** Quando um Major GC (no Old Space) acontece, a execução do seu código pode ser pausada por alguns milisegundos. É por isso que manter o heap sob controle é vital para a performance.

  
</details>

___

<details>
<summary> ❇️ Libuv e Event loop</summary>

**Libuv: O coração assíncrono do NodeJS**</br>
A Libuv é uma biblioteca multiplataforma de código aberto, escrita em C, que fornece a camada de abstração para operações de Entrada/Saída (I/O) assíncronas. Ela é o que permite ao NodeJS lidar com operações lentas sem bloquear a thread principal do JavaScript.
</br>
Funções principais da libuv:
  - **Gerenciamento de I/O assíncrono**: A libuv interage com os sistemas operacionais subjacentes para delegar operações de I/O (como sockets de rede, arquivos e timers) de froma não bloqueante.
  - **Event Loop Implementation**: A Libuv é responsável por implementar e gerenciar o Event Loop em si, atuando como o orquestrador central.
  - **Thread Pool**: Para operações que são inerentemente bloqueantes nos sitemas operacionais (como a leitura de arquivos muito grandes no disco), a Libuv mantém um **Pool de Threads** separadas. Essas threads nativas (C++) executam o trabalho pesado fora do Event Loop, garantindo que a thread principal do JavaScript continue livre.

**Event Loop: A Single thread orquestradora**</br>
O Evento loop é o ciclo de execução que gerencia a fila de tarefas e a execução do código JavaScript. Ele opera em uma **única thread** e é a razão pela qual o NodeJS é considerado singlre-threaded para a execução do código JS.</br>
O ciclo de vida do Event loop, o event loop opera em um ciclo contínuo,  passando por várias "fases" para processar diferentes tipos de eventos.
  - **1 - Timers**: Executa callbacks agendadas por <b>setTimeout()</b> e <b>setInterval()</b>;
     - Exemplo: O código de um <b>setTimeout(..., 0)</b> é executado aqui;
  - **2 - Pending callbacks**: Executa callbacks pendentes do sistema (exceto I/O, timers, e <b>close</b> callbacks);
     - Exemplo: Error de rede (se o SO disparar o erro);
  - **3 - Idle, Prepare**: Usado apenas internamente pelo NodeJS;
     - Exemplo: N/A
     - <b>Obs</b>: Essas fases não são destinadas à execução de código assíncrono escrito pelo usuário (como timers ou callbacks de I/O).
     - Fase <b>Prepare</b>:
        - <ins>Função</ins>: É executada <b>antes</b> que o Event loop inicie seu próximo ciclo principal de I/O, que é a fase <b>Poll</b> (onde a maioria das callbacks de I/O são processadas);
        - <ins>Uso interno</ins>: Seu principal objetivo é praparar a Libuv para receber novos eventos de I/O. Ela pode ser usada internamente para limpar ou resetar estruturas de dados antes que a Libuv comece a procurar ativamente por eventos concluídos;
      - Fase <b>Idle</b>:
        - <ins>Função</ins>: É executada imediatamente após a fase <b>Prepare</b>. Ela atua como um ponto de interrupção para tarefas de baixa prioridade;
        - <ins>Uso interno</ins>: Ela é usada pela Libuv para executar verificações de rotina ou tarefas de manutenção que não são essenciais para o processamento imediato de eventos, ou que precisam ser executadas somente quando o Event loop está relativamente ocioso (Idle);
  - **4 - Poll (Sondagem)**:
     1. <i>Verifca I/O</i>: Busca novas conexões de rede ou dados lidos de arquivos;
     2. <i>Executa callbacks</i>: Executa as callbacks de I/O que foram concluídas no Thread Pool;
     - Exemplo: <b>fs.readFile</b> calbacks, <b>neet.Socket</b> callbacks;
  - **5 - Check**: Executa callbacks agendadas por <b>setImmediate()</b>;
     - Exemplo: O código de um <b>setImmediate()</b> é executado aqui;
  - **6 - Close callbacks**: Executa callbacks para fechamento de handles;
      - Exemplo: <b>socket.on('close', ...) ou db.close()</b>;
- Microtasks vs Macrotasks
  - Além das fases acima(que são **Macrotasks**), existem as **Microtasks**, que têm prioridade de execução e são processadas imediatamente após a conclusão de uma fase completa do Event loop ou após a execução de uma callback sincrona:
    - **Microtasks (alta prioridade)**: Incluem **Promises** (<b>.then()</b>, <b>.catch()</b>, <b>.finally()</b>) e <b>process.nextTick()</b>
    - **Regra de ouro**: O NodeJS sem pre esvazia toda a fila de **Microtasks** antes de passar para a próxima fase do **Event loop (Macrotasks)**. O <b>process.nextTick()</b> tem a prioridade mais alta de todas, sendo executado antes de qualquer outra Microtask.
    
</details>

___

<details>
<summary> ❇️ Desempenho e Concorrência</summary>

### Introdução ###
---

Como vimos acima, o NodeJS é single-thread, mas o que é thread? Thread (linha de execução) é a menor unidade de processamento dentro de um programa. Ela representa um fluxo de execução independente que o sistema operacional pode agendar e executar.
</br>

De forma simples: </br>
⭐️ Um processo pode ter várias threads, e cada thread executa tarefas ao mesmo tempo ou de forma intercalada.

No NodeJS: </br>
🔸 - Existe uma thread principal; </br>
🔸 - Ela executa o Event loop; </br>
🔸 - Operações pesadas podem bloquear essa thread; </br>

Por isso: </br>
🔸 - Tarefas de I/O são assíncronas; </br>
🔸 - Tarefas de CPU devem usar Worker Threads ou serviços externos; </br>
</br>

|Vantagens|Desvantagens|
|:-------|:------------|
|Melhor uso do processador |Complexidade maior |
|Maior desempenho |Risco de condições de corrida (race conditions) |
|Melhor experiência do usuário |Necessidade de sincronização (locks, mutex) |

<p><b>O desempenho do NodeJs está diretamente liga a arquitetura de execução dos processos da API, podemos colocar o paralelismo e concorrência nessa arquitetura.</b></p>

### ⛏️ - Worker Thread ###
---

No NodeJS, worker thread é um recurso que permite executar tarefas pesadas de CPU em paralelo, sem bloquear a thread principa (onde roda o Event Loop). </br>

🟢 - É uma thread real do sistema operacional; </br>
🟢 - É criada dentro do mesmo processo do NodeJS; </br>
🟢 - Tem seu próprio Event Loop; </br>
🟢 - Tem memória isolada da Thread principal; </br>
🟢 - Ela se comunica com a thread principal por mensagens; </br>

#### Comunicação ####
A comunicação acontece via: </br>
🟢 - ```postMessage()```; </br>
🟢 - eventos ```message```; </br>
🟢 - ```MessageChannel```; </br>
🟢 - ```SharedArrayBuffer``` (casos avançados); </br>
⚠️ - Por padrão, os dados são copiados (clonados), não compartilhados; </br>

#### Quando usar Worker threads? ####
Use quando: </br>
→ há tarefas CPU-bound; </br>
→ o Event Loop está sendo bloqueado; </br>
→ você precisa de paralelismo real; </br>

Não use quando: </br>
→ o problema é apenas I/O; </br>
→ uma simples operação assíncrona resolve; </br>
→ o overhead de criar threads supera o ganho; </br>

### ⚒️ - Cluster ###
---
Cluster é um mecanismo que permite executar múltiplas instâncias do NodeJS (processos) para aproveitar todos os núcleos da CPU e aumentar a escalabilidade de aplicações, principalmente servidores web. </br>
Ele é fornecido pelo módulo nativo ```cluster```. </br>
O cluster cria processos NodeJS, geralmente por núcleo de CPU. </br>

Como o cluster funciona? </br>
🔵 - Existe um processo master (primary); </br>
🔵 - O master cria vários workers (processos filhos); </br>
🔵 - Todos os workers:
+ Executam o mesmo código;
+ Escutam a mesma porta; </br>

🔵 - O sistema operacional é um processo independente, com memória própria; </br>
⚠️ - Cada worker é um processo independente, com memória própria; </br>

|Vantagens|Desvantagens|
|:-------|:------------|
|Melhor uso dos núcleos da CPU | Maior uso de memória |
|Alta disponibilidade | Comunicação entre processos é mais lenta (IPC) |
|Isolamento (um worker cair não derruba tudo) | Estado não compartilhado (necessita cache externo) |
|Escala horizontal dentro da mesma máquina |       |

#### Quando usar cluster? ####
Use quando: </br>
→ sua aplicação é um servidor web; </br>
→ há muitas conexões simultâneas; </br>
→ você quer escalar em uma única máquina; </br>

Evite quando: </br>
→ precisa compartilhar muito estado em memória; </br>
→ o gargalo é processamento pesado (use Worker Threads); </br>

Em resumo, a Thread worker paraleliza, o Cluster escala.

</details>

<!--
<details>
<summary> ❇️ Desempenho e Concorrência (Em Desenvolvimento)</summary>

Worker Threads: Uso de threads reais (fora do Event Loop) para realizar tarefas intensivas em CPU (cálculos complexos, criptografia) sem bloquear a thread principal.</br>
Cluster Module: Técnicas para fork (duplicar) o processo do Node.js, aproveitando múltiplos núcleos da CPU (multiprocessamento) e distribuindo a carga de requisições.</br>
Benchmarking e Profiling: Uso de ferramentas como node --prof e profilers externos para identificar gargalos de desempenho e vazamentos de memória.</br>
Otimização do V8: Entender como o motor V8 compila e otimiza o código JavaScript (JIT Compilation) para escrever código mais rápido.</br>
Stream Processing: Utilização de Streams (Readable, Writable, Duplex) para processar grandes volumes de dados de forma eficiente (em pedaços) sem carregar tudo na memória de uma vez.</br>
</details>

---












