import { ActionableCollatable } from "./Collatable";
import { CollationType } from "./CollationType";

export class Action implements ActionableCollatable {

    collationType: CollationType;
    actualFinish: String;
    actualStart: Number;
    actualWork: Number;
    assignedTo: String;
    baselineDuration: Number;
    baselineFinish: Number;
    baselineStart: Number;
    baselineWork: Number;
    collations: String;
    critical: Boolean;
    description: String;
    majorVariance: Boolean;
    milestone: Boolean;
    minorVariance: Boolean;
    msProjectGUID: String;
    msProjectID: Number;
    notes: String;
    parent: String;
    phase: String;
    plannedDuration: Number;
    plannedFinish: Number;
    plannedStart: Number;
    playbook: String;
    predecessors: String;
    progress: String;
    remainingDuration: Number;
    remainingWork: String;
    resources: String[];
    status: String;
    successors: String;
    summary: Boolean;
    title: String;
    viewInCalendar: Boolean;
    work: String;
    workProduct: Boolean;
    originalCollation: String;
    createdBy: String;
    timeStamp: Number;
    currentVersion: Boolean;
    versionNumber: Number;
    dateSubmitted: Number;
    collationOriginalKey: String;


    constructor(collationType: CollationType, actualFinish: String, actualStart: Number,
        actualWork: Number, assignedTo: String, baselineDuration: Number,
        baselineFinish: Number, baselineStart: Number, baselineWork: Number, collations: String,
        critical: Boolean, description: String, majorVariance: Boolean, milestone: Boolean,
        minorVariance: Boolean, msProjectGUID: String, msProjectID: Number, notes: String,
        parent: String, phase: String, plannedDuration: Number, plannedFinish: Number,
        plannedStart: Number, playbook: String, predecessors: String, progress: String,
        remainingDuration: Number, remainingWork: String, resources: String[], status: String,
        successors: String, summary: Boolean, title: String, viewInCalendar: Boolean,
        work: String, workProduct: Boolean, originalCollation: String, createdBy: String,
        timeStamp: Number, currentVersion: Boolean, versionNumber: Number, dateSubmitted: Number,
        collationOriginalKey: String) {

        this.collationType = collationType;
        this.actualFinish = actualFinish;
        this.actualStart = actualStart;
        this.actualWork = actualWork;
        this.assignedTo = assignedTo;
        this.baselineDuration = baselineDuration;
        this.baselineFinish = baselineFinish;
        this.baselineStart = baselineStart;
        this.baselineWork = baselineWork;
        this.collations = collations;
        this.critical = critical;
        this.description = description;
        this.majorVariance = majorVariance;
        this.milestone = milestone;
        this.minorVariance = minorVariance;
        this.msProjectID = msProjectID;
        this.msProjectGUID = msProjectGUID;
        this.notes = notes;
        this.parent = parent;
        this.phase = phase;
        this.phase = phase;
        this.plannedDuration = plannedDuration;
        this.plannedFinish = plannedFinish;
        this.plannedStart = plannedStart;
        this.playbook = playbook;
        this.predecessors = predecessors;
        this.progress = progress;
        this.remainingDuration = remainingDuration;
        this.remainingWork = remainingWork;
        this.resources = resources;
        this.status = status;
        this.successors = successors;
        this.summary = summary;
        this.title = title;
        this.viewInCalendar = viewInCalendar;
        this.work = work;
        this.workProduct = workProduct;
        this.originalCollation = originalCollation;
        this.createdBy = createdBy;
        this.timeStamp = timeStamp;
        this.currentVersion = currentVersion;
        this.versionNumber = versionNumber;
        this.dateSubmitted = dateSubmitted;
        this.collationOriginalKey = collationOriginalKey;
    }

}
