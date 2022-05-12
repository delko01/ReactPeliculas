import React from "react";

export default function MostrarErroresAPI(props: mostrarErroresAPIProps){
    const style={color: 'red'}
    return(
        <>
            {props.errores? <ul style={style}>
                {props.errores.map((error,indice)=>
                    <li key={indice}>{error}</li>
                )}
            </ul>: null}
        </>
    )
}

interface mostrarErroresAPIProps{
    errores?: string[];
}