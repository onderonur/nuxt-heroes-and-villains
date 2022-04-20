<template>
  <BaseButton @click="handleClick" icon-name="arrow-left" circle />
</template>

<script lang="ts">
import { defineComponent, useRouter } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const router = useRouter();
    function handleClick() {
      router.go(-1);
    }
    return { handleClick };
  },
});
</script>
