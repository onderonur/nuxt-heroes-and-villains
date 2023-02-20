<script setup lang="ts">
import { Character } from "~/types/CharacterTypes";

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
