---
title: modulos-e-importacao
date: 2026-04-27
tags: [nodejs]
---

### Módulos e Sistema de importação
[[0-NodeJS-introducao]]

Esses três tópicos são fundamentais para entender como o NodeJS organiza o código e como ele escala de um único arquivo para sistemas complexos.  

### CommonJS (CJS) vs. ES Modules (ESM)
Até alguns anos atrás, o NodeJS usava apenas o CommonJS. com a padronização do JavaScript (ES6), o ES Modules foi introduzido e hoje é o padrão da linguagem, embora ambos coexistam no ecossistema Node.

**Diferenças práticas:  

|Características|CommonJS (CJS)                                       |ES Modules (ESM)                           |
|:--------------|:----------------------------------------------------|:------------------------------------------|
|Sintaxe        |```require()``` / ```module.exports``` |```import``` / ```export```            |
|Carregamento   |Síncrono                                             |Assíncrono                                 |
|Extensão padrão|```.js``` (ou ```.cjs```)              |```.mjs``` (ou ```.js``` com ```"type": "module"```)|
|Top-level Await|Não suportado  |Suportado (pode usar ```await``` fora de funções)|
|Variáveis de ambiente|Possui ```__dirname``` e ```__filename```|Não possui (precisa de ```import.meta.url```)|

**Quando usar cada um?**. 
→ **ES Modules:** Use em **todos os projetos novos.** É o padrão oficial, permite *Tree Shaking* (remover código não usado no build) e funciona nativamente no navegador e no Node.  
→ **CommonJS:** Use apenas se estiver mantendo **Projetos legados** ou se precisar de uma biblioteca muito específica que ainda não tenha migrado para ESM (o que é raro hoje em dia).  

### Module Resolution: Como o NodeJS encontra arquivos
O processo de busco de um módulo segue uma hierarquia rigorosa.  
Quando fazemos ```require('xyz')``` ou ```import x from 'xyz'```, o Node segue estes passos:
1. **Módulos Core:** Ele verifica se 'xyz' é um módulo nativo (ex: ```fs```, ```path```, ```http```). Se for, ele para aqui.
2. **Módulos de arquivo (Relativos/Absolutos):** Se começar com ```"./"```, ```"/"``` ou ```"../"```, ele busca o arquivo exato no sistema.
3. **Módulos de pacote (```node_modules```):** Se não for um caminho relativo, o Node busca na pasta <b>node_modules</b> do diretorio atual. Se não encontrar, ele sobe para o diretório pai e procura na <span>node_modules</span> de lá, repetindo isso até a rais do sistema de arquivos.
4. ```package.json```: Ao entrar em uma pasta de módulo, ele olha o campo ```"main"``` (CJS) ou ```"exports"``` (ESM) para saber qual arquivo carregar.  

### Circular dependencies (Dependências circulares)
Uma dependência circular ocorre quando o módulo A importa o módulo B, e o módulo B, por sua vez, importa o módulo A.  

**Como o NodeJS lida com isso?**. 
O NodeJS não quebra ou trava, mas ele pode retornar um **objeto incompleto**
• No CommonJS: Se A importa B enquanto ainda está sendo, B receberá uma versão "inacabada" de A (geralmente um objeto vazio <span>{}</span>). 
Isso causa erros de <span>undefined</span> difíceis de rastrear.  

**Como evitar e resolver?**. 
1. **Refatoração (Extração):** Se A e B dependem um do outro, provavelmente existe um código comum a ambos. Mova esse código para um **Módulo C** que A e B possam importar.
2. **Injeção de dependência:** Em vez de B importar A, faça com que A passe o que B precisa como um argumento ou função;
3. **Importação tardia (lazy loading):** No CommonJS, você pode remover o ```require()``` para dentro de uma função, para que ele só seja executado quando a função for chamada, e não no carregamento do arquivo.  
**Dica de outro:** Se você encontrar um erro onde uma função importada é ```undefined```, mas o arquivo parece estar correto, verifique imediatamente se não há um cilco de importação entre esses arquivos.
</details>
