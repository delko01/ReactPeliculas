export interface actorCreacionDTO{
    nombre: string ;
    fechaNacimiento: Date|undefined;
    foto?: File;
    fotoUrl?: string;
}

export interface actorPeliculaDTO{
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}