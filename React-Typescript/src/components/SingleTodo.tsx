import React, { useRef, useState } from "react";
import "./styles.css";
import { Todos } from "../Todo";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

// uses interface
type SingleTodoProps = {
  key: number;
  todos: Todos[];
  todo: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

const SingleTodo = ({ todos, todo, setTodos }: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: editValue } : todo
      )
    );
    setEdit(false);
  };

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos_single_text inputEdit"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={(e) => handleEdit(e, todo.id)}
          autoFocus
        />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.title}</s>
      ) : (
        <span className="todos_single_text">{todo.title}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <FaCheck />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;