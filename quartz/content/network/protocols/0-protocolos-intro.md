---
title: Protocolos-intro
date: 2026-05-15
tags: [br,protocols, network]

---

### Protocolos de rede

Os protocolos de rede são conjuntos de regras e padrões que permitem que dispositivos diferentes "falem a mesma língua" e troquem dados de forma organizada. Eles atuam em diferentes níveis, desde a fiação física até a interface que você vê no seu navegador.

Para facilitar o entendimento, os protocolos costumam ser divididos pelas camadas do modelo TCP/IP:

---

1 - 🟣 **Camada de Aplicação (Onde o usuário interage)**

Estes protocolos definem como os serviços de rede (web, e-mail, arquivos) funcionam.

→ **HTTP/HTTPS**: Base da navegação web. O HTTPS adiciona uma camada de criptografia (SSL/TLS).  
→ **DNS (Domain Name System)**: O "catálogo telefônico" da internet; traduz nomes (google.com) em endereços IP.  
→ **FTP**: Usado para transferência de arquivos entre um cliente e um servidor.  
→ **SMTP/IMAP/POP3**: Protocolos específicos para envio e recebimento de e-mails.  
→ **SSH**: Permite o acesso e controle remoto de computadores de forma segura.

---

2 - 🟣 **Camada de Transporte (Como os dados são levados)**.

Define como os dados serão empacotados e entregues.

→ **TCP (Transmission Control Protocol)**: É orientado à conexão. Ele garante que todos os dados cheguem na ordem correta e sem erros. Se um pacote se perde, ele pede o reenvio.  
→ **UDP (User Datagram Protocol)**: Não é orientado à conexão. É muito mais rápido que o TCP, mas não garante a entrega. Ideal para transmissões ao vivo (streaming) e jogos online.

---

3 - 🟣 **Camada de Internet (Onde o roteamento acontece)**.

Responsável pelo endereçamento e pelo caminho que o dado percorre.

→ **IP (Internet Protocol)**: O mais importante desta camada. Define o endereço de origem e destino (IPv4 ou IPv6).  
→ **ICMP**: Usado para mensagens de erro e diagnóstico (é o protocolo utilizado pelo comando ping).  
→ **ARP (Address Resolution Protocol)**: Traduz um endereço IP em um endereço físico (MAC Address).

---

4 - 🟣 **Camada de Acesso à Rede (O meio físico)**

Define como os bits são transmitidos eletricamente ou por sinais de rádio.

→ **Ethernet**: O padrão para conexões cabeadas (cabos RJ45).  
→ **Wi-Fi (802.11)**: Protocolo para transmissão de dados via ondas de rádio.  
→ **Bluetooth**: Protocolo de curto alcance para dispositivos periféricos.
