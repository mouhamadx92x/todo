import { useContext } from "react";
import { todoContext } from "../Context/context.js";
import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

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

  //   const completeHandler = (task) => {
  //     const compltedTodo = todos.map((todo) => {
  //       if (task.id === todo.id) {
  //         return { ...task, isDone: !task.isDone };
  //       }

  //       return todo;
  //     });
  //     setTodos(compltedTodo);
  //   };

  //   const completeConter = () => {
  // todos.map((todo)=>{
  //   if (todo.isDone) {
  //     setIsComplete(isComplete - 1);
  //   } else {
  //     setIsComplete(isComplete + 1);
  //   }
  // })

  //   };

  // const completeConter = () => {
  //   todos.map((todo) => {
  //     setIsComplete(0);

  //     if (todo.isDone) {
  //       setIsComplete(isComplete - 1);
  //     } else {
  //       setIsComplete(isComplete + 1);
  //     }
  //   });
  // };

  return (
    <div>
      {todos.map((todo) => (
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
          <div>
            <button
              className="button-complete "
              onClick={() => {
                completeHandler(todo);
                // completeConter();
              }}
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
