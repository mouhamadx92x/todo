import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "../Style/ToDo.css"

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addHandler = () => {
    setTodos([...todos, { name: value, id: uuidv4(), isDone: false }]);
  };

  const delethandler = (id) => {
    const newTodo = todos.filter((element) => {
      return element.id !== id;
    });
    
    setTodos([...newTodo]);
  };

  return (
    <div className="mainContainer">
      <div className="inputContainer">
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          }}
      />
      <button onClick={addHandler}>Add</button>
      </div>
      {todos.map((todo) => (
        <div className="taksContainer"
        key={todo.id}>
          <p>{todo.name}</p>
          <button onClick={()=>delethandler(todo.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
