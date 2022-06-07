// @flow
import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import { Article } from "./article";
import { ArticleError } from "./articleError";
import { ArticleLoading } from "./articleLoading";
import { PageContainer } from "/imports/client/layouts/pageContainer";
import { mockedArticles } from "/imports/api/articles/articlesCollection";
import { SuspenseErrorBoundary } from "/imports/client/suspense/suspenseErrorBoundary";

const toArticle = ({ _id }: { _id: string }) => (
  <SuspenseErrorBoundary key={_id} fallback={ArticleError}>
    <Suspense fallback={<ArticleLoading />}>
      <Article _id={_id} />
    </Suspense>
  </SuspenseErrorBoundary>
);

const Articles = () => (
  <Box sx={{ width: "100%" }}>
    <Stack spacing={4} divider={<Divider orientation="horizontal" flexItem />}>
      {mockedArticles.map(toArticle)}
    </Stack>
  </Box>
);

export function About(): React$Node {
  return (
    <PageContainer>
      <Articles />
    </PageContainer>
  );
}
