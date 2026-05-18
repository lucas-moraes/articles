---
title: SSH
date: 2026-05-18
tags: [protocols]
---

### SSH
O SSH (Secure Shell, ou Shell Seguro) é um protocolo de aplicação que permite a um usuário acessar e controlar um computador ou servidor remotamente através da internet de forma totalmente segura e criptografada.  
Ele é a ferramenta padrão de engenheiros de sistemas, desenvolvedores e administradores de rede para gerenciar servidores Linux na nuvem (como AWS, Google Cloud ou Azure) através do terminal de comandos.  

**Por que o SSH é seguro?**  
Antes do SSH (criado em 1995), o gerenciamento remoto era feito por protocolos como o Telnet. O grande problema do Telnet é que ele enviava tudo — incluindo o usuário e a senha de administração — em texto claro. Se alguém interceptasse o tráfego, ganharia controle total do servidor.  

O SSH resolveu isso implementando três pilares de segurança:  
→ **Criptografia Simétrica**: Após estabelecer a conexão, todos os dados trocados (comandos, respostas, arquivos) são criptografados por uma chave secreta compartilhada.  
→ **Criptografia Assimétrica**: Usada no início da conexão para autenticar o servidor e para o processo de troca de chaves, sem que a chave real precise ser enviada pela rede.  
→ **Integridade de Dados (Hashing)**: Garante que os pacotes enviados não foram alterados ou corrompidos no caminho através de mecanismos como o HMAC.  

Porta padrão: 22 (camada de transporte sobre o protocolo TCP).  

---

**Como funciona a Autenticação no SSH?**. 
Existem duas formas principais de se autenticar em um servidor via SSH:  

1 - Autenticação por Senha (Tradicional). 
Você digita o usuário e a senha do sistema remoto. Embora a senha trafegue criptografada pelo túnel SSH, esse método é vulnerável a ataques de força bruta (onde robôs tentam adivinhar sua senha repetidamente).  

2 - Autenticação por Chaves SSH (Recomendado)
É o método mais seguro. Em vez de uma senha, você utiliza um par de chaves criptográficas geradas no seu computador:  

*Chave Pública*: Você copia e salva dentro do servidor remoto (no arquivo ```~/.ssh/authorized_keys```). Ela pode ser exposta sem problemas.  

*Chave Privada*: Fica guardada a sete chaves no seu computador. Ela nunca deve ser compartilhada com ninguém.  

Quando você tenta se conectar, o servidor envia um desafio criptografado que apenas a sua chave privada consegue decifrar. Se o seu computador decifrar o desafio corretamente, o acesso é liberado sem que você precise digitar nenhuma senha.  

---

**Principais Casos de Uso do SSH**. 
→ **Execução de Comandos Remotos**: Administrar o sistema operacional, instalar pacotes, reiniciar serviços e configurar o servidor através da linha de comando.  

→ **Túnel SSH (Port Forwarding)**: Permite redirecionar o tráfego de rede de forma segura. Por exemplo, você pode acessar um banco de dados que está bloqueado para o mundo externo criando um túnel seguro através do SSH.  

→ **Transferência Segura de Arquivos**: O SSH serve de base para o SFTP (SSH File Transfer Protocol) e para o comando SCP (Secure Copy), permitindo mover arquivos entre máquinas locais e remotas com criptografia nativa.  


















