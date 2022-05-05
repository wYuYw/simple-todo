import React from 'react'
import { Todo } from '../../models/models';
import SingleTodo from '../SingleTodo/SingleTodo';
import './TodoList.scss'

// get props from App.tsx
// component for tasks display
// todos: list of active tasks
// completedTodos: list of completed tasks
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
    // display todos
    <div className="container">
      {/* display active tasks */}
      {/* todos: list of active tasks */}
      {/* theOtherTodos: list of completed tasks */}
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
      {/* display completed tasks */}
      {/* todos: list of completed tasks */}
      {/* theOtherTodos: list of active tasks */}
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