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
    class="mx-auto mb-app-py flex max-w-xl items-center md:mb-app-py-md"
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
  @apply h-11 w-11 rounded-l-none p-3 md:h-12 md:w-12;
}
</style>
