<script setup lang="ts">
defineProps<{
  placeholder: string;
  name: string;
  modelValue: string;
}>();

defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<template>
  <input
    class="px-3 md:px-4 w-full shadow-md md:text-lg h-11 md:h-12 rounded-l-md bg-background-paper dark:bg-dark-background-paper text-text-main dark:text-dark-text-main placeholder-text-lighter dark:placeholder-dark-text-lighter"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
