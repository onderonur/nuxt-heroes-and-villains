<template>
  <form
    @submit.prevent="$emit('submit', $event)"
    class="flex items-center mx-auto max-w-xl mb-app-py md:mb-app-py-md"
    autocomplete="off"
  >
    <BaseInput
      name="searchTerm"
      :value="value.searchTerm"
      @input="$emit('input', { ...value, searchTerm: $event })"
      placeholder="Search..."
    />
    <BaseButton
      icon-name="search"
      button-class="search-button"
      type="submit"
      variant="primary"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    // "value" prop comes from v-model
    value: Object,
    onSubmit: Function,
  },
});
</script>

<style scoped>
.search-button {
  @apply w-11 h-11 md:w-12 md:h-12 !rounded-l-none;
}
</style>
