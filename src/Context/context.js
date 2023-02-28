import { createContext, useState } from "react";

export const todoContext = createContext();

const TodoProvider = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskNumber,setTaskNumber ] = useState(0);
  const [isComplete,setIsComplete  ] = useState(0);


  return (
    <todoContext.Provider value={{ input, setInput, todos, setTodos,taskNumber,setTaskNumber,isComplete,setIsComplete }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
