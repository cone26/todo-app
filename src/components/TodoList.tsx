import React, { useState } from "react";
import styles from "../app/styles/todo.module.css";

interface Todo {
  id: string;
  text: string;
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

  const handleCancel = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <li className={styles.todo} key={todo.id}>
          {editingId === todo.id ? (
            <div>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              ></input>
              <button onClick={() => handleSave(todo.id)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <input
                type="checkbox"
                onClick={() => onDeleteTodo(todo.id)}
              ></input>
              <span>{todo.text}</span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
