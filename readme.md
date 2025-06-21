# Caminho Seguro

[![Status](https://img.shields.io/badge/status-protótipo-informational)](https://shields.io/)
[![Licença](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)
[![Tecnologias](https://img.shields.io/badge/HTML5-CSS3-JS-blue)](https://developer.mozilla.org/)


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

## Funcionalidades Simuladas

* Interface disfarçada (calculadora)
* Botão de emergência (Volume + simulado)
* Gravação secreta (Volume - simulado)
* Chat com IA (respostas automatizadas)
* Rotas seguras com geolocalização simulada
* Cadastro com rede de apoio
* Registro de provas localmente
* Navegação offline simulada

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

Desenvolvido por Eduarda Silva Santos, estudante bolsista do ProUni em Análise e Desenvolvimento de Sistemas - PUCRS e desenvolvedora web fullstack em formação.
