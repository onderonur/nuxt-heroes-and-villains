<script setup lang="ts">
import { Character } from '~~/types/character-types';

defineProps<{ character: Character }>();
</script>

<template>
  <h1 class="relative text-xl font-bold uppercase md:text-2xl">
    <div class="partial-border vertical top-right" />
    <div class="partial-border horizontal top-right" />
    <div class="partial-border vertical bottom-left" />
    <div class="partial-border horizontal bottom-left" />
    {{ character.name }}
  </h1>
</template>

<style scoped>
.partial-border {
  @apply absolute border-overlay-main dark:border-dark-overlay-main;
}

.partial-border.vertical {
  @apply w-4 border-b-4;
}

.partial-border.horizontal {
  @apply h-4 border-r-4;
}

.partial-border.top-right {
  @apply -right-2 top-0;
}

.partial-border.bottom-left {
  @apply -left-2 bottom-0;
}
</style>
