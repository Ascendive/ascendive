
import React, { useState } from 'react';
import { ChangedEventArgs, InputEventArgs, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { EmitType } from '@syncfusion/ej2-base'
import { emptyUser, User } from './user';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export const CreateUserComponent = (): JSX.Element => {
    const [newUser, setNewUser] = useState<User>(emptyUser())
    var name: string = "";
    const handleClick = () => console.log(name)
    const handleNameChange = (e: InputEventArgs | undefined) => {
        if (e != undefined) {
            console.log(e.value)
            const newDisplayName = { displayName: e.value }
            setNewUser(newDisplayName);
        }

    }

    return (
        <span>
            <TextBoxComponent key={"nameBox"} input={e => handleNameChange(e)} placeholder="Name" width={400} />

            <br></br>

            < TextBoxComponent placeholder="Compant" width={400} />

            <br></br>

            < TextBoxComponent placeholder="Email" width={400} />

            <br></br>

            < TextBoxComponent placeholder="Job Title" width={200} />
            <TextBoxComponent placeholder="City" width={200} />
            <button onClick={handleClick}>click</button>
        </span>
    )
}
