import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Add this line
import App from './App';

document.title = 'Naman';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);