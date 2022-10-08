import { Todo } from "../../models/model";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.scss";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (

    <div className="container">
      <div className="todos">
        <h2 className="todos__heading">Active Tasks</h2>
        {todos.map((todo) => (
          todo.isDone === false &&
          <TodoCard
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className="todos--completed">
        <h2 className="todos__heading">Completed Tasks</h2>
          {todos.map((todo) => (
            todo.isDone === true &&
            <TodoCard
              todo={todo}
              key={todo.id}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
