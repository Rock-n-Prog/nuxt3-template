<script setup lang="ts">
import { useAuthorPaginationQuery } from '~/generated/operations';

const { result, loading, error } = useAuthorPaginationQuery({ page: 1 });

const authorsData = computed(() => result?.value?.authorPagination);

// TODO: Create author form page
function createAuthor() {
  console.log('Create author!');
  // TODO: Actually create author
}

// TODO: Weirdly, everything here remains null or undef
watchEffect(() => {
  console.log(authorsData.value);
  console.log(loading.value);
  console.log(error.value);
});

definePageMeta({
  title: 'Authors',
});
</script>

<template>
  <div>
    <h2>Authors</h2>
    <div v-if="loading">
      <span>Loading...</span>
    </div>
    <div v-else-if="error">
      <span>Error: {{ error }}</span>
    </div>
    <div v-else-if="authorsData">
      <h3>We got {{ authorsData.count }} authors!</h3>
      <div v-for="author in authorsData.items">
        <NuxtLink :to="{ path: 'authors', params: { id: author._id } }">
          {{ `${author.firstName} ${author.lastName}` }}
        </NuxtLink>
      </div>
    </div>
    <div>
      <button @click="createAuthor">Create author</button>
    </div>
    <div>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>
