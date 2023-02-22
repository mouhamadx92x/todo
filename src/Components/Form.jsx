import React from "react";
import { useContext } from "react";
import { todoContext } from "../Context/context.js";
import { v4 as uuidv4 } from "uuid";

const Form = () => {

  const { input, setInput, todos, setTodos } = useContext(todoContext);

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { name: input, id: uuidv4(), isDone: false }]);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter a Todo"
        className="task-input"
        value={input}
        required
        onChange={inputChangeHandler}
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
