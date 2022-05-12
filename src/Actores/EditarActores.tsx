import React from "react"
import FormularioActores from "./FormularioActores"
export default function EditarActores() {
    return (
        <>
            <h3>Editar Actores</h3>
            <FormularioActores modelo={{
                nombre: '', fechaNacimiento: undefined,
                fotoUrl:"https://www.latercera.com/resizer/Gg0H_ua6OThq9ilcQm0YL0Hspnc=/900x600/filters:focal(427x210:437x200)/cloudfront-us-east-1.images.arcpublishing.com/copesa/NTFWKGT63NHU7O3MBCYUOGIC3Q.jpg"
            }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}