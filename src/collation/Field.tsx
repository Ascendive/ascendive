import React from "react";
import * as controls from "./Controls";

export function Field(props: any): JSX.Element {
    switch (props.control) {
        case "DatePicker":
            return controls.DatePicker(
                props.field,
                props.data,
                props.setData,
                props.readOnly,
                props.index
            );
        case "NumericTextBox":
            return controls.NumericTextBox(
                props.field,
                props.data,
                props.setData,
                props.readOnly,
                props.index
            );
        case "TextBox":
            return controls.TextBox(
                props.field,
                props.data,
                props.setData,
                props.readOnly,
                props.index,
                false
            );
        case "MultiLineTextBox":
            return controls.TextBox(
                props.field,
                props.data,
                props.setData,
                props.readOnly,
                props.index,
                true
            );
        case "ToggleSwitch":
            return controls.ToggleSwitchButton(
                props.field,
                props.data,
                props.setData,
                props.readOnly,
                props.index
            );
        /* case "DropdownList":
    *   return controls.DropDownList(
    *     props.field,
    *     props.data,
    *     props.setData,
    *     props.readOnly,
    *     props.index
    *   ); */
        default:
            return <></>;
    }
}
