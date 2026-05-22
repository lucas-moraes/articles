---
title: VPN
date: 2026-05-21
tags: [network]
---

### VPN

Uma **VPN (Virtual Private Network, ou Rede Privada Virtual)** é uma tecnologia de segurança de rede desenvolvida para estender uma rede privada de forma segura sobre uma infraestrutura de rede pública e não confiável (tipicamente, a Internet).  
Em termos de arquitetura e engenharia de redes, uma VPN opera encapsulando e, na grande maioria das implementações, criptografando os dados trafegados. Isso garante três pilares fundamentais da segurança da informação: Confidencialidade (ninguém no caminho consegue ler os dados), Integridade (os dados não podem ser alterados em trânsito) e Autenticidade (garantia de identidade entre as pontas conectadas).  

---

1 - 🟣 **O Mecanismo Técnico: Tunelamento e Encapsulamento**.  
O conceito central de uma VPN é o Tunelamento. Ele consiste em envelopar um pacote de dados de rede dentro de outro pacote de dados.

```bash
+-------------------------------------------------------------+
| Pacote Externo (Roteável na Internet)                       |
| [ Cabeçalho IP Público ]                                    |
|                                                             |
|   +-----------------------------------------------------+   |
|   | Carga Útil Criptografada (Payload)                  |   |
|   |                                                     |   |
|   |   +---------------------------------------------+   |   |
|   |   | Pacote Original Interno (Escondido)         |   |   |
|   |   | [ Cabeçalho IP Privado ] [ Dados Reais ]    |   |   |
|   |   +---------------------------------------------+   |   |
|   +-----------------------------------------------------+   |
+-------------------------------------------------------------+
```

1 - **Captura**: O cliente VPN intercepta o tráfego gerado pela máquina do usuário na camada de rede (Camada 3 do modelo OSI).  

2 - **Encapsulamento e Criptografia**: O pacote IP original (contendo IPs internos e dados brutos) é criptografado, tornando-se ilegível. Ele é então inserido como payload (carga útil) dentro de um novo pacote IP.  

3 - **Roteamento**: O novo pacote exibe um cabeçalho IP público, cujos endereços de origem e destino correspondem estritamente ao dispositivo do usuário e ao gateway (servidor) da VPN. Os roteadores intermediários da internet realizam o encaminhamento baseando-se apenas nesse cabeçalho externo.  

4 - **Desencapsulamento: Ao atingir o gateway VPN de destino, o pacote externo é descartado, o conteúdo interno é descriptografado e o pacote original é roteado para o seu destino final dentro da rede privada ou na internet.  

---

2 - 🟣 **Protocolos de VPN mais Utilizados**   
A segurança, a latência e a estabilidade de uma VPN dependem diretamente do protocolo de tunelamento escolhido:  

**WireGuard**: O padrão moderno da indústria. Opera inteiramente no espaço de kernel (em sistemas Linux e BSD), o que reduz drasticamente a alternância de contexto (context switching) e oferece throughput (taxa de transferência) muito superior e menor latência. Utiliza criptografia de última geração fixada (como Curve25519 e ChaCha20-Poly1305) com uma base de código extremamente enxuta e fácil de auditar.  

**OpenVPN**: Altamente flexível e maduro. Pode rodar tanto sobre UDP (para melhor performance) quanto sobre TCP (para burlar firewalls, simulando tráfego HTTPS padrão na porta 443). Utiliza a biblioteca OpenSSL para criptografia, mas por rodar no espaço de usuário (user space), possui maior overhead computacional comparado ao WireGuard.  

**IPsec (Internet Protocol Security)**: Um conjunto de protocolos de segurança frequentemente combinado com IKEv2 (Internet Key Exchange version 2). Muito utilizado em conexões de infraestrutura corporativa devido ao suporte nativo em hardware de roteadores e sua robustez no tratamento de trocas dinâmicas de chaves de criptografia.  

**PPTP / L2TP**: Protocolos legados. O PPTP possui falhas criptográficas conhecidas e é considerado obsoleto. O L2TP, por não possuir criptografia nativa, exige o uso combinado do IPsec, resultando em encapsulamento duplo e degradação de performance.  

---

3 - 🟣 **Principais Modelos de Implementação**. 
As arquiteturas de VPN adaptam-se aos diferentes cenários de infraestrutura e objetivos de uso:  

**Site-to-Site (Ponto a Ponto)**.  
Conecta redes inteiras de localidades distintas permanentemente através da internet (por exemplo, interligando o data center de uma filial à matriz da empresa). Gateways dedicados (roteadores ou firewalls de borda) em ambas as pontas lidam com o tunelamento de forma transparente para os hosts locais; os computadores de ambas as redes se comunicam diretamente como se estivessem no mesmo switch, sem precisar de softwares clientes instalados.  

**Remote Access (Acesso Remoto / Client-to-Site)**.  
Conecta um usuário individual (trabalhador remoto) à rede corporativa interna. O usuário executa um software cliente VPN em sua máquina local, que autentica suas credenciais junto ao servidor da empresa e estabelece o túnel criptografado seguro. O dispositivo do usuário recebe dinamicamente um IP pertencente ao escopo da rede privada corporativa.  

**VPN Comercial / Proxy de Privacidade**  
Embora tecnicamente utilize a mesma arquitetura de Acesso Remoto, o objetivo de mercado deste modelo é diferente. O usuário se conecta ao servidor de um provedor comercial de VPN para que seu tráfego seja descriptografado e injetado na internet pública a partir dali. Isso esconde o IP real do usuário dos servidores web finais e impede que o Provedor de Acesso local (ISP) monitore o histórico de navegação.  

---

4 - 🟣 **Gerenciamento de Tráfego: Split Tunneling vs. Full Tunneling**.  
No desenho de uma arquitetura de acesso remoto, a configuração das tabelas de roteamento do cliente define como o tráfego será escoado:  

**Full Tunneling (Túnel Completo)**: Toda e qualquer requisição de rede gerada pelo dispositivo do usuário é forçada a passar pelo túnel VPN. Se o usuário estiver conectado à VPN da empresa e decidir abrir um vídeo no YouTube, esse tráfego pesado irá navegar até o gateway da empresa e depois sairá para a internet. Garante máxima segurança e auditoria, mas consome largura de banda massiva do link corporativo.  

**Split Tunneling (Túnel Dividido)**: O cliente VPN altera a tabela de roteamento local de forma seletiva. Apenas o tráfego destinado às sub-redes internas da empresa (ex: 10.0.0.0/8) é direcionado para dentro do túnel criptografado. O tráfego para a internet comum (como navegação web geral e serviços de streaming) sai diretamente pela interface de rede local do usuário, otimizando o desempenho e poupando os recursos do gateway central.  





















