import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

import { Field } from '../fields/Field';

export function DatePickerComponentFactory(field: Field, data: any): JSX.Element {
    let initialDate = new Date(data.timestamp)
    return (
        <>

            <label htmlFor={field.id}>{field.title}</label>
            <DatePickerComponent id={field.id} value={initialDate} format={data.userDateFormat} placeholder={data.userLocalizedFieldTitle} />
    </>)
}
/**
   @Author Cader Hancock
   This Function provides a NumericTextBoxComponent constructed with a variety
   of rendering options. Optional paramerters are step and range.
   step: This prop supplies the default step in the displayed number.
   range: This prop is an object composed of 2 numbers: min and max.
*/
export function NumericTextBoxComponentFactory(field: Field, data: any): JSX.Element {

    let component;
    if ("step" in data && "range" in data) {
        component = <NumericTextBoxComponent id={field.id} value={data.value} step={data.step} min={data.range.min} max={data.range.max} />
    } else if ("step" in data) {
        component = <NumericTextBoxComponent id={field.id} value={data.value} step={data.step} />
    } else if ("range" in data) {
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
export function ToggleSwitchButtonComponentFactory(field: Field, data: any): JSX.Element {
    return (
        <>
            <label htmlFor={field.id}>{field.title}</label>
            <SwitchComponent />
        </>
    )
}
