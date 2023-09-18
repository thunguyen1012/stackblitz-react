import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Root } from './Root';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);
