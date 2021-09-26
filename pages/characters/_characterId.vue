<template>
  <div>
    <div class="flex justify-between items-center gap-4 mb-4">
      <GoBackButton />
      <CharacterTitle v-if="character" :character="character" />
    </div>
    <LoadingContainer :loading="$fetchState.pending" :error="$fetchState.error">
      <CharacterDetails :character="character" />
    </LoadingContainer>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useFetch,
  useMeta,
  useRoute,
  watch,
} from '@nuxtjs/composition-api';
import axios from 'axios';
import { Character } from '~/types/CharacterTypes';

export default defineComponent({
  head: {},
  setup() {
    const route = useRoute();
    const character = ref<Character | null>(null);
    const { fetch } = useFetch(async () => {
      const { data } = await axios.get<Character>(
        `https://akabab.github.io/superhero-api/api/id/${route.value.params.characterId}.json`,
      );
      character.value = data;
    });

    fetch();

    const { title } = useMeta();
    watch(
      character,
      (data) => {
        title.value = data?.name;
      },
      { immediate: true },
    );

    return { character };
  },
});
</script>
