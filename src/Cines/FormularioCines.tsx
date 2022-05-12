import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { coordenadasDTO } from "../utils/Coordenas.model";
import FormGroupText from "../utils/FormGroupText";
import MapaFormularios from "../utils/MapaFormularios";
import { cineCreacionDTO } from "./cines.model";

export default function FormularioCines(props: formularioCinesProps) {

    function transformarCoordenadas(): coordenadasDTO[] | undefined {
        if (props.modelo.latitud && props.modelo.longitud) {
            const respuesta: coordenadasDTO = { latitud: props.modelo.latitud, longitud: props.modelo.longitud }
            return [respuesta]
        } else {
            return undefined
        }
    }

    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
            })}>
            {(formikprops) => (
                <Form >
                    <FormGroupText campo="nombre" label="Nombre" />
                    <div style={{ marginBottom: '1rem' }}>
                        <MapaFormularios campoLat="latitud" campoLon="longitud"
                            coordenadas={transformarCoordenadas()} />
                    </div>
                    <button className="btn btn-primary" type="submit">Guardar</button>
                    <Link className="btn btn-secundary" to={"/cines"}>Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}


interface formularioCinesProps {
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}