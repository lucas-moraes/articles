---
title: Engineering-optimization-cli
date: 2026-06-08
tags: [ai]
#
---

### Métricas de performance (Benchmarks)
- **TTFT** (Time to First Token): Tempo (ms) para a IA processar o prompt e exibir o primeiro caractere. Foco: Latência de resposta inicial.
- **TPS** (Tokens per Second): Velocidade de geração contínua de texto/código após o TTFT. Foco: Fluidez da escrita.
- **ITL** (Inter-Token Latency): Intervalo médio entre cada token gerado. Se estiver alto ou instável, causa "engasgos" visuais na tela.
- **Throughput**: Capacidade volumétrica total que o servidor aguenta processar (tokens/segundo) dividida entre múltiplos usuários simultâneos.

### Representação matemática e Memória (Formatos FP)
- **FP (Floating Point)**: Formato numérico que armazena os pesos (neurônios) do modelo. O número associado dita o consumo de memória (VRAM).
 - **FP16 / BF16 (16-bit)**: Padrão de alta precisão usado para o treinamento original dos modelos. Exige servidores massivos (Terabytes de VRAM).
 - **FP8 (8-bit)**: Equilíbrio perfeito atual do mercado. Reduz o tamanho do modelo pela metade com perda de inteligência próxima a zero.
 - **FP4 (4-bit)**: Compressão máxima atual. Ultraveloz e extremamente barato, mas pode apresentar pequenas falhas de atenção em lógicas de código altamente complexas.
- **Quantização (AWQ / GPTQ / GGUF)**: Técnicas matemáticas usadas para converter e encolher modelos de FP16 para formatos menores (FP8/FP4).

### Estratégias de Economia e Otimização de Custos
**KV Cache (Key-Value Cache)**: Memória volátil temporária na GPU que armazena o histórico recente do chat para não reprocessá-lo a cada nova mensagem.  

**Prompt Caching**: Mecanismo de servidor que congela prefixos de texto idênticos (código/contexto), aplicando descontos agressivos (até 80%) em tokens de entrada repetidos.  

### Técnicas Avançadas de Inferência e Servidores
**Continuous Batching (Agrupamento Contínuo)**: Tradicionalmente, servidores processam requisições em lotes (batch). Se uma requisição termina antes das outras, a GPU fica ociosa esperando o resto. O Continuous Batching permite que novos prompts entrem e respostas finalizadas saiam do lote dinamicamente a cada token gerado, maximizando o uso da GPU.  
**Speculative Decoding (Decodificação Especulativa)**: Uma técnica para acelerar o TPS (Tokens por Segundo). Um modelo menor e ultraveloz (como um de 7B tokens) gera uma sugestão de texto rapidamente. Em seguida, o modelo gigante (como o GLM-5.1) revisa esse bloco de uma só vez. Se a sugestão estiver correta, poupa-se muito tempo de processamento do modelo grande.  
**PagedAttention**: Inspirada na paginação de memória dos sistemas operacionais (como o macOS ou Linux). Ela gerencia o **KV Cache** dividindo-o em blocos de memória não contínuos. Isso elimina a fragmentação da VRAM e permite aumentar o número de requisições simultâneas em até 4x.  









