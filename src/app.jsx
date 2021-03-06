import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import "./reset.css";
import "./normalize.css";
import Todos from "./components/todos/todos";
import Navbar from "./components/navbar/navbar";
import AddForm from "./components/addForm/addForm";

function App() {
  const TODOS_LS = "todos";
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(TODOS_LS)) || []
  );

  const saveTodos = () => {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
  };

  useEffect(() => {
    saveTodos();
  });

  const handleCheck = useCallback((todo) => {
    setTodos((todos) =>
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...todo, check: !todo.check };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback((todo) => {
    setTodos((todos) => todos.filter((item) => item.id !== todo.id));
  }, []);

  const handleAdd = useCallback((name) => {
    setTodos((todos) => [...todos, { id: Date.now(), name, check: false }]);
  }, []);

  return (
    <div className={styles.app}>
      <Navbar totalCount={todos.length} className={styles.navbar} />
      <Todos
        todos={todos}
        onDelete={handleDelete}
        onCheck={handleCheck}
        className={styles.todos}
      />
      <AddForm onAdd={handleAdd} className={styles.addForm} />
    </div>
  );
}

export default App;
