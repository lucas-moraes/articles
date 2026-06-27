---
title: UDP
date: 2026-05-19
tags: [br,protocols]

---

### UDP

O **UDP (User Datagram Protocol, ou Protocolo de Datagrama do Usuário)** é o outro gigante da camada de Transporte da internet, operando lado a lado com o TCP.  
No entanto, a sua filosofia de funcionamento é completamente oposta. Enquanto o TCP prioriza a segurança e a entrega garantida, **o UDP foca obsessivamente em duas coisas: velocidade e baixa latência**.  

---

🟢 **Principais Características do UDP**
→ **Não Orientado à Conexão**: O UDP não realiza nenhum aperto de mão inicial (como o Three-Way Handshake do TCP). Ele simplesmente pega os dados da aplicação e os joga na rede. Ele não quer saber se o destinatário está online, pronto ou escutando; ele apenas envia.  

→ **Não Confiável (Best-Effort)**: O UDP não garante que os dados chegarão ao destino. Se um pacote for corrompido ou se perder nos roteadores do caminho, ele é descartado e o UDP não solicita o reenvio.  

→ **Sem Controle de Ordem**: Os pacotes (chamados aqui de Datagramas) podem pegar caminhos diferentes e chegar completamente fora de ordem no destino. O UDP entrega os dados para a aplicação exatamente na ordem em que eles chegam, sem reorganizá-los.  

→ **Sem Controle de Fluxo**: Ele transmite os dados na velocidade máxima que a aplicação exigir, mesmo que isso acabe congestionando a rede ou sobrecarregando o receptor.  

---

🟢 **Por que usar um protocolo que "perde" dados?**.  
À primeira vista, o UDP parece um protocolo ruim, mas ele é indispensável para serviços em tempo real.  
Pense em uma chamada de voz por internet (VoIP) ou em um jogo online competitiva: se um milissegundo de áudio ou a posição de um jogador se perder na rede, não faz sentido congelar a transmissão por meio segundo para esperar o pacote perdido ser retransmitido (como o TCP faria). O dado antigo já perdeu o valor; o que importa é o frame atual, em tempo real.  

🟢 **Casos de Uso Comuns do UDP**. 
**Streaming de Áudio e Vídeo ao Vivo**: Plataformas de transmissão ao vivo de vídeo e chamadas (Discord, Zoom, Teams, YouTube Live) aceitam pequenas quedas na qualidade (um pixel borrado ou um estalo no áudio) em troca de manter a transmissão sem atrasos.  

**Jogos Online**: Jogos de tiro (FPS) ou corrida precisam de atualizações instantâneas de posição. Perder um frame é aceitável, mas ter lag de retransmissão quebra a jogabilidade.  

**DNS (Domain Name System)**: Consultas DNS precisam ser extremamente rápidas. Como as requisições cabem em um único pacote, é muito mais eficiente enviar um datagrama UDP. Se não houver resposta, a aplicação simplesmente tenta de novo.  

**DHCP**: O protocolo que atribui IPs automaticamente na rede local utiliza UDP porque o dispositivo ainda não possui um endereço IP configurado para estabelecer uma conexão formal TCP.  





























