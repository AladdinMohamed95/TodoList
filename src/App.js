import { useState } from "react";
import TodoList from "./TodoList";
import todoContext from "./todoContext";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <todoContext.Provider value={{ todo, setTodo, todos, setTodos }}>
        <TodoList />
      </todoContext.Provider>
    </div>
  );
}

export default App;
