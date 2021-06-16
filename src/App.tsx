import React from "react";
import "./App.css";
import {Collation} from "./collation/CollationJsxFactory";
import { Connect } from "./arangodb/connection";
import "reactjs-popup/dist/index.css";

function App(): JSX.Element {
  const db = Connect();
  const data: any = {
    field1: { value: 4, step: 2, range: { min: 0, max: 20 } },
    field2: { value: 1 },
    shoes: { value: 0},
    date: {timestamp: 1623857586760,
           userDateFormat: "yyyy-MM-dd",
            userLocalizedFieldTitle: "Hello"},
    date2: {timestamp: 1673857586760,
           userDateFormat: "dd-MMM-yyyy",
            userLocalizedFieldTitle: "Hello"}
  };
    let collation =
        { id: "thisisanid", title:"Collation Title", tabArray: [
            { title: "Tab Title", fieldArray: [
                {id: "field1", title: "Cader", fieldControl:"NumericTextBox"},
                {id: "field2", title: "Pants", fieldControl:"NumericTextBox"}
              ]
            },
            { title: "Tab Title 2", fieldArray: [
                {id: "shoes", title: "Shoes", fieldControl:"NumericTextBox"},
                {id: "date", title: "Date", fieldControl: "DatePicker"},
                {id: "date2", title: "Date", fieldControl: "DatePicker"},
                {id: "button", title: "switch", fieldControl: "ToggleSwitch"},
                {id: "button", title: "switch", fieldControl: "ToggleSwitch"}]
            }
          ]
        };
  return (
        <Collation collationType={collation} data={data}/>
  );
}
export default App;
