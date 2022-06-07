// @flow
import { useMutation, useQuery } from "react-query";
import { Meteor } from "meteor/meteor";
import type { UseMutationOptions, UseMutationResult } from "react-query";

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

export const useCallMutation = (
  method: string,
  options?: UseMutationOptions<>
): UseMutationResult<> => useMutation(callMutation(method), options);

export const useCallQuery = (method: string, ...args: any[]): any => {
  const { data } = useQuery([method, ...args], () =>
    callPromise(method, ...args)
  );

  return data;
};
