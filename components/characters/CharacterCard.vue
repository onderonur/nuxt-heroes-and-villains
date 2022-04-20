<template>
  <BaseCard
    :to="{
      name: 'characters-characterId',
      params: { characterId: character.id },
    }"
    :img-src="character.images.sm"
    :img-alt="`${character.name} image`"
    :title="character.name"
  />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
  },
});
</script>
