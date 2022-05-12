import React from "react"
import { NavLink } from "react-router-dom"
export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">React Peliculas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lb-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/generos">Generos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/peliculas/filtrarPeliculas">Filtrar peliculas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/actores">Actores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cines">Cines</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/peliculas">Peliculas</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}