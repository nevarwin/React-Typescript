import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todos } from "./Todo";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Typography } from "@mui/material";
// import MuiButton from "./components/MuiButton";
// import MuiTextField from "./components/MuiTextField";
// import MuiSelect from "./components/MuiSelect";
// import MuiRadio from "./components/MuiRadio";
// import MuiCheckbox from "./components/MuiCheckbox";
// import MuiLayout from "./components/MuiLayout";
import MuiCard from "./components/MuiCard";

const App: React.FC = () => {
  // state for the inputed todo (string)
  const [todo, setTodo] = useState<string>("");

  // state for using the inputed string to make a todo list or object
  const [todos, setTodos] = useState<Array<Todos>>([]);

  const [completedTodos, setCompletedTodos] = useState<Array<Todos>>([]);

  // added React.FormEvent for the type of e
  const handleAdd = (e: React.FormEvent) => {
    // prevent reloading the page when the form is submitted
    e.preventDefault();

    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === "todoActive") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "todoCompleted") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <Typography variant="h1" gutterBottom>
            Kanban
          </Typography>
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
      {/* <MuiButton></MuiButton> */}
      {/* <MuiTextField></MuiTextField> */}
      {/* <MuiSelect></MuiSelect> */}
      {/* <MuiRadio></MuiRadio> */}
      {/* <MuiCheckbox></MuiCheckbox> */}
      {/* <MuiLayout></MuiLayout> */}
      <MuiCard></MuiCard>
    </>
  );
};

export default App;
