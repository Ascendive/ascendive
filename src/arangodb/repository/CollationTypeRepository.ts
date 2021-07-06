
import { Database, aql } from 'arangojs'
import { ArrayCursor } from 'arangojs/cursor';

export class CollationTypeRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db
    }
    async getActiveCollationTypeByCollationTypeUuid(uuid: String): Promise<any> {
        this.db.collection("CollationTypes")
        const cursor = await this.db.query(aql`FOR c in CollationTypes filter (c.version.key == ${uuid} && c.version.isCurrent) return c`) as ArrayCursor<any>
        return cursor.next()
    }
}
