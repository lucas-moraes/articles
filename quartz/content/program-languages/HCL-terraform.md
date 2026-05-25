---
title: HCL-terraform
date: 2026-05-28
tags: [development]
#
---

### HCL - HashiCorp Configuration Language
A linguagem de programação (ou melhor, a linguagem de configuração) utilizada no Terraform chama-se HCL, que significa HashiCorp Configuration Language.  

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























