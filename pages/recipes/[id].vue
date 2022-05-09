<script setup lang="ts">
// TODO: Why do I need to define this?
import { useRecipeByIdQuery } from '~/generated/operations';

const route = useRoute();
const { result, loading, error } = useRecipeByIdQuery({ _id: route.params.id });

const recipe = computed(() => result?.value?.recipeById);

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
    <div v-else-if="recipe">
      <h2>Recipe with id {{ recipe._id }}</h2>
      <div>
        <strong>Title: </strong>
        <span>
          {{ recipe.title }}
        </span>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
