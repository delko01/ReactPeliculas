import React, { useEffect, useState } from "react";

export default function Paginacion(props: paginacionProps){
    const [listadoLinks, setListadoLinks] = useState<modeloLink[]>([]);
    useEffect(() => {
        const paginaAnteriorHabilitada = props.paginaActual !== 1;
        const paginaAnterior = props.paginaActual -1;
        const links: modeloLink[] = [];

        links.push({
            texto: 'Anterior',
            habilitado: paginaAnteriorHabilitada,
            pagina: paginaAnterior,
            activo: false
        });

        for(let i= 1; i<= props.cantidadTotalPagina; i++){
            if(i >= props.paginaActual - props.radio && i<= props.paginaActual + props.radio){
                links.push({
                    texto: `${i}`,
                    activo: props.paginaActual === i,
                    habilitado: true,
                    pagina: i
                })
            }
        }

        const paginaSiguienteHabilitada = props.paginaActual !== props.cantidadTotalPagina && props.cantidadTotalPagina >0;
        const paginaSiguiente = props.paginaActual + 1;
        links.push({
            texto: 'Siguiente',
            habilitado: paginaSiguienteHabilitada,
            pagina: paginaSiguiente,
            activo: false
        });

        setListadoLinks(links);
    }, [props.paginaActual, props.cantidadTotalPagina, props.radio])

    function obtenerClase(link: modeloLink){
        if(link.activo){
            return "active pointer";
        }

        if(!link.habilitado){
            return "disabled";
        }

        return "pointer";
    }

    function seleccionarPagina(link: modeloLink){
        if(link.pagina === props.paginaActual){
            return;
        }

        if(!link.habilitado){
            return;
        }

        props.onChange(link.pagina);
    }

    return(
        <nav>
            <ul className="pagination justify-content-center">
                {listadoLinks.map(link => 
                <li key={link.texto}
                    onClick={() => seleccionarPagina(link)}
                    className={`page-item cursor ${obtenerClase(link)}`}
                >
                    <span className="page-link">{link.texto}</span>
                </li>
                )}
            </ul>
        </nav>
    )
}

interface paginacionProps{
    paginaActual: number;
    cantidadTotalPagina: number;
    radio: number; //cantidad total de paginas a mostrar
    onChange(pagina: number): void;
}

interface modeloLink{
    pagina: number;
    habilitado: boolean;
    texto: string;
    activo: boolean;
}

Paginacion.defaultProps = {
    radio:3
}