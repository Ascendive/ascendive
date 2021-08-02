import { Database, aql } from 'arangojs'

export class FormRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    async getFormsByCollationTypeUuid(uuid: string): Promise<any> {
        const cursor = await this.db.query(aql` let collationType = ${uuid}
                                                FOR f IN Forms
                                                FILTER (f.reference.collationType.key == collationType  && f.version.isCurrent)
                                                RETURN f.form `)
        return cursor.next();
    }
}
