import React from 'react';
import './App.css';
import { Connect } from './arangodb/connection';
import { UserGrid } from './components/userGrid';
import { CreateUserComponent } from './user/createUserComponent';
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

function App(): JSX.Element {
  const db = Connect();
  const history = createBrowserHistory();
  /* db.query() */
  return (
    <>
      {/* <Router history={history}>
        <Route path="/user" component={} />
      </Router> */}
      <UserGrid db={db} />
      <CreateUserComponent db={db} />
    </>
  );
}

export default App;
