import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import React from 'react';
import { useState } from 'react';
import { Connect } from '../arangodb/connection';



function EditAction(): JSX.Element {

    //When the form is open, we return the editor form JSX element.
    if (formOpen) {
        return (
            <ButtonComponent onClick={toggleFormOpen}>Close Form</ButtonComponent>
        )
    } else {
        //When the form is closed, we return the button to open the collation editor.
        return (
            <ButtonComponent onClick={toggleFormOpen}>Edit Action</ButtonComponent>
        )
    }
}
export default EditAction
