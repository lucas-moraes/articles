# 🎯 Plano de Estudo COMPLETO — AWS SAA-C03 (dia a dia)

> **Objetivo:** passar no SAA-C03 com margem de segurança (meta interna: **85% em simulados**).
> **Duração:** 8 semanas | **Carga:** 10h/semana (~1h30/dia útil + 3h fim de semana)
> **Base de datas:** início 26/10/2026 (segunda) → prova até 20/12/2026
> **Fontes:** exam guide oficial AWS (domínios: Secure 30%, Resilient 26%, High-Perf 24%, Cost 20%)

---

## 📅 Calendário rápido

| Semana | Datas | Tema central | Meta de acerto |
|---|---|---|---|
| 1 | 26/10–01/11 | Fundamentos, IAM, EC2 | 55% |
| 2 | 02/11–08/11 | Storage (S3, EFS, FSx) | 60% |
| 3 | 09/11–15/11 | Redes (VPC, R53, CloudFront) | 65% |
| 4 | 16/11–22/11 | Bancos + Elasticidade | 70% |
| 5 | 23/11–29/11 | Serverless + Integração + GenAI | 72% |
| 6 | 30/11–06/12 | Segurança, Monitoramento, DR | 75% |
| 7 | 07/12–13/12 | Custo + Simulados completos | 80% |
| 8 | 14/12–20/12 | Revisão final + Prova | 85% |

### 🗓️ Rotina padrão da semana
| Dia | Bloco | Tempo |
|---|---|---|
| Seg / Qua / Sex | Teoria (videoaula + docs) | 1h30 |
| Ter / Qui | Prática no console (lab) | 1h00 |
| Sáb | Questões de simulado + revisão de erros | 2h00 |
| Dom | Revisão ativa (flashcards / "explicar em voz alta") | 1h00 |

---

## 📘 SEMANA 1 — Fundamentos, IAM e EC2 (26/10–01/11)

**Objetivo:** dominar o modelo global da AWS, identidade (maior domínio = 30%) e computação.

### Segunda — Modelo global
- Regiões, AZs, Edge Locations, como escolher região (latência, compliance, preço)
- Modelo de responsabilidade compartilhada (segurança **da** nuvem vs **na** nuvem)
- AWS Support Plans (Basic → Enterprise) e o que cada um oferece (TAM, concierge)

### Terça — IAM parte 1
- Users, groups, roles (quando usar cada um)
- Policies: identity-based vs resource-based; JSON básico (Effect/Action/Resource/Condition)
- Ordem de avaliação: deny explícito > allow > deny implícito

### Quarta — IAM parte 2
- MFA, password policy, access keys (rotação), IAM Access Analyzer
- **IAM Identity Center** (sucessor do SSO), permission boundaries, SCPs (Organizations)
- Cenário clássico: "dê acesso temporário a um serviço para outro serviço" → **role**

### Quinta — Lab IAM
- [ ] Criar 3 policies customizadas (S3 read-only, EC2 full, deny em região X)
- [ ] Criar role assumível pelo EC2 e testar acesso ao S3 sem credenciais
- [ ] Ativar MFA e simular Access Analyzer

### Sexta — EC2
- Famílias de instância (T/M/C/R/I/D/G/P) e gerações (m6i vs m7g **Graviton**)
- AMI, user data, key pairs, hibernation, nitro
- **Spot vs On-Demand vs Reserved/Savings Plans** (visão geral — detalhe na sem. 7)

### Sábado — Questões
- [ ] 25 questões (IAM + EC2 + fundamentos)
- [ ] Revisar cada erro e anotar a "regra" que faltou

### Domingo — Revisão ativa
- [ ] Explicar em voz alta: SG vs NACL, role vs user, deny > allow
- [ ] Meta da semana: **55%** nas questões

---

## 📦 SEMANA 2 — Storage (02/11–08/11)

**Objetivo:** S3 é o serviço mais cobrado do exame. Dominar classes, segurança e replicação.

### Segunda — S3 fundamentos
- Buckets, objetos, chaves, versionamento, naming rules
- Storage classes: Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier (Instant/Flexible/Deep Archive)
- Lifecycle rules (transição e expiração)

