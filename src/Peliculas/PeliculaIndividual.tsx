import { pelicula } from "./PeliculaIndividual.model"
import React from "react";
export default function PeliculaIndividual(props: peliculaIndividualProps) {
    const construirLink = () => `/pelicula/${props.pelicula.id}`

    const divStyle = {
        width: '18rem'
    };
    return (
        <div className="card align-items-center mx-1" style={divStyle}>
            <img className="card-img-top my-3"
                style={{ width: '180px', height: '250px' }}
                src={props.pelicula.poster} alt={props.pelicula.titulo} />
            <div className="card-body">
                <h5 className="card-title"><a href={construirLink()}>{props.pelicula.titulo}</a></h5>
            </div>
        </div>

    )
}

interface peliculaIndividualProps {
    pelicula: pelicula;
}