<script setup lang="ts">
import { useAuthorPaginationQuery, useAuthorCreateOneMutation } from '~/generated/operations';

const { result, loading: getLoading, error: getError } = useAuthorPaginationQuery({ page: 1 });
const { mutate, loading: createLoading, error: createError } = useAuthorCreateOneMutation({});

const authorsData = computed(() => result?.value?.authorPagination);

// TODO: Create author form page
async function createAuthor() {
  await mutate({
    record: {
      firstName: 'Fabien',
      lastName: 'Roy',
    },
  });

  // TODO: Refetch afterwards
}

definePageMeta({
  title: 'Authors',
});
</script>

<template>
  <div>
    <h2>Authors</h2>
    <div v-if="getLoading">
      <span>Loading...</span>
    </div>
    <div v-else-if="getError">
      <span>Error: {{ getError }}</span>
    </div>
    <div v-else-if="authorsData">
      <h3>We got {{ authorsData.count }} authors!</h3>
      <div v-for="author in authorsData.items">
        <NuxtLink :to="`/authors/${author._id}`">
          {{ `${author.firstName} ${author.lastName}` }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <button @click="createAuthor">Create author</button>
      <div v-if="createLoading">
        <span>Loading...</span>
      </div>
      <div v-else-if="createError">
        <span>Error: {{ createError }}</span>
      </div>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
