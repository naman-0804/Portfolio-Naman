import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from "@vercel/analytics/react"
document.title = 'Naman';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
