import { coordenadasDTO } from "./Coordenas.model"
import React from "react"
import Mapa from "./Mapa"
import { useFormikContext } from "formik"

export default function MapaFormularios(props: mapaFormulariosProps) {

    const { values } = useFormikContext<any>();

    function actualizarCampos(coordenada: coordenadasDTO) {
        values[props.campoLat] = coordenada.latitud;
        values[props.campoLon] = coordenada.longitud;
    }

    return (
        <Mapa coordenadas={props.coordenadas}
            manejarClickMapa={actualizarCampos} />
    )
}

interface mapaFormulariosProps {
    coordenadas: coordenadasDTO[];
    campoLat: string;
    campoLon: string;
}

MapaFormularios.defaultProps = {
    coordenadas: []
}