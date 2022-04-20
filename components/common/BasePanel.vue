<template>
  <div
    class="py-2 px-4 rounded-md border-2 shadow-md relative mt-4 bg-background-body dark:bg-dark-background-body"
  >
    <h2
      class="font-bold text-xl text-text-lighter dark:text-dark-text-lighter uppercase absolute -top-4 px-1 rounded-md bg-background-body dark:bg-dark-background-body"
    >
      {{ title }}
    </h2>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    title: { type: String, required: true },
  },
});
</script>
