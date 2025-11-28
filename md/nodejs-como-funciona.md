# NodeJS como funciona

### Introdução

NodeJS não é uma linguagem de programação nem um framework, mas sim um ambiente de execução JavaScript, que antes era usado primariamente apneas no lado do cliente (browser), possa ser usado também do lado do servidor.

### Características principais do NodeJS

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
<pre>
<code class="language-javscript">
const fs = require('fs'); // Módulo nativo para operações de Sistema de Arquivos

console.log('1. INÍCIO do programa.');

// --- Operação Assíncrona 1 (Não Bloqueante) ---
// Node.js inicia a leitura do Arquivo 1 e passa a tarefa para o Thread Pool (libuv).
// Ele NÃO espera a conclusão e segue imediatamente para a linha seguinte.

fs.readFile('arquivo1.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('4. DADOS DO ARQUIVO 1 LIDOS.');
// Esta função (callback) será executada SOMENTE quando o Thread
//Pool avisar que a leitura terminou.
});

// --- Operação Assíncrona 2 (Não Bloqueante) ---
// Node.js inicia a leitura do Arquivo 2 e passa a tarefa para o Thread Pool (libuv).
// Ele NÃO espera a conclusão e segue imediatamente para a linha seguinte.

fs.readFile('arquivo2.txt', 'utf8', (err, data) => {
if (err) throw err;
console.log('5. DADOS DO ARQUIVO 2 LIDOS.');
});

// --- Operação Síncrona (Código JS Comum) ---
// O Event Loop executa este log imediatamente, sem depender das leituras.
console.log('2. O Event Loop está livre e processando esta linha imediatamente.');

console.log('3. FIM do código principal. O Event Loop aguarda eventos.');

Order de execução:

1. INÍCIO do programa.
2. O Event Loop está livre e processando esta linha imediatamente.
3. FIM do código principal. O Event Loop aguarda eventos.
4. DADOS DO ARQUIVO 1 LIDOS.
5. DADOS DO ARQUIVO 2 LIDOS.

</code>
</pre>

![Image](https://github.com/user-attachments/assets/4b07e31f-7942-431c-9f56-cf9d546bc3dd)

- **NPM (Node Package Manager)**: Possui o maior ecossistema de bibliotecas de código do mundo, o npm, que facilita a instalação, o compartilhamento e o gerenciamneto de módulos e pacotes reutilizáveis.
</details>
