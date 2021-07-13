import React from "react";
import * as controls from "./ControlJsxFactory";
import { useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useEffect } from "react";
import { FieldRepository } from "../arangodb/repository/FieldRepository";
import { CollationRepository } from "../arangodb/repository/CollationRepository";
import { CollationTypeRepository } from "../arangodb/repository/CollationTypeRepository";
import { FormRepository } from "../arangodb/repository/FormRepository";
/** @Author Cader Hancock
   The CollationJsxFactory decomposes the CollationPrototype assembled by the
   CollationDecorator. It reduces each CollationPrototype into it's subsequent
   tabs and then
*/
//TODO add a flag to pass down the state of the edit function
//so that we can set the controls to be read only.
export function Collation(props: any): JSX.Element {
  const [collationFields, setCollationFields] = useState<any | null>(null);
  const [collationType, setCollationType] = useState({ title: "" });
  const [form, setForm] = useState();
  const [wegood, setWegood] = useState(false);
  useEffect(() => {
    async function dbPull(uuid: String): Promise<void> {
      // Repo setup
      const fieldRepo = new FieldRepository(props.db);
      const collationRepo = new CollationRepository(props.db);
      const collationTypeRepo = new CollationTypeRepository(props.db);
      const formRepo = new FormRepository(props.db);

      //We need this to get the collationtype key to get the forms
      const collationData =
        await collationRepo.getActiveCollationByCollationUuid(uuid);

      //This is the data that we are using to render the form.
      const fields = await collationRepo.getCollationFields(uuid);

      const collationType =
        await collationTypeRepo.getActiveCollationTypeByCollationTypeUuid(
          collationData.reference.collationType.key
        );
      const form = await formRepo.getFormsByCollationTypeUuid(
        collationData.reference.collationType.key
      );

      setCollationFields(fields);
      setCollationType(collationType);
      setForm(form);
      setWegood(!wegood);

      /* console.log(JSON.stringify(fields)); */
      /* console.log(collationType); */
      /* console.log(collationData); */
    }
    dbPull(props.collationKey);
  }, []);
  const [readOnly, setReadOnly] = useState(true);
  const handleSave = () => {
    toggleReadOnly();
  };
  const toggleReadOnly = () => setReadOnly(!readOnly);

  if (wegood)
    return (
      <>
        <h1>{collationType.title}</h1>
        {collationFields.map((field: any, i: number, array: any): JSX.Element => {
          return (
            <>
              <p>{field.default.label}</p>
              <Field
                field={field}
                control={field.control.type}
                index={i}
                data={array}
                setData={setCollationFields}
                readOnly={readOnly}
              />
            </>
          );
        })}
        <ButtonComponent onClick={handleSave}>
          {readOnly ? "Edit" : "Save"}
        </ButtonComponent>
      </>
    );
  return <></>;
}

function Form(props: any): JSX.Element {
  return (
    <>
      <h2>{props.form.title}</h2>
      {/* {
          props.form.fieldArray.map(
          (field: any) => {
          return <Field
          field={field}
          data={props.data[field.id]}
          setData={props.setData}
          readOnly={props.readOnly} />
          }
          )
          } */}
      {props.fields.map((field: any, index: number, array: any[]) => {
        return (
          <Field
            index={index}
            control={field.control.type}
            data={array}
            readOnly={props.readOnly}
            setData={props.setData}
          />
        );
      })}
    </>
  );
}

function Field(props: any): JSX.Element {
  switch (props.control) {
    case "DatePicker":
      return controls.DatePickerComponentFactory(
        props.field,
        props.data,
        props.setData,
        props.readOnly,
        props.index
      );
    case "NumericTextBox":
      return controls.NumericTextBoxComponentFactory(
        props.field,
        props.data,
        props.setData,
        props.readOnly,
        props.index
      );
    /* case "TextBox":
*   return controls.TextBoxComponentFactory(
*     props.field,
*     props.data,
*     props.setData,
*     props.readOnly,
*     props.index
*   ); */
    case "ToggleSwitch":
      return controls.ToggleSwitchButtonComponentFactory(
        props.field,
        props.data,
        props.setData,
        props.readOnly,
        props.index
      );
    /* case "DropdownList":
*   return controls.DropDownListComponentFactory(
*     props.field,
*     props.data,
*     props.setData,
*     props.readOnly,
*     props.index
*   ); */
    default:
      return <></>;
  }
}
