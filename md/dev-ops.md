## DevOps

O termo DevOps surge da combinação das palavras "Desenvolvimento" (Development) e "Operações" (Operations). </br>
Mais do que uma ferramenta ou um cargo específico, <b>DevOps é uma cultura e uma filosofia de trabalho</b> que visa integrar as equipes que criam o software com as equipes que o mantêm rodando. </br>
Antigamente, esses dois grupos trabalhavam em "silos": os desenvolvedores escreviam o código e o "jogavam por cima do muro" para a equipe de infraestrutura se virar com a instalação e os bugs. O DevOps derruba esse muro.

### Pilares de DevOps
Para entender como ele funciona na prática, imagine um ciclo infinito focado em agilidade e qualidade: </br></br>
⇢ <b>Integração Contínua (CI):</b> Os desenvolvedores enviam mudanças de código com frequência para um repositório central. Testes automáticos rodam na hora para garantir que nada quebrou. </br>
⇢ <b>Entrega Contínua (CD):</b> O código validado é preparado automaticamente para o lançamento. Isso permite que novas funções cheguem ao usuário final em questão de minutos, não meses. </br>
⇢ <b>Monitoramento e Feedback:</b> Após o lançamento, o sistema é monitorado em tempo real. Se algo falhar, a equipe descobre rápido e já planeja a correção, reiniciando o ciclo. </br>
⇢ <b>Automação:</b> Se uma tarefa é repetitiva (como configurar um servidor ou rodar testes), o DevOps prega que ela deve ser automatizada através de scripts e ferramentas. </br>

## Ferramentas

Como o DevOps cobre todo o ciclo de vida do software, as ferramentas são divididas por "etapas". Imagine que é uma caixa de ferramentas para uma linha de montagem automatizada.</br></br>

✯ <b>Planejamento e Colaboração</b></br>
Antes de codar, a equipe precisa se organizar.</br>
⇢ <b>Jira/Trello/Azure:</b> O padrão da indústria para gerenciar tarefas e metodologias ágeis (Scrum/Kanban).</br>
⇢ <b>Slack / Microsoft Teams:</b> Para comunicação rápida e alertas automáticos do sistema.</br>
⇢ <b>Confluence:</b> Para documentar processos e arquiteturas.</br></br>

✯ <b>Controle de Versão (O coração de tudo)</b></br>
Onde o código "mora" e é compartilhado.</br>
⇢ <b>Git:</b> A ferramenta de controle de versão (o motor).</br>
⇢ <b>GitHub / GitLab / Bitbucket:</b> As plataformas que hospedam os repositórios Git e facilitam a revisão de código (Pull Requests).</br></br>

✯ <b>CI/CD (Integração e Entrega Contínua)</b></br>
As ferramentas que pegam o código, testam e levam para o "ar".</br>
⇢ <b>Jenkins:</b> O "vovô" das ferramentas, extremamente flexível e baseado em plugins.</br>
⇢ <b>GitHub Actions:</b> Muito popular hoje por já estar integrado ao repositório.</br>
⇢ <b>CircleCI / Azure DevOps:</b> Opções robustas para pipelines automatizados.</br></br>

✯ <b>Containerização e Orquestração</b></br>
Para garantir que o software rode do mesmo jeito no seu PC e no servidor.</br>
⇢ <b>Docker:</b> Cria o "container" (o pacote com tudo que o app precisa).</br>
⇢ <b>Kubernetes (K8s):</b> O maestro que gerencia centenas ou milhares de containers ao mesmo tempo.</br></br>

✯ <b>Infraestrutura como Código (IaC)</b></br>
Em vez de clicar em botões no painel da nuvem, você escreve um arquivo de texto que cria os servidores para você.</br>
⇢ <b>Terraform:</b> A ferramenta mais usada para criar infraestrutura em qualquer nuvem.</br>
⇢ <b>Ansible:</b> Focado em configurar os softwares e sistemas dentro dos servidores já criados.</br></br>

✯ <b>Monitoramento e Observabilidade</b></br>
Para saber se o site caiu ou se está lento antes que o cliente reclame.</br>
⇢ <b>Grafana / Prometheus:</b> Para métricas e gráficos em tempo real.</br>
⇢ <b>ELK Stack (Elasticsearch, Logstash, Kibana):</b> Para analisar logs (o "histórico" do que acontece no sistema).</br>
⇢ <b>New Relic / Datadog:</b> Monitoramento completo de performance (APM).</br></br>


<details>
<summary>⭐️ - Docker</summary>
Antes do Docker, tínhamos o clássico problema: "Na minha máquina funciona, mas no servidor não". Isso acontecia por diferenças de versões de software e sistemas
</br></br>
<b>Diferença entre Máquina Virtual (VM) e Container:</b></br>
・<b>VM:</b> Emula um hardware completo e roda um Sistema Operacional (SO) inteiro dentro de outro. É pesado e lento.</br>
・<b>Container:</b> Compartilha o kernel do SO da máquina hospedeira. É leve, inicia em segundos e ocupa pouco espaço.</br>
</br>
<b>Conceitos Chave</b></br>
・<b>Dockerfile:</b> O "receituário". Um arquivo de texto com as instruções para criar sua imagem.</br>
・<b>Imagem:</b> O "pacote" estático. É o resultado do build do Dockerfile.</br>
・<b>Container:</b> A "instância" em execução. É a imagem rodando como um processo.</br>
・<b>Docker Hub:</b>  O "GitHub das imagens". Onde você baixa imagens prontas (Node, Python, MySQL).</br>
</br>
<b>Persistência de Dados (Volumes)</b></br>
Containers são efêmeros (se você deletar o container, os dados somem). Para salvar arquivos permanentemente (como um banco de dados), usamos:</br>
・<b>Volumes:</b> Gerenciados pelo Docker.</br>
・<b>Bind Mounts:</b> Mapeiam uma pasta específica do seu PC para dentro do container.</br>
<b>Redes (Networking)</b></br>
O Docker cria redes virtuais para que os containers conversem entre si.</br>
・<b>Bridge:</b> A rede padrão para containers isolados.</br>
・<b>Host:</b> Remove o isolamento entre o container e a máquina real.</br>
</br>
<b>Docker Compose</b></br>
Ninguém sobe um sistema complexo rodando 10 comandos <code>docker run</code>. Usamos o Docker Compose (arquivo <code>docker-compose.yml</code>) para definir e rodar multi-containers com um único comando: <code>docker-compose up</code>.</br>
</br>
<b>Otimização de Imagens</b></br>
Imagens gigantes são lentas para transferir. Técnicas avançadas incluem:</br>
・<b>Multi-stage Builds:</b> Você usa uma imagem pesada para compilar o código (ex: Java/Go) e copia apenas o executável final para uma imagem mínima (como Alpine Linux).</br>
・<b>Camadas (Layers):</b> Cada comando no Dockerfile cria uma camada. Ordem importa para aproveitar o cache.</br>
</br>
<b>Orquestração</b></br>
Quando você tem centenas de containers, o Docker sozinho não basta. É aqui que entram os orquestradores:</br>
・<b>Docker Swarm:</b> A solução nativa do Docker para clusters (mais simples).</br>
・<b>Kubernetes (K8s):</b>  O padrão da indústria para gerenciar containers em escala global, cuidando de auto-scaling e auto-recuperação.</br>
</br>
<b>Segurança</b></br>
・<b>Rootless mode:</b> Rodar o Docker sem privilégios de administrador.</br>
・<b>Scanning:</b> Ferramentas que varrem suas imagens em busca de vulnerabilidades conhecidas.</br>




  
</details>


