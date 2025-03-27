<script setup lang="ts">
import type { CardProps } from '~/types/ui/card';

defineProps<CardProps>();
</script>
<template>
  <div
    class="relative transition-transform hover:-translate-y-4 group max-w-[280px]">
    <img
      onerror="this.src='https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg'"
      :src="article.image"
      class="w-full mb-6" />
    <h3 class="mb-2 line-clamp-3 p-2">{{ article.description }}</h3>
    <p class="group-hover:block absolute hidden text-violet-2">Read more</p>
  </div>
</template>
