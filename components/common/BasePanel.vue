<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div
    class="relative mt-4 rounded-md border-2 bg-background-body px-4 py-2 shadow-md dark:bg-dark-background-body"
  >
    <h2
      class="absolute -top-4 rounded-md bg-background-body px-1 text-lg font-bold uppercase text-text-lighter dark:bg-dark-background-body dark:text-dark-text-lighter md:text-xl"
    >
      {{ title }}
    </h2>
    <div class="mt-2">
      <slot />
    </div>
  </div>
</template>
