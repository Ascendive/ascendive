import { ActionableCollatable } from "./Collatable";
import { CollationType } from "./CollationType";

export class Risk implements ActionableCollatable {
    assignedToUserId: String;
    status: String;
    collationType: CollationType
    description: String;
    dateSubmitted: Number;
    collationOriginalKey: String;
    title: String;
    notes: String;
    playbookId: String;
    impact: Number;
    impactDescription: String;
    mitigation: String;
    monitored: Boolean;
    priority: Number;
    probability: Number;
    sponsorUserId: String;
    trend: String;


    constructor(assignedToUserId: String, status: String, collationType: CollationType,
        description: String, dateSubmitted: Number, collationOriginalKey: String,
        title: String, notes: String, playbookId: String, impact: Number, impactDescription: String,
        mitigation: String, priority: Number, probability: Number, sponsorUserId: String,
        monitored: Boolean, trend: String) {

        this.assignedToUserId = assignedToUserId;
        this.status = status;
        this.collationType = collationType;
        this.description = description;
        this.dateSubmitted = dateSubmitted;
        this.collationOriginalKey = collationOriginalKey;
        this.title = title;
        this.notes = notes;
        this.playbookId = playbookId;
        this.impact = impact;
        this.impactDescription = impactDescription;
        this.mitigation = mitigation;
        this.priority = priority;
        this.probability = probability;
        this.sponsorUserId = sponsorUserId;
        this.monitored = monitored;
        this.trend = trend;
    }
}
