// @flow
import { ValidatedMethod } from "meteor/mdg:validated-method";
import SimpleSchema from "simpl-schema";

import { toggleTodoComplete } from "/server/utils/toggleTodoComplete";

type ToggleTodoCompleteParams = {|
  _id: string,
|};

const name = "todos.toggleComplete";

const validate = new SimpleSchema({
  _id: String,
}).validator();

const run = (params: ToggleTodoCompleteParams) =>
  Promise.resolve(params).then(toggleTodoComplete);

const method: any = new ValidatedMethod({ name, validate, run });

export default method;
