// @flow
import { TodosCollection } from "/imports/api/Todos/TodosCollection";
import { wait } from "/imports/debug/wait";

type AddTodoParams = {|
  name: string,
|};

export async function addTodo({ name }: AddTodoParams) {
  await wait(1500);
  TodosCollection.insert({ name, completed: false });
}
