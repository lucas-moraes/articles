---
title: WIFI
date: 2026-05-19
tags: [protocols]

---

### Wi-Fi

O Wi-Fi é a tecnologia de rede local sem fio (WLAN) mais popular do mundo. Desenvolvido e mantido pelo comitê IEEE 802.11, ele funciona de forma muito parecida com o Ethernet, mas com uma diferença crucial: em vez de enviar impulsos elétricos ou luz por cabos, o Wi-Fi converte os dados em ondas de rádio que se propagam pelo ar.  

No modelo TCP/IP, assim como o Ethernet, o Wi-Fi atua na camada de Acesso à Rede (física e enlace).  

---

**Como o Wi-Fi gerencia o ar? (O Protocolo CSMA/CA)**. 
No cabo Ethernet clássico, os dados trafegam em canais separados de envio e recebimento (Full-Duplex). No Wi-Fi, o ar é um meio compartilhado e opera em Half-Duplex: apenas um dispositivo pode transmitir em um determinado canal por vez. Se dois celulares tentarem falar com o roteador exatamente no mesmo microssegundo, as ondas se chocam e os dados são destruídos.  

Para evitar isso, o Wi-Fi usa o protocolo CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance - Evitação de Colisão):  

Antes de transmitir, a placa Wi-Fi "escuta" o ar para ver se o canal está livre.  

Se alguém estiver transmitindo, ela espera um tempo aleatório.  

Se o canal estiver limpo, ela avisa a rede que vai transmitir e envia o pacote.  

O receptor precisa enviar um sinal de confirmação (ACK). Se o ACK não chegar, o remetente assume que houve interferência e tenta de novo.  

---

**Segurança no Wi-Fi: Criptografia Essencial**. 
Como as ondas de rádio voam para fora da sua casa, qualquer antena poderia capturar seus dados se eles não fossem protegidos. Os padrões de segurança evoluíram para cifrar essa comunicação:  

**WEP**: O primeiro padrão. Hoje é completamente obsoleto e inseguro, podendo ser quebrado em minutos com softwares simples.  

**WPA2**: Tornou-se o padrão da indústria por mais de uma década (usando criptografia AES). Ainda é muito seguro para uso doméstico, mas vulnerável a alguns ataques específicos de força bruta.  

**WPA3**: O padrão moderno e obrigatório nas gerações recentes. Introduziu proteção robusta contra adivinhação de senhas e criptografia individualizada para cada dispositivo conectado, mesmo em redes sem senha (como aeroportos).  