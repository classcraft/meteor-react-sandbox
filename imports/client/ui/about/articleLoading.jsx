// @flow
import React from "react";
import Skeleton from "@mui/material/Skeleton";

export const ArticleLoading = (): React$Node => (
  <Skeleton animation="pulse" width="100%" height="100px" />
);
