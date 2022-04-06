// @flow
export type CallMutation = {|
  mutate: (
    args: any,
    options?: {
      onSuccess?: (any) => void,
      onError?: (Error) => void,
      onSettled?: (any) => void,
    }
  ) => Promise<any>,
  isLoading: boolean,
|};
