import { ActionableCollatable } from "./Collatable";
import { CollationType } from "./CollationType";

export class Action implements ActionableCollatable {
    assignedToUserId: String;
    status: String;
    collationType: CollationType = CollationType.Action;
    description: String;
    dateSubmitted: Number;
    collationOriginalKey: String;
    title: String;
    notes: String;
    playbookId: String;

    constructor

}
