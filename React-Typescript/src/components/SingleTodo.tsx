import React, { useRef, useState } from "react";
import "./styles.css";
import { Todos } from "../Todo";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Draggable } from "react-beautiful-dnd";

const SingleTodo: React.FC<{
  index: number;
  todo: Todos;
  todos: Array<Todos>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todos>>>;
}> = ({ todos, todo, setTodos, index }) => {
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
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos_single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
      )}
    </Draggable>
  );
};

export default SingleTodo;
