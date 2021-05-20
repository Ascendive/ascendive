import { Maybe, List } from "typescript-monads";
import { User } from "./user";
import { UserRepository } from "./user-repository";
import { Database, aql } from 'arangojs'
import { ArrayCursor } from "arangojs/cursor";

/*The ArangoDB implementation of the User Repository. It requires an
 * arangojs Database connection object. I have a feeling that the final
 * implementation of this will involve an abstract base repository that
 * is extended on a per-collection basis. I am making the decision to
 * use the Maybe monad in place of null to strive for a more functional,
 * resilient code base.*/
export class ArangodbUserRepository implements UserRepository {

    db: Database;
    constructor(db: Database) {
        this.db = db
        db.collection("users")
    }
    async saveUser(user: User): Promise<Maybe<User>> {
        const cursor = await this.db.query(aql`INSERT ${user} INTO users RETURN NEW`) as ArrayCursor<User>
        return cursor.next().then((value) => {
            console.log(`Saved ${value}  into database`)
            return new Maybe<User>(value)
        }).catch(() => Maybe.none<User>())
    }
    async getUserByKey(key: String): Promise<Maybe<User>> {
        const cursor = await this.db.query(aql`FOR user IN users FILTER user._key == ${key} RETURN user `) as ArrayCursor<User>
        return cursor.next().then((value) => {
            return new Maybe<User>(value)
        }).catch(() => Maybe.none<User>())
    }
    getUsersByCompany(company: String): Maybe<List<User>> {
        throw new Error("Method not implemented.");
    }
    getUsersByActiveStatus(isActive: Boolean): Maybe<List<User>> {
        throw new Error("Method not implemented.");
    }
    getUsersByPrimaryWorkCity(city: String): Maybe<List<User>> {
        throw new Error("Method not implemented.");
    }
    getUsersByJobTitle(jobTitle: String): Maybe<List<User>> {
        throw new Error("Method not implemented.");
    }
    getUsersByNamePartialMatch(name: String): Maybe<List<User>> {
        throw new Error("Method not implemented.");
    }

}
