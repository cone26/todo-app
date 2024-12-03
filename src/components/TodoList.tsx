import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  text: string;
  status: boolean;
}

interface TodoListProps {
  todos: Todo[];
  updateTodo: (id: string, newText: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  updateTodo,
  deleteTodo,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
