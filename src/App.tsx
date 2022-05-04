import React from 'react';
import './App.scss';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading'>Todos</span>
      <InputField />
    </div>
  );
};

export default App;
