import { ErrorMessage, Field } from "formik"
import React from "react"
import MostrarErrorCampos from "./MostrarErrorCampos"


export default function FormGroupText(props: formGroupTextProps) {
    return (
        <div className="form-group">
            {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null }
            <Field name={props.campo} className="form-control" />
            <ErrorMessage name={props.campo}>{_mensaje =>
                <MostrarErrorCampos mensaje={_mensaje} />
            }</ErrorMessage>
        </div>
    )
}

interface formGroupTextProps {
    campo: string;
    label?: string;
    placeholder?: string;
}