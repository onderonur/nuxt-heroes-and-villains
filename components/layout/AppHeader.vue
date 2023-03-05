<script setup lang="ts">
import { getStoredTheme, setStoredTheme } from '~/lib/ThemeUtils';

defineProps<{ appTitle: string }>();

const currentTheme = ref(getStoredTheme());

watch(
  currentTheme,
  () => {
    if (currentTheme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setStoredTheme(currentTheme.value);
  },
  {
    // To make "watch" to be triggered for the initial value too.
    // Otherwise, it only watches for the value changes.
    immediate: true,
  },
);

function listenStorage() {
  currentTheme.value = getStoredTheme();
}

onMounted(() => {
  window.addEventListener('storage', listenStorage);
});

onUnmounted(() => {
  window.removeEventListener('storage', listenStorage);
});

const appConfig = useAppConfig();
</script>

<template>
  <header
    class="bg-background-paper dark:bg-dark-background-paper text-primary-main h-app-header flex items-center justify-between px-app-px md:px-app-px-md fixed w-full z-10 shadow-sm"
  >
    <NuxtLink :to="{ name: 'index' }">
      <h1 class="font-bold text-xl md:text-2xl">{{ appTitle }}</h1>
    </NuxtLink>
    <div class="flex gap-1">
      <ThemeToggler />
      <BaseButton
        variant="text"
        :to="appConfig.githubRepoUrl"
        is-external-url
        icon-name="mdi:github"
        circle
      />
    </div>
  </header>
</template>
