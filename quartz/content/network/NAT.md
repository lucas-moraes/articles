---
title: NAT
date: 2026-05-20
tags: [br,network]

---

### NAT

Imagine que você mora em um prédio de apartamentos enorme. Para o mundo exterior, o prédio inteiro tem apenas um endereço postal principal (a rua e o número do edifício). Mas lá dentro, existem centenas de apartamentos com números próprios (Ap 11, Ap 12, etc.).

Se você envia uma carta para fora, o porteiro do prédio anota quem enviou, coloca o endereço principal do edifício no remetente e despacha. Quando a resposta chega nesse endereço principal, o porteiro olha a tabelinha dele, vê para qual apartamento aquela carta realmente vai e a entrega para o morador certo.

O **NAT (Network Address Translation, ou Tradução de Endereços de Rede)** é exatamente esse porteiro, só que para a internet.

---

🟣 **Por que o NAT existe?**.  
O principal motivo da criação do NAT foi a escassez de endereços IPv4. O protocolo IPv4 (aqueles números tipo `192.168.1.1`) só permite cerca de 4,3 bilhões de endereços únicos no mundo inteiro. Com a explosão de computadores, celulares, TVs e relógios conectados, esses endereços acabaram.

Para resolver isso, a internet foi dividida em dois tipos de endereços:

\*_IPs Privados_: São usados dentro da sua casa ou empresa (a rede interna). Eles não valem na internet aberta. Vários roteadores no mundo usam exatamente os mesmos IPs privados (como o famoso `192.168.0.1`).

**IPs Públicos**: São endereços únicos no mundo, fornecidos pelo seu provedor de internet (Claro, Vivo, Starlink, etc.). Seu roteador recebe um desses.

O NAT é a tecnologia que fica no seu roteador fazendo a ponte entre esses dois mundos. Ele traduz os vários IPs privados da sua rede local em um único IP público para que eles possam navegar na internet.

---

🟣 **Como ele funciona na prática?**.  
Quando você está no celular e clica para abrir um site, o processo acontece em quatro passos rápidos:

→ **O Pedido**: Seu celular (IP privado 192.168.1.50) envia um pacote de dados querendo acessar o Google.

→ **A Tradução (NAT)**: O pacote passa pelo seu roteador. O roteador raspa o IP privado do celular e o substitui pelo IP público da sua casa (ex: 200.100.50.1).

→ **A Anotação**: O roteador anota em uma tabela interna (Tabela NAT): "O celular daquele IP privado pediu o site X usando a porta de comunicação Y".

O Retorno: Quando o Google responde, ele envia os dados para o seu IP público. O roteador recebe, checa a tabela, vê que aquela resposta pertence ao celular e repassa os dados para o IP privado correto.
