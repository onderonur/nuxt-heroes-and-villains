<template>
  <footer
    class="bg-overlay-light dark:bg-dark-overlay-light flex items-center p-app-px md:p-app-px-md"
  >
    {{ appTitle }} | Vue.js
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    appTitle: { type: String, required: true },
  },
});
</script>
