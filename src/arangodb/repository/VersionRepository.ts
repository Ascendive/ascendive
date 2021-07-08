import { Database, aql } from 'arangojs'

export class VersionRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db;
    }

    async getCurrentVersion(collection: string, uuid: string): Promise<any> {
        const cursor = await this.db.query(aql` 
                let originalKey = ${uuid}
                let collection = ${collection}
                FOR v IN Versions
                FILTER (v.collection == collection && v.originalKey == originalKey)
                RETURN v.currentKey
                                                `)
        return cursor.next();
    }
}
