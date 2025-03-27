<script setup lang="ts"></script>
<template>
  <footer class="w-full bg-violet-2">
    <section class="w-full max-w-6xl flex justify-between mx-auto pt-36 mb-36">
      <div>
        <p class="mb-14">Is there a project?</p>
        <NuxtLink class="underline underline-offset-auto text-7xl"
          >Let's work <br />
          together</NuxtLink
        >
      </div>
      <div>
        <div class="mb-9 flex flex-col">
          <p class="mb-3">For all questions</p>
          <NuxtLink href="tel:+79202780068">+7 (920) 278—00—68</NuxtLink>
          <NuxtLink href="mailto:qtim@agency.com">qtim@agency.com</NuxtLink>
        </div>
        <div class="mb-9 flex flex-col">
          <p class="mb-3">Office in Russia</p>
          <NuxtLink
            class="mb-2"
            href="https://www.google.com/maps"
            target="_blank"
            >139 Ruben Station Lake Drew, NM 52678
          </NuxtLink>
          <NuxtLink
            href="https://www.google.com/maps"
            target="_blank"
            class="bg-black rounded-full w-fit p-3">
            <Icon
              name="qtim-arrow-n-e"
              class="text-violet-2" />
          </NuxtLink>
        </div>
        <div class="mb-9 flex flex-col">
          <p class="mb-3">Office in Dubai</p>
          <NuxtLink
            class="mb-2"
            href="https://www.google.com/maps"
            target="_blank"
            >139 Ruben Station Lake Drew, NM 52678
          </NuxtLink>
          <NuxtLink
            href="https://www.google.com/maps"
            target="_blank"
            class="bg-black rounded-full w-fit p-3">
            <Icon
              name="qtim-arrow-n-e"
              class="text-violet-2" />
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="w-full max-w-6xl flex justify-between mx-auto items-end">
      <div class="flex gap-8 pb-7">
        <NuxtLink class="link">Facebook</NuxtLink>
        <NuxtLink class="link">Instagram</NuxtLink>
        <NuxtLink class="link">Telegram</NuxtLink>
      </div>
      <button
        class="text-white text-3xl align-bottom pt-16 w-[22rem] h-[11rem] bg-black rounded-t-full">
        Go
      </button>
      <div class="flex gap-8 pb-7">
        <NuxtLink class="link">Behance</NuxtLink>
        <NuxtLink class="link">LinkedIn</NuxtLink>
        <NuxtLink class="link">Privacy Policy</NuxtLink>
      </div>
    </section>
  </footer>
</template>
<style scoped>
.link {
  @apply underline underline-offset-2 whitespace-nowrap;
}
</style>
