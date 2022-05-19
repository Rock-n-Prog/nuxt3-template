<script setup lang="ts">
import styled from 'vue3-styled-components';
import themeKey from '~/keys/theme';

definePageMeta({
  title: 'Yao, welcome m8',
});

const { theme, themeMode, switchTheme } = inject(themeKey);

const ExampleBox = computed(function () {
  return styled.div`
    background-color: ${theme.value.colors.primary};
    height: 100px;
    width: 100px;`;
});
</script>

<template>
  <div>
    <h2>Yao, welcome m8</h2>
    <button @click="switchTheme">Switch theme, current theme: {{ themeMode }}</button>
    <ExampleBox />
    <div>
      <NuxtLink to="/recipes">Go to recipes</NuxtLink>
    </div>
    <div>
      <NuxtLink to="/authors">Go to authors</NuxtLink>
    </div>
  </div>
</template>
