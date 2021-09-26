<template>
  <h1 class="text-2xl font-bold uppercase relative">
    <div class="partial-border vertical top-right" />
    <div class="partial-border horizontal top-right" />
    <div class="partial-border vertical bottom-left" />
    <div class="partial-border horizontal bottom-left" />
    {{ character.name }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
  },
});
</script>

<style scoped lang="scss">
.partial-border {
  @apply absolute border-overlay-main dark:border-dark-overlay-main;
  &.vertical {
    @apply w-4 border-b-4;
  }
  &.horizontal {
    @apply h-4 border-r-4;
  }
  &.top-right {
    @apply top-0 -right-2;
  }
  &.bottom-left {
    @apply bottom-0 -left-2;
  }
}
</style>
