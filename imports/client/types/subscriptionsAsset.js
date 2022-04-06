// @flow
import type { SubscriptionHandle } from "/imports/client/types/subscriptionHandle";

export type SubscriptionsAsset = {|
  clear: (SubscriptionHandle) => void,
  peek: (SubscriptionHandle) => any | void,
  preload: (SubscriptionHandle) => void,
  read: (SubscriptionHandle) => any,
|};
