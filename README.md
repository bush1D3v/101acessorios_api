# ⚙️ 101 Acessórios API

![License](https://img.shields.io/static/v1?label=license&message=MIT&color=orange) &nbsp;
![Bun version](https://img.shields.io/static/v1?label=bun&message=v1.0.26&color=yellow) &nbsp;
![Repository size](https://img.shields.io/github/repo-size/bush1D3v/101acessorios_api?color=green) &nbsp;
![Pull request](https://img.shields.io/static/v1?label=PR&message=welcome&color=blue)

## 🔍 Sobre o Projeto

A **API 101 Acessórios** é uma aplicação **RESTful** que oferece suporte a operações **CRUD** simples.

## 🛠️ Tecnologias e Ferramentas Utilizadas

<div align='center'>
    <img align='center' height='54' width='68' title='Nestjs' alt='nestjs' src='https://github.com/devicons/devicon/blob/master/icons/nestjs/nestjs-original.svg' />
    <img align='center' height='55' width='70' title='PostgreSQL' alt='postgresql' src='https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original.svg' />
    <img align='center' height='50' width='70' title='TypeScript' alt='typescript' src='https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg' />
    <img align='center' height='54' width='68' title='Node.js' alt='nodejs' src='https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg' /><img align='center' height='55' width='75' title='Prisma' alt='prisma' src='https://github.com/devicons/devicon/blob/master/icons/prisma/prisma-original.svg' />
    <img align='center' height='54' width='68' title='Jest' alt='jest' src='https://github.com/devicons/devicon/blob/master/icons/jest/jest-plain.svg' /> &nbsp;
    <img align='center' height='53' width='49' title='Beekeeper' alt='beekeeper' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/0d5b4b55-546c-4bc0-a25c-dfc9116fe993' /> &nbsp;&nbsp;
    <img align='center' height='50' width='50' title='Insomnia' alt='insomnia' src='https://github.com/bush1D3v/my_portfolio/assets/133554156/75a3fffd-792e-4250-8ef5-2abb615e38a0' /> &nbsp;&nbsp;&nbsp;
    <img align='center' height='60' width='60' title='Redis' alt='redis' src='https://github.com/devicons/devicon/blob/master/icons/redis/redis-original.svg' /> &nbsp;&nbsp;&nbsp;
    <img align='center' height='70' width='70' title='Docker' alt='docker' src='https://github.com/devicons/devicon/blob/master/icons/docker/docker-plain.svg' /> &nbsp;&nbsp;
    <img align='center' height='49' width='59' title='Zod' alt='zod' src='https://github.com/bush1D3v/tsbank_front/assets/133554156/5a769805-23e2-4f8b-904d-034b25a982a6' /> &nbsp; &nbsp;
    <img align='center' height='53' width='55' title='JsonWebToken' alt='jsonwebtoken' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/d23ffb9d-aedc-4d68-9209-7268d7f41ce6' />
    <img align='center' height='60' width='70' title='Swagger' alt='swagger' src='https://github.com/bush1D3v/tsbank_api/assets/133554156/6739401f-d03b-47f8-b01f-88da2a9075d1' />&nbsp;
    <img align='center' height='48' width='48' title='Bcrypt' alt='bcrypt' src='https://github.com/bush1D3v/solid_rest_api/assets/133554156/5863bac1-a591-4776-82a4-f427681934be' /> &nbsp;&nbsp;&nbsp;
    <img align='center' height='50' width='50' title='Cors' alt='cors' src='https://github.com/bush1D3v/101acessorios_api/assets/133554156/3b4cccec-065e-428a-a663-1c5939404c1a' /> &nbsp;&nbsp;&nbsp;
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

Certifique-se de ter Node.js e PNPM (Ou o seu PM preferível) instalados no seu sistema. Em seguida, instale as dependências necessárias:

```
pnpm install
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
git commit -m feat: Nova funcionalidade
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
