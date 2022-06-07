// @flow
import { ArticlesCollection } from "/imports/api/articles/articlesCollection";
import type { Article } from "/imports/api/articles/articlesTypes";

export function findArticleById(articleId: string): Article | void {
  return ArticlesCollection.findOne(articleId);
}
