import type { VueQueryPluginOptions } from '@tanstack/vue-query';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

export default defineNuxtPlugin((nuxt) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 10000, retry: 1, refetchOnWindowFocus: false },
    },
  });
  const options: VueQueryPluginOptions = { queryClient };

  nuxt.vueApp.use(VueQueryPlugin, options);
});
