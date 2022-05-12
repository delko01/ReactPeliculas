import { Field } from "formik";
import React from "react";

export default function FormGroupChk(props: formGroupChkProps) {
    return (
        <div className="form-group form-check">
            <Field type="checkbox" className="form-check-input"
                id={props.campo} name={props.campo} />
            <label htmlFor={props.campo}>{props.label}</label>
        </div>
    )
}

interface formGroupChkProps {
    label: string;
    campo: string;
}