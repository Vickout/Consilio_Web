import React from 'react';

import './global.css';

import Routes from './routes';

import logo from "./assets/logo_branco.png"

function App() {
  return (
    <div className="container">
      <header className="header" >
        <h2>Bem-vindo</h2>
        <img src={logo} alt="consilio"/>
      </header>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
