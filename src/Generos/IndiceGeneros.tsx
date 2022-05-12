import React from "react"
import { urlGeneros } from "../utils/endpoints"
import IndiceEntidad from "../utils/IndiceEntidad"
import { generoDTO } from "./Generos.model"

export default function IndiceGeneros() {


    return (
        <>
            <IndiceEntidad<generoDTO>
                url={urlGeneros} urlCrear="generos/crear" titulo="Generos"
                nombreEntidad="Genero"
            >
                {(generos, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => <tr key={genero.id}>
                            <td>{genero.nombre}</td>
                            <td>
                                {botones(`generos/editar/${genero.id}`, genero.id)}
                            </td>
                        </tr>)}
                    </tbody>
                </>}

            </IndiceEntidad>


        </>

    )
}