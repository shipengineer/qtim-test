<script setup lang="ts">
import type { PaginationProps } from '~/types/ui/pagination';
const { totalPages } = defineProps<PaginationProps>();
const currentPage = defineModel<number>({ default: 1 });
const nextClickHandler = () => {
  currentPage.value += 1;
};
const computedPages = computed(() => {
  const humanPage = currentPage.value || 1;
  const total = totalPages;

  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const firstPages = [1, 2];
  const lastPages = [total - 1, total];

  // Case: Page is in the first few pages
  if (humanPage <= 4) {
    return [...firstPages, 3, 4, 5, '...', ...lastPages];
  }

  // Case: Page is in the last few pages
  if (humanPage >= total - 3) {
    return [...firstPages, '...', total - 4, total - 3, ...lastPages];
  }

  // Case: Page is in the middle
  return [
    ...firstPages,
    '...',
    humanPage - 1,
    humanPage,
    humanPage + 1,
    '...',
    ...lastPages,
  ];
});
</script>
<template>
  <nav class="flex gap-2 items-end">
    <template
      v-for="page in computedPages"
      :key="'pagination' + page">
      <div v-if="page === '...'">...</div>
      <button
        v-else
        class="bg-gray-2 w-11 h-11 rounded-xl"
        :class="{ '!bg-black text-white': page === currentPage }"
        @click="currentPage = page">
        {{ page }}
      </button>
    </template>
    <button
      v-if="currentPage < totalPages"
      class="bg-white border border-1 w-11 h-11 rounded-xl border-gray-3 hover:bg-gray-3"
      @click="nextClickHandler">
      &gt;
    </button>
  </nav>
</template>
