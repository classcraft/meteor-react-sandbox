// @flow
import React, { Fragment } from "react";
import Skeleton from "@mui/material/Skeleton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";

const SKELETON_TODO_COUNT = 5;
const range = (size) => [...Array(size).keys()];

export function TodoLoading({
  width = 600,
  height = 42,
  divider = false,
}: {
  width?: number,
  height?: number,
  divider?: boolean,
}): React$Node {
  return (
    <ListItem divider={divider}>
      <Skeleton animation="pulse" width={width} height={height} />
    </ListItem>
  );
}

export function TodosLoading(): React$Node {
  const toSkeletonTodo = (index) => (
    <Fragment key={index}>
      <TodoLoading divider />
    </Fragment>
  );

  return (
    <>
      <List>
        <TodoLoading height={56} />
        {range(SKELETON_TODO_COUNT).map(toSkeletonTodo)}
        <TodoLoading width={80} height={24} />
      </List>
    </>
  );
}
