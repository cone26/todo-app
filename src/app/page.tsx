"use client";
import React, { useState } from "react";
import useLocalStorage from "hooks/useLocalStorage";
import TodoList from "@/components/TodoList";
import TodoForm from "@/components/TodoForm";
import "./styles/globals.css";
import styles from "./styles/Todo.module.css";

interface Todo {
  id: string;
  text: string;
  status: boolean;
}

export default function Page() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [percent, setPercent] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [done, setDone] = useState<number>(0);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      status: true,
    };

    setTodos([newTodo, ...todos]);
    setTotal((total) => ++total);
    const currentTotal = total + 1;
    const updatedPercent = Math.floor((done / currentTotal) * 100);

    setPercent((percent) => {
      percent = updatedPercent;
      return percent;
    });
  };

  const handleUpdateTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleDeleteTodo = (id: string) => {
    let currentDone = done;
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.status === false) {
          setDone((done) => --done);
          currentDone--;
          todo.status = !todo.status;
          return todo;
        }
        todo.status = !todo.status;
        setDone((done) => ++done);
        currentDone++;
      }

      return todo;
    });

    setTodos([...updatedTodo]);

    const updatedPercent = Math.floor((currentDone / total) * 100);
    setPercent((percent) => {
      percent = updatedPercent;
      return percent;
    });
  };

  return (
    <div className={styles.todoApp}>
      <h1 style={{ textAlign: "center", color: "#3d3d3d" }}>
        {new Date().getMonth()}/{new Date().getDate()}
      </h1>
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
      <TodoList
        todos={todos}
        updateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
      />
    </div>
  );
}
