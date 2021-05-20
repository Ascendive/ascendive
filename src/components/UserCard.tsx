import React from 'react';
import { ArangodbUserRepository } from '../user/arangodb-user-repository';
import { db, userToCard } from './user-card';

export async function UserCard() {
    const repo = new ArangodbUserRepository(db);
    const user = await repo.getUserByKey("99837");
    return user.isSome() ? user.map(user => {
        userToCard(user);
    }) :
        <></>;
}
