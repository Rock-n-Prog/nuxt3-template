import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  build: {
    transpile: ['graphql'],
  },
  buildModules: ['@nuxt3/graphql-codegen-module', '@nuxt3/apollo-module'],
  graphqlCodegen: {
    // TODO: Move to env var
    schema: ['http://localhost:8000'],
  },
  apollo: {
    default: {
      // TODO: Move to env var
      uri: process.env.URL ?? 'http://localhost:8000',
    },
  },
  ignore: ['data/db'],
});
