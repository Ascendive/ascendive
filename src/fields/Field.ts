import { FieldType } from "./FieldType";
export class Field {

  fieldType: FieldType;
  fieldControl!: any;
  id!: any;
  title!: any;

  constructor(fieldType: FieldType) {
    this.fieldType = fieldType;
  }
  
}
