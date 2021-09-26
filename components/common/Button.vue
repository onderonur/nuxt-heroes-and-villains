<template>
  <!-- https://vuejs.org/v2/guide/components.html#Dynamic-Components -->
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :class="[
      'button',
      circle && 'circle-button',
      variant === 'primary' && 'primary-button',
      variant === 'secondary' && 'secondary-button',
      variant === 'text' && 'text-button',
      buttonClass,
    ]"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    :type="type"
    @click="handleClick"
  >
    <slot v-if="iconAlignment === 'right'" />
    <VIcon v-if="iconName" :name="iconName" :class="iconClass" />
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
    iconClass: String,
  },
  setup(_, { emit }) {
    function handleClick(e: Event) {
      emit('click', e);
    }
    return { handleClick };
  },
});
</script>

<style scoped lang="scss">
.button {
  @apply border-solid border-2 border-primary-main
      py-2
      px-4
      rounded-md
      font-medium
      text-primary-main
      hover:text-secondary-main
      hover:bg-overlay-light
      dark:hover:bg-dark-overlay-light;
  &.primary-button {
    @apply bg-primary-main text-text-contrast border-none hover:bg-primary-light hover:text-text-contrast;
  }
  &.secondary-button {
    @apply bg-secondary-main text-text-contrast border-none hover:bg-secondary-light hover:text-text-contrast;
  }
  &.text-button {
    @apply border-none;
  }
  &.circle-button {
    @apply h-10 w-10 rounded-full p-0 
      flex
      items-center
      justify-around;
  }
}
</style>
