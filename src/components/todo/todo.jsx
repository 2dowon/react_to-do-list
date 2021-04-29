import React from "react";
import styles from "./todo.module.css";

const Todo = ({ todo, onDelete, onCheck }) => {
  const checkType = todo.check === true ? styles.done : styles.yet;

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleCheck = () => {
    onCheck(todo);
  };

  return (
    <li className={`${styles.todo} ${checkType}`}>
      <span className={styles.todoName}>{todo.name}</span>
      <button
        className={`${styles.btnCheck} ${checkType}`}
        onClick={handleCheck}
      ></button>
      <button
        className={`${styles.btnDelete} ${checkType}`}
        onClick={handleDelete}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default Todo;
