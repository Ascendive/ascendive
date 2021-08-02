import React from "react";
import { useState } from "react";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { useEffect } from "react";
import { FieldRepository } from "../arangodb/repository/FieldRepository";
import { CollationRepository } from "../arangodb/repository/CollationRepository";
import { CollationTypeRepository } from "../arangodb/repository/CollationTypeRepository";
import { FormRepository } from "../arangodb/repository/FormRepository";
import { Field } from "./Field";
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
  const [dataPullComplete, setDataPullComplete] = useState(false);
  const [collationHasBeenEdited, setCollationHasBeenEdited] = useState(false);
  // Initial data query effect
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
      const fields = await collationRepo.getFieldsByCollationUuid(uuid);

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
      setDataPullComplete(!dataPullComplete);

    }
    dbPull(props.collationKey);
  }, []); //End data query useEffect

  // Effect that runs once the collation has been edited.
  useEffect(() => {
    if (collationFields) console.log("edited")
    setCollationHasBeenEdited(true);
  }, [collationFields]);

  const handleMutation = () => {
    setCollationHasBeenEdited(false);
    console.log(collationFields)
  };

  if (dataPullComplete)
    return (
      <>
        <h1>{collationType.title}</h1>
        {collationFields.map((field: any, i: number, array: any): JSX.Element => {
          return (
            <>
              { // TODO figure out labels for the rest of the controls
                  /* <p>{field.default.label}</p> */}
              <Field
                field={field}
                control={field.control.type}
                index={i}
                data={array}
                setData={setCollationFields}
                readOnly={collationHasBeenEdited}
              />
            </>
          );
        })}
        <ButtonComponent onClick={handleMutation}>
          {collationHasBeenEdited ? "Save" : "Edit"}
        </ButtonComponent>
      </>
    );
  return <></>;
}



