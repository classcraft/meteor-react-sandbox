// @flow
import React, { Suspense, useEffect, useState, Fragment } from "react";
import { useTracker } from "meteor/react-meteor-data";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

import { TodosCollection } from "/imports/api/Todos/TodosCollection";
import { TodoItem } from "./todo";
import { NewTodo } from "./newTodo";
import { TodosHeader } from "./todosHeader";
import { TodosFooter } from "./todosFooter";
import { TodosLoading, TodoLoading } from "./todosLoading";

import { useSubscribe } from "/imports/client/hooks/subscriptionHooks";
import { useCallMutation } from "/imports/client/hooks/callHooks";
import { MeteorSuspense } from "/imports/client/suspense/MeteorSuspense";
import { PageContainer } from "/imports/client/layouts/pageContainer";

const useTodos = () => useTracker(() => TodosCollection.find().fetch());

const TodosList = () => {
  const items = useTodos();
  const addMutation = useCallMutation("todos.add");

  const toTodo = (item) => <TodoItem key={item._id} item={item} />;

  return (
    <List sx={{ width: "600px" }}>
      <NewTodo mutation={addMutation} />
      {items.map(toTodo)}
      {addMutation.isLoading && <TodoLoading />}
      <TodosFooter />
    </List>
  );
};

export function Todos(): React$Node {
  const fallback = <TodosLoading />;
  const subscriptionHandles = useSubscribe([{ name: "todos", params: {} }]);

  return (
    <PageContainer>
      <TodosHeader />
      <MeteorSuspense
        subscriptionHandles={subscriptionHandles}
        fallback={fallback}
      >
        <TodosList />
      </MeteorSuspense>
    </PageContainer>
  );
}
