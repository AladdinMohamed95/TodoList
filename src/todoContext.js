import { createContext } from "react";

const todoContext = createContext({
  todo: "",
  setTodo: () => {},
  todos: [{ text: "", completed: false }],
  setTodos: () => {},
});

export default todoContext;
