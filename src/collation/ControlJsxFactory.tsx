import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { Field } from '../fields/Field';

export function DatePickerComponentFactory(field: Field, data: any): JSX.Element {
    let initialDate = new Date(data.timestamp * 1000)
    return (<DatePickerComponent id={field.id} value={initialDate} format={data.userDateFormat} placeholder={data.userLocalizedFieldTitle} />)
}


export function NumericTextBoxComponentFactory(field: Field, data: any): JSX.Element {
    let component;
    if ("range" in data) {
        component = <NumericTextBoxComponent id={field.id} value={data.value} min={data.range.min} max={data.range.max} />
    } else {
        component = <NumericTextBoxComponent id={field.id} value={data.value} />
    }
    return (
        <>
            <label htmlFor={field.id}>{field.title}</label>
            {component}
        </>
    )
}
export function ToggleSwitchButtonComponentFactory(field: Field, data: any):JSX.Element{
    return (
        <>

            <label htmlFor={field.id}>{field.title}</label>
            <SwitchComponent/>
        </>
    )

}
