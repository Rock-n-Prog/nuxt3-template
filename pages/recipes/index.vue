<script setup lang="ts">
// TODO: Why do I need to define this?
import { useRecipePaginationQuery } from '~/generated/operations';

const { result, loading, error } = useRecipePaginationQuery({ page: 0 });

// TODO: On button press, create dummy author (or add collection + element pages)
// TODO: On button press, create dummy recipe

const recipes = computed(() => result?.value?.recipePagination);

definePageMeta({
  title: 'Recipes',
});
</script>

<template>
  <div>
    <h2>Recipes</h2>
    <div v-if="loading">
      <span>Loading...</span>
    </div>
    <div v-else-if="error">
      <span>Error: {{ error }}</span>
    </div>
    <div v-else-if="recipes">
      <div v-for="recipe of recipes">
        <NuxtLink :to="/recipes/${recipe._id}"> Go to recipe {{ recipe.title }} </NuxtLink>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
