import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { User } from './user/user'
import { Database, aql, } from 'arangojs';
import { ArangodbUserRepository } from './user/arangodb-user-repository'

const db = new Database({
  url: "http://localhost:8529",
  databaseName: "test",
  auth: { username: "react", password: "react" }
});

const vincent = new User("Vincent Hancock",
  "Vincent.Hancock@ascendive.com",
  true,
  Date.now(),
  "Founder",
  " https://i.postimg.cc/zBJ6tH8y/vincent.jpg",
  "Seattle",
  "Ascendive",
  " DD-MMM-YYYY HH:mm:ss")

const repo = new ArangodbUserRepository(db)
async function data() {
  const savedVincent = await repo.saveUser(vincent)
}
ReactDOM.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
