import React, { useState } from "react";
import "./App.scss";
import InputField from "./components/InputField/InputField";
import { Todo } from "./models/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo){
      // Spread the current todos list and add a new todo object
      setTodos([...todos, {id: Date.now() , todo, isDone: false}])
      // Reset the todo state to empty
      setTodo("")
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasker</span>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      {/* <TodoList /> */}
      {todos.map(todo => <li>{todo.todo}</li>)}
    </div>
  );
};

export default App;
