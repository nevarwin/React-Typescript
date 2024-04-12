import React, { useRef } from "react";
import "./styles.css";

// uses interface to define the type of todo, setTodo, and handleAdd
interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: InputFieldProps) => {
  // to remove the focus from the input field after submitting the form
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      // inputRef in onSubmit
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        // inputRef in input tag to work
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        className="Input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="Submit__button">
        Go
      </button>
    </form>
  );
};

export default InputField;
