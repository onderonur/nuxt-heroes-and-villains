<script setup lang="ts">
import { Character } from '~/types/character-types';

const route = useRoute();

const {
  data: character,
  pending,
  error,
} = useFetch<Character>(
  () =>
    `https://akabab.github.io/superhero-api/api/id/${route.params.characterId}.json`,
);

useHead({
  title: () => character.value?.name ?? '',
});
</script>

<template>
  <div>
    <div
      class="mb-app-py flex items-center justify-between gap-4 md:mb-app-py-md"
    >
      <GoBackButton />
      <CharacterTitle v-if="character" :character="character" />
    </div>
    <LoadingContainer :loading="pending" :error="error">
      <CharacterDetails v-if="character" :character="character" />
    </LoadingContainer>
  </div>
</template>
