<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
  imgSrc: string;
  imgAlt: string;
  title: String;
}>();
</script>

<template>
  <NuxtLink :to="to">
    <div class="group relative rounded-bl-md rounded-tr-md bg-secondary-main">
      <div class="image-border has-transition top-left" />
      <div class="image-border has-transition bottom-right" />
      <div
        class="has-transition relative mb-2 overflow-hidden rounded-bl-md rounded-tr-md bg-background-paper shadow-md group-hover:-translate-y-2 group-hover:translate-x-2"
      >
        <BaseImage :src="imgSrc" :alt="imgAlt" />
      </div>
    </div>
    <h2 class="font-semibold uppercase md:text-lg">
      {{ title }}
    </h2>
  </NuxtLink>
</template>

<style scoped>
.has-transition {
  @apply transition duration-200;
}

.image-border {
  @apply absolute size-0 border-8 border-secondary-main;
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.image-border.top-left {
  @apply top-0 -translate-x-2 group-hover:-translate-y-2;
  border-left-color: transparent;
}

.image-border.bottom-right {
  @apply -right-2 bottom-0 group-hover:translate-x-2;
  border-right-color: transparent;
}
</style>
