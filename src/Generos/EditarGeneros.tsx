import React from "react";
import EditarEntidad from "../utils/EditarEntidad";
import { urlGeneros } from "../utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "./Generos.model";

export default function EditarGeneros() {
    return (
        <EditarEntidad<generoCreacionDTO, generoDTO>
            url={urlGeneros}
            urlIndice="/generos"
            nombreEntidad="Editar Generos"
            >
            {(entidad, editar)=> <FormularioGeneros modelo={entidad}
                onSubmit={async valores => {
                    await editar(valores);
                }} />}
        </EditarEntidad>

    )
}