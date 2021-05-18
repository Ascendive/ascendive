import { FieldType } from './FieldType'
import { CollationType } from '../collation/CollationType'

export class FieldIdentifier {
    fieldType: FieldType;
    collationType: CollationType;
    playbookId: String;

    constructor(fieldType: FieldType, playbookId: String, collationType: CollationType) {
        this.fieldType = fieldType;
        this.collationType = collationType;
        this.playbookId = playbookId;
    }
}
