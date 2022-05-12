import axios, { AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import confirmar from "./Confirmar";
import Paginacion from "./Paginacion";
import React from "react";


export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {

    const [entidades, setEntidades] = useState<T[]>();
    const [totalPaginas, setTotalPaginas] = useState(0);
    const [recordsPorPagina, setRecordsPorPagina] = useState(3);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        cargarDatos();
    }, [pagina, recordsPorPagina]);

    async function cargarDatos() { 
        try {
            axios.get(props.url, {
                params: { pagina, recordsPorPagina: recordsPorPagina }
            })
                .then((respuesta: AxiosResponse<T[]>) => {
                    const totalRegistros = parseInt(respuesta.headers['cantidadtotalregistros'], 10);
                    //console.log(totalRegistros);
                    setTotalPaginas(Math.ceil(totalRegistros / recordsPorPagina))
                    setEntidades(respuesta.data);
                })
        } catch (error) {

        }
    }

    async function borrarGenero(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`);
            cargarDatos();
        } catch (error) {

        }
    }

    const botones = (urlEditar: string, id: number) => <>
        <Link className="btn btn-primary" to={urlEditar}>Editar</Link>
        <button
            onClick={() => confirmar(() => borrarGenero(id))}
            className="btn btn-danger">Borrar</button>
    </>

    return (
        <>
            <h3>{props.titulo}</h3>
            <NavLink to={props.urlCrear}>{props.nombreEntidad}</NavLink>

            <div className="form-group" style={{ width: '150px' }}>
                <label>Registros por pagina</label>
                <select className="form-control"
                    defaultValue={10}
                    onChange={e => {
                        setPagina(1);
                        setRecordsPorPagina(parseInt(e.currentTarget.value, 10))
                    }
                    }>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                </select>
            </div>


            <Paginacion cantidadTotalPagina={totalPaginas}
                paginaActual={pagina}
                onChange={nuevaPagina => setPagina(nuevaPagina)} />

            <table className="table">
                {props.children(entidades!, botones)}
            </table>
        </>
    )
}

interface indiceEntidadProps<T> {
    url: string;
    urlCrear: string;
    children(entidades: T[],
        botones: (urlEditar: string, id: number) => ReactElement): ReactElement;
    titulo: string;
    nombreEntidad: string;
}