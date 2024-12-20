import React, { useState } from "react";
import styles from "../app/styles/TodoForm.module.css";

interface Props {
  onAddTodo: (todo: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [todo, setTodo] = useState<string>("");

  const onChange = (event: React.ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    setTodo(value);
  };

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo === "") return;

    onAddTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={addTodo} className={styles.form}>
      <input
        onChange={onChange}
        value={todo}
        type="text"
        className={styles.todoInput}
        placeholder="Click to add a task."
      ></input>
      <button className={styles.addTask}>Add todo</button>
    </form>
  );
};

export default TodoForm;
