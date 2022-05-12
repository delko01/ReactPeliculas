
import { Field, Form, Formik } from "formik"
import React from "react"
import { generoDTO } from "../Generos/Generos.model"

export default function FiltrarPeliculas() {
    const valorIncial: filtroPeliculaForm = {
        titulo: '',
        generoId: 0,
        proximoEstreno: false,
        enCines: false
    }

    const generos: generoDTO[] =
        [{ id: 1, nombre: 'Accion' },
        { id: 2, nombre: 'Drama' },
        { id: 3, nombre: 'Comedia' }]

    return (
        <>
            <h3>Filtro pelicula</h3>
            <Formik initialValues={valorIncial}
                onSubmit={valores => console.log()}>
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mb-2">
                                <label htmlFor="titulo" className="sr-only">Titulo</label>
                                <input type="text" className="form-control" id="titulo"
                                    {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">Seleccione un género</option>
                                    {generos.map(genero => <option key={genero.id}
                                        value={genero.id}>{genero.nombre}</option>)}
                                </select>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="proximosEstrenos"
                                    name="proximosEstrenos" type="checkbox">
                                </Field>
                                <label className="form-check-label" htmlFor="proximosEstrenos">Proximos estrenos</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="enCines"
                                    name="enCines" type="checkbox">
                                </Field>
                                <label className="form-check-label" htmlFor="enCines">En cines</label>
                            </div>
                            <button className="btn btn-primary" type="submit"
                                onClick={() => formikProps.submitForm()}>Filtrar</button>
                            <button className="btn btn-danger" type="submit"
                                onClick={() => formikProps.setValues(valorIncial)}>Limpiar</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filtroPeliculaForm {
    titulo: string;
    generoId: number;
    proximoEstreno: boolean;
    enCines: boolean
}