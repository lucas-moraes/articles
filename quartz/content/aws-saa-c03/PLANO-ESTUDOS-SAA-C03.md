# Plano de Estudos — AWS Certified Solutions Architect Associate (SAA-C03)

> **Meta:** passar no SAA-C03 (nota de corte 720/1000) com margem de segurança.
> **Duração:** 8 semanas (~10h/semana) — ajustável para 6 ou 12 semanas (ver seção final).
> **Pré-requisito:** conta AWS (free tier) e curiosidade para clicar no console.

---

## 1. Panorama do exame

| Item | Valor |
|---|---|
| Código | SAA-C03 (3ª versão) |
| Questões | 65 (15 são piloto e não contam) |
| Tempo | 130 minutos |
| Nota de corte | 720 / 1000 |
| Custo | US$ 150 |
| Validade | 3 anos |
| Modalidade | Pearson VUE (presencial ou proctored online) |

### Domínios e pesos

| # | Domínio | Peso |
|---|---|---|
| 1 | Design Secure Architectures (seguras) | **30%** |
| 2 | Design Resilient Architectures (resilientes) | **26%** |
| 3 | Design High-Performing Architectures (alta performance) | **24%** |
| 4 | Design Cost-Optimized Architectures (custo otimizado) | **20%** |

> ✅ **Pesos verificados na fonte oficial** (docs.aws.amazon.com, atualizado 2026). O domínio de **Segurança é o maior (30%)** — o foco em segurança não é opcional.
>
> **Formato oficial:** 50 questões pontuadas + 15 não pontuadas (piloto), 130 min, 720/1000. Múltipla escolha (1 correta de 4) e múltipla resposta (2+ corretas de 5+). **Não há penalidade por chute** — nunca deixe em branco.

**⚠️ Status do exame (out/2026):** o SAA-C03 continua válido. A AWS fez um *refresh* de conteúdo no início de 2026 (mesmos domínios, mais serviços). Um possível **SAA-C04** é esperado entre meados de 2026 e meados de 2027 — se você estuda agora, **faça o C03** (sua certificação continua válida por 3 anos quando o novo sair).

### Estratégia de prova
- Leia a **última frase** da questão primeiro ("Qual solução atende… com MENOR custo?").
- Palavras-chave mudam a resposta: **mais barato**, **menor esforço operacional**, **mais resiliente**, **tempo real**.
- Elimine respostas com serviços que "não existem" ou combinações impossíveis.
- Marque as difíceis, siga em frente, volte no fim. Média: ~2 min/questão.

---

## 2. Estrutura do plano (8 semanas)

### Semana 1 — Fundamentos + IAM + EC2
**Objetivo:** entender o modelo global da AWS e a base de computação.

- Regiões, AZs, Edge Locations, modelo de responsabilidade compartilhada.
- **IAM:** users, groups, roles, policies (JSON), MFA, least privilege, Identity Center, permission boundaries, policy evaluation logic.
- **EC2:** famílias de instância, AMI, key pairs, user data, EBS (gp2/gp3/io1/io2/st1/sc1), instance store.
- **Security Groups vs NACLs** (stateful vs stateless) — cai MUITO.
- **Elastic IP, ENI, placement groups** (cluster/spread/partition).

- [ ] Assistir módulo IAM/EC2 do curso
- [ ] Criar 3 roles IAM diferentes e testar permissões
- [ ] Lançar 2 instâncias EC2 + anexar EBS + snapshot
- [ ] 20 questões de simulado (foco IAM/EC2)

### Semana 2 — Storage (S3, EFS, FSx, Storage Gateway)
- **S3:** buckets, versioning, lifecycle, replication (CRR/SRR), storage classes (Standard, IA, One Zone-IA, Glacier Instant/Flexible/Deep Archive, Intelligent-Tiering), encryption (SSE-S3, SSE-KMS, SSE-C, DSSE-KMS), pre-signed URLs, bucket policies, CORS, Transfer Acceleration, Object Lock.
- **EFS** (NFS, multi-AZ) vs **FSx** (Windows, Lustre, NetApp, OpenZFS).
- **Storage Gateway** (File/Volume/Tape), **Snowball/Snowmobile**.

- [ ] Criar bucket com lifecycle + versioning + replication
- [ ] Testar storage classes e ver o custo no Cost Explorer
- [ ] 25 questões de simulado

### Semana 3 — Redes (VPC, Route 53, CloudFront, híbrido)
- **VPC:** CIDR, subnets públicas/privadas, IGW, NAT Gateway/Instance, route tables, peering, endpoints (gateway vs interface), VPC Flow Logs.
- **Route 53:** hosted zones, record types, routing policies (simple, weighted, latency, failover, geolocation, geoproximity, multivalue), health checks.
- **CloudFront:** origins, OAC/OAI, TTL, invalidation, Global Accelerator (comparar!).
- **Híbrido:** Site-to-Site VPN, Direct Connect, Transit Gateway, Client VPN.

