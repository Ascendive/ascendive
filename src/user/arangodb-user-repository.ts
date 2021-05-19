import { Maybe, List } from "typescript-monads";
import { User } from "./user";
import { UserRepository } from "./user-repository";
import { Database, aql } from 'arangojs'

/*The ArangoDB implementation of the User Repository. It requires an
 * arangojs Database connection object. I have a feeling that the final
 * implementation of this will involve an abstract base repository that
 * is extended on a per-collection basis. I am making the decision to
 * use the Maybe monad in place of null to strive for a more functional,
 * resilient code base.*/
export class ArangodbUserRepository implements UserRepository {

    const db: Database;
    constructor(db: Database) {
        this.db = db
    }
    saveUser(user: User): User {

        throw new Error("Method not implemented.");
    }
    getUserByKey(key: String): Maybe<User> {
        throw new Error("Method not implemented.");
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
