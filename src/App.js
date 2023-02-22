import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import ListTodos from "./components/ListTodos";
import Header from "./components/Header";
import DeleteAllPermanently from "./components/DeleteAllPermanently";


function App() {
  
  return (
    <div>
      <Header />
      <AddTodoForm />
      <ListTodos />
      <DeleteAllPermanently />
    </div>
  );
}

export default App;
