<script setup lang="ts">
defineProps<{ appTitle: string }>();
</script>

<template>
  <div class="grid min-h-screen grid-rows-[1fr_auto]">
    <AppHeader :app-title="appTitle" />
    <AppContent>
      <slot />
    </AppContent>
    <AppFooter :app-title="appTitle" />
  </div>
</template>
