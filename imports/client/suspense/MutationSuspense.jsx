// @flow
import type { CallMutation } from "/imports/client/types/callMutation";

type MutationSuspenseProps = {|
  mutation: CallMutation,
  fallback: React$Node,
  children: React$Node,
|};
export function MutationSuspense({
  mutation,
  fallback,
  children,
}: MutationSuspenseProps): React$Node {
  if (mutation.isLoading) {
    return fallback;
  }

  return children;
}
