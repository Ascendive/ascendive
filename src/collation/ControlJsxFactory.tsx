import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

export function DatePickerComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
    const handleDatePickerChange = (event: any) => {
        let date: number = event.value.getTime()/1000;
        setData((prevData: any) => ({ ...prevData, [field.id]: { "value": date } }))
    }
    let initialDate = new Date(data.value)
    return (
        <>
            <label htmlFor={field.id}>{field.title}</label>
            <DatePickerComponent
                id={field.id}
                value={initialDate}
                change={handleDatePickerChange}
                format={field.controlOptions.userDateFormat}
                placeholder={field.controlOptions.userLocalizedFieldTitle} />
        </>
    )
}
/**
   @Author Cader Hancock
   This Function provides a NumericTextBoxComponent constructed with a variety
   of rendering options. Optional paramerters are step and range.
   step: This field control option supplies the default step in the displayed number.
   range: This field control option is an object composed of 2 numbers: min and max.
*/
export function NumericTextBoxComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {

    const handleNumericTextBoxChange = (event: any) => {
        setData((prevData: any) => ({ ...prevData, [field.id]: { "value": event.value } }))
    }
    let component;
    if (field.controlOptions === undefined) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            change={handleNumericTextBoxChange} />
    } else if ("step" in field.controlOptions && "range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    } else if ("step" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step} />
    } else if ("range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            change={handleNumericTextBoxChange}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    }
    return (
        <>
            <label htmlFor={field.id}>{field.title}</label>
            {component}
        </>
    )
}
export function ToggleSwitchButtonComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
    const handleToggleSwitchButtonChange = (event: any, id: string) => {
        setData((prevData: any) => ({ ...prevData, [id]: { "value": event.checked } }))
    }
    return (
        <>
            <label htmlFor={field.id}>{field.title}</label>
            <SwitchComponent checked={data.value} change={e => handleToggleSwitchButtonChange(e, field.id)} />
            <br />
        </>
    )
}
