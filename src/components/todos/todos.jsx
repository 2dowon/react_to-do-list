import React from "react";
import Todo from "../todo/todo";

const Todos = ({ todos, onDelete, onCheck }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  );
};

export default Todos;
