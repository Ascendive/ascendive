import { Database } from 'arangojs';
import { DatabaseUrl, DatabaseName, DatabaseAuth } from './strings'

export function Connect(): Database {
    return new Database({
        url: DatabaseUrl,
        databaseName: DatabaseName,
        auth: DatabaseAuth
    });
}
