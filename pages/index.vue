<template>
  <div>
    <SearchForm v-model="searchTerm" @submit.prevent="handleSubmit" />
    <LoadingContainer :loading="$fetchState.pending" :error="$fetchState.error">
      <div v-if="pageResults && pageResults.length">
        <ul
          class="
            grid grid-cols-autofill-min-8
            md:grid-cols-autofill-min-10
            gap-4
          "
        >
          <li v-for="character in pageResults" :key="character.id">
            <CharacterCard :character="character" />
          </li>
        </ul>
      </div>
      <div v-else>
        <h3 class="text-lg font-bold">No result...</h3>
      </div>
      <div class="flex py-4">
        <Button
          v-if="typeof prevPage === 'number'"
          :to="{
            name: 'index',
            query: { ...$route.query, page: prevPage },
          }"
          icon-name="chevron-left"
        >
          Previous
        </Button>
        <div class="flex-grow" />
        <Button
          v-if="typeof nextPage === 'number'"
          :to="{
            name: 'index',
            query: { ...$route.query, page: nextPage },
          }"
          icon-name="chevron-right"
          icon-alignment="right"
        >
          Next
        </Button>
      </div>
    </LoadingContainer>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useFetch,
  useMeta,
  useRoute,
  useRouter,
  watch,
} from '@nuxtjs/composition-api';
import axios from 'axios';
import { Character } from '~/types/CharacterTypes';
import { useScrollToTop } from '~/lib/CommonHooks';

const limit = 20;
const firstPage = 1;

export default defineComponent({
  head: {},
  setup() {
    const characters = ref<Character[]>([]);
    const { fetch } = useFetch(async () => {
      const { data } = await axios.get<Character[]>(
        `https://akabab.github.io/superhero-api/api/all.json`,
      );
      characters.value = data;
    });

    fetch();

    const route = useRoute();

    const currentPage = computed(() => {
      const parsed = parseInt(route.value.query.page as string);
      if (Number.isInteger(parsed)) {
        return parsed;
      }
      return firstPage;
    });

    const searchResults = computed(() => {
      return characters.value.filter((character) => {
        const query = (route.value.query.term as string) ?? '';
        if (!query) {
          return true;
        }
        return character.name.toLowerCase().includes(query.toLowerCase());
      });
    });

    const pageResults = computed(() => {
      const offset = (currentPage.value - firstPage) * limit;
      const pageResults = searchResults.value.slice(offset, offset + limit);
      return pageResults;
    });

    const prevPage = computed(() => {
      return currentPage.value > firstPage ? currentPage.value - 1 : undefined;
    });

    const nextPage = computed(() => {
      const maxPage = Math.ceil((searchResults.value ?? []).length / limit);
      return currentPage.value < maxPage ? currentPage.value + 1 : undefined;
    });

    const searchTerm = ref(
      typeof route.value.query.term === 'string' ? route.value.query.term : '',
    );

    // https://stackoverflow.com/a/50971021/10876256
    watch(
      () => route.value.query.term,
      (newValue) => {
        searchTerm.value = typeof newValue === 'string' ? newValue : '';
      },
    );

    const router = useRouter();

    function handleSubmit() {
      const query: Record<string, string> = {};
      if (searchTerm.value) {
        query.term = searchTerm.value;
      }
      router.push({
        name: 'index',
        query,
      });
    }

    // Scroll to top when pageResults are changed
    useScrollToTop(pageResults);

    const { title } = useMeta();
    watch(
      route,
      (data) => {
        const term = data.query.term;
        title.value = `Search${term ? ` for '${term}'` : ''}`;
      },
      { immediate: true },
    );

    return {
      pageResults,
      prevPage,
      nextPage,
      searchTerm,
      handleSubmit,
    };
  },
});
</script>
