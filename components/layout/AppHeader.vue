<script setup lang="ts">
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
    class="fixed z-10 flex h-app-header w-full items-center justify-between bg-background-paper px-app-px text-primary-main shadow-sm dark:bg-dark-background-paper md:px-app-px-md"
  >
    <NuxtLink :to="{ name: 'index' }">
      <h1 class="text-xl font-bold md:text-2xl">{{ appTitle }}</h1>
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
