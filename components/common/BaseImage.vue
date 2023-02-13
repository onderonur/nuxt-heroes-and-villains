<template>
  <img
    :src="src"
    :alt="alt"
    :class="[
      'w-full object-cover bg-text-lighter aspect-[2/3]',
      rounded && 'rounded-md overflow-hidden',
    ]"
  />
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
