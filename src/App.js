import React from "react";
import "./App.css";

import Navigationbar from "./components/navbar/Navigationbar";
import TodoProvider from "./context/TodoProvider";
import Todo from "./components/todo/todos/Todo";
import TodoInput from "./components/todo/todo-input/TodoInput";

const App = () => {
  return (
    <div>
      <TodoProvider>
        <Navigationbar></Navigationbar>
        <Todo></Todo>
        <TodoInput></TodoInput>
      </TodoProvider>
    </div>
  );
};

export default App;
