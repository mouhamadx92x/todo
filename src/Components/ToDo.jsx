import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addHandler = () => {
    setTodos([...todos, { name: value, id: uuidv4(), isDone: false }]);
  };

  const delethandler = (id) => {
    const newTodo = todos.filter((element) => {
      return element.id != id;
    });
    
    setTodos([...newTodo]);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addHandler}>Add</button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.name}</p>
          <button onClick={()=>delethandler(todo.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
