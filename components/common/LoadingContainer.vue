<script setup lang="ts">
import { FetchError } from "ofetch";
import { Maybe } from "~~/types/CommonTypes";

defineProps<{
  loading: boolean;
  error: Maybe<FetchError>;
}>();
</script>

<template>
  <div>
    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-else-if="error" :error="error" />
    <slot v-else />
  </div>
</template>
