import { Link } from "react-router-dom";
import React from "react";

export default function IndicePeliculas(){
    return(
        <>
            <h3>Indice Peliculas</h3>
            <Link to="/peliculas/crearPeliculas">Crear peliculas</Link>
            <br></br>
            <Link to="/peliculas/editarPeliculas">Editar peliculas</Link>
        </>
    )
}