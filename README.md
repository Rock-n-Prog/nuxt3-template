# Nuxt 3 Template

[![Build](https://github.com/Rock-n-Prog/nuxt3-template/actions/workflows/build.yml/badge.svg)](https://github.com/Rock-n-Prog/nuxt3-template/actions/workflows/build.yml)

Simple [Nuxt 3](https://v3.nuxtjs.org/) and [Apollo](https://www.apollographql.com/) Template about recipes.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

Check the [project board](https://github.com/orgs/Rock-n-Prog/projects/1) for what I want to do next.

To contribute, make sure you have read the [docs](https://exilednarwal28.github.io/nuxt3-template) and [contribution guide](CONTRIBUTING.md).

## Setup

### Install dependencies

```bash
yarn
```

### Create and run database

Local database needs to be running alongside the app.

```bash
docker compose up
```

## Available scripts

### Start development server

Frontend starts on [http://localhost:3000](http://localhost:3000)

Server starts on [http://localhost:8000](http://localhost:8000), which is an easy-to-use
[GraphQL Playground](https://github.com/graphql/graphql-playground).

```bash
yarn dev
```

### Build production app

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

### Lint app

```bash
yarn lint
yarn lint:fix # Fix code style using eslint
yarn lint:staged # Run code style fix on staged files

yarn prettier
yarn prettier:write # Fix code style using prettier
```
