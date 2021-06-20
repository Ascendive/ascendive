import { Connect } from '../connection';
import { Database, aql } from 'arangojs'
import { ArrayCursor } from "arangojs/cursor";

export class FormRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    async  getFormByUuid(uuid: string): Promise<void> {
    const cursor = await this.db.query(aql`FOR `)
}
}
