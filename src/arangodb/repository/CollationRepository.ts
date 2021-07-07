import { Database, aql } from 'arangojs'
import { ArrayCursor } from 'arangojs/cursor';

export class CollationRepository {
    db: Database;
    constructor(db: Database) {
        this.db = db
    }
    //
    // GET METHODS
    //
    async getActiveCollationByCollationUuid(uuid: String): Promise<any> {
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`FOR c in Collations filter (c.version.key == ${uuid} && c.version.isCurrent) return c`) as ArrayCursor<any>
        return cursor.next()
    }
    async getCollationFields(uuid: String): Promise<any> {
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
                            RETURN {"field":ctf.title, "value":cf.value, "default":f.default, "control":f.control}
                            `) as ArrayCursor<any>
        return cursor.all();
    }
    async getCollationJourney(uuid: String): Promise<any> {
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`
        LET collationKey = ${uuid}
        FOR j IN Journey
            FILTER (j.reference.collation.key == collationKey)
            SORT j.version.timeStamp DESC
            FOR t in Trips
                FILTER (t.version.key == j.reference.trip.key && t.version.isCurrent)
                FOR c IN Collations
                    FILTER (c.version.key == collationKey && c.version.isCurrent)
                    LET date = DATE_ISO8601(TO_NUMBER(c.version.timeStamp*1000))
                    FOR u IN Users
                        FILTER (u._key == c.version.createdBy)
                        RETURN {"From State":t.from.title, "To State":t.to.title, "Initiated By": u.title, "Date": DATE_ISO8601(TO_NUMBER(j.version.timeStamp*1000)), "Value":j.measure.value}
        `) as ArrayCursor<any>
        return cursor.next()
    }  
    async getCollationVersions(uuid: String): Promise<any> {
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`
        LET collationKey = ${uuid}
        FOR c IN Collations
            FILTER(c.version.key == collationKey)
            SORT c.version.versionNumber DESC
            RETURN c
        `) as ArrayCursor<any>
        return cursor.next()
    }
    //
    // INSERT METHODS
    //
    async insertCollation(data: Object): Promise<any> {
        // TODO: Increment data.version.versionNumber by 1
        // TODO: Get a new UUID to be used as the _key for the new Collation Document
        // TODO: Replce or insert the attribute _key into the object ${data}
        // TODO: And just before the insert, call method updateCollationRemoveIsCurrent{}
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`
        FOR d IN [${data}] INSERT d INTO Collations
        `) as ArrayCursor<any>
        return cursor.next()
    }
    //
    // UPDATE METHODS
    //
    // This  method should be called by the insertCollation method directly before it does the actual insert
    async updateCollationRemoveIsCurrent(uuid: String): Promise<any> {
        this.db.collection("Collations")
        const cursor = await this.db.query(aql`
        LET collationKey = ${uuid}
        FOR c IN Collation
        FILTER (c.version.key == collationKey && c.version.isCurrent)
        UPDATE c WITH {"version":
                        {"isCurrent": false}
                        } IN Collation
        `) as ArrayCursor<any>
        return cursor.next()
    } 
}
