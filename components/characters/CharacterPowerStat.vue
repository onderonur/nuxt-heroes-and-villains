<script setup lang="ts">
defineProps<{ label: string; value: number }>();
</script>

<template>
  <LabeledInfo :label="label" text-class="text-xl md:text-2xl" is-text-bold>
    {{ value }}
  </LabeledInfo>
</template>
