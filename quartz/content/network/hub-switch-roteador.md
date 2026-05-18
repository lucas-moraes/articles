---
title: Hub, Switch e Roteador - Equipamentos
date: 2026-05-15
tags: [network]
---

### Hub - O difusor ineficiente
O Hub é o dispositivo mais básico (e hoje quase obsoleto). Ele opera na Camada 1 (Física) do modelo OSI.  
→ **Como funciona**: Quando um Hub recebe um pacote de dados em uma porta, ele não sabe para quem se destina. Por isso, ele simplesmente replica esse sinal para todas as outras portas.  
→ **Problema**: Isso gera muito tráfego desnecessário e aumenta a chance de "colisões" de dados, já que todos os dispositivos compartilham a mesma largura de banda.  
→ **Analogia**: É como um palestrante gritando uma mensagem para uma sala cheia; todos ouvem, mas apenas o destinatário deveria prestar atenção.  

### Switch: O Direcionador Inteligente
O Switch é uma evolução direta do Hub e opera na Camada 2 (Enlace). Ele é o padrão para redes locais (LAN) modernas.  
→ **Como funciona**: O Switch aprende o endereço físico (MAC Address) de cada dispositivo conectado a ele. Quando um dado chega, ele o envia apenas para a porta onde o destinatário está.  
→ **Vantagem**: Cria canais de comunicação dedicados entre os dispositivos, eliminando colisões e melhorando drasticamente a performance da rede.  
→ **Analogia**: É como uma central de correios que lê o endereço no envelope e entrega a carta diretamente na caixa postal correta.  

### Roteador: O Guia de Tráfego
O Roteador opera na Camada 3 (Rede). Enquanto Hubs e Switches conectam dispositivos para formar uma rede, o Roteador conecta redes entre si (como a sua casa à Internet).  
→ **Como funciona**: Ele utiliza endereços IP para determinar o melhor caminho para os dados viajarem entre redes diferentes. Ele também possui funções de segurança (Firewall) e atribuição de IPs (DHCP).  
→ **Diferencial**: É o único dos três que consegue "ler" para onde o dado deve ir fora da rede local.  
→ **Analogia**: É como um controlador de tráfego aéreo ou um GPS que decide qual rodovia os dados devem pegar para chegar a outra cidade.  