import React, { createContext, useState } from 'react';

const ModalContext = createContext({
  modalStack: [],
  openModal: (modal) => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }) => {
  const [modalStack, setModalStack] = useState([]);

  const openModal = (modal) => {
    setModalStack((prevStack) => [...prevStack, modal]);
  };

  const closeModal = () => {
    setModalStack((prevStack) => prevStack.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ modalStack, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
