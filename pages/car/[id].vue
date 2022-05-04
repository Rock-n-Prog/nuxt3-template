<script setup lang="ts">
// TODO: Why do I need to define this?
import { useCarQuery } from '~/generated/operations';

const route = useRoute();
const { result, loading, error } = useCarQuery({ carInput: { id: route.params.id } });

const car = computed(() => result?.value?.car);

/*
definePageMeta({
  title: car ? `Car with id ${car.id}` : '...',
});
*/
</script>

<template>
  <div v-if="loading">
    <span>Loading...</span>
  </div>
  <div v-else-if="error">
    <span>Error: {{ error }}</span>
  </div>
  <div v-else-if="car">
    <h2>Car with id {{ car.id }}</h2>
    <div>
      <strong>Brand: </strong>
      <span>
        {{ car.brand }}
      </span>
    </div>
    <div>
      <strong>Model: </strong>
      <span>
        {{ car.model }}
      </span>
    </div>
    <div>
      <strong>Year: </strong>
      <span>
        {{ car.year }}
      </span>
    </div>
  </div>
</template>
