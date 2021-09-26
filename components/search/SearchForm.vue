<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex mx-auto max-w-xl mb-6 items-center"
    autocomplete="off"
  >
    <Input name="localValue" v-model="localValue" placeholder="Search..." />
    <Button
      icon-name="search"
      button-class="search-button"
      type="submit"
      variant="primary"
    />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    // "value" prop comes from v-model
    value: String,
    onSubmit: Function,
  },
  setup(props, { emit }) {
    function handleSubmit(e: Event) {
      emit('submit', e);
    }
    const localValue = computed({
      get: () => {
        return props.value;
      },
      set: (newLocalValue) => {
        emit('input', newLocalValue);
      },
    });
    return { handleSubmit, localValue };
  },
});
</script>

<style scoped>
.search-button {
  @apply w-12 h-12 rounded-l-none;
}
</style>
