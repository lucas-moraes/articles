---
title: Firewall
date: 2026-05-20
tags: [network]
---

### Firewall

Para compreender o Firewall de forma estritamente técnica e aprofundada, é necessário analisar seu comportamento nas camadas do modelo OSI (Open Systems Interconnection), suas arquiteturas de filtragem e os mecanismos de controle de estado de fluxo de dados.  

Um firewall é um sistema de segurança computacional que atua como um ponto de controle de tráfego, aplicando uma **Política de Segurança de Rede (NSP)** sobre fluxos de dados que cruzam diferentes perímetros de segurança ou zonas de confiança.  

---

🟢 **Funcionamento Baseado nas Camadas do Modelo OSI**. 

```bash
+------------------------------------+
|  Camada 7: Aplicação (HTTP/DNS)     | <-- NGFW / WAF / Proxy
+------------------------------------+
|  Camada 4: Transporte (TCP/UDP)     | <-- Stateful Inspection (Portas)
+------------------------------------+
|  Camada 3: Rede (IP)                | <-- Packet Filtering (IPs)
+------------------------------------+
```

🟢 **Camada 3 (Rede)**.  
Analisa datagramas IP. A filtragem é feita com base no IP de Origem, IP de Destino e o tipo de protocolo de camada superior indicado no cabeçalho IP (ex: se o protocolo é 0x06 para TCP ou 0x11 para UDP).

🟢 **Camada 4 (Transporte)**.  
Avalia segmentos TCP e datagramas UDP. O foco aqui são as Portas de Origem e Destino (que identificam os serviços, como 80/443 para HTTP/S, 22 para SSH) e os Flags TCP (SYN, ACK, FIN, RST), que indicam o estado da conexão.

🟢 **Camada 7 (Aplicação)**.  
Decodifica protocolos específicos da camada de aplicação (HTTP, HTTPS, FTP, DNS, SMTP). Em vez de olhar apenas para portas, ele inspeciona o comando exato que está sendo executado (ex: bloquear um método HTTP POST específico ou uma requisição de DNS do tipo TXT maliciosa).  

---

🟢 **Classificação Arquitetural e Mecanismos de Filtragem**.  
A evolução dos firewalls é definida pela profundidade de sua capacidade de análise. Tecnicamente, dividem-se em:  

A - Filtros de Pacotes Estáticos (Stateless Packet Filtering).  
Operam de forma isolada por pacote, predominantemente nas camadas 3 e 4.  
**Mecanismo**: Cada pacote que chega a uma interface é avaliado contra uma ACL (Access Control List) sequencial. O firewall não tem memória; ele não sabe se o pacote é o início, o meio ou o fim de uma sessão.  
**Limitação**: Para permitir o retorno de conexões legítimas iniciadas internamente, o administrador é forçado a abrir portas altas (geralmente de 1024 a 65535) para tráfego de entrada, gerando uma vulnerabilidade estrutural.  

B - Inspeção de Estado (Stateful Inspection / Stateful Packet Filtering)  
Introduz o conceito de Tabela de Estado (State Table). Ele monitora a sessão inteira desde o aperto de mão de três vias (TCP Three-Way Handshake — SYN, SYN-ACK, ACK).  
**Mecanismo**: Quando uma conexão interna legítima é iniciada (ex: cliente envia pacote com flag SYN para a porta 443 externa), o firewall cria uma entrada em sua tabela de estado registrando o socket completo: [IP Origem : Porta Origem | IP Destino : Porta Destino | Protocolo].  
**Vantagem**: Os pacotes de retorno vindos de fora só são permitidos se corresponderem perfeitamente a uma entrada ativa na tabela de estado. Assim que a conexão é encerrada (via flag FIN ou RST) ou expira por timeout, a entrada é removida. As portas de entrada permanecem fechadas por padrão.  

C - Gateways de Aplicação (Proxy Firewalls).  
Atuam como intermediários completos (man-in-the-middle legítimos) na Camada 7.  
**Mecanismo**: Um cliente interno não se conecta diretamente ao servidor externo; ele se conecta ao Proxy. O Proxy avalia a requisição a nível de aplicação, valida as regras e, se permitido, abre uma nova e separada conexão com o destino externo.  
**Vantagem**: Isolamento absoluto das pilhas de protocolo TCP/IP entre as redes interna e externa. No entanto, consome processamento massivo e introduz latência.  

D - Next-Generation Firewalls (NGFW).  
Combinam a tabela de estado tradicional com capacidades profundas de análise na mesma arquitetura de hardware:  
**Deep Packet Inspection (DPI)**: O firewall não lê apenas o cabeçalho; ele remonta o fluxo de dados em memória e escaneia o payload procurando assinaturas de malwares, exploits ou vazamento de dados (DLP).  
**Descriptografia SSL/TLS (Inbound/Outbound Inspection)**: Como a maior parte do tráfego web hoje é criptografada, o NGFW atua como uma autoridade certificadora intermediária para interceptar, descriptografar, inspecionar o tráfego de aplicação e criptografá-lo novamente antes do envio.  
**Controle de Aplicação Baseado em Assinatura**: Identifica o tráfego independentemente da porta utilizada. Se o protocolo BitTorrent ou uma VPN corporativa tentar rodar camuflada pela porta 443 (HTTPS), o NGFW identifica o comportamento heurístico do tráfego e o bloqueia.












