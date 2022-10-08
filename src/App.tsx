import React, { useEffect, useState } from "react";
import "./App.scss";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/model";
import Logo from "./assets/logo/tasker_logo.png"

const App: React.FC = () => {
  !localStorage.todos &&  localStorage.setItem('todos', JSON.stringify([]))
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>( JSON.parse(localStorage.getItem("todos") || "" ));
  const [completedTodos, setCompletedTodos] = useState<Todo[]> ([]);
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo){
      // Spread the current todos list and add a new todo object
      setTodos([...todos, {id: Date.now() , todo, isDone: false}])
      // Reset the todo state to empty
      setTodo("")
    }
  };

  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <div className="heading">
        <img className="heading__logo" src={Logo} alt="Tasker Logo"/>
        <h1 className="heading__title">Tasker.</h1>
      </div>  
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
    </div>
  );
};

export default App;
