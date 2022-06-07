import { Meteor } from "meteor/meteor";
import {
  TodosCollection,
  mockedTodos,
} from "/imports/api/todos/todosCollection";
import {
  ArticlesCollection,
  mockedArticles,
} from "/imports/api/articles/articlesCollection";

import "./publications";
import "./methods";

const insertMocks = (collection) => (document) =>
  collection.upsert(document._id, {
    $setOnInsert: document,
  });

Meteor.startup(() => {
  mockedTodos.forEach(insertMocks(TodosCollection));
  mockedArticles.forEach(insertMocks(ArticlesCollection));
});
