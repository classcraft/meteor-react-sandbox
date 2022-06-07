// @flow
import { Meteor } from "meteor/meteor";
import { wait } from "/imports/debug/wait";
import { findArticleById } from "/imports/api/articles/utils/findArticleById";

import type { Article } from "/imports/api/articles/articlesTypes";

type FetchArticleParams = {|
  _id: string,
|};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function crashRandomly() {
  const randomCrashOccurence = getRandomInt(1, 4);

  if (randomCrashOccurence === 3) {
    throw new Meteor.Error(500, "Cannot find article at the moment");
  }
}

export async function fetchArticle({
  _id,
}: FetchArticleParams): Promise<Article | void> {
  const randomWaitTime = getRandomInt(1000, 5000);
  await wait(randomWaitTime);

  crashRandomly();

  return findArticleById(_id);
}