- [ ] Montar VPC com 2 subnets públicas + 2 privadas + NAT
- [ ] Configurar Route 53 failover
- [ ] 25 questões de simulado

### Semana 4 — Bancos de dados + Elasticidade
- **RDS:** Multi-AZ (vs read replica!), Aurora, Aurora Serverless, snapshots, parameter groups.
- **DynamoDB:** PK/SK, GSI/LSI, DAX, streams, TTL, on-demand vs provisioned, global tables.
- **ElastiCache** (Redis vs Memcached), **Redshift**, **Neptune**, **DocumentDB**, **Keyspaces**.
- **ELB:** ALB vs NLB vs GLB vs CLB (quando usar cada um).
- **Auto Scaling:** launch templates, scaling policies (target tracking, step, scheduled, predictive), cooldown.

- [ ] Criar RDS Multi-AZ + read replica e comparar
- [ ] Criar tabela DynamoDB com GSI
- [ ] ALB + Auto Scaling group com target tracking
- [ ] 30 questões de simulado

### Semana 5 — Integração + Serverless
- **SQS:** standard vs FIFO, visibility timeout, DLQ, long polling.
- **SNS:** topics, fan-out, filtros.
- **EventBridge:** event bus, rules, scheduler, vs SNS/SQS.
- **Kinesis:** Data Streams vs Firehose vs Analytics vs Video.
- **Lambda:** limites, concurrency (reserved/provisioned), layers, VPC, cold start.
- **Step Functions**, **API Gateway** (REST vs HTTP vs WebSocket).
- **Padrão clássico:** S3 → Lambda → SQS/SNS → DynamoDB.

- [ ] Montar fan-out SNS → 2 SQS
- [ ] Criar Lambda acionada por evento S3
- [ ] 30 questões de simulado
- [ ] **Extra (novo):** ler visão geral do Bedrock + mapear serviços ML↔casos de uso

### Semana 6 — Segurança, Monitoramento, DR
- **KMS**, **Secrets Manager** vs **Parameter Store**, **ACM**, **CloudHSM**.
- **WAF**, **Shield**, **GuardDuty**, **Inspector**, **Macie**, **Config**, **Security Hub**, **Detective**.
- **CloudWatch** (métricas, logs, alarms, dashboards), **CloudTrail**, **X-Ray**.
- **DR:** RTO/RPO, estratégias (Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active/Active).
- **Backup**, **Organizations**, **Control Tower**, **SCP**.

- [ ] Configurar CloudWatch alarm + CloudTrail
- [ ] Testar KMS com S3 e EBS
- [ ] 30 questões de simulado

### Semana 7 — Custo + Simulados intensivos
- **Otimização de custo:** Reserved Instances, Savings Plans, Spot, right-sizing, S3 lifecycle, Cost Explorer, Budgets, Trusted Advisor.
- Revisar TODOS os domínios com **simulados completos (65 questões)**.
- Meta: **75–80% de acerto**.

- [ ] 2 simulados completos cronometrados
- [ ] Revisar todas as questões erradas (anotar o "porquê")
- [ ] Refazer os pontos fracos

### Semana 8 — Revisão final + prova
- Refazer simulados até acertar **85%+** consistentemente.
- Revisar cheat sheets dos serviços que mais erra.
- Descansar no dia anterior. Agendar a prova com folga.

- [ ] 2–3 simulados completos (85%+)
- [ ] Revisar flashcards dos pontos fracos
- [ ] **Fazer a prova** 🚀

---

## 2.5 🆕 Temas novos a adicionar (refresh 2026 + serviços in-scope)

A AWS expandiu a cobertura de serviços **dentro** dos mesmos domínios. Itens que faltavam no plano original e devem ser estudados:

### GenAI / ML (novo foco — cai em cenários de seleção de modelo)
- **Amazon Bedrock** (modelos foundation, RAG, agents, private endpoints para modelos hospedados)
- **Amazon Q** (Q Business / Q Developer)
- Serviços de ML em escopo: **Comprehend, Lex, Polly, Rekognition, SageMaker AI, Textract, Transcribe, Translate** — saiba o *que cada um faz* (pareamento serviço↔caso de uso, não profundidade)
- **DataZone** (governança de dados)

### Identidade e acesso (atualizações)
- **IAM Identity Center** (sucessor do AWS SSO) — substitui padrões legados de SSO
- **Amazon Cognito** (apps web/mobile), **AWS RAM**, **Directory Service**

### Acesso remoto e rede (padrões novos)
- **AWS Verified Access** — substitui padrões de bastion host
- **AWS Network Firewall**, **Firewall Manager**, **PrivateLink**

