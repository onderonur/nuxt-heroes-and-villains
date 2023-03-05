<script setup lang="ts">
const router = useRouter();

function handleClick() {
  router.go(-1);
}
</script>

<template>
  <BaseButton
    icon-name="material-symbols:arrow-back"
    circle
    @click="handleClick"
  />
</template>
