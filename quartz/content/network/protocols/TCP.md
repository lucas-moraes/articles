---
title: TCP
date: 2026-05-18
tags: [br,protocols]

---


### TCP

O TCP (Transmission Control Protocol, ou Protocolo de Controle de Transmissão) é um dos protocolos fundamentais da camada de Transporte da internet. Enquanto o IP se preocupa em levar os pacotes de um ponto A até um ponto B, o TCP garante que esses dados cheguem de forma íntegra, organizada e confiável.  

A esmagadora maioria dos serviços que você usa e que não podem aceitar perda de dados — como o carregamento de sites (HTTP/HTTPS), envio de e-mails (SMTP/IMAP) e transferência de arquivos (FTP/SSH) — roda em cima do TCP.  

---

🟡 **Principais Características do TCP**.  
✦ **Orientado à Conexão**: O TCP não envia nenhum dado antes de estabelecer um "diálogo" inicial com o destino e garantir que ele está pronto para receber informações.  

✦ **Confiabilidade absoluta**: Ele garante que 100% dos dados enviados cheguem ao destino. Se um pacote for perdido ou corrompido no caminho, o TCP solicita automaticamente a sua retransmissão.  

✦ **Entrega Ordenada**: A internet pode fazer com que pacotes de dados peguem caminhos diferentes e cheguem fora de ordem. O TCP numera cada pacote (sequenciamento) e os remonta na ordem exata na máquina de destino.  

✦ **Controle de Fluxo e Congestionamento**: O TCP analisa a velocidade da rede e a capacidade de processamento do destinatário. Se o receptor estiver sobrecarregado, o TCP diminui o ritmo de envio para evitar a perda de pacotes.  

---

🟡 **Como a conexão é criada? (O Three-Way Handshake)**.  
Para garantir que ambos os lados estão prontos para transmitir e receber dados, o TCP utiliza um processo de abertura de conexão em três etapas, conhecido como Three-Way Handshake (Aperto de Mão em Três Vias):  

**SYN (Synchronize)**: O cliente envia um pacote inicial com a flag SYN ativa para o servidor, indicando que deseja iniciar uma conexão e informando um número de sequência inicial aleatório.  

**SYN-ACK (Synchronize-Acknowledgment)**: O servidor recebe a solicitação, reserva recursos para aquela conexão e responde com um pacote contendo as flags SYN e ACK. Ele confirma que recebeu a solicitação do cliente e envia seu próprio número de sequência.  

**ACK (Acknowledgment)**: O cliente recebe a resposta do servidor e envia um pacote final com a flag ACK, confirmando que recebeu o sinal.  

A partir deste momento, o "túnel" virtual está aberto e a transferência real de dados pode começar.  

---

🟡 **Estrutura do Segmento TCP**  
Na camada de transporte, os dados recebidos da camada de aplicação são fragmentados e encapsulados no que chamamos de Segmento TCP. O cabeçalho desse segmento contém informações vitais para o protocolo funcionar:  

**Porta de Origem e Destino**: Identificam quais aplicações específicas (como o navegador na porta de origem e o servidor web na porta 80/443 de destino) estão se comunicando.  

**Número de Sequência (Sequence Number)**: Usado para reordenar os pacotes no destino.  

**Número de Confirmação (Acknowledgment Number)**: Informa ao remetente qual é o próximo byte que o receptor espera receber.  

**Flags (Control Bits)**: Bits de controle que ditam o estado da conexão (como SYN, ACK, FIN para encerrar a conexão, e RST para resetá-la).  

**Janela de Recepção (Window Size)**: Informa quantos bytes o receptor consegue aceitar antes de enviar uma confirmação, controlando o fluxo.  

---

🟡 **O Encerramento da Conexão (Four-Way Handshake)**.  
Diferente da abertura, o encerramento de uma conexão TCP exige quatro etapas porque ela é Full-Duplex (ambos os lados podem transmitir de forma independente, e um lado pode terminar de enviar dados enquanto o outro ainda tem dados a transmitir).  

O Cliente envia um pacote FIN (Finish).  
O Servidor responde com um ACK para confirmar o recebimento do pedido, mas pode continuar enviando dados se necessário.  
Quando o Servidor também termina suas transmissões, ele envia seu próprio pacote FIN.  
O Cliente responde com um ACK final, e a conexão é encerrada de vez.  

















