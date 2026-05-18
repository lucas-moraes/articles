---
title: FTP
date: 2026-05-15
tags: [protocols]
---

### FTP

O FTP (File Transfer Protocol, ou Protocolo de Transferência de Arquivos) é um dos protocolos mais antigos da internet, criado na década de 1970. Sua única e principal função é permitir a **transferência de arquivos** entre um cliente (o seu computador) e um servidor remoto através de uma rede TCP/IP.  

Embora muitas pessoas hoje utilizem a nuvem (como Google Drive ou Dropbox), o FTP ainda é amplamente utilizado por desenvolvedores web para enviar arquivos de sites para servidores de hospedagem. 

---

🟢 **Como funciona o FTP? (O modelo de duas conexões)**  
O funcionamento do FTP é único porque, ao contrário da maioria dos protocolos (como o HTTP), ele utiliza duas conexões separadas para realizar o trabalho:  

1 - **Canal de Controle (Porta 21)**: É a conexão de comando. O cliente se conecta a essa porta para enviar comandos textuais (como "listar arquivos", "mudar de pasta", "fazer download") e autenticar com usuário e senha. Essa conexão permanece aberta durante toda a sessão.  

2 - **Canal de Dados (Porta 20)**: É a conexão onde a transferência real do arquivo acontece. Ela é aberta apenas quando um arquivo ou uma lista de diretórios precisa ser transmitida, e fecha assim que a transferência termina. 

🟢 **Modos de Conexão: Ativo vs. Passivo**.  
Dependendo de como o canal de dados é aberto, o FTP pode operar de duas formas:  

**Modo Ativo**: O cliente abre uma porta e o servidor se conecta de volta a ela para transferir os dados.   *Problema*: Firewalls no computador do cliente costumam bloquear conexões vindas de fora, quebrando o FTP.  

**Modo Passivo (PASV)**: O cliente pede para o servidor abrir uma porta aleatória, e o próprio cliente inicia a conexão de dados. É o modo mais utilizado hoje porque contorna problemas com firewalls domésticos.  

---

🟢 **O calcanhar de Aquiles: Segurança**.  
O FTP tradicional possui uma grave falha para os padrões atuais: ele não possui criptografia.  
Tanto o seu usuário e senha quanto os arquivos transferidos trafegam pela rede em texto claro. Se alguém interceptar a comunicação, poderá roubar suas credenciais facilmente.  

Para resolver isso, surgiram duas alternativas seguras que substituem o FTP tradicional:  
**FTPS (FTP over SSL/TLS)*: É o mesmo protocolo FTP, mas que adiciona uma camada de criptografia idêntica à do HTTPS (SSL/TLS). Ele protege os dados, mas mantém a estrutura de duas conexões (canais de controle e dados).  

**SFTP (SSH File Transfer Protocol)**: Apesar do nome parecido, o SFTP é um protocolo completamente diferente, baseado no SSH (Secure Shell). Ele realiza toda a comunicação (comandos, senhas e arquivos) de forma criptografada através de uma única conexão (geralmente na porta 22). É o padrão mais recomendado e seguro hoje em dia.
























