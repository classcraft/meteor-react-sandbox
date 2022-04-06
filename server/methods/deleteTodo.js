// @flow
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

import { deleteTodo } from "/server/utils/deleteTodo";

type DeleteTodoParams = {|
  todoId: string,
|};

const name = "todos.delete";

const validate = new SimpleSchema({
  todoId: String,
}).validator();

const run = (params: DeleteTodoParams) =>
  Promise.resolve(params).then(deleteTodo);

const method: any = new ValidatedMethod({ name, validate, run });

export default method;
