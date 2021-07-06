import { Database, aql } from 'arangojs'
import { ArrayCursor } from 'arangojs/cursor';

export class CollationRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db
    }
    async getActiveCollationByCollationUuid(uuid: String): Promise<any> {
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`FOR c in Collations filter (c.version.key == ${uuid} && c.version.isCurrent) return c`) as ArrayCursor<any>
        return cursor.next()
    }
}
