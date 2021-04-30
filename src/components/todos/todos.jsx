import React from "react";
import Todo from "../todo/todo";
import styles from "./todos.module.css";

const Todos = ({ todos, onDelete, onCheck }) => {
  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </ul>
  );
};

export default Todos;
