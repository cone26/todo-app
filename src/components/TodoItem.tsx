// src/components/TodoItem.tsx
import React from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.done ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
