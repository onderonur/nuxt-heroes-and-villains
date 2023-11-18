<script setup lang="ts">
defineProps<{
  rounded?: boolean;
  src: string;
  alt: string;
}>();
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    :class="[
      'aspect-[2/3] w-full bg-text-lighter object-cover',
      rounded && 'overflow-hidden rounded-md',
    ]"
  />
</template>
