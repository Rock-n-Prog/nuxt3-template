<script setup lang="ts">
import { ThemeProvider } from 'vue3-styled-components';
import { darkTheme, lightTheme } from '~/styles/themes';
import themeKey from '~/keys/theme';

// TODO: Define type for theme (modes = 'dark' | 'light')
const themeMode = ref('dark');
const theme = ref(darkTheme);

function switchTheme() {
  if (themeMode.value === 'light') {
    theme.value = darkTheme;
    themeMode.value = 'dark';
  } else {
    theme.value = lightTheme;
    themeMode.value = 'light';
  }
}

// TODO: We shouldn't provide theme, styled-components should update its theme here
provide(themeKey, {
  theme,
  themeMode,
  switchTheme,
});
</script>

<template>
  <ThemeProvider :theme="theme">
    <slot />
  </ThemeProvider>
</template>
