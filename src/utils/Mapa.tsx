import React, { useState } from "react"
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { coordenadasDTO } from "./Coordenas.model"

let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
})

L.Marker.prototype.options.icon = defaultIcon; //Imagen de marcador por defecto

export default function Mapa(props: mapaProps) {
    const [coordenadas, setCoordenadas] = useState<coordenadasDTO[]>(props.coordenadas)

    return (
        <MapContainer
            center={[4.783942953788781, -75.69278097675708]}
            zoom={14} style={{ height: props.height, width: props.width }}>
            <TileLayer attribution="React peliculas" //
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <ClickMapa setPunto={coordenada => {
                setCoordenadas([coordenada]);
                props.manejarClickMapa(coordenada);
            }} /> // Gestiona el evento click
            {coordenadas.map(coordenada => <Marcador key={coordenada.latitud + coordenada.longitud}
                {...coordenada}></Marcador>)}
        </MapContainer>
    )
}

interface mapaProps {
    height: string;
    width: string;
    coordenadas: coordenadasDTO[];
    manejarClickMapa(coordenadas: coordenadasDTO): void;
}

Mapa.defaultProps = {
    height: '400px',
    width: '800px'
}

//Gestiona el click en el mapa, por eso no retorna nada de UI
function ClickMapa(props: clickMapaProps) {
    useMapEvent('click', e => {
        props.setPunto({ latitud: e.latlng.lat, longitud: e.latlng.lng })
    })
    return null;
}

interface clickMapaProps {
    setPunto(coordenadas: coordenadasDTO): void;
}

//
function Marcador(props: coordenadasDTO) {
    return (
        <Marker position={[props.latitud, props.longitud]}></Marker>
    )
}

