<script setup lang="ts">
import { FetchError } from 'ofetch';

defineProps<{ error: FetchError }>();
</script>

<template>
  <div
    v-if="error"
    class="bg-error-lighter rounded-md border-2 border-error-main p-4 text-error-dark"
  >
    {{ error.message }}
  </div>
</template>
