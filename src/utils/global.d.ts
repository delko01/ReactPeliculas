import { StringSchema } from "yup";

//Agrega una nueva signatura (funcion dentro de yup)
declare module 'yup'{
    class StringSchema{
        primeraLetraMayuscula(): this
    }
}