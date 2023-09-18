import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';

export const Modal = ({ isOpen, onClose, children }) => {
  const { closeModal } = useContext(ModalContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <button
          onClick={() => {
            onClose();
            closeModal();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};
