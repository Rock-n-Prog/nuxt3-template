import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['graphql'],
  },
  buildModules: ['@nuxt3/graphql-codegen-module', '@nuxt3/apollo-module'],
  graphqlCodegen: {
    // TODO: Move to env var
    schema: ['http://localhost:3000/api/graphql'],
  },
  apollo: {
    default: {
      uri: process.env.URL ? `${process.env.URL}/api/graphql` : 'http://localhost:3000/api/graphql',
    },
  },
  ignore: ['data/db'],
});
