import React, { useEffect, useState } from "react"
import ListadoPeliculas from "./ListadoPeliculas";
import { landingPagePeliculas, pelicula } from "./PeliculaIndividual.model";

export default function LandigPage() {


    const [peliculas, setPeliculas] = useState<landingPagePeliculas>({})

    useEffect(() => {
        const tmpTimer = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    peliculaPrueba, peliculaPrueba2, peliculaPrueba3
                ],
                enEstreno: [
                    peliculaPrueba4, peliculaPrueba5, peliculaPrueba
                ]
            })
        }, 1000);
        return () => clearTimeout(tmpTimer);
    });

    const peliculaPrueba: pelicula = {
        id: 1,
        titulo: "Spiderman",
        poster: "https://i.ytimg.com/vi/RcU2F0gFWoY/hqdefault.jpg"
    }

    const peliculaPrueba2: pelicula = {
        id: 2,
        titulo: "Spiderman2",
        poster: "https://i.ytimg.com/vi/RcU2F0gFWoY/hqdefault.jpg"
    }

    const peliculaPrueba3: pelicula = {
        id: 3,
        titulo: "Spiderman3",
        poster: "https://i.ytimg.com/vi/RcU2F0gFWoY/hqdefault.jpg"
    }

    const peliculaPrueba4: pelicula = {
        id: 4,
        titulo: "BeetleJuice4",
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cb126d7444270d175618813999623ac5f9b25ffe711199d8abd800ea7c63d6e4._RI_V_TTW_.jpg"
    }

    const peliculaPrueba5: pelicula = {
        id: 5,
        titulo: "BeetleJuice5",
        poster: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/cb126d7444270d175618813999623ac5f9b25ffe711199d8abd800ea7c63d6e4._RI_V_TTW_.jpg"
    }


    return (
        <>
            <h3>Peliculas estreno</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />
            <h3>Comming soon</h3>
            <ListadoPeliculas peliculas={peliculas.enEstreno} />
        </>

    )
}