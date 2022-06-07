// @flow
import React from "react";
import Typography from "@mui/material/Typography";

import { useCallQuery } from "/imports/client/hooks/callHooks";

export const Article = ({ _id }: { _id: string }): React$Node => {
  const article = useCallQuery("about.fetchArticle", { _id });

  return (
    <Typography variant="body1" align="justify">
      {article.text}
    </Typography>
  );
};
