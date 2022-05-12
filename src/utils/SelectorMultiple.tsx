import React from "react"
import './SelectorMultiple.css'

export default function SelectorMultiple(props: selectorMultipleProps) {

    function seleccionar(item: selectorMultipleModel) {
        const seleccionados = [...props.seleccionados, item]; // agrego el valor item al arreglo nuevo
        const noSeleccionados = props.noSeleccionados.filter(valor => valor !== item);
        props.onChange(seleccionados, noSeleccionados);
    }

    function desSeleccionar(item: selectorMultipleModel) {
        const seleccionados = props.noSeleccionados.filter(valor => valor !== item);
        const noSeleccionados = [...props.seleccionados, item];
        props.onChange(seleccionados, noSeleccionados);
    }

    function seleccionarTodo() {
        const seleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const noSeleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
    }

    function desSeleccionarTodo() {
        const noSeleccionados = [...props.seleccionados, ...props.noSeleccionados];
        const seleccionados: selectorMultipleModel[] = [];
        props.onChange(seleccionados, noSeleccionados);
    }

    return (
        <div className="selector-multiple">
            <ul>
                {props.noSeleccionados.map(item =>
                    <li key={item.llave}
                        onClick={() => { }}>{item.valor}</li>)}
            </ul>
            <div className="selector-multiple-botones">
                <button type="button" onClick={ seleccionarTodo}>{"Seleccionar todo"}</button>
                <button type="button" onClick={ desSeleccionarTodo}>{"Des seleccionar todo"}</button>
            </div>

            <ul>
                {props.seleccionados.map(item =>
                    <li key={item.llave}
                        onClick={() => { }}>{item.valor}</li>)}
            </ul>
        </div>
    )
}

interface selectorMultipleProps {
    seleccionados: selectorMultipleModel[];
    noSeleccionados: selectorMultipleModel[];
    onChange(seleccionados: selectorMultipleModel[],
        noSeleccionaddos: selectorMultipleModel[]): void;
}

export interface selectorMultipleModel {
    llave: number;
    valor: string;
}