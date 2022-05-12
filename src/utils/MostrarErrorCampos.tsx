import React from "react"

export default function MostrarErrorCampos(props: mostrarErrorCamposProps) {
    return (
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostrarErrorCamposProps {
    mensaje: string;
}