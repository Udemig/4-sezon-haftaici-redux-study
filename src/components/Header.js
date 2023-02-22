import React from "react";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const storeStates = useSelector((state) => state);
  const dispatch = useDispatch();
  const allActives = storeStates.todosState.filter(
    (item) => item.active === true
  );
  const allPassives = storeStates.todosState.filter(
    (item) => item.active === false
  );
  const doneTodos = allActives.filter((item) => item.isDone === true);
  return (
    <div>
      <h1>Redux Study Todo App</h1>
      <button onClick={() => dispatch({ type: "DELETE_ALL" })}>
        Hepsini Sil
      </button>
      {allPassives.length !== 0 && (
        <button onClick={() => dispatch({ type: "RECOVERY_ALL" })}>
          Silinenlerin Hepsini Geri Getir
        </button>
      )}
      <p>
        Aslında dizide var olan toplam sayı: {storeStates.todosState.length}
      </p>
      <p>Toplam Active Eleman Sayısı: {allActives.length}</p>
      <p>Activeler İçerisinden Yapılanların Sayısı: {doneTodos.length}</p>
      <p>
        Activeler İçerisinden Henüz Yapılmamışların Sayısı:{" "}
        {allActives.length - doneTodos.length}
      </p>
    </div>
  );
};

export default Header;
