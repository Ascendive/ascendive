import React from 'react';
import './App.css';
import { Connect } from './arangodb/connection';
import { UserGrid } from './components/userGrid';
import EditAction from './components/EditAction';
import { CreateUserComponent } from './user/createUserComponent';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App(): JSX.Element {
  const db = Connect();
  const history = createBrowserHistory();
  /* db.query() */
  return (
<EditAction></EditAction>
















  );
}

export default App;
