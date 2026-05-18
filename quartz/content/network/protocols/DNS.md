---
title: DNS
date: 2026-05-15
tags: [protocols]
---

### DNS
O DNS (Domain Name System, ou Sistema de Nomes de Domínios) é, de forma simples, a lista de contatos da Internet.  
Os computadores e servidores se comunicam através de números chamados endereços IP (como ```192.0.2.1``` ou ```2001:db8::1```). Como seria impossível para os humanos memorizarem os IPs de todos os sites que visitam, o DNS entra em ação para traduzir nomes amigáveis (como ```google.com```) nos IPs correspondentes que as máquinas entendem.  

---

🟢 **Como funciona a resolução DNS (Passo a Passo)**. 
Quando você digita um endereço no navegador, acontece um processo em cadeia envolvendo quatro servidores diferentes. Esse processo leva apenas alguns milissegundos:  

1 - **DNS Recurser (Resolvedor)**: É o primeiro servidor a receber a sua requisição. Geralmente ele é fornecido pelo seu provedor de internet (ou por serviços públicos como o Cloudflare 1.1.1.1 ou Google 8.8.8.8). Se ele não tiver a resposta salva na memória (cache), ele começa a perguntar para os outros servidores.  

2 - **Root Nameserver (Servidor Raiz)**: É o primeiro passo para traduzir o nome em IP. O servidor raiz não sabe o IP do site, mas sabe apontar quem sabe: ele direciona o resolvedor para o servidor responsável pela extensão correta (o TLD).  

3 - **TLD Nameserver (Top-Level Domain)**: Este servidor gerencia extensões específicas, como .com, .net ou .br. Se você buscou por um site .com, o TLD direciona o resolvedor para o servidor que gerencia aquele domínio específico.  

4 - **Authoritative Nameserver (Servidor Autoritativo)**: É a parada final. Este servidor possui os registros oficiais do domínio pesquisado. Ele entrega o endereço IP correto de volta para o resolvedor, que por sua vez o entrega ao seu navegador para carregar o site.  

---

🟢 **Principais Tipos de Registros DNS**
As informações de um domínio ficam guardadas em uma tabela chamada "Zona DNS", composta por vários tipos de registros. Os mais comuns são:  

→ **Registro A**: MAPEIA um nome de domínio para um endereço IPv4 (ex: site.com $\rightarrow$ 192.0.2.1).  

→ **Registro AAAA**: Exatamente como o registro A, mas aponta para um endereço IPv6.  

→ **CNAME (Canonical Name)**: Cria um apelido para outro domínio. É muito usado para direcionar o subdomínio www para o domínio principal (ex: [www.site.com](https://www.site.com) $\rightarrow$ site.com).  

→ **MX (Mail Exchanger)**: Especifica os servidores de e-mail responsáveis por receber mensagens em nome daquele domínio.  

→ **TXT**: Permite armazenar qualquer texto. Muito utilizado para verificar a propriedade de um site e para configurações de segurança de e-mail (como SPF e DKIM) para evitar que seus e-mails caiam no spam.  

---

🟢 **O papel do Cache DNS**. 
Para evitar que toda essa busca de 4 passos aconteça toda vez que você clica em um link do mesmo site, os sistemas utilizam o Cache DNS.  

O IP fica salvo temporariamente no seu próprio navegador, no seu sistema operacional e no servidor do seu provedor de internet. O tempo que essa informação pode ficar salva no cache é determinado por um valor chamado TTL (Time to Live, ou Tempo de Vida), definido pelo dono do site nos registros DNS. Quando o TTL expira, o resolvedor precisa fazer a busca completa novamente.  














