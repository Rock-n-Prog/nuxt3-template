<script setup lang="ts">
import styled from 'vue3-styled-components';
import themeKey from '~/keys/theme';
const { theme } = inject(themeKey);

const Title = computed(function () {
  return styled.h1`
    font-family: ${theme.value.fonts.families.default};
    font-size: ${theme.value.fonts.sizes.xxl};`;
});
</script>

<template>
  <Title>
    <slot />
  </Title>
</template>
