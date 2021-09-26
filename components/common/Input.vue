<template>
  <input
    class="
      outline-none
      px-4
      w-full
      shadow-md
      text-lg
      h-12
      rounded-l-md
      bg-background-paper
      dark:bg-dark-background-paper
      text-text-main
      dark:text-dark-text-main
      placeholder-text-lighter
      dark:placeholder-dark-text-lighter
    "
    :name="name"
    v-model="localValue"
    :placeholder="placeholder"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    placeholder: String,
    name: String,
    value: String,
  },
  setup(props, { emit }) {
    const localValue = computed({
      get: () => {
        return props.value;
      },
      set: (newLocalValue) => {
        emit('input', newLocalValue);
      },
    });
    return { localValue };
  },
});
</script>
