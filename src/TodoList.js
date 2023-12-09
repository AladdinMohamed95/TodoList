import { useContext } from "react";
import TodoInput from "./TodoInput";
import todoContext from "./todoContext";
import TodoUlList from "./todoUlList";

export default function TodoList() {
  const { todos, setTodos } = useContext(todoContext);
  const { todo, setTodo } = useContext(todoContext);

  const handleButtonClick = () => {
    const newValue = { text: todo, completed: false };
    setTodos([...todos, newValue]);
    setTodo("");
  };
  console.log(todos);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-red-700  to-violet-700 h-[100vh] w-full text-gray-300">
      <div
        className="w-full overflow-y-hidden
         md:max-w-[500px] p-4 flex flex-col gap-8
        text-center item-center md:px-10 lg:p-24 h-full lg:h-[500px]
      bg-white bg-opacity-20 backdrop-blur-lg rounded
       drop-shadow-lg text-zinc-800"
      >
        <h1 className="text-3xl font-extrabold text-gray-300">Todo List</h1>
        <TodoInput todo={todo} setTodo={setTodo} />
        <button
          onClick={handleButtonClick}
          className="border rounded-md w-full text-gray-300"
        >
          add
        </button>
        <TodoUlList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
