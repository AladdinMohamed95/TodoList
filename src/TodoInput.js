import React, { useContext } from "react";
import todoContext from "./todoContext";

export default function TodoInput() {
  const { todo, setTodo } = useContext(todoContext);
  return (
    <div>
          <input
              placeholder="Enter a job needs to be done..."
        className="p-2 w-[300px] rounded focus:outline-none "
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
    </div>
  );
}
