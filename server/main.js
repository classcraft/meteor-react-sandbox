import { Meteor } from "meteor/meteor";
import {
  TodosCollection,
  mockedTodos,
} from "/imports/api/Todos/TodosCollection";
import {
  ArticlesCollection,
  mockedArticles,
} from "/imports/api/Articles/ArticlesCollection";

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
