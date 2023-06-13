<script setup lang="ts">
const appConfig = useAppConfig();

const { appTitle } = appConfig;

useHead({ title: appTitle, titleTemplate: `%s | ${appTitle}` });
</script>

<template>
  <AppLayout :app-title="appTitle">
    <NuxtPage />
  </AppLayout>
</template>

<style>
html.dark {
  /* To make scrollbars dark in dark mode */
  @apply [color-scheme:dark];
}

body {
  @apply text-text-main dark:text-dark-text-main;
}

a {
  @apply text-primary-main hover:text-secondary-main;
}

/* https://nuxt.com/docs/getting-started/transitions */
.page-enter-active,
.page-leave-active {
  @apply transition-all duration-500;
}
.page-enter-from,
.page-leave-to {
  @apply opacity-0 blur-md;
}
</style>
