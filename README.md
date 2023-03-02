<h1 align="center">
    Api de Vendas - SOLID
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rodando">Rodando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<a id="rocket-tecnologias"></a>

## 🚀 Tecnologias

<div align="center">
 	<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
    <img src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
</div>

<br>

<a id="-projeto"></a>

## 💻 Projeto

Esse projeto apenas serve para eu aprofundar alguns conceitos de Solid com aplicações NodeJS, utilizando o micro-framework expressJS

<a id="-rodando"></a>

## Rodando o projeto 🌇

## Requerimentos:

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Aws](https://aws.amazon.com/pt/) -> serviço s3
- [Ethereal](https://ethereal.email/) -> recomendado, mas pode usar o serviço de email ses também

## 📂 UM comando só:


## ☕ Pequena ajuda

Preencha o arquivo `.env.example` com as informações cobradas e depois renomeie para `.env`.

```env
# PG Database
POSTGRES_USER=
POSTGRES_PASSWORD=

# PGAdmin
PGADMIN_DEFAULT_EMAIL=
PGADMIN_DEFAULT_PASSWORD=
PGADMIN_PORT=

# App

APP_SECRET=
APP_API_URL=http://localhost:3333
APP_WEB_URL=http://localhost:3000
REDIS_HOST=
REDIS_PORT=
REDIS_PASS=

# Mail Config: ethereal or ses
MAIL_DRIVER=ethereal

# Storage Config: disk or s3
STORAGE_DRIVER=disk

# AWS Credentials
AWS_REGION=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

🐬 Comando:

```bash
docker-compose up --build -V
```

Agora você pode acessar a API com a host [http://localhost:3333](http://localhost:3333)

<a id="-como-contribuir"></a>

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.
