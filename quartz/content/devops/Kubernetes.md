---
title: Kubernetes
date: 2026-04-24
tags: [devops]
---

### Kubernetes (K8's)
[[0-Devops-introducao]]


### 🟣 Introdução
O segredo do K8's não é a tecnologia de containers, mas o seu **loop de controle (Reconciliation loop)**.  
No Docker tradiciona, damos as ordens imperativas: "Docker, roder esse container". Se o container morrer, o Docker (geralmente) não faz nada a menos que você tenha configurado uma politica de restart simples.  
No Kubernetes, a lógica é **declarativa**:  
→ Você define o **estado desejado**: (Ex: "Quero 3 replicas da minha API rodando");  
→ O **Control Plane** observa o **Estado atual**: (EX: "Só existem 2 réplicas rodando porque uma falhou");  
→ Ele executa uma ação para converter o atual no desejado (Ex: "Vou  criar uma nova réplica em outro Node saudável");  

**Insight incisivo**: O Kubernetes é, na verdade, um gigantesco motor de erros. Ele passa 100% do tempo tentando provar que você está errado e corrigindo o sistema para que ele volte ao que você pediu.  

---

### 🟣 Cluster 
Cluster é o conjunto completo de máquinas que formam o ambiente Kubernetes, ou seja, é um grupo de servidores (máquinas) que trabalham juntos. O Control Plane gerencia e controla tudo, enquanto os Worker Nodes executam os Pods (suas aplicações).

**O que é um Cluster:**
- É formado por um ou mais nós (Nodes).
- Tem pelo menos um Control Plane (nó master).
- Tem um ou mais Worker Nodes (nós de trabalho).

**Componentes principais:**
- Control Plane (Master):
- API Server
- etcd (banco de dados)
- Scheduler
- Controller Manager

**Worker Nodes:**
- Kubelet
- Kube-proxy
- Container Runtime (containerd, CRI-O, etc.)

---

### 🟣 Namespace 
É um recurso que permite dividir um cluster em ambientes virtuais isolados.  
Serve para organizar e isolar recursos (Pods, Services, Deployments, etc).  
Um cluster pode ter vários namespaces.  
Por padrão, existe o namespace default.  

**Principais usos**. 
Separar ambientes (dev, staging, prod).  
Isolar equipes ou projetos. 
Controlar acesso (RBAC) por namespace.  
Limitar recursos (ResourceQuota). 

---

### 🟣 ConfigMap e Secret 
**ConfigMap**: É um objeto do Kubernetes usado para armazenar dados de configuração não sensíveis, como variáveis de ambiente, parâmetros de aplicação ou arquivos de configuração (JSON, YAML, properties). 
Dados em texto simples;  
**Secret**: É semelhante ao ConfigMap, mas projetado para armazenar informações sensíveis, como senhas, tokens, chaves SSH e certificados. Os dados são armazenados em base64 (não criptografados por padrão).  
Dados codigicados em base64 + pode usar criptografia em repouso.
Ambos podem ser consumidos por Pods como variáveis de ambiente ou montados como volumes.  

---

### 🟣 StatefulSet vs Deployment  
**Deployment**: Gerencia Pods stateless (sem estado). Os Pods são idênticos, intercambiáveis. e podem ser criados/destruídos em qualquer ordem.  
**StatefullSet**: Gerencia Pods stateful (com estados). Cada Pod tem uma idwentidade única e persistente (nome, hostname e storage).  

Principais diferenças:  
|**Apecto**                 |**Deployment**    |**StatefulSet**              |
|:--------------------------|:-----------------|:----------------------------|
|**Tipode aplicação**       |Stateless         |Stateful                     |
|**Identidade dos Pods**    |Temporária        |Fixa (ex: db-0, db-1)        |
|**Armazenamento**          |Compartilhado     |Volume persistente por Pod   |
|**Ordem de criação**       |Sem garantia      |Ordenada e previsível        |
|**Uso comum**              |API, frontend     |Banco de dados, Redis, Kafka |. 
.  

---

### 🟣 PersistentVolume (PV), PVC e StorageClass
**PersistentVolume (PV)**: É um recurso do cluster que representa um volume de armazenamento persistente real (ex: disco no cloud, NS, iSCSI).  
**PersistentVolumeClaim (PVC)**: É uma solicitação de armazenamento feita pelos usuários/Pods. A PVC 'reinvidica' um PV.
**StorageClass**: Define o tipo de armazenamento provisionado dinamicamente (ex: gp3, standard). Permite criar PVs automaticamente.  

