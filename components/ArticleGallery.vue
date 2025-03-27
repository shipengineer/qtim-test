<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { articleService } from '~/api/articlesService';
import type { ArticleCard } from '~/types/article';
const { data: currentPageArticles, isSuccess } = useQuery({
  queryKey: ['articles'],
  queryFn: () => articleService.getAllArticles(),
});
const router = useRouter();

const currentPage = computed(() => {
  const routerPage = router.currentRoute.value.query.page;
  const page = Array.isArray(routerPage) ? routerPage[0] : routerPage;
  return Number(page) || 1;
});

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
      :model-value="currentPage"
      @update:model-value="updateRouteHandler" />
  </section>
</template>
