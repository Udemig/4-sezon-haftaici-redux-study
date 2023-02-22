import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SingleTodo = ({ todo }) => {
  console.log(todo);
  const dispatch = useDispatch();
  const [willEdit, setWillEdit] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);
  const deleteTodo = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    /* validation */
    if (willEditText === "") {
      alert("Todo text boş bırakılamaz");
      return;
    }
    dispatch({ type: "EDIT_TODO", payload: { ...todo, text: willEditText } });
    setWillEdit(false);
  };
  return (
    <div>
      <h1
        style={{
          textDecoration: todo.isDone === true ? "line-through" : "none",
          color: todo.isDone === true ? "red" : "black",
        }}>
        {todo.text}
      </h1>
      {willEdit === true && (
        <form onSubmit={handleSubmit}>
          <input
            value={willEditText}
            onChange={(event) => setWillEditText(event.target.value)}
            placeholder="Type your todo"
          />
          <button
            onClick={() => {
              setWillEdit(false);
              setWillEditText(todo.text);
            }}
            type="button">
            Vazgeç
          </button>
          <button type="submit">Kaydet</button>
        </form>
      )}
      <button onClick={()=>dispatch({type:"CHANGE_ISDONE",payload:todo.id})}>{todo.isDone === true ? "Yapılmadı" : "Yapıldı"}</button>
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={() => setWillEdit(true)}>Güncelle</button>
      <hr />
    </div>
  );
};

export default SingleTodo;
