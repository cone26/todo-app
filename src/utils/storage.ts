interface Todo {
  id: string;
  text: string;
  status: boolean;
}

export const loadTodos = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (todos: Todo[]): void => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
