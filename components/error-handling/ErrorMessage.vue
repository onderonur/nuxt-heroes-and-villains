<template>
  <div
    v-if="error"
    class="bg-error-lighter rounded-md border-2 border-error-main p-4 text-error-dark"
  >
    {{ error.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    error: { type: Error, required: true },
  },
});
</script>
