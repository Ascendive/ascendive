import React, { useState, useEffect } from 'react'
import { User } from '../user/user'
import { ArangodbUserRepository } from '../user/arangodb-user-repository'
import { Database } from 'arangojs';
import { Maybe } from 'typescript-monads';

export type CardProps = {
    userKey: String
}
export function UserCard(props: CardProps) {
    const db = new Database({
        url: "http://localhost:8529",
        databaseName: "ascendive",
        auth: { username: "react", password: "react" }
    });
    const [user, setUser] = useState<Maybe<User>>(Maybe.none());
    useEffect(() => {
        async function getUser() {
            const repo = new ArangodbUserRepository(db);
            const user = await repo.getUserByKey(props.userKey); //  "99837"
            setUser(user);
        }
        getUser();
    }, []);

    return user.map<JSX.Element>((user) => {
        return (
            <>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
            </>
        );
    }).valueOr(<></>);
}

const userToCard = (user: User) => {
    return (
        <p>{user.displayName}</p>
    );
}
