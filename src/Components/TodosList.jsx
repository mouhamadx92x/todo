import { useContext } from "react";
import { todoContext } from "../Context/context.js";
import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const TodosList = () => {
  const { todos, setTodos } = useContext(todoContext);

  const deletHandler = ({ id }) => {
    const filterdTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterdTodos);
  };

  const completeHandler = (task) => {
    const compltedTodo = todos.map((todo) => {
      console.log(task.isDone);
      if (task.id === todo.id) {
        return { ...task, isDone: !task.isDone };
      }
      return todo;
    });

    setTodos(compltedTodo);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div className="list-item" key={todo.id}>
          <div key={todo.id}>
            <li key={todo.id}>
              <input
                type="text"
                value={todo.name}
                className={`list ${todo.isDone ? "complete" : ""} `}
                onChange={(event) => event.preventDefault()}
              />
            </li>
          </div>
          <div>
            <button
              className="button-complete "
              onClick={() => completeHandler(todo)}
            >
              <AiFillCheckSquare />
            </button>

            <button
              className="button-delete "
              onClick={() => deletHandler(todo)}
            >
              <AiFillDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodosList;
