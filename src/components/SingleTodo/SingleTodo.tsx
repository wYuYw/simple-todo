import React, { useRef, useState, useEffect } from 'react';
import { Todo } from '../../models/models';
import './SingleTodo.scss';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

// get props from TodoList.tsx
// component for both active tasks and completed tasks
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  theOtherTodos: Todo[];
  setTheOtherTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({
  todo,
  todos,
  setTodos,
  theOtherTodos,
  setTheOtherTodos,
}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // activate when press delete icon
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // activate when press done icon
  const handleDone = (id: number) => {
    setTheOtherTodos([...theOtherTodos, todo]);
    setTodos(todos.filter((item) => item.id !== id));
  };
  // activate when press edit icon and edit content
  // press enter key to complete editing
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    // display edit mode if edit is true
    // display todo content if edit is false
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      {/* icons on right side */}
      <div>
        {/* edit icon */}
        <span
          className="icon"
          onClick={() => {
            if (!edit) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        {/* delete icon */}
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        {/* done icon */}
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
