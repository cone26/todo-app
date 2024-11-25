import React, { useState } from "react";
import styles from "../app/styles/TodoList.module.css";

interface Todo {
  id: string;
  text: string;
  status: boolean;
}

interface Props {
  todos: Todo[];
  onUpdateTodo: (id: string, newText: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onUpdateTodo, onDeleteTodo }) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");

  const handleEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = (id: string) => {
    if (!editText.trim()) return;
    onUpdateTodo(id, editText);
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          {editingId === todo.id ? (
            <div className={styles.todoContent}>
              <input
                type="text"
                value={editText}
                className={styles.updateInput}
                onChange={(e) => setEditText(e.target.value)}
              ></input>
              <button
                className={styles.smallBtn}
                onClick={() => handleSave(todo.id)}
              >
                Save
              </button>
            </div>
          ) : todo.status === false ? (
            <div className={styles.todoContent}>
              <div className={styles.innerContent}>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  onClick={() => onDeleteTodo(todo.id)}
                ></input>
                <span style={{ textDecoration: "line-through" }}>
                  {todo.text}
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.todoContent}>
              <div className={styles.innerContent}>
                <input
                  type="checkbox"
                  className={styles.checkBox}
                  onClick={() => onDeleteTodo(todo.id)}
                ></input>
                <span>{todo.text}</span>
              </div>
              <button
                className={styles.smallBtn}
                onClick={() => handleEdit(todo)}
              >
                Edit
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
