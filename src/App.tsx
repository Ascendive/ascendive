import React from "react";
import "./App.css";
import { Collation } from "./collation/Collation";
import "reactjs-popup/dist/index.css";
import { Connect } from "./arangodb/connection"

function App(): JSX.Element {
  let collationKey = "fcb2b831-ac4f-45f5-9cf1-dc23b7c87f5c"
  const db = Connect()
  return (
    <>
      <Collation db={db} collationKey={collationKey} />
    </>
  );
}
export default App;
