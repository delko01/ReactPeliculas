import React from "react"
import FormularioCines from "./FormularioCines"
export default function EditarCines(){
    return(
        <>
        <h3>Editar Cines</h3>
        <FormularioCines
                modelo={{ nombre: 'CineMark', latitud: 15.0000, longitud: 14.0000 }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}