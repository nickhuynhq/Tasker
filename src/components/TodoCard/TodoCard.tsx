import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../../models/model";
import "./TodoCard.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoCard = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        // if todo id matches, set isDone property to the inverse
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    // Filter and only return todos where the id does not match
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    // If todo id matches edited todo, set the todo to the edited text
    setTodos(todos.map((todo)=> (
        todo.id === id ? {...todo, todo: editTodo} : todo
    )));
    setEdit(false);
  };

  // Have reference be set on TodoCard input field when edit is changed
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <form className="todos__card" onSubmit= {(e) => handleEdit(e, todo.id)}>
      {
        // If the todo card is being edited change the text to an input field
        // Else, display the todo card text as is
        edit ? (
          <input
            className="todos__card--edit"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : // If the todo task is done, use the strikethrough tag for the card text,
        // Else, render the normal todo card text
        todo.isDone ? (
          <s className="todos__card--text">{todo.todo}</s>
        ) : (
          <span className="todos__card--text">{todo.todo}</span>
        )
      }

      <div className="todos__card__icons">
        <span
          className="todos__card__icon"
          onClick={() => {
            // Switch between edit modes
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>

        <span className="todos__card__icon">
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>

        <span className="todos__card__icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
