# Caminho Seguro

[![Status](https://img.shields.io/badge/status-protótipo-informational)](https://shields.io/)
[![Licença](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)


**Caminho Seguro** é um aplicativo web responsivo e sigiloso, desenvolvido como um protótipo funcional de uma solução voltada à segurança de mulheres em trajetos e ambientes de trabalho. Apesar de funcionar como um site estático, o projeto simula a experiência de um aplicativo mobile, com foco em usabilidade, acessibilidade, leveza e segurança.

Este é um frontend demonstrativo, com lógica em JavaScript puro e sem backend implementado. O objetivo é apresentar o conceito da aplicação de forma funcional, com simulação de funcionalidades como botão de emergência, gravação secreta, chat com IA, rotas seguras e modo disfarçado.

## Acesso ao projeto

Você pode acessar o site diretamente pelo GitHub Pages no seguinte link:

[**https://etuarda.github.io/mulhersegura/src/html/calculadora.html**](https://etuarda.github.io/mulhersegura/src/html/calculadora.html)

A navegação começa pela interface da **calculadora disfarçada**. Ao **dar duplo clique no visor da calculadora**, o usuário é redirecionado para a tela de login. Para acessar o sistema, é necessário realizar o cadastro primeiro.

Essa navegação funciona de maneira **simulada no seu navegador local**, por meio do `localStorage`. Nenhuma informação inserida é transmitida ou armazenada em servidores. Seus dados **não estão sendo capturados**.

## Objetivo

O projeto surgiu a partir do reconhecimento de um problema social urgente: o alto índice de assédio e violência contra mulheres em deslocamentos e no ambiente profissional. O objetivo do Caminho Seguro é oferecer uma solução acessível, silenciosa e eficiente que funcione como um escudo digital, promovendo autonomia e acolhimento.

Além da proteção individual, o sistema é projetado para, futuramente, fornecer dados anonimizados que possam auxiliar na criação de políticas públicas, segurança urbana e programas institucionais de proteção à mulher.

## Estrutura do Projeto

```bash
mulhersegura/
├── assets/
│   └── img/                # Imagens utilizadas nas interfaces
├── src/
│   ├── css/                # Estilos organizados por tela (ex: home.css, chat.css)
│   ├── html/               # Páginas HTML (ex: cadastro.html, rotas.html, etc.)
│   └── js/                 # Scripts JavaScript específicos de cada funcionalidade
└── readme.md
```

Aqui está a seção reformatada em Markdown sem tabelas, utilizando listas e destaques:

## Funcionalidades Simuladas

As funcionalidades foram pensadas para promover segurança, acolhimento e colaboração entre usuárias. Além de simular tecnologias como alertas e geolocalização, o app também incentiva o compartilhamento de experiências cotidianas entre mulheres.

### Principais Recursos

- **Interface disfarçada (calculadora)**  
  Acesso secreto ao aplicativo através de uma calculadora funcional, proporcionando discrição e proteção contra acesso não autorizado.

- **Botão de emergência (Volume + simulado)**  
  Acionamento rápido através da combinação de teclas simulada, permitindo resposta imediata em situações críticas.

- **Gravação secreta (Volume - simulado)**  
  Ativação discreta de gravações de áudio para coleta de evidências, simulada pela combinação de teclas.

- **Chat com IA (respostas automatizadas)**  
  Sistema de atendimento automatizado que oferece orientação e suporte emocional 24 horas por dia.

- **Rotas seguras com geolocalização simulada**  
  Sistema colaborativo que permite:
  - Compartilhamento de feedback sobre trajetos
  - Informações sobre movimentação e trânsito
  - Nível de segurança percebido no percurso
  - Integração com relatos de violência para formação de mapa de calor
  *Destaque:* Promove ações preventivas baseadas em dados já existentes ou comunitários.

- **Cadastro com rede de apoio**  
  Inclusão de contatos confiáveis para alertas automáticos, criando uma rede de proteção pessoal.

- **Registro de provas localmente**  
  Armazenamento seguro no dispositivo de:
  - Gravações de áudio
  - Relatos de incidentes
  *Vantagem:* Funcionalidade independente de conexão com a internet.

### Características Colaborativas
O sistema incentiva a construção comunitária de segurança através:
- Do compartilhamento anônimo de experiências
- Da formação de mapas de risco colaborativos
- Da geração de dados para ações preventivas
- Do apoio mútuo entre usuárias
## Tecnologias Utilizadas

* HTML5 semântico
* CSS3 modular (mobile-first)
* JavaScript Vanilla (ES6+)
* Web APIs:

  * `navigator.geolocation`
  * `localStorage`
* Acessibilidade:

  * Plugin VLibras para tradução em Libras
  * `aria-label`, `aria-live`, `tabindex` e navegação por teclado

## Paleta de Cores

A paleta foi escolhida com base em estudos sobre psicologia das cores. O tom de rosa predominante foi adotado por seu efeito calmante e acolhedor, contribuindo para uma experiência visual segura e empática.

## Como executar localmente

```bash
git clone https://github.com/Etuarda/mulhersegura.git
cd mulhersegura
start index.html  # ou open index.html no macOS
```

## Páginas principais

| Página           | Descrição                                 |
| ---------------- | ----------------------------------------- |
| calculadora.html | Entrada disfarçada (calculadora)          |
| cadastro.html    | Formulário de cadastro e rede de apoio    |
| login.html       | Tela de login (simulada com localStorage) |
| home.html        | Painel de funcionalidades principais      |
| chat.html        | Atendimento com IA simulada               |
| provas.html      | Registro local de interações              |
| rotas.html       | Verificação de segurança de trajeto       |
| permissoes.html  | Termos de uso e privacidade               |
| perfil.html      | Edição dos dados cadastrados              |

## Considerações finais

Este projeto é um protótipo funcional e responsivo, voltado a ilustrar como tecnologias simples, quando bem estruturadas, podem oferecer soluções criativas e eficazes para problemas sociais reais.

A proposta é evoluir para versões com backend seguro, autenticação real, criptografia de dados e coleta de registros anonimizados para auxiliar instituições, prefeituras e empresas em ações preventivas.

## Licença

Este projeto está sob a licença MIT.

## Autoria

O conceito original do app invisível surgiu de uma proposta apresentada por Letícia Camilo de Souza, com colaboração de Laura da Silva Reis e Julia Moraes Machado Velozo. Juntas, contribuíram para a construção da ideia base e esboço inicial da apresentação.

A versão "Caminho Seguro" foi idealizada por Eduarda Silva Santos, que adaptou a proposta para abordar especificamente a segurança da mulher no trajeto e no trabalho, definiu a paleta de cores, implementou recursos de acessibilidade e desenvolveu integralmente todo o código-fonte do protótipo.

O desenvolvimento técnico completo, incluindo estrutura HTML/CSS, lógica em JavaScript e integração de acessibilidade, foi realizado exclusivamente por Eduarda como parte do projeto apresentado no hackathon.

Eduarda Silva Santos, estudante bolsista do ProUni em Análise e Desenvolvimento de Sistemas - PUCRS e desenvolvedora web fullstack em formação.
