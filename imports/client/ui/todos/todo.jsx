// @flow
import React, { type Element, useRef } from "react";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CircularProgress from "@mui/material/CircularProgress";
import Checkbox from "@mui/material/Checkbox";
import styled from "@emotion/styled";

import { useCallMutation } from "/imports/client/hooks/callHooks";
import { MutationSuspense } from "/imports/client/suspense/mutationSuspense";
import { useHover } from "/imports/client/hooks/useHover";

import type { Todo } from "/imports/api/todos/todosTypes";
import type { UseMutationResult } from "react-query";

type TodoProps = {|
  item: Todo,
|};

type ToDoDeleteProps = {|
  listItemRef: React$Ref<any>,
  item: Todo,
  mutation: UseMutationResult<>,
  isAvailableForMutation: boolean,
|};

function TodoCheckbox({
  item,
  mutation,
}: {
  item: Todo,
  mutation: UseMutationResult<>,
}) {
  const isChecked = item.completed ?? false;
  const fallback = (
    <CircularProgress color="primary" size={24} sx={{ padding: "9px" }} />
  );

  return (
    <MutationSuspense fallback={fallback} mutation={mutation}>
      <Checkbox tabIndex={-1} disableRipple checked={isChecked} />
    </MutationSuspense>
  );
}

function TodoDelete({
  listItemRef,
  item,
  mutation,
  isAvailableForMutation,
}: ToDoDeleteProps) {
  const isHover = useHover(listItemRef);
  const display = isHover && isAvailableForMutation ? "flex" : "none";

  const handleDelete = () => {
    if (!isAvailableForMutation) return;
    mutation.mutate({ todoId: item._id });
  };

  return (
    <IconButton aria-label="comment" sx={{ display }} onClick={handleDelete}>
      <DeleteForeverIcon color="error" />
    </IconButton>
  );
}

function TodoName({ item }: { item: Todo }) {
  const textSx = item.completed
    ? { textDecoration: "line-through", color: "gray" }
    : { textDecoration: "none" };

  return <ListItemText primary={item.name} sx={textSx} />;
}

export function TodoItem({ item }: TodoProps): Element<typeof ListItem> {
  const listItemRef = useRef();
  const completeMutation = useCallMutation("todos.toggleComplete");
  const deleteMutation = useCallMutation("todos.delete");

  const isAvailableForMutation =
    !deleteMutation.isLoading && !completeMutation.isLoading;

  const listItemProps = {
    selected: deleteMutation.isLoading,
    disabled: deleteMutation.isLoading || completeMutation.isLoading,
  };

  const StyledListItemButton = styled((props: any) => (
    <ListItemButton {...props} />
  ))(() => ({
    "&.Mui-selected": {
      backgroundColor: "crimson",
    },
  }));

  return (
    <ListItem
      ref={listItemRef}
      alignItems="center"
      disablePadding
      divider
      secondaryAction={
        <TodoDelete
          listItemRef={listItemRef}
          item={item}
          isAvailableForMutation={isAvailableForMutation}
          mutation={deleteMutation}
        />
      }
    >
      <StyledListItemButton
        {...listItemProps}
        onClick={() => completeMutation.mutate({ _id: item._id })}
      >
        <TodoCheckbox item={item} mutation={completeMutation} />
        <TodoName item={item} />
      </StyledListItemButton>
    </ListItem>
  );
}
