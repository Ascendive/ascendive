import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Connect } from './arangodb/connection';

function App() {
  const db = Connect();
  db.collection("styled-components")
  /* db.query() */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
