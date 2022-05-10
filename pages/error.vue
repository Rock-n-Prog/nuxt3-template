<script setup lang="ts">
// TODO: Obviously use a better error page

const props = defineProps({
  error: Object,
});

function handleError() {
  return clearError({ redirect: '/' });
}
</script>

<template>
  <button @click="handleError">Clear errors</button>
</template>
