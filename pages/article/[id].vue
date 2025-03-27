<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { articleService } from '~/api/articlesService';
import type { ArticleCard } from '~/types/article';

definePageMeta({ layout: 'default', name: 'article' });
const route = useRoute();
const articleId = computed(() =>
  Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
);
const {
  data: article,
  isFetching,
  isSuccess,
} = useQuery({
  queryKey: ['article', articleId.value],
  queryFn: () => articleService.getArticlesById(articleId),
  enabled: () => !!articleId,
});
</script>
<template>
  <main>
    <h1 class="text-8xl mb-20">{{ article?.title }}</h1>
    <img
      :src="article?.image"
      class="mb-20"
      onerror="this.src='https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'" />
    <p class="mb-8">About</p>
    <p class="text-3xl max-w-2xl mb-20">
      {{ article?.description }}
    </p>
  </main>
</template>
