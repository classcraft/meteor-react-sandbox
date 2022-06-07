// @flow
import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ArticleError = ({
  error,
  resetErrorBoundary,
}: {
  error: Error,
  resetErrorBoundary: () => void,
}): React$Node => (
  <Box>
    <Typography variant="body1" sx={{ color: "red" }}>
      {error.message} 💣
    </Typography>
    <Button variant="outlined" color="error" onClick={resetErrorBoundary}>
      Retry
    </Button>
  </Box>
);
