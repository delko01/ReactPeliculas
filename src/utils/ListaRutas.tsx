import CrearActores from "../Actores/CrearActores";
import EditarActores from "../Actores/EditarActores";
import IndiceActores from "../Actores/IndiceActores";
import CrearCines from "../Cines/CrearCines";
import EditarCines from "../Cines/EditarCines";
import IndiceCines from "../Cines/IndiceCines";
import CrearGeneros from "../Generos/CrearGeneros";
import EditarGeneros from "../Generos/EditarGeneros";
import IndiceGeneros from "../Generos/IndiceGeneros";
import CrearPeliculas from "../Peliculas/CrearPeliculas";
import EditarPeliculas from "../Peliculas/EditarPeliculas";
import FiltrarPeliculas from "../Peliculas/FiltrarPeliculas";
import IndicePeliculas from "../Peliculas/IndicePeliculas";
import LandigPage from "../Peliculas/LandingPage";

const rutas = [
    {path:'/', componente:LandigPage},

    {path:'/generos', componente:IndiceGeneros},
    {path:'/generos/crearGeneros', componente:CrearGeneros},
    {path:'/generos/editarGeneros/:id', componente:EditarGeneros}, //:id = Var en url

    {path:'/actores', componente:IndiceActores},
    {path:'/actores/crearActores', componente:CrearActores},
    {path:'/actores/editarActores/:id', componente:EditarActores},

    {path:'/cines', componente:IndiceCines},
    {path:'/cines/crearCines', componente:CrearCines},
    {path:'/cines/editarCines/:id', componente:EditarCines},

    {path:'/peliculas', componente:IndicePeliculas},
    {path:'/peliculas/crearPeliculas', componente:CrearPeliculas},
    {path:'/peliculas/editarPeliculas/:id', componente:EditarPeliculas},
    {path:'/peliculas/filtrarPeliculas', componente:FiltrarPeliculas}

]
export default rutas;