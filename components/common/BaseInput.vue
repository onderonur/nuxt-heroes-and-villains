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
    class="h-11 w-full rounded-l-md bg-background-paper px-3 text-text-main placeholder-text-lighter shadow-md dark:bg-dark-background-paper dark:text-dark-text-main dark:placeholder-dark-text-lighter md:h-12 md:px-4 md:text-lg"
    :name="name"
    :value="modelValue"
    :placeholder="placeholder"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
