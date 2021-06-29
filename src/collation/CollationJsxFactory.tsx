import React from "react";
import * as controls from "./ControlJsxFactory";
import { useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
/** @Author Cader Hancock
   The CollationJsxFactory decomposes the CollationPrototype assembled by the
   CollationDecorator. It reduces each CollationPrototype into it's subsequent
   tabs and then
*/
//TODO add a flag to pass down the state of the edit function
//so that we can set the controls to be read only.
export function Collation(props: any): JSX.Element {

  const [data, setData] = useState(props.data);
  const [readOnly, setReadOnly] = useState(true);
  const handleSave = () => {
    console.log(JSON.stringify(data))
      toggleReadOnly();
  }
  const toggleReadOnly = () => setReadOnly(!readOnly);

  return (
    <>
      <h1>{props.collationType.title}</h1>
      <div className={props.collationType.Title}>
        {
          props.collationType.formArray.map(
            (form: any): JSX.Element => {
              return <Form form={form} data={data} setData={setData} readOnly={readOnly}/>
            }
          )
        }
      </div>
      <ButtonComponent onClick={handleSave}>{readOnly ? "Edit" : "Save"}</ButtonComponent>
    </>
  )
}

function Form(props: any): JSX.Element {
  return (
    <>
      <h2>{props.form.title}</h2>
      {
        props.form.fieldArray.map(
          (field: any) => {
            return <Field
              field={field}
              data={props.data[field.id]}
              setData={props.setData}
              readOnly={props.readOnly}/>
          }
        )
      }
    </>
  );
}

function Field(props: any): JSX.Element {
  switch (props.field.control) {
    case "DatePicker":
      return controls.DatePickerComponentFactory(props.field, props.data, props.setData, props.readOnly);
    case "NumericTextBox":
      return controls.NumericTextBoxComponentFactory(props.field, props.data, props.setData, props.readOnly);
    case "TextBox":
          return controls.TextBoxComponentFactory(props.field, props.data, props.setData, props.readOnly);
    case "ToggleSwitch":
      return controls.ToggleSwitchButtonComponentFactory(props.field, props.data, props.setData, props.readOnly);
    case "DropdownList":
          return controls.DropDownListComponentFactory(props.field, props.data, props.setData, props.readOnly);
    default:
      return <></>;
  }
}
