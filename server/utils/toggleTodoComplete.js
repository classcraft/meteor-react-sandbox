// @flow
import { TodosCollection } from "/imports/api/Todos/TodosCollection";
import { wait } from "/imports/debug/wait";

type ToggleTodoCompleteParams = {|
  _id: string,
|};

export async function toggleTodoComplete(params: ToggleTodoCompleteParams) {
  const todo = TodosCollection.findOne(params._id);
  if (!todo) return;

  await wait(1500);

  TodosCollection.update(todo._id, { $set: { completed: !todo.completed } });
}
