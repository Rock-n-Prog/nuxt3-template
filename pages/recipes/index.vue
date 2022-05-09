<script setup lang="ts">
import { useRecipePaginationQuery } from '~/generated/operations';

const { result, loading, error } = useRecipePaginationQuery({ page: 1 });

const recipesData = computed(() => result?.value?.recipePagination);

// TODO: Create recipe form page
function createRecipe() {
  console.log('Create recipe!');
  // TODO: Actually create recipe
}

// TODO: Weirdly, everything here remains null or undef
watchEffect(() => {
  console.log(recipesData.value);
  console.log(loading.value);
  console.log(error.value);
});

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
    <div v-else-if="recipesData">
      <h3>We got {{ recipesData.count }} recipes!</h3>
      <div v-for="recipe in recipesData.items">
        <NuxtLink :to="{ path: 'recipes', params: { id: recipe._id } }">
          {{ recipe.title }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <button @click="createRecipe">Create recipe</button>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
