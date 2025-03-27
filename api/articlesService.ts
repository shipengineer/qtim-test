import type { $Fetch, NitroFetchOptions } from 'nitropack';
import type { ArticleCard } from '~/types/article';
class ArticlesSevice {
  private readonly baseURL: string =
    'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/';
  private readonly $fetch: $Fetch;
  constructor(fetchInstance: $Fetch) {
    this.$fetch = fetchInstance;
  }

  getAllArticles(opts?: NitroFetchOptions<string, 'get'>) {
    return this.$fetch<ArticleCard[]>(this.baseURL, opts);
  }
  /**
   *
   * @param id id of Article
   */
  getArticlesById(
    id: MaybeRef<string>,
    opts?: NitroFetchOptions<string, 'get'>
  ) {
    return this.$fetch<ArticleCard>(this.baseURL + toValue(id), opts);
  }
}
export const articleService = new ArticlesSevice($fetch);
