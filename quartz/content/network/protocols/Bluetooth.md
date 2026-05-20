---
title: Bluetooth
date: 2026-05-19
tags: [protocols]
---

### Bluetooth
O Bluetooth é uma tecnologia de rede sem fio de curtíssimo alcance, projetada para substituir cabos em conexões diretas entre dispositivos periféricos e computadores ou smartphones.  

Padronizado pelo comitê `IEEE 802.15.1` (embora hoje seja gerenciado de forma independente pelo Bluetooth Special Interest Group - SIG), ele opera na camada de Acesso à Rede (física e enlace). Diferente do Wi-Fi, que foca em conectar dispositivos a uma rede de alta velocidade distribuída por um imóvel, o Bluetooth cria uma rede pessoal ad-hoc chamada Piconet.  

---

🔵 **Como funciona uma Piconet? (Arquitetura de Rede)**.  
Uma Piconet é formada no momento em que dois ou mais dispositivos se conectam via Bluetooth. Ela opera em uma estrutura de controle centralizada:  

**Central (antigo Master)**: O dispositivo que inicia a conexão e dita o ritmo da conversa (geralmente o seu celular ou computador). Só pode existir um por piconet.  

**Periférico (antigo Slave)**: Os dispositivos que respondem aos comandos do nó central (fones de ouvido, mouses, smartwatches). Uma piconet suporta até 7 periféricos ativos simultaneamente.  

---

🔵 **Frequência e a Tecnologia Saltadora (FHSS)**.  
O Bluetooth opera na frequência de 2.4 GHz, a mesma faixa livre (e congestionada) utilizada por redes Wi-Fi antigas e fornos de micro-ondas. Para evitar que a interferência desses aparelhos derrube a sua música ou trave o seu mouse, o Bluetooth utiliza uma técnica genial chamada FHSS (Frequency-Hopping Spread Spectrum):  

Em vez de transmitir dados em um canal fixo, o Bluetooth divide a sua banda em dezenas de canais menores e muda de frequência até 1.600 vezes por segundo em uma ordem pseudoaleatória conhecida apenas pelos dispositivos pareados. Se um canal sofrer interferência, o dado é reenviado no microssegundo seguinte em uma frequência limpa.

---
























