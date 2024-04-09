import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todos } from "./Todo";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

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

  console.log(todos);

  return (
    <div className="App">
      <header className="App-header">Kanban</header>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <li>{t.title}</li>
      ))}
    </div>
  );
};

export default App;
