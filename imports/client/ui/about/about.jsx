// @flow
import React, { Suspense } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { PageContainer } from "/imports/client/layouts/pageContainer";
import { useCallQuery } from "/imports/client/hooks/callHooks";
import { mockedArticles } from "/imports/api/Articles/ArticlesCollection";
import { SuspenseErrorBoundary } from "../../suspense/SuspenseErrorBoundary.jsx";

const LoadingArticle = () => (
  <Skeleton animation="pulse" width="100%" height="100px" />
);

const ArticleError = ({ error, resetErrorBoundary }) => (
  <Box>
    <Typography variant="body1" sx={{ color: "red" }}>
      {error.message} 💣
    </Typography>
    <Button variant="outlined" color="error" onClick={resetErrorBoundary}>
      Retry
    </Button>
  </Box>
);

const Article = ({ _id }: { _id: string }) => {
  const article = useCallQuery("about.fetchArticle", { _id });

  return (
    <Typography variant="body1" align="justify">
      {article.text}
    </Typography>
  );
};

const toArticle = ({ _id }: { _id: string }) => (
  <SuspenseErrorBoundary key={_id} fallback={ArticleError}>
    <Suspense fallback={<LoadingArticle />}>
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
