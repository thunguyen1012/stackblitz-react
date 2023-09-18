import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';

const ModalPlaceholder = () => {
  const { modalStack } = useContext(ModalContext);

  return (
    <div>
      {modalStack.map((modal, index) => (
        <div key={index} className="modal-container">
          {modal}
        </div>
      ))}
    </div>
  );
};

export default ModalPlaceholder;
