import Header from "./Header";
import Form from "./Form";
import TodosList from "./TodosList";
import { useState } from "react";
import "../Style/App.css"
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
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
