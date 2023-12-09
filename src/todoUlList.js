import { useContext } from "react";
import todoContext from "./todoContext";

export default function TodoUlList() {
  const { todos, setTodos } = useContext(todoContext);

  const handleListClick = (i) => {
    const newTodos = [...todos];
    console.log(newTodos[i]);
    newTodos[i].completed = !newTodos[i].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (i) => {
    const newFilteredTodo = [...todos];
    newFilteredTodo.splice(i, 1);
    setTodos(newFilteredTodo);
  };
  return (
    <ul className="text-white">
      {todos.map(({ text, completed }, i) => {
        return (
          <div className="flex flex-row mb-2 p-1 items-center justify-between border-b-2">
            <li
              className={
                completed ? "line-through cursor-pointer" : "cursor-pointer"
              }
              key={i}
              onClick={() => handleListClick(i)}
            >
              {text}
            </li>
            <span
              className="cursor-pointer text-red-500 bg-gray-300 px-2 rounded-md"
              onClick={() => handleDeleteItem(i)}
            >
              ❌
            </span>
          </div>
        );
      })}
    </ul>
  );
}
