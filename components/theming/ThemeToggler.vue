<template>
  <BaseButton
    variant="text"
    :icon-name="currentTheme === 'dark' ? 'sun' : 'moon'"
    icon-class="h-6 w-6"
    circle
    @click="toggleTheme"
  />
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const currentTheme = ref(localStorage.getItem('theme') ?? 'light');

    watch(
      currentTheme,
      () => {
        if (currentTheme.value === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', currentTheme.value);
      },
      {
        // To make "watch" to be triggered for the initial value too.
        // Otherwise, it only watches for the value changes.
        immediate: true,
      },
    );

    function toggleTheme() {
      currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
    }

    function listenStorage() {
      currentTheme.value = localStorage.getItem('theme') ?? 'light';
    }

    onMounted(() => {
      window.addEventListener('storage', listenStorage);
    });

    onUnmounted(() => {
      window.removeEventListener('storage', listenStorage);
    });

    return { currentTheme, toggleTheme };
  },
});
</script>
