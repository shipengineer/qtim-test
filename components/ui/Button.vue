<script setup lang="ts">
import type { ButtonProps } from '~/types/ui/button';

const {
  theme = 'light',
  title = 'Кнопка',
  onlyIcon = false,
  iconName,
} = defineProps<ButtonProps>();
const variants: Record<ButtonProps['theme'], string> = {
  light: 'bg-white border border-2 border-solid border-gray-4 w-fit ',
  dark: 'bg-black text-white ',
};
const variant = computed(() => variants[theme]);

const resultClass = computed(() => {
  let baseVariant = 'rounded-full h-fit ';
  baseVariant += variant.value;
  if (onlyIcon) {
    baseVariant += 'p-3 h-fit';
    return baseVariant;
  }
  baseVariant += 'px-8 py-4 ';
  return baseVariant;
});
</script>
<template>
  <button :class="resultClass">
    <Icon
      v-if="iconName"
      size="1.5rem"
      :name="'qtim-' + iconName" />
    <slot v-if="!onlyIcon"
      ><span class="text-c">{{ title }}</span></slot
    >
  </button>
</template>
