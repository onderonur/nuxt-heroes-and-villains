<script setup lang="ts">
import type { Character } from '~/types/character-types';

defineProps<{ character: Character }>();
</script>

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
