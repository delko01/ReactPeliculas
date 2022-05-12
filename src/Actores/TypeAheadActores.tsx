import React from "react"
import { Typeahead } from "react-bootstrap-typeahead"
import { actorPeliculaDTO } from "./Actores.model"

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
        { id: 1, nombre: "nombre 1", personaje: "personaje 1", foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/02/Tengen-Uzui-kimetsu-no-yaiba-cosplay.jpg?resize=380%2C380&quality=80&ssl=1" },
        { id: 2, nombre: "nombre 2", personaje: "personaje 2", foto: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/02/Hinata-Cosplay-Naruto.jpg?resize=380%2C380&quality=80&ssl=1" },
        { id: 3, nombre: "nombre 3", personaje: "personaje 3", foto: "https://i1.wp.com/codigoespagueti.com/wp-content/uploads/2022/02/Kimetsu-no-yaiba-nezuko-cosplay.jpg?resize=380%2C380&quality=80&ssl=1" }
    ]

    return (
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={actores => {
                    if(props.actores.findIndex(x=> x.id === actores[0].id) === -1){
                        {console.log(props.actores)}
                        //props.onAdd([...actores])
                        props.onAdd([...actores,actores[0]])
                    }
                }}
                options={actores}
                labelKey={actor=> actor.nombre}
                filterBy={['nombre']}
                minLength={2}
                renderMenuItemChildren={actor => (
                    <>
                        <img alt="imagenActor" src={actor.foto}
                            style={{
                                height: "64px",
                                marginRight: "10px",
                                width: "64px"
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />
            <ul className="list-group">
                {props.actores.map(actor=> <li key={actor.id}>{actor.nombre}</li>)}
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
}
/*
TypeAheadActores.defaultProps = {
    imagenUrl: ''
}
*/