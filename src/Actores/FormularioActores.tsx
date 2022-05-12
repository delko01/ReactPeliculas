import { Form, Formik, FormikHelpers } from "formik";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./Actores.model";
import { Link } from "react-router-dom";
import React from "react";
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";

export default function FormularioActores(props: formularioActoresProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido'),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}>
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFecha label="Fecha nacimiento" campo="fechaNacimiento"/>
                    <FormGroupImagen campo="foto" 
                    label="foto" 
                    imagenUrl={props.modelo.fotoUrl}/>
                    <button disabled={formikProps.isSubmitting} className="btn btn-primary"
                        type="submit">Guardar</button>
                    <Link className="btn btn-danger" to="/actores">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioActoresProps {
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void
}