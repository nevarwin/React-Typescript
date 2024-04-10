import React from "react";
import { Todos } from "../Todo";
import SingleTodo from "./SingleTodo";

// uses interface to define the type of todo, setTodo, and handleAdd
interface TodoListProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  completedTodos: Todos[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  return (
    <div className="container">
      {/* Active tasks div */}
      <div className="todos">
        <span className="todos_heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      {/* Completed tasks div */}
      <div className="todos  remove">
        <span className="todos_heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
