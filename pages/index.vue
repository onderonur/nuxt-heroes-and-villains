<script setup lang="ts">
import { Character } from "~/types/CharacterTypes";
import { useScrollToTop } from "~/lib/CommonHooks";

const limit = 24;
const firstPage = 1;

const {
  data: characters,
  pending,
  error,
} = useFetch<Character[]>(
  () => "https://akabab.github.io/superhero-api/api/all.json"
);

const route = useRoute();

const currentPage = computed(() => {
  const parsed = parseInt(route.query.page as string);

  if (Number.isInteger(parsed)) {
    return parsed;
  }

  return firstPage;
});

const searchResults = computed(() => {
  return characters.value?.filter((character) => {
    const term = route.query.term;

    if (typeof term !== "string" || !term) {
      return true;
    }

    return character.name.toLowerCase().includes(term.toLowerCase());
  });
});

const pageResults = computed(() => {
  const offset = (currentPage.value - firstPage) * limit;
  const pageResults = searchResults.value?.slice(offset, offset + limit);
  return pageResults;
});

const prevPage = computed(() => {
  return currentPage.value > firstPage ? currentPage.value - 1 : undefined;
});

const nextPage = computed(() => {
  const maxPage = Math.ceil((searchResults.value ?? []).length / limit);
  return currentPage.value < maxPage ? currentPage.value + 1 : undefined;
});

const searchTerm = ref("");

watch(
  () => route.query.term,
  (newValue) => {
    const newSearchTerm = typeof newValue === "string" ? newValue : "";
    searchTerm.value = newSearchTerm;
  },
  { immediate: true }
);

const router = useRouter();

function handleSubmit() {
  const query: Record<string, string> = {};

  if (searchTerm.value) {
    query.term = searchTerm.value;
  }

  router.push({
    name: "index",
    query,
  });
}

// Scroll to top when pageResults are changed
useScrollToTop(pageResults);

useHead({
  title: () => {
    const term = route.query.term;
    return `Search${term ? ` for '${term}'` : ""}`;
  },
});
</script>

<!-- TODO: nuxt linter will be added -->

<template>
  <div>
    <SearchForm
      v-model:search-term="searchTerm"
      @submit.prevent="handleSubmit"
    />
    <LoadingContainer :loading="pending" :error="error">
      <div v-if="pageResults && pageResults.length">
        <ul
          class="grid grid-cols-autofill-min-8 md:grid-cols-autofill-min-10 gap-2 md:gap-4"
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
        <BaseButton
          v-if="typeof prevPage === 'number'"
          :to="{
            name: 'index',
            query: { ...$route.query, page: prevPage },
          }"
          icon-name="material-symbols:chevron-left"
        >
          Previous
        </BaseButton>
        <div class="flex-grow" />
        <BaseButton
          v-if="typeof nextPage === 'number'"
          :to="{
            name: 'index',
            query: { ...$route.query, page: nextPage },
          }"
          icon-name="material-symbols:chevron-right"
          icon-alignment="right"
        >
          Next
        </BaseButton>
      </div>
    </LoadingContainer>
  </div>
</template>
