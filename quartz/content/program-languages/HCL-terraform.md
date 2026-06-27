---
title: HCL-terraform
date: 2026-05-28
tags: [br, development]
#
---

### HCL - HashiCorp Configuration Language
A linguagem de programação (ou melhor, a linguagem de configuração) utilizada no [[Terraform]] chama-se HCL, que significa HashiCorp Configuration Language.  

Ela foi criada pela própria HashiCorp com um objetivo muito claro: ser fácil de ler por humanos (como um arquivo JSON ou YAML), mas poderosa o suficiente para aceitar lógica estruturada (como variáveis, loops e condicionais) sem a complexidade de uma linguagem de programação tradicional como Java ou Python.  

Para dominar o Terraform, você precisa entender a sintaxe, os blocos estruturais e como manipular dados dentro da HCL. Vamos a fundo em como ela funciona:  

🟣 **A Sintaxe Básica (Blocos, Argumentos e Identificadores)**.  
Tudo na HCL é estruturado em blocos. Um bloco serve como um container para definir um componente da sua infraestrutura.  

A anatomia de um bloco padrão se parece com isso:  

```terraform
# Tipo_do_Bloco "Rotulo_1" "Rotulo_2" {
#   Argumento = "Valor"
# }

resource "aws_instance" "servidor_web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

```

- **Tipo do Bloco (`resource`)**: Define o que o Terraform vai fazer (ex: criar um recurso, definir uma variável, configurar um provedor).  
- **Rótulo 1 (`aws_instance`)**: Indica o tipo exato do recurso que o provider da nuvem entende.  
- **Rótulo 2 (`servidor_web`)**: É o nome lógico (ou apelido) que você escolhe para esse recurso. Ele serve para você referenciar esse bloco em outros lugares do código.  
- **Argumentos (`ami, instance_type`)**: São as configurações e propriedades que você está enviando para o recurso.  

🟣 **Tipos de Dados Suportados**.  
A HCL é uma linguagem fortemente tipada. Os tipos de dados mais comuns que você vai atribuir aos argumentos são:  

- **String**: Texto entre aspas duplas. (Ex: "us-east-1")
- **Number**: Números inteiros ou decimais. (Ex: 3 ou 10.5)
- **Bool**: Valores booleanos. (true ou false)
- **List**: Uma sequência de valores indexados entre colchetes. (Ex: ["us-east-1a", "us-east-1b"])
- **Map**: Um conjunto de chaves e valores (como um dicionário ou objeto JSON).

```terraform
tags = {
  Ambiente = "Producao"
  Projeto  = "Financeiro"
}
```

🟣 **Os 5 Blocos Essenciais da HCL**.  
Para construir qualquer projeto em Terraform, você usará uma combinação destes cinco blocos estruturais:

A → `terraform {}` (Configuração do Engine).  
Define as configurações do próprio Terraform, como as versões mínimas necessárias da ferramenta e dos providers.  

```terraform
terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}
```
#  

---

B → `variable {}` (Entradas / Inputs)  
Permite parametrizar seu código para que ele não fique estático ("hardcoded"). Pense nelas como os argumentos de uma função.  

```terraform
variable "tipo_instancia" {
  type        = string
  default     = "t2.micro"
  description = "O tamanho da máquina virtual"
}
```
Para usar essa variável no código, você a chama como `var.tipo_instancia`.  
#  

---

C → `resource {}` (Os Recursos).  
Como vimos, é aqui que a mágica acontece.   
É o bloco que efetivamente cria coisas na nuvem.  

---

D → `data {}` (Consultas / Data Sources)
Permite que você consulte informações de recursos que já existem na nuvem (e que não foram criados por esse código atual). É uma operação de "somente leitura".  

```terraform
# Busca o ID da imagem Linux mais recente na AWS automaticamente
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # ID da Canonical (Ubuntu)
}
```
#  

---

E → `output {}` (Saídas)
Exibe informações úteis no terminal após a execução ou expõe dados para outros módulos.  

```terraform
output "ip_publico" {
  value       = aws_instance.servidor_web.public_ip
  description = "O endereço IP para acessar o servidor"
}
```
#  

---


🟣 **Expressões Dinâmicas: Loops e Condicionais**.  
Embora não seja uma linguagem de programação de propósito geral (como Python), a HCL possui recursos avançados para lidar com lógica:  

✦ **Expressões Condicionais (Operador Ternário)**
Você pode tomar decisões com base em variáveis usando a sintaxe `condição ? se_verdadeiro : se_falso`.  

```terraform
# Se o ambiente for produção, cria uma máquina grande, senão cria uma micro
instance_type = var.ambiente == "prod" ? "t3.large" : "t2.micro"
```

✦ **Loops (count e for_each)**
Se você precisar criar múltiplos recursos com base em uma lista ou mapa:

