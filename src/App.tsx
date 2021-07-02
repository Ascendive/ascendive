import React from "react";
import "./App.css";
import { Collation } from "./collation/CollationJsxFactory";
import "reactjs-popup/dist/index.css";
import { FieldRepository } from './arangodb/repository/FieldRepository';
import { Connect } from "./arangodb/connection"
import { useState } from "react";
import { useEffect } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

function App(): JSX.Element {
  let collationKey = "fcb2b831-ac4f-45f5-9cf1-dc23b7c87f5c"
  const db = Connect()
    const button = () => {
        lolk(!k)
        console.log(fields) }
    const [k, lolk] = useState(false)
  const [fields, setFields] = useState<any[]>()
  useEffect(() => {
    async function dbPull(uuid: String): Promise<void> {
      const repo = new FieldRepository(db)
        const fields = await repo.getFieldsByCollationUuid(uuid)
        console.log(fields)
      setFields(fields)
    }
      dbPull(collationKey)
  }, [])
  const data: any = {
    drop: { value: "NOT VALID" },
    drop2: { value: "two" },
    field1: { value: 4 },
    field2: { value: 1 },
    shoes: { value: 4 },
    date: { value: 1623857586760 },
    date2: { value: 0 },
    button: { value: true },
    button2: { value: false },
    text: { value: "Hello" },
    text2: { value: "Hello" }
  };
  let collationType = {
    id: "thisisanid", title: "Collation Title", formArray: [
      {
        title: "Form Title", fieldArray: [
          { id: "text", title: "Text Box", control: "TextBox", controlOptions: {} },
          { id: "text2", title: "Text Box", control: "TextBox", controlOptions: { multiline: true } },
          { id: "drop", title: "Dropdown", control: "DropdownList", controlOptions: { dataSource: ["one", "two"], placeholder: "Drop" } },
          { id: "drop2", title: "Dropdown", control: "DropdownList", controlOptions: { dataSource: ["one", "two"], placeholder: "Drop" } },
          { id: "field1", title: "Cader", control: "NumericTextBox", controlOptions: { step: 2, range: { min: 0, max: 20 } } },
          { id: "field2", title: "Pants", control: "NumericTextBox", controlOptions: { step: 2 } }
        ]
      }, {
        title: "Form Title 2", fieldArray: [
          { id: "shoes", title: "Shoes", control: "NumericTextBox", controlOptions: { step: 0.1 } },
          { id: "date", title: "Start Date", control: "DatePicker", controlOptions: { userDateFormat: "yyyy-MMM-dd", userLocalizedFieldTitle: "Hello" } },
          { id: "date2", title: "End Date", control: "DatePicker", controlOptions: { userDateFormat: "dd-MMM-yyyy", userLocalizedFieldTitle: "Hello" } },
          { id: "button", title: "Enable warning", control: "ToggleSwitch", controlOptions: {} },
          { id: "button2", title: "Less important", control: "ToggleSwitch", controlOptions: {} }
        ]
      }
    ]
  };
    console.log(fields)
  return (
      <>
    <Collation collationType={collationType} data={data} />
    <ButtonComponent onClick={button}>{k}</ButtonComponent>
      </>
  );
}
export default App;
