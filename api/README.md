# Travel API

## Requirements

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logocolor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge)

- You need to install Docker and Docker Compose on your machine. [Download](https://docs.docker.com/get-docker/) and install Docker.
- You need to install Node.js on your machine. [Download](https://nodejs.org/en/download/package-manager) and install Node.JS

## Run Project

```bash
# Start container
docker-compose up -d
#install dependencies
npm install
#start server
npm rund dev
```

## Schema BDD

| Table Travel |                                    |
| ------------ | ---------------------------------- |
| id           | int [primary key] [auto_increment] |
| title        | varchar(255)                       |
| city         | varchar(255)                       |
| country      | varchar(255)                       |
| image        | varchar(255)                       |
| description  | varchar(255)                       |

| Table Category |                                    |
| -------------- | ---------------------------------- |
| id             | int [primary key] [auto_increment] |
| name           | varchar(255)                       |
| description    | varchar(255)                       |
