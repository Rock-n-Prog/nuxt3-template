<script setup lang="ts">
import { useRecipeByIdQuery } from '~/generated/operations';

const route = useRoute();
const { result, loading, error } = useRecipeByIdQuery({ id: route.params.id });

const recipeData = computed(() => result?.value?.recipeById);

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
    <div v-else-if="recipeData">
      <h2>Recipe with id {{ recipeData._id }}</h2>
      <div>
        <strong>Title: </strong>
        <span>
          {{ recipeData.title }}
        </span>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
