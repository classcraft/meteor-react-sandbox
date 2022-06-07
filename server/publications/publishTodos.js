import { Meteor } from "meteor/meteor";

import { TodosCollection } from "/imports/api/todos/todosCollection";
import { wait } from "/imports/debug/wait";

async function publishTodos() {
  await wait(2500);

  return TodosCollection.find();
}

Meteor.publish("todos", publishTodos);
