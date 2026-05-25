---
title: ARP
date: 2026-05-19
tags: [protocols]

---

### ARP

O **ARP (Address Resolution Protocol, ou Protocolo de Resolução de Endereços)** é um protocolo auxiliar fundamental que opera na fronteira entre a camada de Internet (Rede) e a camada de Acesso à Rede (Enlace) no modelo TCP/IP.  
A sua única e vital função é traduzir um endereço IP (lógico) em um endereço MAC (físico) dentro de uma rede local.  
Para entender o porquê dele ser indispensável, pense no seguinte cenário: o protocolo IP sabe encaminhar os dados globalmente até a rede certa, mas quando o pacote chega na rede local (LAN), as placas de rede e os switches não entendem endereços IP; eles só sabem entregar dados se souberem o endereço MAC exato do hardware de destino. O ARP é a ponte que resolve esse mistério.

---

**Como o ARP funciona na prática (O fluxo de pergunta e resposta)**.  
Imagine que o Computador A (IP `192.168.1.10`) quer enviar um arquivo para o Computador B (IP `192.168.1.25`), que está na mesma rede, mas o Computador A ainda não sabe o endereço MAC do Computador B.  

O processo ocorre em duas etapas rápidas:  

1 - **ARP Request (A Pergunta em Broadcast)**.  
O Computador A envia uma mensagem para a rede inteira (Broadcast), dizendo:  

"Quem tem o IP `192.168.1.25?` Por favor, responda para o meu endereço MAC `AA:BB:CC:DD:EE:FF`!"  
Como a mensagem é enviada em Broadcast, o endereço MAC de destino do quadro de rede é preenchido com `FF:FF:FF:FF:FF:FF`, fazendo com que todos os dispositivos da rede local recebam e leiam a pergunta.  

2 - **ARP Reply (A Resposta em Unicast)**.  
Todos os computadores da rede recebem o pedido, olham para o IP solicitado e ignoram, pois não é o deles. No entanto, o Computador B reconhece seu próprio IP e responde diretamente (Unicast) para o Computador A:  

"Eu sou o IP `192.168.1.25` e o meu endereço MAC físico é `00:11:22:33:44:55`."  

A partir desse momento, o Computador A aprende o endereço físico, encapsula o pacote IP dentro de um quadro Ethernet com o MAC correto e envia os dados.





