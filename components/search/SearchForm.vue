<script setup lang="ts">
defineProps<{ searchTerm: string }>();

defineEmits<{
  (e: "update:searchTerm", value: string): void;
  (e: "submit", event: Event): void;
}>();
</script>

<template>
  <form
    @submit.prevent="$emit('submit', $event)"
    class="flex items-center mx-auto max-w-xl mb-app-py md:mb-app-py-md"
    autocomplete="off"
  >
    <BaseInput
      name="searchTerm"
      :model-value="searchTerm"
      @update:model-value="$emit('update:searchTerm', $event)"
      placeholder="Search..."
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
