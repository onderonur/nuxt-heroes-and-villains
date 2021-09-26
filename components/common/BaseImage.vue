<template>
  <div
    :class="[
      'relative h-0 overflow-hidden pt-3/2',
      rounded && 'rounded-md overflow-hidden',
    ]"
  >
    <img
      :src="src"
      :alt="alt"
      class="absolute top-0 w-full h-full object-cover bg-text-lighter"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    rounded: Boolean,
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
});
</script>
