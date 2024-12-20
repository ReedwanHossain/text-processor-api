<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Text Processor Application

This repository contains the backend API for a Text Processor application. Follow the instructions below to set up and run the application locally using Docker.

## Prerequisites

- Docker version 24.0.7
- Docker Compose version 2.27.1

### Backend Setup (text-processor-api)

1. Clone the backend repository:

```bash

  git clone https://github.com/ReedwanHossain/text-processor-api.git
  cd text-processor-api

```

2. Create .env.prod based on .env.example:

```bash
  touch .env.prod
  cp .env.example .env.prod


```

3. Run Docker Compose to build and start the backend services:

   ```bash
   docker compose up -d --build
   ```

---

## Go for step 4-5 if you wish to run tests:

4(a). Access container shell (Optional)

```bash
docker exec -it text-processor-api-app-1 sh
```

4(b). Run unit tests (Optional):

```bash
npm test
```

5(a). Access container shell (Optional)

```bash
docker exec -it text-processor-api-app-1 sh
```

5(b). Run e2e tests (Optional):

```bash
npm run test:e2e
```

---

6. Open another terminal tab or window. Clone the frontend repository::

   ```bash

   git clone https://github.com/ReedwanHossain/text-processor-client.git
   cd text-processor-client

   ```

7. Run Docker Compose to build and start the frontend app:

   ```bash
   docker compose up -d --build
   ```

8. Access the application

   ```bash
   http://localhost:3001
   ```

9. Access the API Docs

   ```bash
   http://localhost:3000/docs
   ```

## License

Nest is [MIT licensed](LICENSE).

```

```
