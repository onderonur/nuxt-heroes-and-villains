<template>
  <div>
    <h3 class="font-bold md:text-lg text-text-light dark:text-dark-text-light">
      {{ label }}
    </h3>
    <div :class="[textClass, isTextBold && 'font-bold']">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    label: String,
    textClass: String,
    isTextBold: Boolean,
  },
});
</script>