### Terça — Lab S3
- [ ] Bucket com versioning + lifecycle (30d → IA, 365d → Glacier)
- [ ] Testar recuperação de versão excluída
- [ ] Upload com SSE-KMS vs SSE-S3 e comparar

### Quarta — S3 segurança e acesso
- Bucket policies, ACLs (legado), Block Public Access, Object Ownership
- Pre-signed URLs, CORS, Transfer Acceleration, Object Lock (compliance)
- **S3 Access Points**, VPC endpoint para S3 (gateway endpoint)

### Quinta — S3 avançado + outros storage
- Replicação CRR/SRR, S3 Batch Operations, S3 Inventory
- **EFS** (NFS, multi-AZ, performance modes) vs **FSx** (Windows/Lustre/NetApp/OpenZFS)
- **Storage Gateway** (File/Volume/Tape), Snow Family

### Sexta — Comparativos de storage
- EBS: gp2 vs **gp3**, io1 vs **io2**, st1, sc1; escalar volume; snapshot
- Instance Store vs EBS (efêmero vs persistente)
- Quando usar EFS vs FSx vs S3 (questão clássica)

### Sábado — Questões
- [ ] 25 questões (storage)
- [ ] Cenários de "qual storage class minimiza custo"

### Domingo — Revisão ativa
- [ ] Tabela: storage class × custo × acesso × recuperação
- [ ] Meta: **60%**

---

## 🌐 SEMANA 3 — Redes (09/11–15/11)

**Objetivo:** VPC é o coração do domínio Resilient/Secure. Não levar isso é reprovar.

### Segunda — VPC fundamentos
- CIDR, subnets públicas/privadas, IGW, route tables
- NAT Gateway vs NAT Instance (escala, custo, HA)
- Security Groups (stateful) vs NACLs (stateless) — **cai em toda prova**

### Terça — Lab VPC
- [ ] VPC /24 com 2 subnets públicas + 2 privadas (AZs diferentes)
- [ ] NAT Gateway + rotas corretas
- [ ] Testar: instância privada acessa internet, mas não é acessível de fora

### Quarta — VPC avançado
- VPC Peering (limitações), **Transit Gateway**, VPC Flow Logs
- **Endpoints**: gateway (S3/DynamoDB) vs interface (PrivateLink)
- Bastion vs **AWS Verified Access** vs Session Manager (SSM) — **padrão novo 2026**

### Quinta — Route 53
- Record types (A/AAAA/CNAME/NS/MX/TXT/PTR/Alias)
- Routing policies: simple, weighted, latency, failover, geolocation, geoproximity, multivalue
- Health checks + failover ativo/passivo

### Sexta — Front de rede
- **CloudFront**: origins, OAC (substitui OAI), TTL, invalidation, geo-restriction
- **Global Accelerator** vs CloudFront (roteamento TCP/UDP vs cache HTTP)
- **Direct Connect** vs **Site-to-Site VPN** vs Client VPN (custo × latência × dedicado)

### Sábado — Questões
- [ ] 30 questões (redes) — maior volume da semana

### Domingo — Revisão ativa
- [ ] Desenhar no papel: VPC multi-AZ com ALB + NAT + endpoints
- [ ] Meta: **65%**

---

## 🗄️ SEMANA 4 — Bancos de dados + Elasticidade (16/11–22/11)

### Segunda — RDS
- Engines (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server)
- **Multi-AZ** (failover, standby) vs **Read Replica** (leitura, performance) — **diferença crucial**
- Snapshots, parameter groups, Enhanced Monitoring

### Terça — Aurora
- Aurora Serverless v2, Global Database, backtrack, clones
- Aurora + zero-ETL para Redshift (**padrão novo 2026**)
- Quando Aurora > RDS

### Quarta — DynamoDB
- PK/SK, GSI/LSI, capacity (on-demand vs provisioned), **DAX**
- DynamoDB Streams, TTL, Global Tables, **zero-ETL para Redshift/OpenSearch**
- Single-table design (conceito)

### Quinta — Lab bancos
- [ ] RDS Multi-AZ + read replica (testar failover conceitualmente)
- [ ] DynamoDB com GSI + DAX
- [ ] ElastiCache Redis vs Memcached (comparar casos de uso)

### Sexta — Carga e elasticidade
- **ELB**: ALB (HTTP/HTTPS, camada 7) vs NLB (TCP/UDP, camada 4, IP estático) vs GLB vs CLB
- Auto Scaling: launch templates, target tracking, step, scheduled, predictive
- Cooldown, health checks, lifecycle hooks

