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
        {props.collationType.formArray.map(
          (form: any): JSX.Element => FormJsxFactory(form, data, setData)
        )}
      </div>
      <ButtonComponent onClick={logState} >Save</ButtonComponent>
    </>
  );
}
function FormJsxFactory(form: any, data: any, setData: React.Dispatch<any>): JSX.Element {
  return (
    <>
      <h2>{form.title}</h2>
      {form.fieldArray.map((field: any) =>
        FieldJsxFactory(field, data[field.id], setData)
      )}
    </>
  );
}
function FieldJsxFactory(field: any, data: any, setData: React.Dispatch<any>) {
  switch (field.control) {
    case "DatePicker":
      return controls.DatePickerComponentFactory(field, data, setData);
    case "NumericTextBox":
      return controls.NumericTextBoxComponentFactory(field, data, setData);
    case "ToggleSwitch":
      return controls.ToggleSwitchButtonComponentFactory(field, data, setData);
    default:
      return <></>;
  }
}
