import axios from "axios"
import React, { useState } from "react"
import { urlActores } from "../utils/endpoints"
import { actorCreacionDTO } from "./Actores.model"
import FormularioActores from "./FormularioActores"
import {useNavigate} from 'react-router-dom'
import MostrarErrorCampos from "../utils/MostrarErrorCampos"
import MostrarErroresAPI from "../utils/MostrarErroresAPI"

export default function CrearActores() {
    const history = useNavigate();
    const [errores,setErrores] = useState<string[]>([]);

    async function crear(actor:actorCreacionDTO) {
        try {
            console.log(urlActores)
            await axios.post(urlActores,actor)
            history('/actores')
        } catch (error) {
            setErrores(error.response.data)
        }
    }

    return (
        <>
            <h3>Crear Actores</h3>
            <MostrarErroresAPI  errores={errores}/>
            
            <FormularioActores modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={async valores => await crear(valores)} />
        </>
    )
}