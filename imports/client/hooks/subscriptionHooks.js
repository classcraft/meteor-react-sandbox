// @flow
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";

import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";
import { useTracker } from "meteor/react-meteor-data";

import type { SubscriptionHandle } from "/imports/client/types/subscriptionHandle";
import type { SubscriptionsAsset } from "/imports/client/types/subscriptionsAsset";

type Subcription = {| name: string, params: any |};

function waitForSubscription(subscriptionHandle: SubscriptionHandle) {
  return new Promise((resolve, reject) => {
    if (!subscriptionHandle) return resolve(null);

    Tracker.nonreactive(() => {
      Tracker.autorun((computation) => {
        if (subscriptionHandle.ready()) return resolve(true);
      });
    });
  });
}

function subscribe(
  subscription: Subcription,
  queryClient: any
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

  subscriptionHandles.forEach(suspendForSubscription);
};
