// @flow
import { Meteor } from "meteor/meteor";
import React, { type Element, Suspense, useEffect, useState } from "react";

import {
  useWaitForSubscription,
  useSubscribe,
} from "/imports/client/hooks/subscriptionHooks";
import type { SubscriptionHandle } from "/imports/client/types/subscriptionHandle";

type MeteorSuspenseContentProps = {|
  subscriptionHandles: SubscriptionHandle[],
  children: React$Node,
|};

type MeteorSuspenseProps = {|
  fallback: React$Node,
  ...MeteorSuspenseContentProps,
|};

const SuspenseContent = (props: MeteorSuspenseContentProps) => {
  useWaitForSubscription(props.subscriptionHandles);
  return <>{props.children}</>;
};

export const MeteorSuspense = (
  props: MeteorSuspenseProps
): Element<typeof Suspense> => {
  return (
    <Suspense fallback={props.fallback}>
      <SuspenseContent subscriptionHandles={props.subscriptionHandles}>
        {props.children}
      </SuspenseContent>
    </Suspense>
  );
};
