<p align='center'><img width='400' src="./.github/logo.svg"/></p>

 <p align='center'>

<img src="https://img.shields.io/github/repo-size/Savio-Anjos/API-Gympass?color=1890FF">
<img src="https://img.shields.io/github/languages/count/Savio-Anjos/API-Gympass?color=1890FF">
<img src="https://img.shields.io/github/last-commit/Savio-Anjos/API-Gympass?color=1890FF">  
</p>

## 🚀 Tecnologias

Esse projeto está utilizando as seguintes tecnologias:

- [Node](https://nodejs.org/en)
- [Fastify](https://fastify.dev/)
- [Vitest](https://vitest.dev/)
- [Docker](https://www.docker.com/)

## 📜 Descrição

Esse projeto tem reproduz um serviço bem comum na atualidade,
o intuito central é que o usuário consiga fazer check-in em academias.

## ⚙️ Como funciona?

## RFs (Requisitos funcionais)

- [x] É possível se cadastrar;
- [x] É possível se autenticar;
- [x] É possível obter o perfil de um usuário logado;
- [x] É possível obter o número de check-ins realizados pelo usuário logado;
- [x] É possível o usuário obter o seu histórico de check-ins;
- [x] É possível o usuário buscar academias próximas (até 10km);
- [x] É possível o usuário buscar academias pelo nome;
- [x] É possível o usuário realizar check-in em uma academia;
- [x] É possível validar o check-in de um usuário;
- [x] É possível cadastrar uma academia;

## RNs (Regras de negócio)

- [x] O usuário não pode se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário é criptografada;
- [x] Os dados da aplicação são persistidos em um banco PostgreSQL;
- [x] Todas listas de dados estão paginadas com 20 itens por página;
- [x] O usuário é identificado por um JWT (JSON Web Token);

## 🎲 Quer customizar o projeto?

### Clone esse repositório

```bash
git clone https://github.com/Savio-Anjos/API-Gympass.git
```

### Navegue até o diretório do projeto

```bash
cd API-Gympass
```

### Instale as dependências

```bash
npm i
```

```bash
yarn
```

### Execute o docker compose

```bash
docker compose up
```

### Execute o docker

```bash
docker start
```

### Rode as migrations

```bash
npx prisma migrate dev
```

### Inicie a aplicação

```bash
npm run start:dev
```

---

<p>Criado com 💙 por <a href='https://github.com/Savio-Anjos/' target='_blank'>Sávio Anjos</a></p>
