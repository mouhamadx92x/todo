import { useContext } from "react";
import { todoContext } from "../Context/context.js";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Checkbox } from "@mui/material";

const TodosList = () => {
  const {
    todos,
    setTodos,
    taskNumber,
    setTaskNumber,
    isComplete,
    setIsComplete,
  } = useContext(todoContext);

  const deletHandler = (task) => {
    const filterdTodos = todos.filter((todo) => todo.id !== task.id);
    if (task.isDone === true) {
      setIsComplete(isComplete - 1);
    }
    setTodos(filterdTodos);
    setTaskNumber(taskNumber - 1);
  };

  const completeHandler = (task) => {
    const compltedTodo = todos.map((todo) => {
      console.log(task.isDone);
      if (task.id === todo.id) {
        return { ...task, isDone: !task.isDone };
      }

      return todo;
    });
    if (task.isDone) {
      setIsComplete(isComplete - 1);
    } else {
      setIsComplete(isComplete + 1);
    }

    setTodos(compltedTodo);
  };

  return (
    <div className="todos-wrapper">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div className="list-item" key={todo.id}>
            <div>
              <li>
                <input
                  type="text"
                  value={todo.name}
                  className={`list ${todo.isDone ? "complete" : ""} `}
                  onChange={(event) => event.preventDefault()}
                />
              </li>
            </div>
            <div className="button-container">
              <Checkbox
                checked={todo.isDone}
                value={todo.isDone}
                onChange={() => completeHandler(todo)}
                inputProps={{ "aria-label": "primary checkbox" }}
                color="primary"
              />

              <button
                className="button-delete "
                onClick={() => deletHandler(todo)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="alternative">Add todos</h1>
      )}
    </div>
  );
};

export default TodosList;
