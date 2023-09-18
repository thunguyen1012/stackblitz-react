import React, { useContext } from 'react';
import { ModalContext } from './ModalContext';
import { Modal } from './Modal';

const TestModalComponent = () => {
  const { openModal } = useContext(ModalContext);

  const openNestedModal = () => {
    openModal(
      <Modal isOpen={true} onClose={() => console.log('Nested modal closed.')}>
        <h2>Nested Modal Content</h2>
        <p>This is the content of the nested modal.</p>
      </Modal>
    );
  };

  return <button onClick={openNestedModal}>Open Nested Modal</button>;
};

export default TestModalComponent;