**Resumo das relações**:
- StorageClass → Provisiona PV automaticamente
- PVC → Solicita e vincula ao PV
- Pod → Monta a PVC

---

### 🟣 Ingress
É um recurso do kubernetes que gerencia o acesso HTTP/HTTPS externo ao cluster, oeferecendo roteamento avançado.

**Ingress vs Service**:  
|Aspecto             |Service (LoadBalancer/NodePort.   |Ingress                 |
|:-------------------|:---------------------------------|:---------------------------|
|Tipo de tráfego     |TCP/UDP                           |HTTP/HTTPS                  |
|Roteamento          |Básico (por porta)                |Avançado (por URL, host)    |
|Recursos            |Um IP por Service                 |Um IP para múltiplas apps   |
|Funcionalidades     |Simples                           |TLS, rewrite, paths         |
.  

---

### 🟣 RBAC (Role-Based Access Control)
Mecanismo nativo do Kubernetes para controlar permissões de acesso a recursos

**Componentes principais**
**Role**: Permissões em todo o cluster;
**ClusterRole**: Permissões em todo o cluster;
**RoleBinding / ClusterRoleBinding**: Vincula Role/ClusterRole a usuários, grupos ou ServiceAccounts;  

**Segurança Básica Recomendada**
→ Usar RBAC (evite Cluster Admin desnecessário);
→ Resource Requests/Limits em Pods;
→ Secrets para credenciais;
→ NetworkPolicy para isolamento de rede;
→ Imagens com usuário não-root;

---

### 🟣 Horizontal Pod Autoscaler (HPA)
É o recurso que o Kubernetes que escala automaticamente o número de Pods de um Deployment ou StatefulSet com base na utilização de CPU, memória ou métricas customizadas.  

**Como funciona**:  
→ Monitora métricas (CPU, RAM, etc.).  
→ Aumenta/diminui a quantidade de réplicas conforme thresholds definidos.  
→ Funciona junto com Metrics Server (ou Prometheus Adapter para métricas customizadas).  

**Exemplo básico de YAML**:  
```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: meu-app-hpa
spec:
  scaleTargetRef:
    kind: Deployment
    name: meu-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 60
```

---

### 🟣 Networking: ClusterIP, NodePort, NetworkPolicy
**ClusterIP**: Tipo padrão de Service. Expõe a aplicação apenas internamente no cluster. Recebe um IP virtual acessível só de dentro do cluster.  
**NodePort**: Expõe a aplicação externamente abrindo uma porta (30000-32767) em todos os Nodes. Acessível via ```<NodeIP>:<NodePort>```.  
**NetworkPolicy**: Recurso de segurança que controla tráfego de rede entre Pods (quem pode falar com quem). Funciona como firewall no nível de Pods.  

Resumo:  
|Tipo|Visibilidade|Uso principal|
|:--------------|:-------------------|:--------------------------|
|ClusterIP      |Interno             |Comunicação entre serviços |
|NodePort       |Externo (básico)    |Testes e acessos simples   |
|MetworkPolicy  |Controle de tráfego |Isolamento e segurança     |
.  
---

### 🟣 Observabilidade: logs, metrics, Prometheus
Observabilidade é a capacidade de entender o estado interno de uma aplicação a partir de dados.  

**Principais pilares**:  
→ **Logs**: Registros de eventos e mensagens gerados pela aplicação (ex: erros, acessos).  
Coletados com Fluentd, Loki ou ELK Stack.  
→ **Metrics**: Dados numéricos de desempenho (CPU, memória, latência, requests por segundo).  
Usados para monitoramento e autoscaling (HPA).  
→ **Prometheus**: Ferramenta open-source líder para coleta e armazenamento de métricas.  
Usa modelo pull, PromQL para consultas e Grafana para visualização.  

Resumo:
Prometheus + Grafana é a stack mais usada para métricas. Logs geralmente complementam com Loki ou ELK.

---

### 🟣 kubectl comandos mais úteis
```kubectl get <recurso>``` — Lista recursos (pods, svc, deploy, etc.).  
Ex: ```kubectl get pods -n default```  
```kubectl describe <recurso> <nome>``` — Mostra detalhes completos e eventos.  
Ex: ```kubectl describe pod meu-pod```  
```kubectl logs <pod>``` — Exibe logs do Pod.  
Ex: ```kubectl logs meu-pod -f```  
```kubectl exec -it <pod> -- bash``` — Executa comando dentro do Pod (shell interativo).  

Outros úteis:  
```kubectl apply -f arquivo.yaml``` — Cria/atualiza recursos.  
```kubectl delete <recurso> <nome>``` — Remove. 
```kubectl get all``` — Lista os principais recursos. 

---


### 🟣 Desconstruindo os objetos (A Anatomia da abstração) 

#### Pod (A unidade atômica)
O Pod não é apenas um container, ele é um ambiente de isolamento compartilhado.  
**Por que não rodar o container direto?** Porque às vezes você precisa de um "ajudante" (o padrão Sidecar). Ex: Um container roda sua App e outro container no mesmo Pod apenas coleta os logs e os envia para um servidor externo. Eles compartilham o mesmo **localhost**.  

#### O Deployment (A estratégia de guerra)
O Deployment não "roda" nada, ele gerencia o **ReplicaSet**.  
Ele é quem decide como a atualização será feita. Se você mudar a versão da sua imagem, o Deployment pode fazer um **Rolling update:** mata um Pod antigo, sobe um novo, mata outro antigo, sobe outro novo. Se o novo falhar, ele para tudo e mantém os antigos vivos.  

#### O Service (A identidade estável) 
Em um mundo onde Pods nascem e morrem o tempo todo, o IP deles muda constantemente.  
O **Service** é um abstração que define um conjunto lógico de Pods e uma política para acessá-los. Ele funciona como um "nome fantasia" que nunca muda, não importa quantos Pods entrem ou saiam da "loja".  

**```etcd```O Plano de controle**.  
O ```etcd``` é o banco de dados chave-valor que armazena toda a configuração do cluster.  
Se o ```etcd``` fica fora do ar ou os dados forem corrompidos, o cluster "esquece" o que deveria estar fazendo. Os containers continuam rodando, mas o Kubernetes perde sua "consciência". É por isso que, em produção, o ```etcd``` é sempre distribuído em várias máquinas para nunca falhar.  

Exemplo de arquivo yaml do deployment

```yaml
apiVersion: apps/v1          # 1. A "linguagem" e versão que o K8s vai usar
kind: Deployment             # 2. O tipo de objeto que estamos criando
metadata:
  name: minha-app-web        # 3. O nome de identificação no cluster
  labels:
    app: backend             # 4. Etiquetas para organização
spec:
  replicas: 3                # 5. ESTADO DESEJADO: Sempre 3 instâncias vivas!
  selector:
    matchLabels:
      app: meu-site          # 6. Como o Deployment encontra seus "filhos" (Pods)
  template:                  # 7. A "receita" de como criar um novo Pod
    metadata:
      labels:
        app: meu-site        # 8. A etiqueta que o Pod deve ter
    spec:
      containers:
      - name: container-web
        image: nginx:1.21    # 9. A imagem que discutimos no Docker
        ports:
        - containerPort: 80  # 10. A porta que o container abre internamente
        resources:           # 11. LIMITES: Para um container não "roubar" toda a CPU
          limits:
            memory: "256Mi"
            cpu: "500m"
```

Agora vamos criar o "garçom". No Kubernetes, o **Service** é o que dá um endereço estável para os Pods que o seu **Deployment** criou. Como os Pods são efêmeros (se um morre e nasce outro, o IP muda), você nunca deve tentar conectar diretamente ao IP de um pode, você conecta no **Service**.  
Exemplo do arquivo yaml do Service:  

```yaml
apiVersion: v1
kind: Service
metadata:
  name: meu-servico-web        # 1. Nome do "garçom"
spec:
  selector:
    app: meu-site              # 2. O FILTRO: A quem esse garçom serve? 
                               # Ele busca Pods com a label 'app: meu-site'
  ports:
    - protocol: TCP
      port: 80                 # 3. Porta do Serviço (onde o usuário bate)
      targetPort: 80           # 4. Porta do Container (para onde ele manda)
  type: LoadBalancer           # 5. O TIPO: Como ele expõe para o mundo?
```
.  













