<script setup lang="ts">
defineProps<{
  label: string;
  textClass?: string;
  isTextBold?: boolean;
}>();
</script>

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
