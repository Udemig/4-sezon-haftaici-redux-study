import React from "react";

const DeleteAllModal = ({ onCancel, onConfirm, visible }) => {
  if (visible === false) return null;
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.2)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <div style={{ padding: "50px", backgroundColor: "white" }}>
        <h1 style={{ textAlign: "center" }}>Hepsini Sil</h1>
        <p style={{ textAlign: "center" }}>
          Bütün yapılacaklar kalıcı olarak silinecektir. Bu işlemden emin
          misiniz?
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <button onClick={onCancel}>Vazgeç</button>
          <button onClick={onConfirm}>Onayla</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllModal;
