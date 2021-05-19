import { User } from './user'
// import * as Collections from 'typescript-collections'
import { List, Maybe } from 'typescript-monads'
// import { Database, aql } from 'arangojs'
export interface UserRepository {

    saveUser(user: User): User;
    getUserByKey(key: String): Maybe<User>;
    getUsersByCompany(company: String): Maybe<List<User>>
    getUsersByActiveStatus(isActive: Boolean): Maybe<List<User>>
    getUsersByPrimaryWorkCity(city: String): Maybe<List<User>>
    getUsersByJobTitle(jobTitle: String): Maybe<List<User>>
    getUsersByNamePartialMatch(name: String): Maybe<List<User>>

}
