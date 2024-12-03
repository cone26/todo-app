import React from "react";

interface Todo {
  id: string;
  text: string;
  status: boolean;
}

interface TodoItemProps {
  todo: Todo;
  updateTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <span
        onClick={() => updateTodo(todo.id, todo.text)}
        className={`cursor-pointer ${
          todo.status ? "line-through text-gray-500" : ""
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
