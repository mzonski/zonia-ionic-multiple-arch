import React from 'react';
import { createRoot } from 'react-dom/client';
import AppLoader from './AppLoader';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <AppLoader />
  </React.StrictMode>,
);
