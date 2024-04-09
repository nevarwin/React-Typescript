import React from "react";
import { Todos } from "../Todo";
import SingleTodo from "./SingleTodo";

// uses interface to define the type of todo, setTodo, and handleAdd
interface TodoListProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
