export interface peliculaCreacionDTO{
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    posterUrl?: string;
}