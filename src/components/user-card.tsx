import React, { useState, useEffect } from 'react'
import { User } from '../user/user'
import { ArangodbUserRepository } from '../user/arangodb-user-repository'
import { Database } from 'arangojs';

const UserCard = props => {
    const db = new Database({
        url: "http://localhost:8529",
        databaseName: "test",
        auth: { username: "react", password: "react" }
    });
    const [user, setUser] = useState(null)
    useEffect(() => {
        async function getUser() {
            const repo = new ArangodbUserRepository(db)
            const user = await repo.getUserByKey("99837")
            const fuckme = user.valueOr()
            setUser(fuckme)
        }
    });
}

const userToCard = (user: User) => {
    return (
        <p>{user.displayName}</p>
    );
}
