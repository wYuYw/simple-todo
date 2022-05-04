import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField/InputField';
import { Todo } from './models/models';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Todos</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
