<script setup lang="ts">
import { RouteLocationRaw } from "vue-router";

withDefaults(
  defineProps<{
    type?: string;
    to?: RouteLocationRaw;
    isExternalUrl?: boolean;
    iconName?: string;
    iconAlignment?: "left" | "right";
    circle?: boolean;
    variant?: "default" | "primary" | "secondary" | "text";
    buttonClass?: string;
  }>(),
  { variant: "default" }
);

defineEmits<{ (e: "click", event: Event): void }>();

const NuxtLink = resolveComponent("NuxtLink");
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
      class="fill-current w-full h-4 md:h-6"
    />
    <slot v-if="iconAlignment !== 'right'" />
  </component>
</template>

<style scoped>
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
}

.button.solid-button {
  @apply text-text-contrast border-none hover:text-text-contrast;
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
  @apply h-8 w-8 md:h-10 md:w-10 rounded-full p-0
      flex
      items-center
      justify-around;
}
</style>
