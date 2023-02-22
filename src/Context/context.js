import { createContext, useState } from "react";

export const todoContext = createContext();

const TodoProvider = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <todoContext.Provider value={{ input, setInput, todos, setTodos }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
