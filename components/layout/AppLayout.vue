<template>
  <div class="min-h-screen grid grid-rows-[1fr_auto]">
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
