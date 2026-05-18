---
title: Modelo TCP/IP
date: 2026-05-15
tags: [network]
---

### Modelo TCP/IP

O modelo TCP/IP (Transmission Control Protocol/Internet Protocol) é o conjunto de protocolos que forma a base da Internet moderna. Diferente do Modelo OSI, que é mais teórico e possui 7 camadas, o TCP/IP é um modelo prático e simplificado com 4 camadas principais.  

|### |OSI MODEL|
|:---|:---------------|
|7|⭕️ Application        |
|6|⭕️ Presentation       |
|5|⭕️ Session            |
|4|Transport          |
|3|Network            |
|2|Data Link          |
|1|Physical           |
.   

|### |TCP/IP Model|
|:---|:---------------|
|4|⭕️ Application|
|3|Transport|
|2|Internet|
|1|Network Access|
.  



**As 4 camadas do Modelo TCP/IP**

----


4 - 🟡 **Camada de Aplicação**.  
Esta camada equivale às três camadas superiores do modelo OSI (Aplicação, Apresentação e Sessão). É onde os aplicativos (navegadores, clientes de e-mail) interagem com a rede.  

→ **Protocolos: HTTP (web), SMTP (e-mail), DNS (resolução de nomes), FTP (arquivos).**.  

3 - 🟡 **Camada de Transporte**.  
Responsável pela comunicação entre as aplicações nos dispositivos de origem e destino. Ela garante que os dados cheguem corretamente através de dois protocolos fundamentais:  

→ **TCP: Focado em confiabilidade. Ele verifica se os dados chegaram e os organiza na ordem correta**.  
→ **UDP: Focado em velocidade. Não verifica a entrega (comum em streamings e jogos)**.  

2 - 🟡 **Camada de Internet**.  
Esta camada é o "coração" da rede. Ela define como os dados são endereçados e roteados através das redes até o destino final, utilizando endereços IP.  

→ **Protocolos: IPv4, IPv6, ICMP (usado no comando ping), ARP**.  
→ **Unidade de dados: Pacotes**.  

1 - 🟡 **Camada de Acesso à Rede**.  
Agrupa as camadas Física e de Enlace do modelo OSI. Ela lida com a infraestrutura física (cabos, Wi-Fi, placas de rede) e o mapeamento de endereços MAC para que os dados circulem dentro da rede local.  

→ **Protocolos: Ethernet, Wi-Fi (802.11)**.  

















