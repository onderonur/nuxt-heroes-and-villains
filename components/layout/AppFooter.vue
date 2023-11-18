<script setup lang="ts">
defineProps<{ appTitle: string }>();
</script>

<template>
  <footer
    class="flex items-center bg-overlay-light p-app-px dark:bg-dark-overlay-light md:p-app-px-md"
  >
    {{ appTitle }} | Vue.js
  </footer>
</template>
