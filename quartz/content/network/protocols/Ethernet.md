---
title: Ethernet
date: 2026-05-19
tags: [br,protocols]

---

### Ethernet

O Ethernet é a tecnologia de rede local (LAN) com fio mais utilizada no mundo. Desenvolvido originalmente pela Xerox na década de 1970 e padronizado posteriormente pelo comitê IEEE 802.3, ele define as regras de como os dados são formatados, transmitidos e recebidos através de cabos físicos.  
No modelo TCP/IP, o Ethernet opera na camada de Acesso à Rede (abrangendo as camadas Física e de Enlace do Modelo OSI). Ele é o responsável por fazer a conexão final entre o seu computador, o switch e o roteador da sua casa ou escritório.  

---

**Como o Ethernet funciona: A anatomia do Quadro (Frame)**. 
Na camada de enlace, os pacotes vindos da camada de Internet (IP) são encapsulados em estruturas chamadas Quadros Ethernet (Ethernet Frames). Cada quadro tem um limite de tamanho (geralmente entre 64 e 1518 bytes) e possui uma estrutura bem definida:  

**Preâmbulo (Preamble)**: Uma sequência de bits utilizada para sincronizar o relógio (timing) entre as placas de rede do remetente e do destinatário.  

**MAC de Destino**: O endereço físico da placa de rede que deve receber o dado.  

**MAC de Origem**: O endereço físico do dispositivo que está enviando.  

**Tipo/Comprimento (Type/Length)**: Indica qual protocolo de rede está encapsulado ali dentro (na maioria das vezes, o IPv4 ou IPv6).  

**Dados (Payload)**: O pacote IP real contendo a informação.  

**FCS (Frame Check Sequence)**: Um código de verificação de erros (CRC). O receptor calcula esse valor e, se ele não bater com o que foi enviado, significa que o quadro foi corrompido no cabo e ele é descartado.  









