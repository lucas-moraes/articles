## DevOps

O termo DevOps surge da combinação das palavras "Desenvolvimento" (Development) e "Operações" (Operations). </br>
Mais do que uma ferramenta ou um cargo específico, <b>DevOps é uma cultura e uma filosofia de trabalho</b> que visa integrar as equipes que criam o software com as equipes que o mantêm rodando. </br>
Antigamente, esses dois grupos trabalhavam em "silos": os desenvolvedores escreviam o código e o "jogavam por cima do muro" para a equipe de infraestrutura se virar com a instalação e os bugs. O DevOps derruba esse muro.

### Pilares de DevOps
Para entender como ele funciona na prática, imagine um ciclo infinito focado em agilidade e qualidade: </br>
⇢ <b>Integração Contínua (CI):</b> Os desenvolvedores enviam mudanças de código com frequência para um repositório central. Testes automáticos rodam na hora para garantir que nada quebrou. </br>
⇢ <b>Entrega Contínua (CD):</b> O código validado é preparado automaticamente para o lançamento. Isso permite que novas funções cheguem ao usuário final em questão de minutos, não meses. </br>
⇢ <b>Monitoramento e Feedback:</b> Após o lançamento, o sistema é monitorado em tempo real. Se algo falhar, a equipe descobre rápido e já planeja a correção, reiniciando o ciclo. </br>
⇢ <b>Automação:</b> Se uma tarefa é repetitiva (como configurar um servidor ou rodar testes), o DevOps prega que ela deve ser automatizada através de scripts e ferramentas. </br>

## Ferramentas

Como o DevOps cobre todo o ciclo de vida do software, as ferramentas são divididas por "etapas". Imagine que é uma caixa de ferramentas para uma linha de montagem automatizada. </br>

✯ <b>Planejamento e Colaboração</b></br>
Antes de codar, a equipe precisa se organizar.</br>
⇢ <b>Jira/Trello/Azure:</b> O padrão da indústria para gerenciar tarefas e metodologias ágeis (Scrum/Kanban).</br>
⇢ <b>Slack / Microsoft Teams:</b> Para comunicação rápida e alertas automáticos do sistema.</br>
⇢ <b>Confluence:</b> Para documentar processos e arquiteturas.</br>

✯ <b>Controle de Versão (O coração de tudo)</b></br>
Onde o código "mora" e é compartilhado.</br>
⇢ <b>Git:</b> A ferramenta de controle de versão (o motor).</br>
⇢ <b>GitHub / GitLab / Bitbucket:</b> As plataformas que hospedam os repositórios Git e facilitam a revisão de código (Pull Requests).</br>

✯ <b>CI/CD (Integração e Entrega Contínua)</b></br>
As ferramentas que pegam o código, testam e levam para o "ar".</br>
⇢ <b>Jenkins:</b> O "vovô" das ferramentas, extremamente flexível e baseado em plugins.</br>
⇢ <b>GitHub Actions:</b> Muito popular hoje por já estar integrado ao repositório.</br>
⇢ <b>CircleCI / Azure DevOps:</b> Opções robustas para pipelines automatizados.</br>

✯ <b>Containerização e Orquestração</b></br>
Para garantir que o software rode do mesmo jeito no seu PC e no servidor.</br>
⇢ <b>Docker:</b> Cria o "container" (o pacote com tudo que o app precisa).</br>
⇢ <b>Kubernetes (K8s):</b> O maestro que gerencia centenas ou milhares de containers ao mesmo tempo.</br>

✯ <b>Infraestrutura como Código (IaC)</b></br>
Em vez de clicar em botões no painel da nuvem, você escreve um arquivo de texto que cria os servidores para você.</br>
⇢ <b>Terraform:</b> A ferramenta mais usada para criar infraestrutura em qualquer nuvem.</br>
⇢ <b>Ansible:</b> Focado em configurar os softwares e sistemas dentro dos servidores já criados.</br>

✯ <b>Monitoramento e Observabilidade</b></br>
Para saber se o site caiu ou se está lento antes que o cliente reclame.</br>
⇢ <b>Grafana / Prometheus:</b> Para métricas e gráficos em tempo real.</br>
⇢ <b>ELK Stack (Elasticsearch, Logstash, Kibana):</b> Para analisar logs (o "histórico" do que acontece no sistema).</br>
⇢ <b>New Relic / Datadog:</b> Monitoramento completo de performance (APM).





