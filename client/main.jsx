// @flow
import { Meteor } from "meteor/meteor";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import { App } from "/imports/client/ui/App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      cacheTime: 0,
      retry: 0,
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
