import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../../models/model";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.scss";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "drag-active" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Active Tasks</span>
            <span className="todos__message">{todos.length}</span>
            {todos.length === 0 ? (
              <span className="todos__message">No Tasks Available</span>
            ) : (
              todos.map((todo, index) => (
                <TodoCard
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
                  otherTodos={completedTodos}
                  setOtherTodos={setCompletedTodos}
                />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosCompleted">
        {(provided, snapshot) => (
          <div
            className={`todos--completed ${
              snapshot.isDraggingOver ? "drag-complete" : ""
            }`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos__heading">Completed Tasks</span>
            <span className="todos__message">{completedTodos.length}</span>
            {completedTodos.length === 0 ? (
              <span className="todos__message">No Completed Tasks</span>
            ) : (
              completedTodos.map((todo, index) => (
                <TodoCard
                  index={index}
                  key={todo.id}
                  todo={todo}
                  todos={completedTodos}
                  setTodos={setCompletedTodos}
                  otherTodos={todos}
                  setOtherTodos={setTodos}
                />
              ))
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
