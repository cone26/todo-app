import React from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = React.useState("");
  const onChange = (event) => setTodo(event.target.value);
  const addTodo = (e) => {
    e.preventDefault();
    console.log(todo);
  };
  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder="Type what you should do..."
          onChange={onChange}
        ></input>
        <button onClick={addTodo}>Add todo</button>
      </form>
    </div>
  );
}

export default App;
