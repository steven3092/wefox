import React from 'react';
import ReactDOM from 'react-dom/client';
import WefoxApp from './WefoxApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <WefoxApp />
  </React.StrictMode>
);

