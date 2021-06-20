import { CollationTab } from "./CollationTab";

export class CollationPrototype {

    collationTypeTitle!: string;
    collationTypePlaybookKey!: string;
    collationTypePlaybookTitle!: string;
    collationTypeDefaultStatus!: string;
    collationTypeCompletedStatus!: string;
    collationTypeDefaultDaysToComplete!: string;
    collationTypeDefaultVersions!: string;
    collationTypeIsActive!: Boolean;
    collationTypeIsInternal!: Boolean;
    collationTypeVelocityWeight!: Number;
    createdBy!: string;
    timeStamp!: Number;
    currentVersion!: Boolean;
    versionNumber!: Number;
    originalKey!: string;
    tabArray!: CollationTab[];

    constructor(collationTypeTitle: string, tabArray: CollationTab[]){
        this.collationTypeTitle = collationTypeTitle;
        this.tabArray = tabArray;
 }

     }

