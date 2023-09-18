import React from 'react';
import { ModalProvider } from './ModalContext';
import ModalPlaceholder from './ModalPlaceholder';
import { App } from './App';

export const Root = () => {
  return (
    <ModalProvider>
      <App />
      <ModalPlaceholder />
    </ModalProvider>
  );
};
