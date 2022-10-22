<template>
  <div class="absolute inset-0 flex flex-col">
    <AppHeader :app-title="appTitle" />
    <AppContent>
      <slot />
    </AppContent>
    <AppFooter :app-title="appTitle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    appTitle: { type: String, required: true },
  },
});
</script>
