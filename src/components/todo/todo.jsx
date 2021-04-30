import React, { memo } from "react";
import styles from "./todo.module.css";

const Todo = memo(({ todo, onDelete, onCheck }) => {
  const checkType = todo.check === true ? styles.done : styles.yet;

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleCheck = () => {
    onCheck(todo);
  };

  return (
    <li className={`${styles.todo} ${checkType}`} onClick={handleCheck}>
      <span className={styles.todoName}>{todo.name}</span>
      <div className={styles.btns}>
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
      </div>
    </li>
  );
});

export default Todo;
