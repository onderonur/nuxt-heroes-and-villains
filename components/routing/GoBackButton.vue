<script setup lang="ts">
const router = useRouter();

function handleClick() {
  router.go(-1);
}
</script>

<template>
  <BaseButton
    @click="handleClick"
    icon-name="material-symbols:arrow-back"
    circle
  />
</template>
