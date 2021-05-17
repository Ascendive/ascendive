import { FieldTypes } from './FieldTypes'
import { CollationType } from '../collation/CollationType'

export class FieldIdentifier {
    fieldType: FieldTypes;
    collationType: CollationType;
    playbookId: String;

    constructor(fieldType: FieldTypes, playbookId: String, collationType: CollationType) {
        this.fieldType = fieldType;
        this.collationType = collationType;
        this.playbookId = playbookId;
    }
}
