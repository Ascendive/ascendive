
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
    const [creationDialogOpen, setCreationDialogOpen] = useState(false);
    const repository = new ArangodbUserRepository(props.db)
    function attemptSave(): void {
        if (creationDialogOpen && allInputsArePresent()) {

            let user: User = new User(displayName, email, true, 0, jobTitle, "", city, company, "")
            repository.saveUser(user)
            setCreationDialogOpen(!creationDialogOpen);
        } else {
            requiredInputsAlert()
        }
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
    function allInputsArePresent() {
        return (displayName !== '' && company !== '' && email !== '' && jobTitle !== '' && city !== '')
    }

    function requiredInputsAlert() {
        var missingInput: String = ''
        missingInput += displayName === '' ? 'Name ' : ''
        missingInput += company === '' ? 'Company ' : ''
        missingInput += email === '' ? 'Email ' : ''
        missingInput += jobTitle === '' ? 'Job Title ' : ''
        missingInput += city === '' ? 'City ' : ''
        alert("The following input is required:" + missingInput)
    }
    return (
        creationDialogOpen ?
            <span>
                <ButtonComponent onClick={attemptSave}>Save</ButtonComponent >
                <ButtonComponent onClick={() => setCreationDialogOpen(false)} >Cancel</ButtonComponent>
                <br />
                <TextBoxComponent key={"nameBox"} input={e => handleNameChange(e)} placeholder="Name" width={400} />
                <br />
                <TextBoxComponent placeholder="Company" input={e => handleCompanyChange(e)} width={400} />
                <br />
                <TextBoxComponent placeholder="Email" input={e => handleEmailChange(e)} width={400} />
                <br />
                <TextBoxComponent placeholder="Job Title" input={e => handleJobTitleChange(e)} width={200} />
                <TextBoxComponent placeholder="City" input={e => handleCityChange(e)} width={200} />
            </span>

            :

            <ButtonComponent onClick={() => setCreationDialogOpen(true)} >New User</ButtonComponent>
    )
}
