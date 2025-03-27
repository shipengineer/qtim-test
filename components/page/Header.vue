<script setup lang="ts"></script>
<template>
  <header
    class="flex justify-between items-center max-w-[1440px] pt-9 mx-auto;">
    <Icon
      name="qtim-logo"
      size="2rem" />
    <section class="flex items-center gap-24">
      <nav class="flex gap-6">
        <NuxtLink>Works</NuxtLink>
        <NuxtLink>About</NuxtLink>
      </nav>
      <div class="flex gap-3 items-center">
        <UiButton
          only-icon
          icon-name="united-kingdom" />
        <UiButton
          theme="dark"
          title="Let's work" />
      </div>
    </section>
  </header>
</template>
