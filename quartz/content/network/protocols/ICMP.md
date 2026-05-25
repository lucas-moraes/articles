---
title: ICMP
date: 2026-05-19
tags: [protocols]

---

### ICMP

O **ICMP (Internet Control Message Protocol, ou Protocolo de Mensagens de Controle da Internet)** é um protocolo auxiliar da camada de Internet (Rede), que opera junto com o IP.  
Diferente do TCP e do UDP, que servem para transportar dados de aplicações dos usuários (como mensagens, e-mails ou páginas web), o ICMP serve para a comunicação interna entre as próprias máquinas de rede. Ele gerencia relatórios de erros, avisos e diagnósticos operacionais.  
Pense no ICMP como os "sinais de trânsito e alertas de painel" da internet: ele avisa se uma estrada está bloqueada ou se um destino não pôde ser alcançado.  

---

🟡 **Principais Funções do ICMP**.  

→ **Relatar Erros de Entrega**: Se um roteador recebe um pacote IP e não consegue entregá-lo (porque a rede de destino está fora do ar ou o IP não existe), ele usa o ICMP para enviar uma mensagem de volta ao remetente avisando sobre a falha.  

→ **Diagnóstico de Rede**: Permite testar a conectividade entre dois pontos e medir o tempo que leva para um pacote ir e voltar (latência).  

→ **Controle de Fluxo/Saturação**: Pode ser usado para avisar ao remetente que ele está enviando pacotes rápido demais e que o roteador intermediário está ficando sem memória (mecanismo conhecido como Source Quench).  

---

🟡 **Ferramentas Práticas que utilizam ICMP**.  
Você provavelmente já utilizou o ICMP diretamente no terminal do seu computador através de dois comandos fundamentais de diagnóstico:  

1 - O Comando `ping`.  
O ping é usado para testar se um dispositivo remoto está ativo e acessível na rede.  
O seu computador envia uma mensagem ICMP do tipo Echo Request (Requisição de Eco) para o IP de destino.  
Se o destino estiver online e configurado para responder, ele devolve uma mensagem ICMP do tipo Echo Reply (Resposta de Eco).  
O terminal calcula quanto tempo esse ciclo levou (geralmente medido em milissegundos).  

2 - O Comando `traceroute` (ou `tracert` no Windows).  
O traceroute mostra o caminho exato (a rota de roteadores) que um pacote faz para chegar até um destino.  
Ele funciona manipulando o campo TTL (Time to Live) do cabeçalho IP. Ele envia pacotes com TTL igual a 1, depois 2, depois 3, e assim por diante.  
Quando o TTL de um pacote chega a zero em um roteador, esse roteador descarta o pacote e envia de volta uma mensagem ICMP do tipo Time Exceeded (Tempo Esgotado).  
Ao coletar essas mensagens de erro de cada roteador pelo caminho, o seu computador consegue desenhar o mapa completo da rota.