### Sábado — Questões
- [ ] 30 questões (bancos + elasticidade)

### Domingo — Revisão ativa
- [ ] Flashcards: Multi-AZ vs Replica; ALB vs NLB; DAX vs ElastiCache
- [ ] Meta: **70%**

---

## ⚡ SEMANA 5 — Serverless, Integração e GenAI (23/11–29/11)

### Segunda — SQS e SNS
- SQS standard vs FIFO, visibility timeout, DLQ, long polling, message size
- SNS: topics, fan-out, filter policies, FIFO topics
- **Fan-out SNS → múltiplos SQS** (arquitetura clássica que cai muito)

### Terça — Lab integração
- [ ] SNS → 2 filas SQS (fan-out) + DLQ
- [ ] Lambda processando mensagens da fila
- [ ] EventBridge rule encaminhando eventos

### Quarta — EventBridge + Kinesis
- EventBridge: event bus, rules, Scheduler, vs SNS/SQS (quando cada um)
- Kinesis: Data Streams vs Firehose vs Analytics vs Video Streams
- Amazon MQ (quando migrar de RabbitMQ/ActiveMQ)

### Quinta — Lambda + Step Functions
- Lambda: limites, cold start, concurrency (reserved/provisioned), layers, VPC
- **Fargate vs Lambda vs ECS** (dilema clássico de containers)
- Step Functions: padrões de orquestração, retries, wait states

### Sexta — 🆕 GenAI e ML (novo foco 2026)
- **Amazon Bedrock**: modelos foundation, RAG com Knowledge Bases, agents, private endpoints
- **Amazon Q** (Business/Developer)
- Pareamento serviço↔caso de uso: Textract (OCR), Comprehend (sentimento/NLP), Rekognition (imagens/vídeo), Transcribe (fala→texto), Translate, Polly (texto→fala), Lex (chatbots), SageMaker (treinar modelos)

### Sábado — Questões
- [ ] 30 questões (serverless + GenAI)

### Domingo — Revisão ativa
- [ ] Explicar: SQS vs SNS vs EventBridge vs Kinesis (4 vias)
- [ ] Meta: **72%**

---

## 🔒 SEMANA 6 — Segurança, Monitoramento e DR (30/11–06/12)

> ⚠️ **Segurança é o maior domínio (30%)** — semana mais importante.

### Segunda — Criptografia e chaves
- **KMS**: CMK, envelope encryption, grants, key policies, cross-account
- **Secrets Manager** (rotação automática) vs **Parameter Store** (custo)
- **CloudHSM** (chaves dedicadas), ACM (certificados)

### Terça — Lab segurança
- [ ] Chave KMS + S3 SSE-KMS + EBS criptografado
- [ ] Secrets Manager com rotação
- [ ] Configurar ACM + ALB HTTPS

### Quarta — Defesa e detecção
- **WAF** (camada 7, regras) + **Shield** (DDoS) + **Network Firewall**
- **GuardDuty** (ameaças), **Inspector** (vulnerabilidades), **Macie** (dados sensíveis)
- **Security Hub**, **Config** (compliance), **Detective**, Firewall Manager

### Quinta — Monitoramento
- CloudWatch: métricas, logs, alarms, dashboards, synthetics
- **CloudTrail** (API calls) vs CloudWatch Logs (diferença de propósito)
- X-Ray (tracing), **Compute Optimizer**, Trusted Advisor

### Sexta — Disaster Recovery
- RTO x RPO (definir e calcular)
- Estratégias: Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active/Active
- **AWS Backup**, cross-region/cross-account, Organizations + Control Tower + SCPs

### Sábado — Questões
- [ ] 35 questões (segurança + DR) — maior volume

### Domingo — Revisão ativa
- [ ] Matriz RTO/RPO × estratégia de DR
- [ ] Meta: **75%**

---

## 💰 SEMANA 7 — Custo + Simulados completos (07/12–13/12)

### Segunda — Custo otimizado (20% do exame)
- **Savings Plans** (Compute/EC2/SageMaker) vs **Reserved Instances** vs **Spot**
- Right-sizing, **Graviton** (custo-benefício), Compute Optimizer
- S3 storage classes + lifecycle para reduzir custo

