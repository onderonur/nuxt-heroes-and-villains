<template>
  <div>
    <Loading v-if="loading" />
    <ErrorMessage v-else-if="error" :error="error" />
    <slot v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    loading: Boolean,
    error: Error,
  },
});
</script>
