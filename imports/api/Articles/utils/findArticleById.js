// @flow
import { ArticlesCollection } from "/imports/api/Articles/ArticlesCollection";
import type { Article } from "/imports/api/Articles/ArticlesTypes";

export function findArticleById(articleId: string): Article | void {
  return ArticlesCollection.findOne(articleId);
}
