import React from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const addTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodo("");
    setTodos((todos) => [todo, ...todos]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Type what you should do..."
        ></input>
        <button>Add todo</button>
      </form>
      {todos.map((todo, id) => (
        <li key={id}>{todo}</li>
      ))}
      <div>test</div>
    </div>
  );
}

export default App;
