<template>
  <!-- https://vuejs.org/v2/guide/components.html#Dynamic-Components -->
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :class="[
      'button',
      circle && 'circle-button',
      variant === 'primary' && ['solid-button', 'primary-button'],
      variant === 'secondary' && ['solid-button', 'secondary-button'],
      variant === 'text' && 'text-button',
      buttonClass,
    ]"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :type="to ? undefined : type || 'button'"
    @click="$emit('click', $event)"
  >
    <slot v-if="iconAlignment === 'right'" />
    <VIcon
      v-if="iconName"
      :name="iconName"
      class="fill-current w-full h-4 md:h-6"
    />
    <slot v-if="iconAlignment !== 'right'" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    type: String,
    to: Object,
    href: String,
    iconName: String,
    iconAlignment: String,
    circle: Boolean,
    variant: String,
    buttonClass: String,
  },
});
</script>

<style scoped lang="scss">
.button {
  @apply border-solid border-2 border-primary-main 
      py-1    
      md:py-2
      px-2
      md:px-4
      rounded-md
      font-medium
      text-primary-main
      hover:text-secondary-main
      hover:bg-overlay-light
      dark:hover:bg-dark-overlay-light
      flex
      items-center
      gap-1;
  &.solid-button {
    @apply text-text-contrast border-none hover:text-text-contrast;
  }
  &.primary-button {
    @apply bg-primary-main hover:bg-primary-light;
  }
  &.secondary-button {
    @apply bg-secondary-main hover:bg-secondary-light;
  }
  &.text-button {
    @apply border-none;
  }
  &.circle-button {
    @apply h-8 w-8 md:h-10 md:w-10 rounded-full p-0
      flex
      items-center
      justify-around;
  }
}
</style>
