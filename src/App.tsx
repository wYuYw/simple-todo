import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import { Todo } from './models/models';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      // since it's simple todo list, id is enough only with Date.now()
      // if project becomes bigger, uuid is needed
      setTodos([...todos, { id: Date.now(), todo }]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading">Todos</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
  );
};

export default App;
