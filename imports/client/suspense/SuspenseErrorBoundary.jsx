// @flow
import { Meteor } from "meteor/meteor";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";

export const SuspenseErrorBoundary = (props: {
  fallback: ({
    error: Error,
    resetErrorBoundary: () => void,
  }) => React$Element<any>,
  children: React$Node,
}): React$Node => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={props.fallback}>
        {props.children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);
