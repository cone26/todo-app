import React from "react";
import styles from "../app/styles/todo.module.css";

interface Todo {
  id: string;
  text: string;
}

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onDeleteTodo }) => {
  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <li
          className={styles.todo}
          key={todo.id}
          onClick={() => onDeleteTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
