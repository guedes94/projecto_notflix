import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import UserProvider from './contexts/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    {/* Englobamos a nossa aplicação no user provider 
    para podermos ter acesso a informação e funções do contexto na nossa aplicação */}
      <UserProvider>
        <App />
      </UserProvider>    
    </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