### Terça — Ferramentas de custo
- Cost Explorer, Budgets, Cost & Usage Report, Cost Anomaly Detection
- Trusted Advisor (checks de custo e limites)
- Cenários: "arquitetura mais barata que atende SLA"

### Quarta — **Simulado completo #1** (65 questões, 130 min)
- [ ] Condição de prova real: sem consulta, cronometrado
- [ ] Revisar TODAS as erradas; anotar padrão de erro

### Quinta — Revisão dos pontos fracos
- [ ] Estudar os 3 assuntos com mais erro no simulado #1

### Sexta — **Simulado completo #2**
- [ ] Meta: **80%**
- [ ] Comparar com o #1 (evolução por domínio)

### Sábado — Revisão dirigida
- [ ] Refazer só as questões erradas das duas semanas

### Domingo — Descanso leve
- [ ] Flashcards dos pontos fracos (30 min)
- [ ] Meta: **80%**

---

## 🚀 SEMANA 8 — Revisão final e prova (14/12–20/12)

### Segunda — **Simulado completo #3** (meta: 85%)
### Terça — Revisão: Resilient (26%) — Multi-AZ, DR, ELB, ASG, R53 failover
### Quarta — Revisão: Secure (30%) — IAM, KMS, VPC, WAF/Shield/GuardDuty
### Quinta — Revisão: High-Perf (24%) + Cost (20%) — cache, DynamoDB, Graviton, Spot
### Sexta — Revisão leve (flashcards + comparações) — **sem estudo pesado**
### Sábado — 🎯 **PROVA** (ou domingo, conforme agendamento)

---

# 🗝️ Cheatsheet — Comparações que MAIS caem

| Tema | Regra de ouro |
|---|---|
| SG vs NACL | SG = stateful, só permite, nível instância · NACL = stateless, permite/nega, nível subnet |
| RDS Multi-AZ vs Read Replica | Multi-AZ = disponibilidade (failover) · Replica = performance (leitura) |
| ALB vs NLB | ALB = HTTP/HTTPS camada 7 · NLB = TCP/UDP camada 4, IP estático |
| SQS vs SNS | SQS = fila (pull) · SNS = pub/sub fan-out (push) |
| CloudFront vs Global Accelerator | CloudFront = cache HTTP · GA = roteamento TCP/UDP |
| EBS vs Instance Store | EBS = persistente/rede · Instance Store = efêmero/local |
| Secrets Manager vs Parameter Store | Secrets = rotação automática (pago) · Parameter = barato/simples |
| Aurora vs RDS | Aurora = mais performance, replicas até 15, serverless |
| Lambda vs Fargate vs ECS | Lambda = event-driven/curto · Fargate = containers sem servidor · ECS = controle fino |
| Direct Connect vs VPN | DX = dedicado, caro, estável · VPN = rápido de criar, mais barato |
| Kinesis vs SQS | Kinesis = streaming, ordem/replay por shard · SQS = fila, decoplamento |
| SSE-S3 vs SSE-KMS vs SSE-C | S3 gerencia · KMS (auditoria/controle) · cliente gerencia a chave |

---

# ✅ Checklist de prontidão

- [ ] 85%+ em 3 simulados completos diferentes
- [ ] Explico sem consultar as 12 comparações acima
- [ ] Pratiquei: EC2, S3, VPC, RDS, DynamoDB, Lambda, IAM, CloudWatch
- [ ] Sei RTO/RPO e as 4 estratégias de DR
- [ ] Sei estimar custo (RI vs Spot vs On-Demand; storage classes)
- [ ] 65 questões em menos de 130 min
- [ ] Conheço GenAI/Bedrock e os serviços ML↔casos de uso

---

## 📚 Recursos

- **Cursos:** Stephane Maarek (Udemy) · Adrian Cantrill (cantrill.io) · AWS Skill Builder
- **Simulados:** Tutorials Dojo (Jon Bonso) · Neal Davis · AWS Official Practice
- **Prática:** AWS Free Tier · workshops.aws · Well-Architected Framework
- **Oficial:** docs.aws.amazon.com (exam guide + in-scope services)

---

*Plano detalhado — gerado em ~/aws-saa-c03/PLANO-SEMANAL-COMPLETO.md*
