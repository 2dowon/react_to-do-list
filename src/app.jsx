import React, { useState } from "react";
import styles from "./app.module.css";
import "./reset.css";
import "./normalize.css";
import Todos from "./components/todos/todos";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Reading", check: false },
    { id: 2, name: "Running", check: false },
    { id: 3, name: "Coding", check: false },
  ]);

  const handleCheck = (todo) => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, check: !todo.check };
        }
        return item;
      })
    );
  };

  const handleDelete = (todo) => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className={styles.app}>
      <Todos todos={todos} onDelete={handleDelete} onCheck={handleCheck} />
    </div>
  );
}

export default App;
