---
title: Banco-de-dados-relacionais
date: 2026-06-24
tags: [br,database]
#
---

### Banco de dados relacionais

**Conceitos**
* * * 

**🔵 Estrutura e Modelagem (Como os dados se organizam)**
**→ Tabelas (Tables / Relações)**: A unidade básica. É onde os dados ficam guardados em formato de linhas (registros) e colunas (atributos).  

**→ Chave Primária (Primary Key - PK)**: Um identificador único para cada linha de uma tabela. Não podem existir duas linhas com a mesma PK, e ela nunca pode ser vazia (`NULL`). Exemplo: O CPF de um cliente ou o ID de um produto.  

**→ Chave Estrangeira (Foreign Key - FK)**: É o que cria o "relacionamento" entre as tabelas. É uma coluna em uma tabela que aponta para a Chave Primária de outra tabela.  

**→ Normalização (Normal Forms)**: Um conjunto de regras matemáticas para estruturar suas tabelas de forma inteligente. O objetivo é evitar a redundância (repetição) de dados e anomalias de atualização.  

**→ Restrições (Constraints)**: Regras que o banco impõe para garantir a qualidade dos dados. Exemplos: `NOT NULL` (obriga o campo a ser preenchido), UNIQUE (não permite valores duplicados naquela coluna) e CHECK (valida uma condição, ex: idade >= 18).  

**🔵 Relacionamentos (Como as tabelas conversam)**
**→ 1 para N (Um para Muitos)**: O relacionamento mais comum. Exemplo: Um Cliente pode fazer Muitos Pedidos, mas cada Pedido pertence a apenas Um Cliente.  

**→ N para N (Muitos para Muitos)**: Quando várias entidades se cruzam. Exemplo: Um Estudante pode se matricular em Muitas Disciplinas, e Uma Disciplina tem Muitos Estudantes. (Na prática, isso gera uma terceira tabela intermediária no banco).  

**→ JOINS (Junções)**: Os comandos que você usa na hora de consultar os dados para juntar tabelas que estão separadas. Os principais são:  
 * `INNER JOIN`: Traz apenas os dados que têm correspondência em ambas as tabelas.  

 * `LEFT JOIN`: Traz tudo da tabela da esquerda, mesmo que não haja correspondência na tabela da direita.  

**🔵 Desempenho e Operação (O mundo real)**
**→ Índices (Indexes)**: Pense neles como o índice remissivo no final de um livro grosso. Em vez de ler a tabela inteira linha por linha (Table Scan) para achar um dado, o banco usa o Índice para ir direto na página certa, acelerando as buscas drasticamente.  

**→ Views (Visões)**: Uma tabela virtual gerada por uma consulta SQL salva. Serve para simplificar relatórios complexos. Em vez de escrever um JOIN gigante toda vez, você consulta a View como se ela fosse uma tabela normal.  

**→ Stored Procedures e Functions**: Pedaços de código (lógica de programação) que ficam guardados e rodam diretamente dentro do servidor do banco de dados, sem precisar passar pela sua aplicação.  

**→ Triggers (Gatilhos)**: Comandos automáticos. Você programa o banco para falar: "Sempre que um registro for deletado na tabela X, salve uma cópia dele na tabela de histórico Y automaticamente".  






















