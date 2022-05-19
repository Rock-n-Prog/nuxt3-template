<script setup lang="ts">
import styled from 'vue3-styled-components';
import themeKey from '~/keys/theme';
const { theme } = inject(themeKey);

const Sub = computed(function () {
  return styled.sub`
    font-family: ${theme.value.fonts.families.default};
    font-size: ${theme.value.fonts.sizes.m};
    font-style: italic;`;
});
</script>

<template>
  <Sub>
    <slot />
  </Sub>
</template>
