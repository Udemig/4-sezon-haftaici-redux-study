import React, { useState } from "react";

/* 
    Herhangi bir component içerisinden store'da bulunan state'leri
    değiştirmek/manipüle etmek için bir mekanizma olduğunu gördük.
    Bu mekanizmada bu değiştirme işlemi için bir action objesini dispatch
    etmeliyiz. Bu dispatch işlemi yine köprü görevi gören react-redux
    kütüphanesi içerisinde bulunan useDispatch isimli özel yetenekli
    fonksiyonlar (hook) ile gerçekleştirilir.
*/
import {useDispatch} from "react-redux"

const AddTodoForm = () => {
    const dispatch=useDispatch()
  const [todoText, setTodoText] = useState("");
  const handleSubmit=(event)=>{
    event.preventDefault()
    if(todoText === ""){
        alert("Todo text is required")
        return
    }
    const newTodo={
        id: String(new Date().getTime()),
        text: todoText,
        date: new Date(),
        isDone: false,
        active: true
    }
    dispatch({type:"ADD_TODO",payload:newTodo})
    setTodoText("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        placeholder="Type your todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
