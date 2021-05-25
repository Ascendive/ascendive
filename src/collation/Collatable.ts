import { Field } from "../fields/Field";
import { User } from "../user/user";
import { CollationType } from "./CollationType";

export interface Collatable {
    collationType: CollationType;
    description: String;
    dateSubmitted: Number;
    collationOriginalKey: String;
    title: String;
    notes: String;
    playbookId: String;
}
export interface ActionableCollatable extends Collatable {
    assignedToUserId: String;
    status: String;
}
