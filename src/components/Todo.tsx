import React from "react";

export default function Todo() {
  const [todo, setTodo] = React.useState<string>("");
  const [todos, setTodos] = React.useState<string[]>([]);
  const [percent, setPercent] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [done, setDone] = React.useState<number>(0);

  const onChange = (event: React.ChangeEvent) => {
    const element = event.currentTarget as HTMLInputElement;
    const value = element.value;
    setTodo(value);
  };

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo === "") return;

    setTodo("");
    setTodos((todos: string[]) => [todo, ...todos]);
    setTotal((total) => ++total);
  };
  const deleteTodo = (index: number) => {
    const updatedTodo = todos.filter((_, i) => i !== index);
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
    <div className="App">
      <form onSubmit={addTodo}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          className="todoInput"
          placeholder="Click to add a task."
        ></input>
        <button className="addTask">Add todo</button>
      </form>
      <div className="processBar">
        <div id="unfinished">
          <div id="done" style={{ width: `${percent}%` }}></div>
        </div>
      </div>
      <span>{percent}% done</span>
      <span>You have {total - done} tasks.</span>

      <span className="click"> Click to check done!</span>
      <ul className="todos">
        {todos.map((todo, idx) => (
          <li key={idx} onClick={() => deleteTodo(idx)}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
