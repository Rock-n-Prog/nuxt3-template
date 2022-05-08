# Nuxt 3 Template

[![Build](https://github.com/ExiledNarwal28/nuxt3-template/actions/workflows/build.yml/badge.svg)](https://github.com/ExiledNarwal28/nuxt3-template/actions/workflows/build.yml)

Simple [Nuxt 3](https://v3.nuxtjs.org/) and [Apollo](https://www.apollographql.com/) Template about recipes.

Made with love by [Fabien Roy](https://github.com/ExiledNarwal28).

Check [TODO.md](TODO.md) for what I want to do next.

## Setup

Make sure to install the dependencies:

```bash
yarn
```

## Available scripts

### Start development server

Frontend starts on [http://localhost:3000](http://localhost:3000)

Server starts on [http://localhost:8000](http://localhost:8000)

**Currently not true, in progress** GraphQL playground is available on
[http://localhost:8000/api/playground](http://localhost:8000/api/playground)

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
