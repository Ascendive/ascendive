
import React, { useState } from 'react';
import { InputEventArgs, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { User } from './user';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Database } from 'arangojs'
import { ArangodbUserRepository } from './arangodb-user-repository'

export const CreateUserComponent = (props: { db: Database; }): JSX.Element => {
    const [displayName, setDisplayName] = useState<String>('')
    const [company, setCompany] = useState<String>('')
    const [email, setEmail] = useState<String>('')
    const [jobTitle, setJobTitle] = useState<String>('')
    const [city, setCity] = useState<String>('')
    const repository = new ArangodbUserRepository(props.db)
    function handleClick(): void {
        let user: User = new User(displayName, email, true, 0, jobTitle, "", city, company, "")
        repository.saveUser(user)
    }
    function handleNameChange(e: InputEventArgs | undefined): void {
        setDisplayName(validate(e));
    }
    function handleCompanyChange(e: InputEventArgs | undefined): void {
        setCompany(validate(e))
    }
    function handleEmailChange(e: InputEventArgs | undefined): void {
        setEmail(validate(e))
    }
    function handleJobTitleChange(e: InputEventArgs | undefined): void {
        setJobTitle(validate(e))
    }
    function handleCityChange(e: InputEventArgs | undefined): void {
        setCity(validate(e))
    }
    function validate(e: InputEventArgs | undefined): String {
        if (e !== undefined && typeof e.value === "string")
            return e.value;
        return '';
    }
    return (
        <span>
            <TextBoxComponent key={"nameBox"} input={e => handleNameChange(e)} placeholder="Name" width={400} />
            <br />
            <TextBoxComponent placeholder="Company" input={e => handleCompanyChange(e)} width={400} />
            <br />
            <TextBoxComponent placeholder="Email" input={e => handleEmailChange(e)} width={400} />
            <br />
            <TextBoxComponent placeholder="Job Title" input={e => handleJobTitleChange(e)} width={200} />
            <TextBoxComponent placeholder="City" input={e => handleCityChange(e)} width={200} />
            <br />
            <ButtonComponent onClick={handleClick} >Click Me</ButtonComponent>
        </span>
    )
}
