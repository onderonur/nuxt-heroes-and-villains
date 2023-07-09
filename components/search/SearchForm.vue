<script setup lang="ts">
defineProps<{ searchTerm: string }>();

defineEmits<{
  (e: 'update:searchTerm', value: string): void;
  (e: 'submit', event: Event): void;
}>();
</script>

<template>
  <form
    role="search"
    class="flex items-center mx-auto max-w-xl mb-app-py md:mb-app-py-md"
    autocomplete="off"
    @submit.prevent="$emit('submit', $event)"
  >
    <BaseInput
      type="search"
      name="searchTerm"
      :model-value="searchTerm"
      placeholder="Search..."
      @update:model-value="$emit('update:searchTerm', $event)"
    />
    <BaseButton
      icon-name="material-symbols:search"
      button-class="search-button"
      type="submit"
      variant="primary"
    />
  </form>
</template>

<style scoped>
.search-button {
  @apply w-11 h-11 md:w-12 md:h-12 rounded-l-none p-3;
}
</style>
