// @flow
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

import { fetchArticle } from "/server/utils/fetchArticle";

type FetchArticleParams = {|
  _id: string,
|};

const name = "about.fetchArticle";

const validate = new SimpleSchema({
  _id: String,
}).validator();

const run = (params: FetchArticleParams) =>
  Promise.resolve(params).then(fetchArticle);

const method: any = new ValidatedMethod({ name, validate, run });

export default method;
