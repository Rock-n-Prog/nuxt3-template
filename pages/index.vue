<script setup>
definePageMeta({
  title: 'Yao, welcome m8',
});
</script>

<template>
  <div>
    <h2>Yao, welcome m8</h2>
    <div>
      <NuxtLink to="/recipes/1">Go to recipe with id '1'</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/recipes/2">Go to recipe with id '2'</NuxtLink>
    </div>
  </div>
</template>
