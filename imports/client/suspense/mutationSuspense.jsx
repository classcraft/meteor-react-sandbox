// @flow

import type { UseMutationResult } from "react-query";

type MutationSuspenseProps = {|
  mutation: UseMutationResult<>,
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
