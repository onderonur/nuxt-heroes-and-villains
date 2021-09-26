<template>
  <footer
    class="bg-overlay-light dark:bg-dark-overlay-light flex items-center p-2"
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
