import Cargando from "../utils/cargando";
import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./PeliculaIndividual.model";
import React from "react";

export default function ListadoPeliculas(props: listadoPeliculasProps) {
    if(!props.peliculas){//Cuando no han cargado
        return <Cargando />
    }else if(props.peliculas.length === 0){//Cuando no se ha enviado nada
        return <>No hay elementos que mostrar</>
    }else{
        return (
            <div className="row">
                {props.peliculas.map( _pelicula =>
                    <PeliculaIndividual pelicula={_pelicula}
                                        key={_pelicula.id} />
                )}
            </div>
        )
    }
    
}

interface listadoPeliculasProps {
    peliculas?: pelicula[]
}