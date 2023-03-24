import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Container } from './theme/Container';
import Login from './components/UI/organisms/login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container>
      <Login />
    </Container>
  </React.StrictMode>,
);
