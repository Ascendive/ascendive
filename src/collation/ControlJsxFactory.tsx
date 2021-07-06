import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export function TextBoxComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleTextBoxChange = (event: any) => {
        setData((prevData: any) =>
            ({ ...prevData, [field.field]: { "value": event.value } }))
    }
    return (
        <>
            <TextBoxComponent
                placeholder={field.title}
                floatLabelType="Auto"
                multiline={field.controlOptions.multiline}
                value={data[index].value}
                change={e => handleTextBoxChange(e)} />
        </>
    )
}
export function DropDownListComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleDropDownChange = (event: any) =>
        setData((prevData: any) =>
            ({ ...prevData, [field.field]: { "value": event.value } }))

    if (!field.controlOptions.dataSource.includes(data.value)) data.value = null

    return (
        <DropDownListComponent
            id={field.field}
            dataSource={field.controlOptions.dataSource}
            value={data[index].value}
            change={e => handleDropDownChange(e)}
            floatLabelType="Auto"
            placeholder={field.controlOptions.placeholder}
            disabled={true} />
    )
}
export function DatePickerComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleDatePickerChange = (event: any) => {
        let date: number = event.value != null ? event.value.getTime() : null;
        setData((prevData: any) => ({ ...prevData, [field.field]: { "value": date } }))
    }
    let initialDate = (data[index].value != null && data[index].value !== undefined) ? new Date(data[index].value) : undefined;
    return (
        <DatePickerComponent
            id={field.field}
            value={initialDate}
            change={handleDatePickerChange}
            format={field.controlOptions === undefined ? "yyyy-MM-dd" : field.controlOptions.userDateFormat}
            floatLabelType="Auto"
        />
    )
}
/**
   @Author Cader Hancock
   This Function provides a NumericTextBoxComponent constructed with a variety
   of rendering options. Optional paramerters are step and range.
   step: This field control option supplies the default step in the displayed number.
   range: This field control option is an object composed of 2 numbers: min and max.
*/
export function NumericTextBoxComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {

    const handleNumericTextBoxChange = (event: any) => {
        setData((prevData: any) => ({ ...prevData, [field.field]: { "value": event.value } }))
    }
    let component;
    if (field.controlOptions === undefined || field.controlOptions === null) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange} />
    } else if ("step" in field.controlOptions && "range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    } else if ("step" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step} />
    } else if ("range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.title}
            change={handleNumericTextBoxChange}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    }
    return (<> {component} </>)
}
export function ToggleSwitchButtonComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleToggleSwitchButtonChange = (event: any) => {
        setData((prevData: any) => ({ ...prevData, [field.field]: { "value": event.checked } }))
    }
    return (
        <>
            <label className="e-label-top" htmlFor={field.field}>{field.title}</label>
            <SwitchComponent checked={data[index].value} change={handleToggleSwitchButtonChange} />
            <br />
        </>
    )
}
