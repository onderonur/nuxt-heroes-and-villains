<script setup lang="ts">
defineProps<{ searchTerm: string }>();

defineEmits<{
  (e: 'update:searchTerm', value: string): void;
  (e: 'submit', event: Event): void;
}>();
</script>

<template>
  <!-- TODO: This `<form>` was wrapped in `<search>` before and it didn't have `role="search"`.
  But Vue can't render `<search>` when `ssr: false` is not set currently.
  So, `role="search"` is added for now and `<search>` is removed. -->
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
  @apply size-11 rounded-l-none p-3 md:size-12;
}
</style>
