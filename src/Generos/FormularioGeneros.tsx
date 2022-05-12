import { Form, Formik, FormikHelpers } from "formik"
import { Link } from "react-router-dom"
import FormGroupText from "../utils/FormGroupText"
import * as Yup from "yup";
import { generoCreacionDTO } from "./Generos.model";
import React from "react";

export default function FormularioGeneros(props: formularioGenerosProps){
    return(
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Campo requerido')
                        .max(50,'La longitud maxima son 50.')
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <button disabled={formikProps.isSubmitting}
                        type="submit" className="btn btn-primary" >Guardar</button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            )}


        </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void ;
}
