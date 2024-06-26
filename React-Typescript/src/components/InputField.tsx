import React, { useRef } from "react";
import "./styles.css";
import { Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

// uses interface to define the type of todo, setTodo, and handleAdd
interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
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
        type="text"
        placeholder="Enter a task"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
        className="Input__box"
      />
      <IconButton aria-label="send" type="submit" color="primary" disableRipple>
        <SendIcon />
      </IconButton>
      <Button>Go</Button>
    </form>
  );
};

export default InputField;
