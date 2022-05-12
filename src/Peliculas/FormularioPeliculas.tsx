import { Form, Formik, FormikHelpers } from "formik"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import * as Yup from 'yup'
import { actorPeliculaDTO } from "../Actores/Actores.model"
import TypeAheadActores from "../Actores/TypeAheadActores"
import FormGroupChk from "../utils/FormGroupChk"
import FormGroupFecha from "../utils/FormGroupFecha"
import FormGroupImagen from "../utils/FormGroupImagen"
import FormGroupText from "../utils/FormGroupText"
import SelectorMultiple from "../utils/SelectorMultiple"
import { peliculaCreacionDTO } from "./peliculas.model"

export default function FormularioPeliculas(props: formularioPeliculasProps) {

    const [actoresSeleccionados, setActoresSeleccionados] = useState<actorPeliculaDTO[]>([])
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                titulo: Yup.string().required('Este campo es requerido')
            })}
        >
            {formikprops => (
                <Form>
                    <FormGroupText campo="titulo" label="Titulo" />
                    <FormGroupChk label="En cines" campo="enCines" />
                    <FormGroupText campo="trailer" label="Trailer" />
                    <FormGroupFecha campo="fechaLanzamiento" label="Fecha lanzamiento" />
                    <FormGroupImagen campo="poster" label="Poster"
                        imagenUrl={props.modelo.posterUrl} />
                    <div className="form-group">
                        <label>Generos:</label>
                        <SelectorMultiple seleccionados={[]}
                            noSeleccionados={[]}
                            onChange={(seleccionados, noSeleccionados) => {

                            }} />
                    </div>
                    <div className="form-group">
                        <TypeAheadActores
                            onAdd={actores => {                              
                                setActoresSeleccionados(actores);
                            }}
                            actores={actoresSeleccionados} />
                    </div>

                    <button className="btn btn-primary" type="submit"
                        disabled={formikprops.isSubmitting}>Guardar</button>
                    <Link className="btn btn-danger" to="/peliculas">Cancelar</Link>
                </Form>
            )}

        </Formik>

    )
}

interface formularioPeliculasProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, acciones: FormikHelpers<peliculaCreacionDTO>): void;
}