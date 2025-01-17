// @flow
import { TodosCollection } from "/imports/api/todos/todosCollection";
import { wait } from "/imports/debug/wait";

type DeleteTodoParams = {|
  todoId: string,
|};

export async function deleteTodo({ todoId }: DeleteTodoParams) {
  await wait(1500);
  TodosCollection.remove(todoId);
}
