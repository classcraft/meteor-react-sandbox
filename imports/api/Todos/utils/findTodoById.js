// @flow
import { TodosCollection } from "/imports/api/Todos/TodosCollection";
import type { Todo } from "/imports/api/Todos/TodosTypes";

export function findTodoById(todoId: string): Todo | void {
  return TodosCollection.findOne(todoId);
}
