
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints";
import MostrarErroresAPI from "../utils/MostrarErroresAPI";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./Generos.model";

export default function CrearGeneros() {
    const history = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(genero: generoCreacionDTO){
        try{
            await axios.post(urlGeneros, genero);
            history("/generos");
        }catch(error){
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear generos</h3>
            <MostrarErroresAPI errores={errores}/>
            <FormularioGeneros modelo={{nombre:''}} 
                onSubmit={async valores => {
                    await crear(valores);
                }} />

        </>
    )
}