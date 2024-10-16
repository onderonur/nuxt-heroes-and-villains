<script setup lang="ts">
enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

function getStoredTheme() {
  return (localStorage.getItem('theme') ?? Theme.LIGHT) as Theme;
}

function setStoredTheme(theme: Theme) {
  localStorage.setItem('theme', theme);
}

function handleStoredThemeChange() {
  const storedTheme = getStoredTheme();

  if (storedTheme === Theme.DARK) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const storedTheme = getStoredTheme();
  const newTheme = storedTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  setStoredTheme(newTheme);
  handleStoredThemeChange();
}

onMounted(() => {
  window.addEventListener('storage', handleStoredThemeChange);
});

onUnmounted(() => {
  window.removeEventListener('storage', handleStoredThemeChange);
});

useHead({
  script: [
    {
      innerHTML: `
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      `,
    },
  ],
});
</script>

<template>
  <BaseButton
    variant="text"
    class="dark:!hidden"
    icon-name="material-symbols:dark-mode-rounded"
    circle
    @click="toggleTheme"
  />
  <BaseButton
    variant="text"
    class="!hidden dark:!flex"
    icon-name="material-symbols:sunny"
    circle
    @click="toggleTheme"
  />
</template>
