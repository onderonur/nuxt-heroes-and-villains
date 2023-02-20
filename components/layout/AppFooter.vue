<script setup lang="ts">
defineProps<{ appTitle: string }>();
</script>

<template>
  <footer
    class="bg-overlay-light dark:bg-dark-overlay-light flex items-center p-app-px md:p-app-px-md"
  >
    {{ appTitle }} | Vue.js
  </footer>
</template>
