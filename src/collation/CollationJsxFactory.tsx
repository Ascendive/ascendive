import React from "react";
import * as controls from "./ControlJsxFactory";
import { useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
/** @Author Cader Hancock
   The CollationJsxFactory decomposes the CollationPrototype assembled by the
   CollationDecorator. It reduces each CollationPrototype into it's subsequent
   tabs and then
*/
export function Collation(props: any): JSX.Element {

  const [data, setData] = useState(props.data);

  const logState = () => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <h1>{props.collationType.title}</h1>
      <div className={props.collationType.Title}>
        {
          props.collationType.formArray.map(
            (form: any): JSX.Element => {
              return <Form form={form} data={data} setData={setData} />
            }
          )
        }
      </div>
      <ButtonComponent onClick={logState}>Save</ButtonComponent>
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
              setData={props.setData} />
          }
        )
      }
    </>
  );
}

function Field(props: any): JSX.Element {
  switch (props.field.control) {
    case "DatePicker":
      return controls.DatePickerComponentFactory(props.field, props.data, props.setData);
    case "NumericTextBox":
      return controls.NumericTextBoxComponentFactory(props.field, props.data, props.setData);
    case "TextBox":
          return controls.TextBoxComponentFactory(props.field, props.data, props.setData);
    case "ToggleSwitch":
      return controls.ToggleSwitchButtonComponentFactory(props.field, props.data, props.setData);
    case "DropdownList":
          return controls.DropDownListComponentFactory(props.field, props.data, props.setData);
    default:
      return <></>;
  }
}
