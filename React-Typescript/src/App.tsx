import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todos } from "./Todo";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  // state for the inputed todo (string)
  const [todo, setTodo] = useState<string>("");

  // state for using the inputed string to make a todo list or object
  const [todos, setTodos] = useState<Todos[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todos[]>([]);

  // added React.FormEvent for the type of e
  const handleAdd = (e: React.FormEvent) => {
    // prevent reloading the page when the form is submitted
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  const onDragEnd = (results: DropResult) => {
    console.log(results);

    const { destination, source } = results;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add,
      active = todos,
      completed = completedTodos;

    console.log(source.droppableId);

    if (source.droppableId === "todoActive") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }

    if (destination.droppableId === "todoCompleted") {
      active.splice(destination.index, 0, add);
    } else {
      completed.splice(destination.index, 0, add);
    }

    setCompletedTodos(completed);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <header className="App-header">Kanban</header>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
        {/* {todos.map((t) => (
        <li>{t.title}</li>
      ))} */}
      </div>
    </DragDropContext>
  );
};

export default App;
