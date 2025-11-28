# 🌟 Documento de Demonstração de Markdown

## 📌 1. Introdução à Formatação

Este documento serve como um guia rápido para demonstrar todas as funcionalidades mais **importantes** e _comuns_ do Markdown.

> **Citação em Bloco:**
> "A sintaxe Markdown foi criada para ser a mais legível e discreta possível."
> — John Gruber

---

### 2. Ênfase e Estilização

Você pode combinar diferentes tipos de ênfase, como:

- **Negrito:** Use `**asteriscos duplos**` ou `__underline duplo__`.
- _Itálico:_ Use `*um asterisco*` ou `_um underline_`.
- **_Negrito e Itálico:_** Use `***três asteriscos***`.
- ~~Riscado:~~ Use `~~dois tils~~`.
- `Código Inline`: Use um único acento grave `` `código` `` para comandos ou nomes de variáveis.

---

### 3. Listas (Não Ordenadas e Ordenadas)

#### Lista Não Ordenada

Use asteriscos (`*`), hífens (`-`) ou sinais de adição (`+`):

- Primeiro item da lista
  - Sub-item recuado (use dois espaços antes do marcador)
  - Outro sub-item.
- Segundo item

* Terceiro item

#### Lista Ordenada

Use números seguidos por um ponto. O número real não importa, o Markdown irá corrigir a ordem:

1.  Primeira Etapa
2.  Segunda Etapa
3.  Terceira Etapa.

---

### 4. Links e Imagens

#### Link Inline

Para um [link de texto-âncora], use a sintaxe `[texto](URL)`:

Visite a documentação oficial do [GitHub Flavored Markdown](https://docs.github.com/pt/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

#### Imagem

A sintaxe é semelhante a um link, mas com um ponto de exclamação (`!`) na frente: `![Texto Alt da Imagem](URL_da_imagem)`:

![Logotipo Genérico](https://via.placeholder.com/150x50?text=LOGO+AQUI)

---

### 5. Tabelas

Tabelas são ótimas para organizar dados. Use barras (`|`) e hífens (`-`) para estruturá-las:

| Cabeçalho A (Alinhado à Esquerda) | Cabeçalho B (Centralizado) | Cabeçalho C (Alinhado à Direita) |
| :-------------------------------- | :------------------------: | -------------------------------: |
| Dado 1                            |           Dado 4           |                           Dado 7 |
| Dado 2                            |           Dado 5           |                           Dado 8 |
| Dado 3                            |           Dado 6           |                           Dado 9 |

---

### 6. Blocos de Código (Code Fences)

Para blocos de código longos, use três acentos graves (```) e, opcionalmente, especifique a linguagem para _syntax highlighting_:

```javascript
// Exemplo de código JavaScript para saudação
function greet(name) {
  if (name) {
    return "Olá, " + name + "!";
  } else {
    // Lançando um erro, como em um ticket de bug!
    throw new Error("Nome é obrigatório.");
  }
}
greet("Usuário Markdown");
```
