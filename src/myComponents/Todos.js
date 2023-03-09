import React from "react";
import { TodoItem } from "../myComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      <h3> Todos list</h3>
      <TodoItem todo={props.todos[0]} />
    </div>
  );
};
