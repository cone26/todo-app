import React from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const ul = document.getElementById("todoList");
    const li = document.createElement("li");
    const btn = document.getElementsByTagName("input")[0];
    li.innerText = todo;
    ul.appendChild(li);
    btn.value = "";
  };

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Type what you should do..."
          onChange={onChange}
        ></input>
        <button type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>
      <ul id="todoList"></ul>
    </div>
  );
}

export default App;
