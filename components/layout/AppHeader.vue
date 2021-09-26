<template>
  <header
    class="
      bg-background-paper
      dark:bg-dark-background-paper
      text-primary-main
      h-app-header
      flex
      items-center
      justify-between
      px-3
      fixed
      w-full
      z-10
      shadow-sm
    "
  >
    <NuxtLink :to="{ name: 'index' }">
      <h1 class="font-bold text-2xl">{{ appTitle }}</h1>
    </NuxtLink>
    <div class="flex gap-2">
      <ThemeToggler />
      <Button
        variant="text"
        :href="githubRepoUrl"
        icon-name="brands/github"
        icon-class="h-6 w-6"
        circle
      />
    </div>
  </header>
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
  props: {
    appTitle: { type: String, required: true },
  },
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

    return {
      currentTheme,
      toggleTheme,
      githubRepoUrl: process.env.githubRepoUrl,
    };
  },
});
</script>
