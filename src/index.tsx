import React from 'react';
import ReactDOM from 'react-dom/client';

import './fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf';
import './fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf';
import './fonts/Orbitron/Orbitron-VariableFont_wght.ttf';

import './index.css';
import App from './Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
