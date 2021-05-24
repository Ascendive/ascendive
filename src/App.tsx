import React from 'react';
import './App.css';
import { Connect } from './arangodb/connection';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids'
import { UserCard } from './components/user-card';
import { UserGrid } from './components/userGrid';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { CreateUserComponent } from './user/createUserComponent';


const openGoog = () => {
  window.open("https://www.google.com")
}
function App(): JSX.Element {
  const db = Connect();
  db.collection("styled-components")
  /* db.query() */
  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <ButtonComponent onClick={openGoog}>Cader</ButtonComponent> */}
      {/* <UserCard userKey={"99837"} /> */}
      <UserGrid db={db} />
      <CreateUserComponent db={db} />
    </>
  );
}

export default App;
