import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/UI/organisms/login/Login';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);
