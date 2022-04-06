//@flow
import React, { useState } from "react";

import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import CheckIcon from "@mui/icons-material/Check";
import TextField from "@mui/material/TextField";
import styled from "@emotion/styled";

import type { CallMutation } from "/imports/client/types/callMutation";

const Form = styled.form({
  width: "100%",
});

type NewTodoProps = {|
  mutation: CallMutation,
|};

const EndAdornment = ({ onClick }) => (
  <InputAdornment position="end">
    <IconButton onClick={onClick} edge="end">
      <CheckIcon color="success" />
    </IconButton>
  </InputAdornment>
);

export function NewTodo({ mutation }: NewTodoProps): React$Node {
  const [todo, setTodo] = useState("");
  const onSuccess = () => setTodo("");
  const onError = (e) => alert(e);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mutation.isLoading) return;
    mutation.mutate({ name: todo }, { onSuccess, onError });
  };

  const canSave = !mutation.isLoading && todo.length;
  const endAdornment = <EndAdornment onClick={handleSubmit} />;

  return (
    <ListItem>
      <Form onSubmit={handleSubmit}>
        <TextField
          disabled={mutation.isLoading}
          fullWidth
          placeholder="What needs to be done?"
          onChange={(e) => setTodo(e.target.value)}
          InputProps={{
            endAdornment: canSave ? endAdornment : null,
          }}
          value={todo}
        />
      </Form>
    </ListItem>
  );
}
