import React from "react";
import styles from "./addForm.module.css";

const AddForm = ({ onAdd }) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && onAdd(name);
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmit} className={styles.addForm}>
      <button className={styles.addBtn} onClick={onSubmit}>
        <i class="fas fa-plus"></i>
      </button>
      <input
        ref={inputRef}
        className={styles.addInput}
        type="text"
        placeholder="Create a new Todo"
      />
    </form>
  );
};

export default AddForm;
