import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculadora from './main/calculadora';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calculadora />
  </React.StrictMode>
);