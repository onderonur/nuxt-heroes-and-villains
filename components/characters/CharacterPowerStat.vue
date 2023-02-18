<template>
  <LabeledInfo :label="label" text-class="text-xl md:text-2xl" is-text-bold>
    {{ value }}
  </LabeledInfo>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    label: { type: String, required: true },
    value: { type: Number, required: true },
  },
});
</script>
