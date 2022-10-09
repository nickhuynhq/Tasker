import React, { useEffect, useState } from "react";
import "./App.scss";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import { Todo } from "./models/model";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Logo from "./assets/logo/tasker_logo.png";

const App: React.FC = () => {
  !localStorage.todos && localStorage.setItem("todos", JSON.stringify([]));
  !localStorage.completedTodos &&
    localStorage.setItem("completedTodos", JSON.stringify([]));

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("todos") || "")
  );
  const [completedTodos, setCompletedTodos] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("completedTodos") || "")
  );

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // Spread the current todos list and add a new todo object
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      // Reset the todo state to empty
      setTodo("");
    }
  };

  // Track the source and destination of the draggable component
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = [...todos],
      complete = [...completedTodos];

    // Check the source
    if (source.droppableId === "TodosList") {
      // If todo card is in Active container, set add and remove it from Active
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      // If todo card is in Completed container, set add and remove it from Completed
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    // Check the destination
    if (destination.droppableId === "TodosList") {
      // Take add variable and splice it into the destination
      active.splice(destination.index, 0, {...add, isDone: false});
    } else {
      // Take add variable and splice it into the destination
      complete.splice(destination.index, 0, {...add, isDone: true});
    }

    // Set the states of the containers to the dragged variables
    setCompletedTodos(complete);
    setTodos(active);
  };

  // Set and save to localStorage upon change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [todos, completedTodos]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">
          <img className="heading__logo" src={Logo} alt="Tasker Logo" />
          <h1 className="heading__title">Tasker.</h1>
        </div>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