### Dados / Analytics (padrões zero-ETL)
- **Zero-ETL**: Aurora → Redshift (integração sem pipeline), DynamoDB → Redshift/OpenSearch
- Em escopo: **Athena, Glue, Lake Formation, EMR, MSK, OpenSearch, QuickSight, Data Firehose, Kinesis, AppFlow, Amazon MQ**

### Custo (arquiteturas atualizadas)
- **Graviton** (instâncias ARM: melhor custo-benefício) + **Savings Plans** + **Spot**
- **Compute Optimizer**, **Trusted Advisor**, **Cost & Usage Report**

### Outros serviços frequentemente esquecidos
- **Containers:** ECS, EKS, Fargate, ECR (ECS Anywhere/EKS Anywhere)
- **Migração:** DMS, Application Migration Service (MGN), DataSync, Transfer Family, Snow Family
- **Governança:** CloudFormation, Service Catalog, Systems Manager, Control Tower, Organizations, Health Dashboard, Well-Architected Tool
- **Front-end:** Amplify, API Gateway, Device Farm
- **Mídia:** Elastic Transcoder, Kinesis Video Streams

> **Dica das fontes:** o exame é pesado em **cenários**. Para GenAI, saiba escolher entre serviços (ex: "qual serviço extrai texto de imagens?" → Textract; "qual analisa sentimento?" → Comprehend).

---

## 3. Comparações que MAIS caem no exame

| Tema | Regra de ouro |
|---|---|
| **Security Group vs NACL** | SG é stateful e só permite; NACL é stateless e permite/nega por subnet |
| **Multi-AZ vs Read Replica (RDS)** | Multi-AZ = disponibilidade (failover); Read Replica = performance (leitura) |
| **ALB vs NLB** | ALB = HTTP/HTTPS camada 7; NLB = TCP/UDP camada 4, IP estático, altíssima performance |
| **SQS vs SNS** | SQS = fila (1 consumidor por msg); SNS = pub/sub (fan-out) |
| **CloudFront vs Global Accelerator** | CloudFront = cache de conteúdo; GA = roteamento de tráfego TCP/UDP |
| **S3 Standard-IA vs One Zone-IA** | IA = multi-AZ; One Zone = 1 AZ, mais barato, menos durável |
| **EBS vs Instance Store** | EBS = persistente/rede; Instance Store = efêmero/local, mais rápido |
| **NAT Gateway vs NAT Instance** | Gateway = gerenciado/escalável; Instance = barato/legado |
| **Secrets Manager vs Parameter Store** | Secrets = rotação automática (custo); Parameter = barato/simples |
| **Aurora vs RDS** | Aurora = mais performance, replicas até 15, serverless disponível |

---

## 4. Recursos recomendados

**Cursos**
- Stephane Maarek — *Ultimate AWS Certified Solutions Architect Associate* (Udemy)
- Adrian Cantrill — *AWS Certified Solutions Architect Associate* (cantrill.io)
- AWS Skill Builder (oficial, tem labs)

**Simulados**
- Tutorials Dojo / Jon Bonso (padrão-ouro)
- Neal Davis (Digital Cloud Training)
- Simulados oficiais AWS (Exam Readiness)

**Prática**
- AWS Free Tier + AWS Workshops (workshops.aws)
- AWS Well-Architected Framework (leitura obrigatória)

**Referência rápida**
- AWS Docs + "AWS Cheat Sheets" (Tutorials Dojo)
- Fluxo IAM Policy Evaluation Logic (diagrama oficial)

---

## 5. Checklist de prontidão (antes de agendar)

- [ ] Acertei **85%+** em pelo menos 3 simulados completos diferentes
- [ ] Sei explicar a diferença de TODAS as comparações da seção 3 sem consultar
- [ ] Já pratiquei no console: EC2, S3, VPC, RDS, DynamoDB, Lambda, IAM, CloudWatch
- [ ] Entendo RTO/RPO e as 4 estratégias de DR
- [ ] Sei estimar custo (RI vs Spot vs On-Demand; storage classes)
- [ ] Consigo resolver 65 questões em menos de 130 minutos

---

## 6. Ajustes de ritmo

| Se você tem… | Duração sugerida | Horas/semana |
|---|---|---|
| Experiência com AWS | 4–6 semanas | 10–15h |
| Pouca experiência | 8 semanas | 10h |
| Iniciante total | 12 semanas | 8–10h |

> **Dica de ouro:** simulados valem mais que videoaulas. Depois da semana 3, dedique pelo menos 50% do tempo a resolver questões e entender o "porquê" de cada resposta errada.

---

*Plano gerado em ~/aws-saa-c03/PLANO-ESTUDOS-SAA-C03.md — ajuste datas e ritmo conforme sua realidade.*
