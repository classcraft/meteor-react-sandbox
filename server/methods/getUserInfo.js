// @flow
import { ValidatedMethod } from "meteor/mdg:validated-method";

import { getUserInfo } from "/server/utils/getUserInfo";

const name = "users.getInfo";

const validate = null;

const run = () => Promise.resolve().then(getUserInfo);

const method: any = new ValidatedMethod({ name, validate, run });

export default method;
