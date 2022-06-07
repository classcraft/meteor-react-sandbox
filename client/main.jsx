// @flow
import React from "react";
import { Meteor } from "meteor/meteor";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { App } from "/imports/client/ui/app";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      cacheTime: 0,
      staleTime: 1000,
      retry: 0,
      notifyOnChangeProps: ["data", "error"],
      notifyOnChangePropsExclusions: ["isStale"],
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
    },
  },
});

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
});
