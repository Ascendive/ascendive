import { Database, aql } from "arangojs";
import { ArrayCursor } from "arangojs/cursor";
import { Connect } from "../arangodb/connection";
import { CollationPrototype } from "./CollationPrototype";

export class CollationTypeManager{

    db: Database;
    constructor(db: Database) {
        this.db = db
        db.collection("CollationType");
    }
    async loadCollationTypes(this: any): Promise<CollationPrototype[]>{

        const cursor = await this.db.query(aql`FOR ct IN CollationType RETURN ct`) as ArrayCursor<CollationPrototype>
        return cursor.all();
    }
}
