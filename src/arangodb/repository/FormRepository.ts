import { Connect } from '../connection';
import { Database, aql } from 'arangOjs'
import { ArrayCursor } from "arangojs/cursor";

export class FormRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    async function getFormByUuid(uuid: string): Promise<void> {
    const cursor = await db.query(aql`FOR `)
}
}
