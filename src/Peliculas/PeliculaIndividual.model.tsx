//Interface con los datos que recibe la pelicula
export  interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}

export interface landingPagePeliculas{
    enCartelera?: pelicula[];
    enEstreno?: pelicula[];
}