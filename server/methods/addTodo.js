// @flow
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

import { addTodo } from "/server/utils/addTodo";

type AddTodoParams = {|
  name: string,
|};

const name = "todos.add";

const validate = new SimpleSchema({
  name: String,
}).validator();

const run = (params: AddTodoParams) => Promise.resolve(params).then(addTodo);

const method: any = new ValidatedMethod({ name, validate, run });

export default method;
