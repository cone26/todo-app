import React from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  // const [percent, setPercent] = React.useState(0);
  const [status, setStatus] = React.useState(true);

  const isDone = " - ";
  const onChange = (event) => setTodo(event.target.value);
  const addTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodo("");
    setTodos((todos) => [todo, ...todos]);
  };
  const deleteTodo = (index) => {
    const updatedTodo = todos.filter((_, i) => i !== index);
    setTodos([...updatedTodo]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="processBar">
        <div id="unfinished">
          <div id="done"></div>
        </div>
      </div>
      <span>0% done</span>
      <form onSubmit={addTodo}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Type what you should do..."
        ></input>
        <button>Add todo</button>
      </form>
      <span>Click to Check Done</span>
      <ul className="todos">
        {todos.map((todo, idx) => (
          <li key={idx} onClick={() => deleteTodo(idx)}>
            {isDone}
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