- Usando `count`:  
```terraform
resource "aws_instance" "web" {
  count         = 3 # Cria 3 instâncias idênticas
  ami           = "ami-12345"
  instance_type = "t2.micro"
  
  tags = {
    Name = "Servidor-${count.index}" # Fica: Servidor-0, Servidor-1, Servidor-2
  }
}
```

- Usando `for_each` (Mais recomendado para mapas e sets):  
```terraform
resource "aws_iam_user" "usuarios" {
  for_each = toset(["ana", "bruno", "carlos"])
  name     = each.key # Cria um usuário para cada nome da lista
}
```



🟣 **Boas Práticas de Organização de Arquivos**.  
O Terraform lê todos os arquivos terminados em `.tf` dentro de um diretório e os consolida como se fossem um único grande arquivo.  
Por convenção e organização, a comunidade divide o código HCL em arquivos específicos:  

✦ `main.tf`: Onde ficam os recursos principais (resource e data).  
✦ `variables.tf`: Onde são declaradas todas as variáveis (variable).  
✦ `outputs.tf`: Onde ficam as saídas de dados (output).  
✦ `providers.tf`: Onde ficam as configurações de provedores e do bloco terraform.  
✦ `terraform.tfvars`: O arquivo onde você define os valores reais das suas variáveis para aquele ambiente específico (este arquivo geralmente não vai para o Git se tiver dados sensíveis).  

---



### Laboratório Prático: Subindo um Servidor Nginx via Terraform

1 - **A Estrutura do código (`main.tf`)**.  

```terraform
# 1. Configuração do Terraform e do Provider do Docker
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

# Configura o provider do Docker (ele vai se conectar ao seu Docker Desktop local)
provider "docker" {}

# 2. Definição das Variáveis (HCL)
variable "nome_do_container" {
  type        = string
  default     = "meu-servidor-web"
  description = "Nome que será atribuído ao container Docker"
}

variable "porta_externa" {
  type        = number
  default     = 8000
  description = "Porta do seu computador que vai apontar para o container"
}

# 3. Recursos (O que o Terraform vai criar)
# Baixa a imagem do Nginx (Equivalente ao 'docker pull nginx:latest')
resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = false
}

# Cria e roda o container (Equivalente ao 'docker run -d -p 8000:80...')
resource "docker_container" "nginx_server" {
  image = docker_image.nginx.image_id
  name  = var.nome_do_container

  ports {
    internal = 80   # Porta padrão dentro do container Nginx
    external = var.porta_externa
  }
}

# 4. Outputs (Informações que queremos ver no final)
output "url_de_acesso" {
  value       = "http://localhost:${var.porta_externa}"
  description = "Acesse este link no seu navegador para ver o Nginx funcionando"
}

```
#  


2 - **Executando o Código no seu Terminal**. 
Com o Docker Desktop rodando na sua máquina e o Terraform instalado, abra o terminal dentro da pasta onde você salvou o arquivo main.tf e siga o fluxo tradicional:  

Passo 1: Inicializar o diretório. 
```bash
terraform init
```
O Terraform vai ler o seu código, ver que você precisa do provider do Docker e fazer o download dele automaticamente.  

.  

Passo 2: Planejar a execução. 
```bash
terraform plan
``` 
Ele vai analisar o seu Docker local, ver que o container não existe e te mostrar na tela: `Plan: 2 to add, 0 to change, 0 to destroy`. (Ele vai adicionar a imagem e o container).  

#  

Passo 3: Aplicar as mudanças.  
```bash
terraform apply
```
O terminal vai te pedir uma confirmação. Digite `yes` e dê Enter. Em poucos segundos, o Terraform vai baixar a imagem, criar o container e exibir o `output` no final:  

Outputs:  
`url_de_acesso = "http://localhost:8000"`.  

Se você abrir o seu navegador agora e acessar `http://localhost:8000`, verá a página padrão do Nginx rodando! Se você rodar o comando `docker ps` no seu terminal, verá o container gerenciado pelo Terraform lá.  

3 - **O Poder da Edição Declarativa**. 

Lembra que a HCL é declarativa? Faça um teste: altere a variável `porta_externa` no código de `8000` para `8080` e rode `terraform apply` novamente.  

O Terraform vai entender que a porta mudou, vai destruir o container antigo na porta 8000 e criar um novo na porta 8080 automaticamente. Você não precisou dar `docker stop` ou `docker rm` manualmente; o código ditou o estado final e o Terraform resolveu o resto.

Ao terminar os seus testes, basta rodar:  

```terraform
terraform destroy
```
E ele limpa tudo o que criou, deixando seu Docker perfeitamente limpo.  

Esse exemplo faz sentido para você? É uma excelente forma de treinar a sintaxe da linguagem sem medo de errar!  































