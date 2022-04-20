<template>
  <form
    @submit.prevent="$emit('submit', $event)"
    class="flex mx-auto max-w-xl mb-6 items-center"
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
  @apply w-12 h-12 rounded-l-none;
}
</style>
