import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export function TextBoxComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
   const handleTextBoxChange = (event: any) => {
        setData((prevData: any) =>
            ({ ...prevData, [field.id]: { "value": event.value } }))
   }
    return (
        <>
            <TextBoxComponent
                placeholder={field.title}
                floatLabelType="Auto"
                multiline={field.controlOptions.multiline}
                value={data.value}
                change={e => handleTextBoxChange(e)}/>
        </>
    )
}
export function DropDownListComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
    const handleDropDownChange = (event: any) =>
        setData((prevData: any) =>
            ({ ...prevData, [field.id]: { "value": event.value } }))

    if (!field.controlOptions.dataSource.includes(data.value)) data.value = null

    return (
        <DropDownListComponent
            id={field.id}
            dataSource={field.controlOptions.dataSource}
            value={data.value}
            change={e => handleDropDownChange(e)}
            floatLabelType="Auto"
            placeholder={field.controlOptions.placeholder} />
    )
}
export function DatePickerComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
    const handleDatePickerChange = (event: any) => {
        let date: number = event.value != null ? event.value.getTime() : null;
        setData((prevData: any) => ({ ...prevData, [field.id]: { "value": date } }))
    }
    let initialDate = (data.value != null && data.value !== undefined) ? new Date(data.value) : undefined;
    return (
        <DatePickerComponent
            id={field.id}
            value={initialDate}
            change={handleDatePickerChange}
            format={field.controlOptions.userDateFormat}
            floatLabelType="Auto"
            placeholder={field.controlOptions.userLocalizedFieldTitle} />
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
    if (field.controlOptions === undefined || field.controlOptions === null) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange} />
    } else if ("step" in field.controlOptions && "range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    } else if ("step" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step} />
    } else if ("range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.id}
            value={data.value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    }
    return (<> {component} </>)
}
export function ToggleSwitchButtonComponentFactory(field: any, data: any, setData: React.Dispatch<any>): JSX.Element {
    const handleToggleSwitchButtonChange = (event: any) => {
        setData((prevData: any) => ({ ...prevData, [field.id]: { "value": event.checked } }))
    }
    return (<>
        <label htmlFor={field.id}>{field.title}</label>
        <SwitchComponent checked={data.value} change={handleToggleSwitchButtonChange} />
        <br />
    </>)
}
