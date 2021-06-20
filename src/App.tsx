import React from "react";
import "./App.css";
import {Collation} from "./collation/CollationJsxFactory";
import "reactjs-popup/dist/index.css";

function App(): JSX.Element {
  const data: any = {
    field1: { value: 4 },
    field2: { value: 1 },
    shoes: { value: 4},
    date: {value: 1623857586760},
    date2: {value: 1673857586760},
    button: {value: true },
    button2: {value: false }
  };
    let collationType =
        { id: "thisisanid", title:"Collation Title", formArray: [
            { title: "Form Title", fieldArray: [
                {id: "field1", title: "Cader", control:"NumericTextBox", controlOptions:{step: 2, range: { min: 0, max: 20 } }},
                {id: "field2", title: "Pants", control:"NumericTextBox", controlOptions:{ step: 2}}
              ]
            },
            { title: "Form Title 2", fieldArray: [
                {id: "shoes", title: "Shoes", control:"NumericTextBox", controlOptions:{step: 0.1}},
                {id: "date", title: "Start Date", control: "DatePicker", controlOptions:{userDateFormat: "yyyy-MMM-dd", userLocalizedFieldTitle: "Hello"}},
                {id: "date2", title: "End Date", control: "DatePicker", controlOptions:{userDateFormat: "dd-MMM-yyyy", userLocalizedFieldTitle: "Hello"}},
                {id: "button", title: "Enable warning", control: "ToggleSwitch", controlOptions:{}},
                {id: "button2", title: "Less important", control: "ToggleSwitch", controlOptions:{}}]
            }
          ]
        };
  return (
        <Collation collationType={collationType} data={data}/>
  );
}
export default App;
