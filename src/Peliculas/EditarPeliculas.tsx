
import React from "react"
import FormularioPeliculas from "./FormularioPeliculas"
export default function EditarPeliculas(){
    return(
        <>
            <h3>Editar pelicula</h3>
            <FormularioPeliculas
                modelo={{ titulo: 'Spider man', enCines: false, trailer: 'No hay' }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}