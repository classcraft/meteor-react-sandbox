// @flow
import React, { Suspense } from "react";

import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";

import { ErrorBoundary } from "react-error-boundary";
import { useCallQuery } from "/imports/client/hooks/callHooks";

const TodoUserInfoContainer = (props: { children: React$Node }) => (
  <Stack direction="row" spacing={2} alignItems="center">
    {props.children}
  </Stack>
);

const TodoHeaderLoading = () => (
  <TodoUserInfoContainer>
    <Skeleton variant="circular">
      <Avatar sx={{ width: 64, height: 64 }} />
    </Skeleton>
    <Skeleton width={250} height={40} />
  </TodoUserInfoContainer>
);

const TodoHeaderError = () => (
  <TodoUserInfoContainer>
    <Avatar sx={{ width: 56, height: 56 }} />
    <Typography variant="h4" color="error">
      Error fetching user info
    </Typography>
  </TodoUserInfoContainer>
);

const TodoUserInfo = () => {
  const { name, avatar } = useCallQuery("users.getInfo", {});

  return (
    <TodoUserInfoContainer>
      <Avatar
        src={avatar}
        sx={{ width: 64, height: 64, bgcolor: green[200] }}
      />
      <Typography variant="h4">{`${name} To-Do List ✅`}</Typography>
    </TodoUserInfoContainer>
  );
};

export const TodosHeader = (): React$Node => {
  return (
    <ErrorBoundary fallback={<TodoHeaderError />}>
      <Suspense fallback={<TodoHeaderLoading />}>
        <TodoUserInfo />
      </Suspense>
    </ErrorBoundary>
  );
};
