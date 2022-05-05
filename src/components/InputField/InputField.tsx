import React, { useRef } from 'react';
import './InputField.scss';

// get props from App.tsx
// components for input todo content
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // useRef for focus-blur input box while typing and submit content
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      {/* input box */}
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input__box"
      />
      {/* submit button */}
      {/* to submit, click submit button or press enter key */}
      <button className="input__submit" type="submit">
        Enter
      </button>
    </form>
  );
};

export default InputField;
