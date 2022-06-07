// @flow
import { TodosCollection } from "/imports/api/todos/todosCollection";
import type { Todo } from "/imports/api/todos/todosTypes";

export function findTodoById(todoId: string): Todo | void {
  return TodosCollection.findOne(todoId);
}
