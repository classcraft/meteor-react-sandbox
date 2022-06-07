// @flow
import { useQuery, useQueryClient } from "react-query";

import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { useTracker } from "meteor/react-meteor-data";

import type { SubscriptionHandle } from "/imports/client/types/subscriptionHandle";
import type { QueryClient } from "react-query";

export type Subcription = {| name: string, params?: Object |};

function waitForSubscription(
  subscriptionHandle: SubscriptionHandle
): Promise<?boolean> {
  return new Promise((resolve) => {
    if (!subscriptionHandle) return resolve(null);

    Tracker.nonreactive(() =>
      Tracker.autorun(() => {
        if (subscriptionHandle.ready()) return resolve(true);
      })
    );
  });
}

function subscribe(
  subscription: Subcription,
  queryClient: QueryClient
): SubscriptionHandle {
  const { name, params } = subscription;
  const options = {
    onStop: () => queryClient.removeQueries([name, params]),
  };

  const handle = Meteor.subscribe(name, params, options);
  return { ...handle, name, params };
}

export function useSubscribe(
  subscriptions: Subcription[]
): SubscriptionHandle[] {
  const queryClient = useQueryClient();
  const toSubHandle = (sub) => subscribe(sub, queryClient);
  return useTracker(() => subscriptions.map(toSubHandle), []);
}

export const useWaitForSubscription = (
  subscriptionHandles: SubscriptionHandle[]
): void => {
  const suspendForSubscription = (handle) =>
    useQuery([handle.name, handle.params], () => waitForSubscription(handle));

  subscriptionHandles.map(suspendForSubscription);
};
