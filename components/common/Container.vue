<script setup lang="ts">
import styled from 'vue3-styled-components';
import themeKey from '~/keys/theme';
const { theme } = inject(themeKey);

const Container = computed(function () {
  return styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (min-width: ${theme.value.breakpoints.s}) {width: 540px;}

    @media only screen and (min-width: ${theme.value.breakpoints.m}) {width: 720px;}

    @media only screen and (min-width: ${theme.value.breakpoints.l}) {width: 960px;}

    @media only screen and (min-width: ${theme.value.breakpoints.xl}) {width: 1140px;}

    @media only screen and (min-width: ${theme.value.breakpoints.xxl}) {width: 1320px;}`;
});
</script>

<template>
  <Container>
    <slot />
  </Container>
</template>
