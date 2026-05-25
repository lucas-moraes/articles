---
title: HTTP/HTTPS
date: 2026-05-15
tags: [protocols]

---

### HTTP/HTTPS

O HTTP e o HTTPS são os protocolos de aplicação mais importantes da internet, responsáveis por permitir a transferência de dados (textos, imagens, vídeos) entre o seu navegador e o servidor de um site.  
Embora tenham nomes parecidos, eles funcionam de maneiras bem diferentes quando o assunto é segurança.  

🔵 **HTTP**.  
HTTP significa Hypertext Transfer Protocol (Protocolo de Transferência de Hipertexto).  
Ele funciona em um modelo de Requisição e Resposta: o seu navegador envia uma requisição para o servidor (ex: "quero ver a página X") e o servidor responde enviando os arquivos daquela página.  
**O grande problema**: *Os dados trafegam em texto claro (Plain Text). Isso significa que qualquer pessoa que consiga interceptar o tráfego de rede entre você e o servidor (como alguém na mesma rede Wi-Fi pública) pode ler tudo o que você está enviando ou recebendo, incluindo senhas e cartões de crédito.*.  
Porta padrão: 80.  

🔵 **HTTPS**.  
HTTPS significa Hypertext Transfer Protocol Secure (Protocolo Seguro de Transferência de Hipertexto).  
Ele é exatamente o mesmo HTTP, mas rodando sobre uma camada adicional de segurança chamada TLS (Transport Layer Security) — antigamente conhecida como SSL.  
A solução: O HTTPS criptografa os dados antes do envio. Se alguém interceptar a comunicação, verá apenas um amontoado de caracteres ilegíveis.  
Porta padrão: 443.  

### Como o HTTPS garante a segurança? (O Handshake TLS)
Para que a conexão segura aconteça, o navegador e o servidor realizam um processo chamado TLS Handshake antes de qualquer dado do site ser enviado:

1 - **O Olá do Cliente**: O navegador entra em contato com o servidor e diz quais versões do TLS e algoritmos de criptografia ele suporta.  
2 - **O Olá do Servidor e o Certificado**: O servidor responde enviando seu Certificado Digital (que contém a sua Chave Pública).  
3 - **Autenticação**: O navegador verifica com uma Autoridade Certificadora (CA) se aquele certificado é válido e se o site é realmente quem diz ser.  
4 - **Criação da Chave de Sessão**: O navegador gera uma chave secreta única, criptografa essa chave usando a chave pública do servidor e a envia de volta. O servidor usa sua chave privada para decodificar.  
5 - **Conexão Segura Estabelecida**: A partir desse momento, ambos usam essa chave secreta comum para criptografar e descriptografar todas as mensagens trocadas durante aquela sessão (Criptografia Simétrica).  

**Métodos HTTP mais comuns**.  

Tanto no HTTP quanto no HTTPS, o navegador se comunica usando "verbos" ou métodos para indicar a ação que deseja realizar:  
**GET**: Solicita dados de um recurso específico (ex: carregar uma página).  
**POST**: Envia dados para serem processados pelo servidor (ex: enviar um formulário de cadastro ou login).  
**PUT/PATCH**: Atualiza dados existentes no servidor.  
**DELETE**: Remove um recurso específico.  




















