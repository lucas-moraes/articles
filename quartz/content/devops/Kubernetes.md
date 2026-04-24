---
title: Kubernetes
date: 2026-04-24
tags: [devops]
---

### Kubernetes (K8's)
[[0-Devops-introducao]]

O segredo do K8's não é a tecnologia de containers, mas o seu **loop de controle (Reconciliation loop)**.  
No Docker tradiciona, damos as ordens imperativas: "Docker, roder esse container". Se o container morrer, o Docker (geralmente) não faz nada a menos que você tenha configurado uma politica de restart simples.  
No Kubernetes, a lógica é **declarativa**:  
→ Você define o **estado desejado**: (Ex: "Quero 3 replicas da minha API rodando");  
→ O **Control Plane** observa o **Estado atual**: (EX: "Só existem 2 réplicas rodando porque uma falhou");  
→ Ele executa uma ação para converter o atual no desejado (Ex: "Vou  criar uma nova réplica em outro Node saudável");  

**Insight incisivo**: O Kubernetes é, na verdade, um gigantesco motor de erros. Ele passa 100% do tempo tentando provar que você está errado e corrigindo o sistema para que ele volte ao que você pediu.  

**Desconstruindo os objetos (A Anatomia da abstração)**. 

**Pod (A unidade atômica)**. 
O Pod não é apenas um container, ele é um ambiente de isolamento compartilhado.  
**Por que não rodar o container direto?** Porque às vezes você precisa de um "ajudante" (o padrão Sidecar). Ex: Um container roda sua App e outro container no mesmo Pod apenas coleta os logs e os envia para um servidor externo. Eles compartilham o mesmo **localhost**.  

**O Deployment (A estratégia de guerra)**. 
O Deployment não "roda" nada, ele gerencia o **ReplicaSet**.  
Ele é quem decide como a atualização será feita. Se você mudar a versão da sua imagem, o Deployment pode fazer um **Rolling update:** mata um Pod antigo, sobe um novo, mata outro antigo, sobe outro novo. Se o novo falhar, ele para tudo e mantém os antigos vivos.  

**O Service (A identidade estável)**. 
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

Agora vamos criar o "garçom". NoKubernetes, o **Service** é o que dá um endereço estável para os Pods que o seu **Deployment** criou. Como os Pods são efêmeros (se um morre e nasce outro, o IP muda), você nunca deve tentar conectar diretamente ao IP de um pode, você conecta no **Service**.  
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














