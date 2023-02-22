import React from "react";
/* 
  Herhangi bir component içerisinden store'a subscribe (abone) olmak için
  Köprü görevi görecek dediğimiz react-redux kütüphanesinden 
  useSelector isimli özel yetenekli fonksiyon (hooks) kullanılır
*/
import { useSelector } from "react-redux";

import SingleTodo from "./SingleTodo";

const ListTodos = () => {
  const storeStates = useSelector((state) => state);
  console.log(storeStates);
  const activeTodos=storeStates.todosState.filter(item => item.active === true)
  return (
    <div>
      {activeTodos.length === 0 ? (
        <p>There is no todos yet.</p>
      ) : (
        <>
          {activeTodos.map((item, index) => (
            <SingleTodo todo={item} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;
