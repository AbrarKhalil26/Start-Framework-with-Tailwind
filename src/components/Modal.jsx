import React from "react";

export const Modal = ({ modalImage, setModalImage }) => {
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalImage(null);
    }
  };
  return (
    <div
      className={`fixed z-[100000] top-0 left-0 right-0 bottom-0 bg-blue-opacity ${
        modalImage ? "flex" : "hidden"
      } justify-center items-center`}
      onClick={handleCloseModal}
    >
      <img src={modalImage} alt="img-product" className="w-4/5 md:w-96 rounded-lg" />
    </div>
  );
};
