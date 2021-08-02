import { Database, aql } from 'arangojs'
import { ArrayCursor } from 'arangojs/cursor';

export class FieldRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db
    }
    async getFieldsByCollationUuid(uuid: String): Promise<any> {
        this.db.collection("Fields")
        const cursor = await this.db.query(aql`
            Let collationKey = ${uuid}
            FOR c IN Collations
            FILTER(c.version.key == collationKey && c.version.isCurrent)
                FOR ct IN CollationTypes
                    FILTER (ct.version.key == c.reference.collationType.key && ct.reference.playbook.key == c.reference.playbook.key && ct.version.isCurrent)
                    FOR ctf in ct.field[*]
                    FILTER (ctf.isActive)
                    FOR cf in c.field[*]
                        FILTER (cf.key == ctf.key)
                        FOR f IN Fields
                            FILTER (f.version.key == ctf.key && f.control.isActive && f.version.isCurrent)
                            RETURN {"field":ctf.title, "value":cf.value, "default":f.default, "control":f.control}                `) as ArrayCursor<any>
        return cursor.all();
    }
    async test(): Promise<any[]> {

        const cursor = await this.db.query(aql`for x in 1..5 return x`) as ArrayCursor<any>
        return cursor.all()
    }
}
