"use client";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import React, { useState, useEffect } from "react";
import { loadTodos, saveTodos } from "utils/storage";
import styles from "../app/styles/todo.module.css";

interface Todo {
  id: string;
  text: string;
}

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [percent, setPercent] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [done, setDone] = React.useState<number>(0);

  useEffect(() => {
    const storedTodos = loadTodos();
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now().toString(), text };
    setTodos((todos) => [newTodo, ...todos]);
    setTotal((total) => ++total);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...updatedTodo]);
    setDone((done) => ++done);
    const currentDone = done + 1;
    const updatedPercent = Math.floor((currentDone / total) * 100);

    setPercent((percent) => {
      percent = updatedPercent;
      return percent;
    });
  };

  return (
    <div className={styles.todoApp}>
      <TodoForm onAddTodo={handleAddTodo} />
      <div className={styles.processBar}>
        <div id={styles.unfinished}>
          <div id={styles.done} style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      <span className={styles.span}>{percent}% done</span>
      <span className={styles.span}>You have {total - done} tasks.</span>

      <span className={styles.span} id={styles.click}>
        {" "}
        Click to check done!
      </span>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
