// @flow
import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import { TodosCollection } from "/imports/api/todos/todosCollection";

const byNotCompleted = ({ completed }) => !completed;

const useRemainingTodosCount = () =>
  useTracker(
    () => TodosCollection.find().fetch().filter(byNotCompleted).length
  );

export function TodosFooter(): React$Node {
  const todosCount = useRemainingTodosCount();
  const text = todosCount ? `${todosCount} items left` : "All done! 🚀";
  return (
    <ListItem>
      <Typography sx={{ color: "gray" }}>{text}</Typography>
    </ListItem>
  );
}
