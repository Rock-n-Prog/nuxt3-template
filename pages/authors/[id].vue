<script setup lang="ts">
import { useAuthorByIdQuery } from '~/generated/operations';

const route = useRoute();
const { result, loading, error } = useAuthorByIdQuery({ _id: route.params.id });

const authorData = computed(() => result?.value?.authorById);

/*
definePageMeta({
  title: recipe ? `Recipe with id ${recipe._id}` : '...',
});
*/
</script>

<template>
  <div>
    <div v-if="loading">
      <span>Loading...</span>
    </div>
    <div v-else-if="error">
      <span>Error: {{ error }}</span>
    </div>
    <div v-else-if="authorData">
      <h2>Author with id {{ authorData._id }}</h2>
      <div>
        <strong>Name: </strong>
        <span>
          {{ `${authorData.firstName} ${authorData.lastName}` }}
        </span>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
