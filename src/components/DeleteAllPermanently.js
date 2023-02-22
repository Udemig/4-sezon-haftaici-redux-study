import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DeleteAllModal from "./DeleteAllModal";

const DeleteAllPermanently = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        style={{ position: "absolute", bottom: "10px", right: "10px" }}>
        Hepsini Kalıcı Olarak Sil
      </button>
      <DeleteAllModal
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        onConfirm={() => {
          dispatch({ type: "DELETE_ALL_PERMANENTLY" });
          setOpenModal(false);
        }}
      />
    </div>
  );
};

export default DeleteAllPermanently;
