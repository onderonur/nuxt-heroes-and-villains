<template>
  <AppLayout :app-title="appTitle">
    <Nuxt />
  </AppLayout>
</template>

<script lang="ts">
import { defineComponent, useMeta } from '@nuxtjs/composition-api';

export default defineComponent({
  // In order to enable `useMeta`, please make sure you include `head: {}` within your component definition.
  head: {},
  setup() {
    const appTitle = process.env.appTitle;
    useMeta({ title: appTitle, titleTemplate: `%s | ${appTitle}` });
    return {
      appTitle,
    };
  },
});
</script>

<style lang="scss">
html.dark {
  // To make scrollbars dark in dark mode
  @apply [color-scheme:dark];
}

body {
  @apply text-text-main dark:text-dark-text-main;
}

a {
  @apply text-primary-main hover:text-secondary-main;
}
</style>
