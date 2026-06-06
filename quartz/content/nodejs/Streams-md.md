---
title: Streams-md
date: 2026-06-06
tags: [nodejs]
#
---

### Streams

Streams são um dos recursos mais poderosos - e às vezes mais subestimados - do ecossistema NodeJS.  
Em termos simples: em vez de ler um arquivo de 2GB inteiro para a memória de uma vez só, as streams permitem que você processe esse arquivo em pequenos pedaços 9chunks), bit a bit.  

**Por que usar Streams? (O grande benefício)**.  
Imagine que você está assistindo a um filme na Netflix. Você não espera o filme de 4K de duas horas baixar completamente para o seu computador antes de começar a assistir, certo? Você assiste ao buffer enquanto o resto é baixado. Isso é o conceito de streaming.  

No Node.js, os benefícios são:  
- **Eficiência de Memória**: Você não precisa carregar buffers gigantescos na RAM.
- **Eficiência de Tempo**: Você pode começar a processar os dados assim que o primeiro pedaço chega, em vez de esperar todo o payload ser carregado.


**Os 4 Tipos de Streams no Node.js**. 
O módulo nativo stream do Node.js se divide principalmente em quatro tipos:  

|**Tipo**         |**Função**            |**Exemplo prático** |
|:----------------|:---------------------|:-------------------|
|**Readable**     |Streams de onde você pode ler dados. | `fs.createReadStream()`, `req` (no servidor HTTP)|
|**Writable**     |Streams para onde você pode escrever dados. | `fs.createWriteStream()`, `res` (no servidor HTTP)|
|**Duplex**       |Streams que são tanto Readable quanto Writable. | Um socket de rede (`net.Socket`)|
|**Transform**    |Um tipo de Duplex que modifica os dados enquanto eles são lidos/escritos. | Compressão gzip (`zlib.createGzip()`)|

Exemplo prático:

```javascript
const fs = require('fs');

// Cria uma stream de leitura (origem)
const readStream = fs.createReadStream('arquivo_gigante.txt');

// Cria uma stream de escrita (destino)
const writeStream = fs.createWriteStream('copia_arquivo_gigante.txt');

// Conecta as duas. O arquivo é copiado em "pedaços" eficientes.
readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('Arquivo copiado com sucesso e sem estourar a RAM!');
});

``










