<script setup lang="ts">
import { useRecipePaginationQuery, useRecipeCreateOneMutation, useAuthorPaginationQuery } from '~/generated/operations';

const {
  result: getRecipesResult,
  loading: getRecipesLoading,
  error: getRecipesError,
} = useRecipePaginationQuery({ page: 1 });
const {
  result: getAuthorsResult,
  loading: getAuthorsLoading,
  error: getAuthorsError,
} = useAuthorPaginationQuery({ page: 1 });
const { mutate, loading: createLoading, error: createError } = useRecipeCreateOneMutation({});

const recipesData = computed(() => getRecipesResult?.value?.recipePagination);
const authorsData = computed(() => getAuthorsResult?.value?.authorPagination);

// TODO: Create recipe form page
async function createRecipe() {
  if (authorsData?.value?.items?.length > 0) {
    const author = authorsData.value.items[0];

    await mutate({
      record: {
        title: 'Chili',
        author: author._id,
      },
    });

    // TODO: Refetch afterwards
  }
}

definePageMeta({
  title: 'Recipes',
});
</script>

<template>
  <div>
    <h2>Recipes</h2>
    <div v-if="getRecipesLoading || getRecipesLoading">
      <span>Loading...</span>
    </div>
    <div v-else-if="getRecipesError">
      <span>Recipes error: {{ getRecipesError }}</span>
    </div>
    <div v-else-if="getAuthorsError">
      <span>Authors error: {{ getAuthorsError }}</span>
    </div>
    <div v-else-if="recipesData">
      <h3>We got {{ recipesData.count }} recipes!</h3>
      <div v-for="recipe in recipesData.items">
        <NuxtLink :to="`/recipes/${recipe._id}`">
          {{ recipe.title }}
        </NuxtLink>
      </div>
      <div v-if="authorsData.items.length > 0">
        <button @click="createRecipe">Create recipe</button>
        <div v-if="createLoading">
          <span>Loading...</span>
        </div>
        <div v-else-if="createError">
          <span>Error: {{ createError }}</span>
        </div>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
