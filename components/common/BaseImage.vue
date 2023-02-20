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
      'w-full object-cover bg-text-lighter aspect-[2/3]',
      rounded && 'rounded-md overflow-hidden',
    ]"
  />
</template>
