import React, { useState } from 'react';
import './App.scss';
import InputField from './components/InputField/InputField';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  console.log(todo);

  return (
    <div className="App">
      <span className='heading'>Todos</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
