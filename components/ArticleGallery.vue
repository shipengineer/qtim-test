<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import type { ArticleCard } from '~/types/article';
const { data: currentPageArticles, isSuccess } = useQuery({
  queryKey: ['articles'],
  queryFn: () => {
    return $fetch<ArticleCard[]>(
      'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
    );
  },
});
const router = useRouter();

const page = router.currentRoute.value.query.page || 1;
const currentPage = ref(1);
const totalPages = computed(() => {
  if (!currentPageArticles.value) {
    return 1;
  } else {
    return currentPageArticles.value.length < 8
      ? 1
      : Math.ceil(currentPageArticles.value.length / 8);
  }
});
const currentpageArticle = computed(() => {
  if (!currentPageArticles.value) {
    return [];
  }
  const startIndex = (currentPage.value - 1) * 8;
  return currentPageArticles.value.slice(startIndex, startIndex + 8);
});
const updateRouteHandler = (value: number) =>
  navigateTo(
    { ...router.currentRoute, query: { page: value } },
    { replace: true }
  );
</script>
<template>
  <section>
    <div
      class="grid grid-cols-4 grid-rows-2 md-max:grid-cols-2 md:grid-flow-row gap-5 mb-12">
      <template v-for="(article, idx) in currentpageArticle">
        <UiCard
          @click="navigateTo({ name: 'article', params: { id: article.id } })"
          :article="article"
          :data-flow="idx" />
      </template>
    </div>
    <UiPagination
      :totalPages="totalPages"
      v-model="currentPage"
      @update:model-value="updateRouteHandler" />
  </section>
</template>
