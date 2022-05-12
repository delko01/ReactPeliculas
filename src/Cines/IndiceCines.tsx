import React from "react"
import { Link } from "react-router-dom"
export default function IndiceCines(){
    return(
        <>
        <h3>Indice Cines</h3>
        <Link  to={"/cines/crearCines"}>Crear cine</Link>
        <br></br>
        <Link  to={"/cines/editarCines"}>Editar Cine</Link>
        </>
    )
}