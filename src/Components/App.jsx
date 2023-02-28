import Header from "./Header";
import Form from "./Form";
import TodosList from "./TodosList";
import { useContext } from "react";
import { todoContext } from "../Context/context.js";
import "../Style/App.css";
import TaskCounter from "./TaskCounter";

function App() {
  const { input, setInput, todos, setTodos } = useContext(todoContext);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <TaskCounter />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
