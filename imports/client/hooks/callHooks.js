// @flow
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Meteor } from "meteor/meteor";

import { wait } from "/imports/debug/wait";
import type { CallMutation } from "/imports/client/types/callMutation";

function callPromise(method: string, ...args: any[]) {
  const callback = (resolve, reject) => (err, res) => {
    if (err) return reject(err);
    return resolve(res);
  };

  return new Promise((resolve, reject) =>
    Meteor.call(method, ...args, callback(resolve, reject))
  );
}

function callMutation(method: string) {
  return (...args: any[]) => callPromise(method, ...args);
}

export const useCallMutation = (method: string, helpers: any): CallMutation =>
  useMutation(callMutation(method), helpers);

export const useCallQuery = (method: string, ...args: any[]): any => {
  const queryClient = useQueryClient();

  const { data, error } = useQuery([method, ...args], () =>
    callPromise(method, ...args)
  );

  return data;
};
