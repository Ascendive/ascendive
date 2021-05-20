import React from 'react';
import './App.css';
import { Connect } from './arangodb/connection';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { UserCard } from './components/user-card';

const openGoog = () => {
  window.open("https://www.google.com")
}
function App() {
  const db = Connect();
  db.collection("styled-components")
  /* db.query() */
  return (
    <>
      <h1>Hello</h1>
      <ButtonComponent onClick={openGoog}>Cader</ButtonComponent>
      <UserCard />

    </>
  );
}

export default App;
