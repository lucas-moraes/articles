---
title: IP
date: 2026-05-19
tags: [protocols]
---

### IP

O **IP (Internet Protocol, ou Protocolo de Internet)** é o protocolo fundamental da camada de Internet (ou camada de Rede no modelo OSI). Ele funciona como a engrenagem principal que permite que trilhões de dispositivos ao redor do mundo localizem uns aos outros e troquem informações.  
Se o TCP e o UDP são os responsáveis por como a carga é empacotada e tratada, o IP é o sistema postal que define o endereço de entrega e o caminho que o pacote deve seguir.

---

🟣 **As Duas Principais Funções do IP**.  
→ **Endereçamento**: Cada dispositivo conectado a uma rede (computador, celular, servidor, impressora) recebe uma identificação numérica única chamada Endereço IP. Sem esse endereço, a rede não sabe para onde enviar os dados.  

→ **Roteamento**: O IP define como os pacotes de dados saltam de roteador em roteador através da infraestrutura global até alcançar o destino final. O IP adota uma estratégia de "melhor esforço" (best-effort), o que significa que ele faz o máximo para entregar o pacote, mas não garante se ele vai chegar ou se chegará em ordem (deixando essa checagem para o TCP).  

---

🟣 **IPv4 vs. IPv6: A Evolução dos Endereços**.  
Existem duas versões do protocolo IP coexistindo na internet atualmente. A transição ocorre porque os bilhões de dispositivos modernos esgotaram os endereços disponíveis na versão antiga.  

**IPv4 (Internet Protocol version 4)**.  
É o padrão tradicional criado na década de 1980.  
→ **Formato**: Composto por 32 bits, divididos em 4 blocos de números decimais separados por pontos (ex: `192.168.0.1`). Cada bloco varia de 0 a 255.  
→ **Capacidade**: Permite aproximadamente *4,3 bilhões* de endereços únicos. Com a explosão de smartphones, computadores e dispositivos IoT, esses endereços praticamente acabaram no mundo todo.  

**IPv6 (Internet Protocol version 6)**.  
É a versão moderna desenvolvida para substituir o IPv4 e garantir o futuro da internet.  
→ **Formato**: Composto por 128 bits, escritos em formato hexadecimal (letras de A a F e números de 0 a 9) divididos em 8 blocos separados por dois-pontos (ex: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`).  
→ **Capacidade**: Permite cerca de 3,4 x 10^38 endereços (340 undecilhões). Na prática, é um número virtualmente infinito, o suficiente para dar bilhões de IPs a cada grão de areia do planeta Terra.  

---

🟣 **Tipos de Endereço IP**.  
Independentemente da versão, os IPs são classificados pelo seu escopo de uso na rede:  

**IP Público vs. IP Privado**.  
→ **IP Privado**: É o endereço que o seu roteador doméstico ou empresarial atribui aos seus dispositivos locais (ex: o seu celular pode ser o `192.168.1.5`). Esse IP serve apenas para a comunicação dentro da sua casa e não é acessível diretamente pela internet.  

→ **IP Público**: É o endereço único que o seu provedor de internet atribui ao seu roteador para comunicá-lo com o mundo externo. Quando você acessa um site, a internet enxerga o seu IP público, não o privado. O processo que traduz os IPs privados da sua casa em um único IP público para navegar na web chama-se NAT (Network Address Translation).  

**IP Estático vs. IP Dinâmico**.  
→ **IP Dinâmico**: É um endereço temporário. Cada vez que o seu roteador se conecta à internet, o provedor fornece um IP público diferente da sua lista de IPs disponíveis. É o padrão para conexões residenciais.  

→ **IP Estático (Fixo)**: É um endereço permanente que nunca muda. É indispensável para servidores que hospedam sites, bancos de dados ou serviços de empresas, pois os clientes precisam saber exatamente onde encontrar a máquina a qualquer momento.  

---

🟣 **Estrutura de um Pacote IP**. 
Na camada de internet, os segmentos vindos do TCP/UDP recebem um cabeçalho IP, transformando-se em um Pacote (ou Datagrama IP). As informações mais críticas contidas no cabeçalho de um pacote IP são:  
**Versão**: Indica se o pacote está usando IPv4 ou IPv6.  
**Endereço IP de Origem**: O número de quem está enviando o pacote.  
**Endereço IP de Destino**: O número de para onde o pacote deve ser entregue.  
**TTL (Time to Live) / Hop Limit**: Um contador numérico (geralmente começando em 64 ou 128). Cada roteador pelo qual o pacote passa diminui esse número em 1. Se o TTL chegar a zero, o pacote é descartado. Isso evita que pacotes perdidos fiquem rodando em loops infinitos pela internet caso ocorra uma falha de rota.  

















