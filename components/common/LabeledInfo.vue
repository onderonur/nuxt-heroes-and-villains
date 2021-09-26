<template>
  <div>
    <h3 class="font-bold text-lg text-text-light dark:text-dark-text-light">
      {{ label }}
    </h3>
    <div
      :class="[textClass ? textClass : 'text-lg', isTextBold && 'font-bold']"
    >
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
