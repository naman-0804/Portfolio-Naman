import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Design/darkmode.css'; // Import the dark mode styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);