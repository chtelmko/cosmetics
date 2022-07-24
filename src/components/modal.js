import React, { useState } from "react";
import ProductDetailsComponent from "./productDetails";
import Modal from "./modal.js";

export function ModalInFunctionalComponent() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={setModalIsOpenToTrue}>Details</button>

      <Modal isOpen={modalIsOpen}>
        <button onClick={setModalIsOpenToFalse}>x</button>
        <ProductDetailsComponent />
      </Modal>
    </>
  );
}
export default ModalInFunctionalComponent;
