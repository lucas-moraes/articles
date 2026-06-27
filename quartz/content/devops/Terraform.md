---
title: Terraform
date: 2026-05-27
tags: [br,devops]
#
---

### Terraform

O Terraform é, sem dúvidas, a ferramenta de Infraestrutura como Código (IaC - [[infra-as-code]]) mais popular e utilizada no mundo. Criado pela HashiCorp, ele permite que você defina, provisione e gerencie a infraestrutura de nuvem de forma segura, eficiente e previsível usando arquivos de configuração de texto simples.  

Se você quer dominar o Terraform, precisa entender desde os seus conceitos fundamentais até a sua arquitetura de funcionamento. Abaixo, preparei um guia completo cobrindo "tudo" o que você precisa saber.  

🟣 **O que torna o Terraform tão especial?**.  
O Terraform resolve o problema da "infraestrutura multi-nuvem" através de três pilares:  
- **Agnóstico a Provedores (Multi-Cloud)**: Você pode usar a mesma ferramenta e a mesma lógica para gerenciar recursos na AWS, Microsoft Azure, Google Cloud, Oracle Cloud, Cloudflare, e até ambientes locais com Docker ou VMware.  
- **Linguagem HCL (HashiCorp Configuration Language)**: O Terraform não usa JSON ou YAML puro (embora aceite). Ele usa uma linguagem própria chamada HCL, que foi desenhada especificamente para ser fácil de ler por humanos e fácil de processar por máquinas.  
- **Abordagem Declarativa**: Você diz o que quer (ex: "quero um banco de dados MySQL com 20GB"), e o Terraform descobre o como fazer (as chamadas de API necessárias para criar ou atualizar esse banco).  

🟣 **A Arquitetura do Terraform: O Core e os Providers**.  
O funcionamento do Terraform é dividido em duas partes principais:  
- **Terraform Core**: É o executável principal (o motor). Ele é responsável por ler os seus arquivos de código, gerenciar o ciclo de vida dos recursos e criar o gráfico de dependências (ele descobre, por exemplo, que precisa criar a rede antes de criar o servidor).  
- **Providers (Provedores)**: São plugins que conectam o Terraform Core às APIs dos provedores de nuvem. Existe um provider para a AWS, um para a Azure, etc. Sempre que a AWS lança um serviço novo, o provider da AWS é atualizado para que o Terraform consiga interagir com ele.  

🟣 **O "Segredo" do Terraform: O State File (`terraform.tfstate`)**.  
Este é o conceito mais importante para entender o Terraform.  
Quando você roda o Terraform, ele cria um arquivo chamado `terraform.tfstate`. Esse arquivo é um registro em formato JSON que funciona como uma "única fonte da verdade". Ele mapeia o que está escrito no seu código com o que realmente existe de fato na nuvem.  

- Se você tem uma máquina no código e ela existe na AWS, o State sabe disso.
- Se você mudar o tamanho da máquina no código, o Terraform lê o State, percebe a diferença e aplica a alteração.
- ⚠️ **Atenção**: O arquivo de estado é extremamente sensível, pois pode conter senhas e dados estruturais da sua rede. Em ambientes de produção, ele nunca fica na sua máquina; ele é salvo remotamente (em um bucket S3 da AWS, por exemplo) com criptografia.  

🟣 **O Fluxo de Trabalho (Workflow) Tradicional**.  
**terraform init**: Inicializa o diretório de trabalho. Ele lê seu código, descobre quais providers você está usando e faz o download deles.  
**terraform plan**: É a simulação. O Terraform compara seu código com a nuvem atual e te mostra exatamente o que ele vai criar, modificar ou deletar. Ele não altera nada ainda. É a sua rede de segurança.  
**terraform apply**: Executa as mudanças de verdade. Ele pede uma confirmação ("yes") e começa a criar a infraestrutura na nuvem.  
**terraform destroy**: O botão de pânico ou de limpeza. Ele deleta tudo o que foi criado por aquele código, limpando a sua conta da nuvem para você não receber cobranças indevidas.  

🟣 **Anatomia do Código Terraform**.  
Um arquivo básico do Terraform (geralmente chamado de `main.tf) se parece com isso:  

```terraform
# 1. Definindo qual provedor vamos usar
provider "aws" {
  region = "us-east-1"
}

# 2. Declarando um recurso (uma máquina virtual EC2)
resource "aws_instance" "meu_servidor" {
  ami = "ami-0c55b159cbfafe1f0"    # ID da imagem do sistema operacional
  instance_type = "t2.micro"       # Tipo/tamanho da máquina

  tags = {
    Name = "Servidor-Producao"
  }
}

```

- `provider`: Bloco que configura a conexão com a nuvem.  
- `resource`: Bloco que cria algo. O primeiro argumento (aws_instance) é o tipo de recurso que o provedor entende. O segundo (meu_servidor) é o nome interno que você dá para esse recurso usar dentro do código.  

🟣 **Conceitos Avançados que você precisa conhecer**
Conforme seus projetos crescem, você precisará usar recursos que evitam a repetição de código (princípio DRY - Don't Repeat Yourself):  

- **Variables (Variáveis)**: Permitem parametrizar o código. Em vez de fixar a região como "us-east-1", você cria uma variável para poder mudar a região dinamicamente entre homologação e produção.  
- **Outputs**: Valores que o Terraform exibe no terminal após a criação. Exemplo: o endereço IP público do servidor que acabou de ser criado.  
- **Modules (Módulos)**: São pacotes de código Terraform reutilizáveis. Pense neles como "funções" ou "componentes". Você pode criar um módulo padrão de "Configuração de Rede Segura" e reutilizá-lo em 50 projetos diferentes da empresa.  











































