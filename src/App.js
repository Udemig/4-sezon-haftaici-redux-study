import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import ListTodos from "./components/ListTodos";



function App() {
  
  return (
    <div>
      <h1>Redux Study Todo App</h1>
      <AddTodoForm />
      <ListTodos />
    </div>
  );
}

export default App;
