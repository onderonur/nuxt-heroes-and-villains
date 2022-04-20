<template>
  <NuxtLink :to="to">
    <div class="bg-secondary-main relative group rounded-tr-md rounded-bl-md">
      <div class="image-border has-transition top-left" />
      <div class="image-border has-transition bottom-right" />
      <div
        class="has-transition bg-background-paper shadow-md mb-3 rounded-tr-md rounded-bl-md overflow-hidden group-hover:translate-x-2 group-hover:-translate-y-2"
      >
        <BaseImage :src="imgSrc" :alt="imgAlt" />
      </div>
    </div>
    <h2 class="font-medium text-lg uppercase">
      {{ title }}
    </h2>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    to: [String, Object],
    imgSrc: String,
    imgAlt: String,
    title: String,
  },
});
</script>

<style scoped lang="scss">
.has-transition {
  @apply transform
          transition
          duration-200;
}

.image-border {
  @apply absolute
          h-0
          w-0
          border-8 border-secondary-main;
  border-top-color: transparent;
  border-bottom-color: transparent;
  &.top-left {
    @apply top-0 -translate-x-2 group-hover:-translate-y-2;
    border-left-color: transparent;
  }
  &.bottom-right {
    @apply -right-2 bottom-0 group-hover:translate-x-2;
    border-right-color: transparent;
  }
}
</style>
