---
title: V8-engine
date: 2026-04-26
tags: [nodejs]
---
 
### V8 engine
[[0-NodeJS-introducao]]

O motor v8 do google é o coração do NodeJS. Ele é quem realmente transforma o código JavaScript que você escreve em instruções que o computador pode entender e executar de forma extremamente rápida.  

Relação entre eles pode ser resumida na seguinte divisão de responsabilidades:  
**NodeJS**: Fornece o ambiente, APIs de I/O (rede, arquivos) e a arquitetura assíncrona (libuv e Event loop) que o V8 não possui por padrão.  
**V8 Engine**: Executa o Javascript, pega o código JS, compila-o para código de máquina e o executa.  
Lida com chamadas de função, variáveis e gerenciamento de memória (Garbage collection).  
V8 é um motor de execução de JavaScript de código aberto escrito em c++.  
**Sua principal função é garantir a velocidade e a eficiência do código.**. 

### Compilação Just-in-Time (JIT)
O v8 não é um mero interpretador. Ele usa uma técnica chamada **Compilação JIT** (Just-in-Time) que envolve dois passos principais:  
**Ignition** (Interpretador): Inicialmente, o v8 interpreta o código JavaScript rapidamente para começar a execução;  
**Turbofan** (Compilador e otimizador): Conforme o código é executado e o V8 percebe que certas partes (funções, loops) são chamadas frequentemente, o Turbofan compila essas partes para **código de máquina** nativo, tornando a execução subsequente muito mais rápida.
  
### Garbage Collection (Gerenciamento de memória)
O v8 é responsável por alocar e desalocar memória (Heap).  
Ele implementa o **Garbage Collector (GC)**, que monitora a memória.  
Quando o GC percebe que um objeto na memória não pode mais ser acessado pelo programa, ele o remove, **liberando a memória** para novos objetos. Isso evita o vazamento de memória e garante que o NodeJS funcione por longos períodos sem falhas.  

### Gerenciamento de Call Stack. 
O V8 mantém o controle da ordem das funções a serem executadas usando a Call Stack. No NodeJS, esta é a pilha que pertence à single thread do **Event Loop**.  

  <img width="500" alt="Image" src="https://github.com/user-attachments/assets/1f46b6de-fdea-4b50-b0f3-aa060707ac7b" />

### Gerenciamento de memória
A memoria do NodeJS é dividida em duas áreas principais com comportamentos bem diferentes:  

|característica|memória Stack (Pilha)|memória Heap (Monte)|
|--------------|:--------------------|:-------------------|
|O que armazena|Tipos primitivos (number, string, boolean) e ponteiros|Objetos, arrays, closures e funções|
|Organização|Estrutura LIFO (Last In, First Out). Muito rápida|Estrutura complexa e dinâmica|
|Gerenciamento|Automático pelo SO (limpa quando a função acaba|Gerenciado pelo Garbage Collector|
      
A estrutura do Heeap na V8. 
O Heap não é um "balde" único, ele é segmentado para otimizar o trabalho do Garbage Collector:  
**New Space (Young Generation)**: É onde a maioria dos objetos nascem. É uma área pequena (1mb a 8mb) projetada para ser limpa com muita frequência. Objetos que sobrevivem a dois ciclos de limpeza aqui são "promovidos" para o Old Space.  
**Old Space (Old Generation**: Contém objetos que já existem há mais tempo. É uma área muito maior, e o processo de limpeza aqui é mais custoso e demorado.  
**Large Object Space**: Reservado para objetos que são grandes demais para as outras áreas. O Garbage Collector, nunca move esse objetos para evitar custo de processamento.  

Como funciona o Garbage Collector (GC)?  
O GC usa um algoritmo chamado **Mark-and-sweep** (Marcar e Varrer). O processo funciona basicamente assim:  
        1. **Marking (Marcação)**: O GC começa pelas 'raízes' (objetos globais, variáveis na stack) e segue todas as referências para marcar o que está sendo usado.
        2. **Sweeping (Varredura)**: Ele percorre o heap e identifica os objetos que não foram marcados. Esses objetos são considerados 'lixo'.
        3. **Compacting (Compactação)**: Para evitar que a memória fique cheia de buracos (fragmentação), o GC move os objetos sobreviventes para que fiquem juntos, liberando blocos continuos de memória.
        - **Important!** **Stop-the-world** Quando um Major GC (no Old Space) acontece, a execução do seu código pode ser pausada por alguns milisegundos. É por isso que manter o heap sob controle é vital para a performance.
