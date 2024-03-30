<script setup lang="ts">
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

function toggleTheme() {
  currentTheme.value =
    currentTheme.value === Theme.DARK ? Theme.LIGHT : Theme.DARK;
}

function listenStorage() {
  currentTheme.value = getStoredTheme();
}

onMounted(() => {
  window.addEventListener('storage', listenStorage);
});

onUnmounted(() => {
  window.removeEventListener('storage', listenStorage);
});
</script>

<template>
  <BaseButton
    variant="text"
    :icon-name="
      currentTheme === 'dark'
        ? 'material-symbols:sunny'
        : 'material-symbols:dark-mode-rounded'
    "
    circle
    @click="toggleTheme"
  />
</template>
