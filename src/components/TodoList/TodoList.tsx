import React from 'react'
import { Todo } from '../../models/models';
import SingleTodo from '../SingleTodo/SingleTodo';
import './TodoList.scss'

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
      <div className="todos">
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            theOtherTodos={completedTodos}
            setTheOtherTodos={setCompletedTodos}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={completedTodos}
            setTodos={setCompletedTodos}
            theOtherTodos={todos}
            setTheOtherTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;