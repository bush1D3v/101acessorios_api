# ⚙️ 101 Acessórios API

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=orange) &nbsp;
![Bun version](https://img.shields.io/static/v1?label=bun&message=v1.0.26&color=yellow) &nbsp;
![Repository size](https://img.shields.io/github/repo-size/bush1D3v/101acessorios_api?color=green) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=blue)

## 🔍 Sobre o Projeto

A **API 101 Acessórios** é uma aplicação **RESTful** que oferece suporte a operações **CRUD** simples.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<div align='center'>
    <img align='center' height='50' width='70' title='TypeScript' alt='typescript' src='https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' />
    <img align='center' height='54' width='68' title='Nestjs' alt='nestjs' src='https://github.com/devicons/devicon/blob/master/icons/nestjs/nestjs-original.svg' />
    <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg' />
    <img align='center' height='54' width='68' title='Jest' alt='jest' src='https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg' />
    <img align='center' height='48' width='48' title='Insomnia' alt='insomnia' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/75a3fffd-792e-4250-8ef5-2abb615e38a0' /> &nbsp;
    <img align='center' height='70' width='70' title='Docker' alt='docker' src='https://github.com/devicons/devicon/blob/master/icons/docker/docker-plain.svg' />
</div>

## 🏗 Estrutura e Arquitetura

O projeto segue os princípios da **arquitetura limpa** e leva em consideração os princípios do **SOLID**. O código foi organizado de acordo com os princípios de **modularidade**, **reutilização** e **responsabilidade única**.

## 🔏 Autenticação

Para usar a API, é **necessário** autenticar-se. Você deve obter um **token JWT válido** através do **endpoint de login** antes de acessar outros recursos. O token JWT deve ser incluído no **cabeçalho de autorização** de **todas** as solicitações subsequentes.

## 🐳 Docker

Com a adição do Docker, você agora pode utilizar dos scripts fornecidos em `package.json` para poder construir a imagem docker e rodar os containers da aplicação e dos testes.

Para isso, segue a lista de funções de cada script:

> `docker-build`: Constrói a imagem docker do projeto <br> `docker-start`: Sobe e roda/só roda o container 101acessorios_api <br> `docker-stop`: Para o container 101acessorios_api

# 🖋️ Contribuindo para a API 101 Acessórios

Agradecemos pelo seu interesse em contribuir para a **API 101 Acessórios**. Sua ajuda é **valiosa** para melhorar e **expandir** nossa aplicação. Abaixo estão as **diretrizes** e os **passos** para contribuir com nosso projeto.

## 💻 Como Contribuir

### 🌳 Forkando o Repositório

Antes de começar, você **deverá** forkar o repositório do projeto para **seu perfil**.

### 🖨 Clonando seu Repositório

Após o Fork, você **precisará** clonar o repositório forkado para seu **ambiente de desenvolvimento local**:

```
git clone https://github.com/{seu-usuario}/101acessorios_api.git
cd 101acessorios_api
```

### ⏬ Instalando Dependências

Certifique-se de ter Bun e Node.js instalados no seu sistema. Em seguida, instale as dependências necessárias:

```
bun install
```

### 🆕 Criando uma Branch

Antes de iniciar qualquer trabalho, crie uma branch separada para a sua contribuição. Use um nome descritivo para a sua branch:

```
git checkout -b feature/nova-funcionalidade
```

### 🔨 Fazendo Alterações

Faça as alterações necessárias no código, adicione novos recursos ou correções de bugs.

### 📊 Compromissos e Push

Após concluir suas alterações e testá-las, faça um commit das alterações:

```
git add .
git commit -m feat(nomeDoArquivo): Nova funcionalidade
```

Em seguida, envie suas alterações para o repositório:

```
git push origin feature/nova-funcionalidade
```

### 📨 Solicitando um Pull Request (PR)

Vá para o repositório no GitHub e crie um Pull Request para que sua contribuição seja revisada. Certifique-se de descrever suas alterações e fornecer informações contextuais.

### 👁 Revisão e Fusão

Após criar um Pull Request, nossa equipe revisará suas alterações e fornecerá feedback. Uma vez aprovado, suas alterações serão mescladas no projeto principal.

## 💼 Diretrizes Gerais

- Mantenha o código limpo e legível.
- Siga as boas práticas de desenvolvimento.
- Respeite as convenções de nomenclatura existentes.
- Documente adequadamente as alterações, recursos ou correções.

#

**_Agradecemos pela sua contribuição e esperamos trabalhar juntos para tornar a 101 Acessórios ainda melhor. Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco. Juntos, podemos criar uma aplicação mais robusta e eficiente._**
