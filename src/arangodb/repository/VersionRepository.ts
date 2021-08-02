import { Database, aql } from 'arangojs'

export class VersionRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    async getCurrentVersion(uuid: string): Promise<any> {
        const cursor = await this.db.query(aql` 
                let originalKey = ${uuid}
                FOR v IN Versions
                FILTER (v.originalKey == originalKey)
                RETURN v.currentKey
            `)
        return cursor.next();
    }
}
