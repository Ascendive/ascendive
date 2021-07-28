import React from 'react';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { cloneDeep } from 'lodash'

export function TextBoxComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number, multiline: boolean): JSX.Element {
    const handleTextBoxChange = (event: any) => {
        data[index].value = event.value;
        setData(data);
    }

    return (
        <>
            <TextBoxComponent
                placeholder={field.default.label}
                floatLabelType="Auto"
                value={data[index].value}
                multiline={multiline}
                change={e => handleTextBoxChange(e)} />
        </>
    )
}
export function DropDownListComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleDropDownChange = (event: any) => { }

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
    const handleDatePickerChange = (event: any): void => {
        if (event.value != null && event.value !== undefined) {
            let dateNum = event.value.getTime() / 1000
            data[index].value = dateNum.toString()
            const newData = cloneDeep(data)
            setData(newData)

        }
    }

    const dateString = data[index].value

    let initialDate = (dateString != null && dateString !== undefined && dateString !== '')
        ? new Date(data[index].value * 1000)
        : undefined;

    return (
        <DatePickerComponent
            id={field.field}
            value={initialDate}
            change={handleDatePickerChange}
            format={field.controlOptions === undefined ? "yyyy-MM-dd" : field.controlOptions.userDateFormat}
            floatLabelType="Auto"
            placeholder={field.default.label}
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
export function NumericTextBoxComponentFactory(field: any, data: any[], setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {

    const handleNumericTextBoxChange = (event: any): void => {
        data[index].value = event.value
        const newData = cloneDeep(data)
        setData(newData)
    }

    let component;
    if (field.controlOptions === undefined || field.controlOptions === null) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.default.label}
            change={handleNumericTextBoxChange} />
    } else if ("step" in field.controlOptions && "range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.default.label}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    } else if ("step" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.default.label}
            change={handleNumericTextBoxChange}
            step={field.controlOptions.step} />
    } else if ("range" in field.controlOptions) {
        component = <NumericTextBoxComponent
            id={field.field}
            value={data[index].value}
            floatLabelType="Auto"
            placeholder={field.default.label}
            change={handleNumericTextBoxChange}
            min={field.controlOptions.range.min}
            max={field.controlOptions.range.max} />
    }
    return (<> {component} </>)
}
export function ToggleSwitchButtonComponentFactory(field: any, data: any, setData: React.Dispatch<any>, readOnly: boolean, index: number): JSX.Element {
    const handleToggleSwitchButtonChange = (event: any) => {
        data[index].value = !data[index].value
        const newData = cloneDeep(data)
        setData(newData)
    }

    //Just in case the value is a string instead of a boolean
    if (data[index].value === "true") data[index].value = true;
    if (data[index].value === "false") data[index].value = false;

    return (
        <>
            <label className="e-label-top" htmlFor={field.field}>{field.title}</label>
            <SwitchComponent checked={data[index].value} change={handleToggleSwitchButtonChange} />
            <br />
        </>
    )
}
