import React from "react";
import { Todos } from "../Todo";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";

// uses interface to define the type of todo, setTodo, and handleAdd
interface TodoListProps {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  completedTodos: Todos[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const TodoList = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}: TodoListProps) => {
  return (
    <div className="container">
      {/* Active tasks div */}
      <Droppable droppableId="todoActive">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {/* Completed tasks div */}
      <Droppable droppableId={"todoCompleted"}>
        {(provided) => (
          <div
            className="todos completed"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos_heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo
                index={index}
                key={todo.id}
                todo={todo}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
