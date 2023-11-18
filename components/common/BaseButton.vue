<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';

withDefaults(
  defineProps<{
    type?: string;
    to?: RouteLocationRaw;
    isExternalUrl?: boolean;
    iconName?: string;
    iconAlignment?: 'left' | 'right';
    circle?: boolean;
    variant?: 'default' | 'primary' | 'secondary' | 'text';
    buttonClass?: string;
  }>(),
  {
    type: 'button',
    to: undefined,
    iconName: undefined,
    iconAlignment: undefined,
    variant: 'default',
    buttonClass: undefined,
  },
);

defineEmits<{ (e: 'click', event: Event): void }>();

const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :class="[
      'button',
      circle && 'circle-button',
      variant === 'primary' && ['solid-button', 'primary-button'],
      variant === 'secondary' && ['solid-button', 'secondary-button'],
      variant === 'text' && 'text-button',
      buttonClass,
    ]"
    :to="to"
    :target="isExternalUrl ? '_blank' : undefined"
    :rel="isExternalUrl ? 'noopener noreferrer' : undefined"
    :type="to ? undefined : type || 'button'"
    @click="$emit('click', $event)"
  >
    <slot v-if="iconAlignment === 'right'" />
    <Icon
      v-if="iconName"
      :name="iconName"
      class="h-4 w-full fill-current md:h-6"
    />
    <slot v-if="iconAlignment !== 'right'" />
  </component>
</template>

<style scoped>
.button {
  @apply flex items-center gap-1
      rounded-md
      border-2
      border-primary-main
      px-2
      py-1
      font-medium
      text-primary-main
      hover:bg-overlay-light
      hover:text-secondary-main
      dark:hover:bg-dark-overlay-light
      md:px-4
      md:py-2;
}

.button.solid-button {
  @apply border-none text-text-contrast hover:text-text-contrast;
}

.button.primary-button {
  @apply bg-primary-main hover:bg-primary-light;
}

.button.secondary-button {
  @apply bg-secondary-main hover:bg-secondary-light;
}

.button.text-button {
  @apply border-none;
}

.button.circle-button {
  @apply flex h-8 w-8 items-center justify-around rounded-full
      p-0
      md:h-10
      md:w-10;
}
</style>
