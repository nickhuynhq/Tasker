import React from 'react';
import { Todo } from '../../models/model';
import "./TodoCard.scss";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
};

const TodoCard = ({todo, todos, setTodos}: Props) => {
  return (
    <form  className='todos__card'>
        <span className='todos__card--text'>
            {todo.todo}
        </span>
        <div>
            <span className="todos__card__icon">
                <AiFillEdit />
            </span>
            <span className="todos__card__icon">
                <AiFillDelete />
            </span>
            <span className="todos__card__icon">
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default TodoCard