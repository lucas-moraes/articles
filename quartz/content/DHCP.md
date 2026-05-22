---
title: DHCP
date: 2026-05-21
tags: [protocols]
---

### DHCP

O **DHCP (Dynamic Host Configuration Protocol, ou Protocolo de Configuração Dinâmica de Hosts)** é um protocolo de camada de aplicação (Camada 7 do modelo OSI) que opera sobre a arquitetura TCP/IP utilizando o protocolo de transporte UDP (portas 67 para o servidor e 68 para o cliente).  

A sua função primária é automatizar e gerenciar centralizadamente a atribuição de parâmetros de configuração de rede para os dispositivos (hosts) que se conectam a uma infraestrutura local. Sem o DHCP, cada dispositivo exigiria uma configuração estática e manual, o que escalaria a complexidade de gerenciamento e aumentaria drasticamente a incidência de erros humanos, como conflitos de IP.  

---

1 - 🔵 **O Mecanismo de Alocação: O Processo DORA**.  
Quando um dispositivo é inicializado ou conecta sua interface de rede (seja via cabo Ethernet ou Wi-Fi) e está configurado para obter um endereço automaticamente, ele inicia um processo de conversação estruturado em quatro etapas principais, conhecido pelo acrônimo **DORA**:  

```bash
Cliente DHCP                                      Servidor DHCP
    |                                                   |
    | ------------ 1. DISCOVER (Broadcast) -----------> |
    | <----------- 2. OFFER (Unicast/Broadcast) ------- |
    | ------------ 3. REQUEST (Broadcast) ------------> |
    | <----------- 4. ACK (Unicast/Broadcast) --------- |
    |                                                   |
```

→ **Discover (Descoberta)**.  
Como o host recém-conectado ainda não possui um endereço IP e não sabe quem é o servidor DHCP da rede, ele envia um pacote DHCPDISCOVER. Este pacote é um broadcast de Camada 3 (IP de origem `0.0.0.0` e IP de destino `255.255.255.255`) e também um broadcast de Camada 2 (endereço MAC de destino `FF:FF:FF:FF:FF:FF`). O pacote carrega o endereço MAC físico da interface do cliente.  

→ **Offer (Oferta)**.  
Todos os dispositivos da rede local recebem o broadcast, mas apenas os servidores DHCP ativos respondem. O servidor analisa seu escopo de IPs disponíveis, reserva temporariamente um endereço e envia de volta um pacote DHCPOFFER. Este pacote contém o IP proposto para o cliente, a máscara de sub-rede, o tempo de concessão e o IP do próprio servidor. Dependendo da implementação do sistema operacional, essa resposta pode ser enviada via unicast (direto para o MAC do cliente) ou via broadcast.  

→ **Request (Solicitação)**.  
O cliente, ao receber a oferta (ou múltiplas ofertas, caso haja mais de um servidor DHCP na rede), escolhe uma delas e envia um pacote DHCPREQUEST. Este pacote é enviado novamente via broadcast. O motivo de ser um broadcast é explícito: serve para notificar o servidor escolhido de que sua oferta foi aceita e, simultaneamente, avisar aos outros servidores DHCP da rede que eles podem liberar os IPs que haviam reservado temporariamente.  

→ **Ack (Confirmação / Acknowledgement)**.  
O servidor DHCP selecionado recebe o pedido, formaliza a alocação em seu banco de dados e responde com um pacote DHCPACK. Este pacote consolida a concessão e envia os parâmetros de rede finais para o host. Assim que o cliente recebe o DHCPACK, ele aplica as configurações à sua interface e passa a trafegar na rede.

---

2 - 🔵 **Parâmetros de Configuração Injetados pelo DHCP**.  
O DHCP vai muito além da entrega de um endereço IP isolado. O pacote DHCPACK injeta uma série de opções padronizadas (DHCP Options) diretamente na pilha TCP/IP do cliente. As principais são:  

- **Endereço IP e Máscara de Sub-rede (Subnet Mask)**: Define a identidade do host e o limite de sua rede local (ex: IP `192.168.10.50` com máscara `255.255.255.0`).  

- **Gateway Padrão (Default Gateway / Option 3)**: O endereço IP do roteador da rede local. Indica para onde o host deve enviar pacotes cujos destinos estão fora da sua rede local.  

- **Servidores DNS (Domain Name System / Option 6)**: Fornece os IPs dos servidores (locais ou externos) responsáveis por traduzir nomes de domínio (como google.com) em endereços IP.  

- **Nome de Domínio (Option 15)**: Define o sufixo de domínio local do host (ex: empresa.local), facilitando a resolução de nomes internos.  

---

3 - 🔵 **Arquitetura de Concessão: Conceito de Lease Time**.  
As atribuições do DHCP não são permanentes; elas funcionam sob o conceito de Lease (Locação/Concessão). Cada IP é emprestado por um período específico determinado pelo administrador, chamado Lease Time.  

Para evitar a perda de conectividade, o cliente tenta renovar seu contrato automaticamente em momentos estratégicos usando pacotes DHCPREQUEST direcionados (via unicast) ao servidor original:  

- **Tempo T1 (50% do Lease Time)**: O cliente entra no estado de Renovação. Ele envia um DHCPREQUEST diretamente ao servidor. Se o servidor responder com um DHCPACK, o cronômetro é zerado e o tempo de concessão é reiniciado.  

- **Tempo T2 (87.5% do Lease Time)**: Se o servidor original não responder até este ponto (talvez por estar offline), o cliente entra no estado de Reassociação. Ele passa a enviar pacotes DHCPREQUEST via broadcast para tentar renovar seu IP com qualquer servidor DHCP disponível na rede.  

- **Expirado (100%)**: Se nenhum servidor responder até o fim do Lease Time, o cliente perde o direito de usar o IP. A interface de rede descarta a configuração e o processo recomeça do zero com um DHCPDISCOVER.  

---

4 - 🔵 **Tipos de Alocação de Endereços**.  
Um servidor DHCP pode ser configurado para distribuir endereços de três formas distintas:  

- **Alocação Dinâmica**: O servidor distribui IPs automaticamente a partir de um intervalo predefinido (Pool/Escopo) por tempo limitado. É o modelo padrão para redes Wi-Fi públicas ou redes domésticas.  

- **Alocação Automática**: Semelhante à dinâmica, mas o servidor associa o IP de forma permanente ao endereço MAC do dispositivo na primeira conexão. O dispositivo receberá sempre o mesmo IP, mesmo sem uma reserva prévia explícita.  

-- **Alocação Estática (Reserva de DHCP)**: O administrador mapeia manualmente um endereço MAC específico a um endereço IP fixo dentro do servidor DHCP. Quando aquele dispositivo se conecta, o DHCP entrega sempre aquele mesmo IP. É ideal para servidores internos, impressoras de rede e dispositivos de infraestrutura que necessitam de IPs previsíveis, mas que ainda se beneficiam da centralização do gerenciamento de DNS e Gateway pelo DHCP.  

---
































