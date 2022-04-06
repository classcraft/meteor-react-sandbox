// @flow
export type SubscriptionHandle = {|
  subscriptionId: string,
  params: any[],
  name: string,
  ready: () => boolean,
  stop: () => void,
|};
